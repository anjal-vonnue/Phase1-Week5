interface ApiClient {
  get<T>(path: string): Promise<T>;
  post<T, B>(path: string, body: B): Promise<T>;
  put<T, B>(path: string, body: B): Promise<T>;
  delete<T>(path: string): Promise<T>;
}

type RequestInterceptorType = (url: string, init: RequestInit) => RequestInit;
type ResponseInterceptorType = <T>(response: T) => T;

async function fetchJSON<T>(url: string, options: object): Promise<T> {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error("error while fetching data");
  }

  return response.json() as Promise<T>;
}

function CreateApiClient(
  baseUrl: string,
  requestInterceptor: RequestInterceptorType,
  responseInterceptor: ResponseInterceptorType,
): ApiClient {
  return {
    async get<T>(path: string): Promise<T> {
      const url = baseUrl + path;
      const nOptions = requestInterceptor(url, { method: "GET" });
      const response = await fetchJSON<T>(url, nOptions);
      return responseInterceptor<T>(response);
    },

    async post<T, B>(path: string, body: B): Promise<T> {
      const url = baseUrl + path;
      const nOptions = requestInterceptor(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const response = await fetchJSON<T>(url, nOptions);

      return responseInterceptor<T>(response);
    },

    async put<T, B>(path: string, body: B): Promise<T> {
      const url = baseUrl + path;
      const nOptions = requestInterceptor(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const response = await fetchJSON<T>(url, nOptions);
      return responseInterceptor<T>(response);
    },

    async delete<T>(path: string): Promise<T> {
      const url = baseUrl + path;
      const nOptions = requestInterceptor(url, {
        method: "DELETE",
      });
      const response = await fetchJSON<T>(url, nOptions);

      return responseInterceptor(response);
    },
  };
}

const requestLoggerFn: RequestInterceptorType = (url, options) => {
  console.log("request: ", options);
  return options;
};

const responseLoggerFn: ResponseInterceptorType = <T>(response: T) => {
  console.log("response: ", response);
  return response;
};

const api = CreateApiClient(
  "https://www.example.com",
  requestLoggerFn,
  responseLoggerFn,
);

class MockApi implements ApiClient {
  responses = new Map<string, unknown>();

  setResponses<T>(path: string, response: T): void {
    this.responses.set(path, response);
  }

  async get<T>(path: string): Promise<T> {
    return this.responses.get(path) as T;
  }

  async post<T, B>(path: string, body: B): Promise<T> {
    return this.responses.get(path) as T;
  }

  async put<T, B>(path: string, body: B): Promise<T> {
    return this.responses.get(path) as T;
  }

  async delete<T>(path: string): Promise<T> {
    return this.responses.get(path) as T;
  }
}

interface PostInterface {
  id: number;
  title: string;
  body: string;
}

const mockApi = new MockApi();

mockApi.setResponses<PostInterface>("/post/1", {
  id: 1,
  title: "test title",
  body: "test body",
});

mockApi.get<PostInterface>("/post/1").then((post) => {
  console.log(post);
});
