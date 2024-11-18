import { expect, test } from "bun:test";
import { AbortError, TimeoutError } from "../src";

test("AbortError: should create an instance of AbortError", () => {
  const error = new AbortError("Operation aborted");
  expect(error).toBeInstanceOf(AbortError);
  expect(error.message).toBe("Operation aborted");
});

test("TimeoutError: should create an instance of TimeoutError", () => {
  const error = new TimeoutError("Operation timed out");
  expect(error).toBeInstanceOf(TimeoutError);
  expect(error.message).toBe("Operation timed out");
});
