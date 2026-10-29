interface CartItem {
  name: string;
  price: number;
  number: number;
}

interface CartInterface {
  addItem: (name: string, price: number) => CartInterface;
  removeItem: (name: string) => CartInterface;
  updateQuantity: (name: string, number: number) => CartInterface;
  applyCoupon: (code: number) => CartInterface;
  getTotal: () => number;
}

let observer: Array<(state: Cart) => void> = [];
function addObserver(fn: () => void) {
  observer.push(fn);
}

function notifyObservers(state: Cart) {
  observer.forEach((fn) => fn(state));
}

class Cart implements CartInterface {
  coupon: number;
  items: CartItem[];
  constructor(items: CartItem[], coupon: number) {
    this.items = items;
    this.coupon = coupon;
  }

  addItem(name: string, price: number): Cart {
    const hasItem = this.items.some((item) => item.name === name);
    let newItems;
    if (hasItem) {
      // newItems = [...this.items, { name, price, number: number + 1 }];

      newItems = this.items.map((item) => {
        if (item.name === name) {
          console.log("item name:", item.name);
          console.log("item number:", item.number);

          return {
            name: item.name,
            price: item.price,
            number: item.number + 1,
          };
        } else {
          return item;
        }
      });
    } else {
      newItems = [...this.items, { name, price, number: 1 }];
    }

    return new Cart(newItems, this.coupon);
  }

  removeItem(name: string): Cart {
    let newItem = this.items.filter((item) => item.name !== name);
    return new Cart(newItem, this.coupon);
  }

  updateQuantity(name: string, number: number): Cart {
    console.log("name: " + name + " number: " + number);

    let newItem = this.items.map((item) => {
      console.log("item: ", item);

      if (item.name === name) {
        console.log("inside if");

        return { name: item.name, price: item.price, number: number };
      } else {
        console.log("inside else");
        return item;
      }
    });
    // console.log("updateQuanity newItem: ", newItem);

    return new Cart(newItem, this.coupon);
  }

  applyCoupon(code: number): Cart {
    // console.log("number: ", Number(code));
    // this.coupon = Number(code);
    let newCart = new Cart(this.items, Number(code));
    // console.log("code: ", this.coupon);

    return newCart;
  }

  getTotal(): number {
    let total = 0;
    // console.log("lenght: ", this.items.length);

    for (const item of this.items) {
      // console.log("item: ", Number(item.price));

      total = total + Number(item.price) * Number(item.number);
      // console.log("total: ", total);
    }

    let afterDiscount = total - (total * this.coupon) / 100;

    return afterDiscount;
  }
}
