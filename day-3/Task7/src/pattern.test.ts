import { describe, expect, test } from "vitest";
import { CommandHistory, TextAdder } from "./pattern";
describe("Command History", () => {
  const greet = new TextAdder("hi", "anjal");
  const history = new CommandHistory();
  test("--- verifing five commands", () => {
    history.execute(greet);
    expect(greet.ogText).toBe("hi anjal");
    for (let i = 0; i < 4; i++) {
      history.execute(greet);
    }
    expect(greet.ogText).toBe("hi anjal anjal anjal anjal anjal");

    for (let i = 0; i < 5; i++) {
      history.undo();
    }
    expect(greet.ogText).toBe("hi");

    for (let i = 0; i < 5; i++) {
      history.redo();
    }
    expect(greet.ogText).toBe("hi anjal anjal anjal anjal anjal");
  });
});
