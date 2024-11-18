/**
 * An error class representing a timeout operation.
 * @augments Error
 */
export class TimeoutError extends Error {
  constructor(message = "The operation was timed out") {
    super(message);
    this.name = "TimeoutError";
  }
}
