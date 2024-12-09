/**
 * An error class representing a timeout operation.
 * @augments Error
 */
export class ApiError extends Error {
  constructor(message = "The status error code was not found.") {
    super(message);
    this.name = "ApiError";
  }
}
