import { supplant, translateKey } from "../src/helpers";

describe("helpers", () => {
  test("supplant", () => {
    expect(supplant(void 0, {})).toBeUndefined();
    expect(supplant("hello {name}", { name: "foobar" })).toBe("hello foobar");
  });

  test("translateKey", () => {
    expect(translateKey("hello", { hello: "Hello World" })).toBe("Hello World");
    expect(
      translateKey("profile.heading", { profile: { heading: "Heading" } })
    ).toBe("Heading");

    expect(
      translateKey("profile.undefined", { profile: { undefined: {} } })
    ).toBeUndefined();
  });
});
