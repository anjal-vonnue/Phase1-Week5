type Rule<T = unknown> = {
  required?: boolean;
  minLength?: number;
  pattern?: RegExp | string;
  custom?: (v: T) => string | null;
};

class FormValidator<T extends Record<string, unknown>> {
  constructor(
    private form: T,
    private rules: { [K in keyof T]?: Rule<T[K]> },
  ) {}

  checkRules<K extends keyof T>(value: T[K], rule: Rule<T[K]>): string | null {
    if (rule.required) {
      if (value === null || value === undefined || value === "") {
        return "error: this value is required";
      }
    }

    if (value === null || value === undefined || value === "null") {
      return null;
    }

    if (rule.minLength !== undefined) {
      if (typeof value !== "string") {
        return "error: the value is not string";
      }

      if (value.length < rule.minLength) {
        return `error: the value must be atleast ${rule.minLength}`;
      }
    }

    if (rule.custom) {
      return rule.custom(value);
    }

    return null;
  }

  validate<K extends keyof T>(
    field: K,
    value: T[K],
  ): { valid: boolean; errors: Partial<Record<keyof T, string>> } {
    const errors: Partial<Record<keyof T, string>> = {};
    let isValid = true;
    const rule = this.rules[field];
    if (!rule) {
      return {
        valid: true,
        errors,
      };
    }

    const error = this.checkRules(value, rule);

    if (error) {
      if (error.includes("error: ")) {
        errors[field] = error;
        isValid = false;
      }
    }

    return {
      valid: isValid,
      errors,
    };
  }

  validateAll() {
    const keys = Object.keys(this.form) as Array<keyof T>;
    keys.forEach((key) => {
      const result = this.validate(key, this.form[key]);
      console.log(result);
    });
  }
}

const loginForm = {
  name: "anjal",
  password: "anjal123",
  age: 22,
};

const Loginrules = {
  name: {
    required: true,
  },

  password: { required: true, pattern: "^[A-Za-z0-9_]{3,20}$", minLength: 8 },

  age: {
    required: true,
    custom: (c: number): string => {
      if (c > 18) {
        return "user valid";
      }
      return "error: user not valid";
    },
  },
};

const formValidator = new FormValidator(loginForm, Loginrules);
formValidator.validateAll();
