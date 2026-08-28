type ApiResponse<T> =
  | {
      success: true;
      data: T;
    }
  | {
      success: false;
      error: string;
      statusCode: number;
    };

interface User {
  id: string;
  name: string;
  age: number;
  email: string;
  createdAt: Date;
  avatar?: string;
}

function handleResponse<T>(response: ApiResponse<T>): T | null {
  if (response.success) {
    return response.data;
  } else {
    console.log(
      `ERROR: ${response.error} --- STATUS CODE: ${response.statusCode}`,
    );
    return null;
  }
}

type LoadingState<T> =
  | "idle"
  | "loading"
  | { status: "success"; data: T }
  | { status: "error"; error: Error };

function renderFn(status: LoadingState<User[]>): string {
  if (status === "idle") {
    return "<p>the user is idle</p>";
  }
  if (status === "loading") {
    return "<p>loading data...</p>";
  }
  if (status.status === "error") {
    return "<p>Error loading User</p>";
  }
  if (status.status === "success") {
    return `<ul>
                ${status.data.map((u) => {
                  return `<li>${u.name}</li>`;
                })}
            </ul>`;
  }

  return "<p>not a valid status</p>";
}
