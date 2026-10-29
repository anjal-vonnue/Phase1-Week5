import { afterEach, describe, expect, test, vi } from "vitest";
import { ApiClient } from "./ApiClient";

type User = {
  id: number;
  name: string;
};

describe("testing api", () => {
  afterEach(() => {
    vi.resetAllMocks();
  });
  test("--- returns correct type", async () => {
    const user: User = {
      id: 3,
      name: "anjal",
    };

    vi.spyOn(globalThis, "fetch").mockResolvedValue(
      new Response(JSON.stringify(user)),
    );

    const api = new ApiClient();

    const result = await api.get<User>("/user/3");
    expect(result).toEqual(user);
    expect(result.id).toEqual(3);
    expect(result.name).toEqual("anjal");
  });
});
