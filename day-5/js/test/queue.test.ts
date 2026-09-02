import { describe, expect, test } from "vitest";
import { Queue } from "./Queue";

describe("testing queue", () => {
  test("--- testing string", () => {
    const queue = new Queue<string>();

    queue.enqueue("anjal");
    queue.enqueue("yasin");

    expect(queue.items[0]).toBe("anjal");
    expect(queue.items[1]).toBe("yasin");

    const value = queue.dequeue();
    expect(value).toBe("anjal");
    expect(queue.items).toHaveLength(1);
  });

  test("--- testing number", () => {
    const queue = new Queue<number>();

    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.items[0]).toBe(1);
    expect(queue.items[1]).toBe(2);

    const value = queue.dequeue();
    expect(value).toBe(1);
  });

  test("--- testing object", () => {
    type User = {
      id: number;
      name: string;
    };
    const queue = new Queue<User>();
    const userOne: User = {
      id: 1,
      name: "anjal",
    };

    const userTwo: User = { id: 2, name: "yasin" };

    queue.enqueue(userOne);
    queue.enqueue(userTwo);

    expect(queue.items[0]).toBe(userOne);
    expect(queue.items[1]).toBe(userTwo);

    queue.dequeue();
    expect(queue.items).toHaveLength(1);
  });
});
