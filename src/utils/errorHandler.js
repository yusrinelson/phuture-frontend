/**
 * handleApiError
 * Centralizes error extraction from Axios / fetch / backend responses.
 *
 * Usage:
 * try {
 *   await auth.login(payload);
 * } catch (error) {
 *   toast.error(handleApiError(error));
 * }
 */

// src/utils/errorHandler.js
export const handleApiError = (error) => {
  if (!error.response) return "Network error";

  const { status, data } = error.response;

  switch (status) {
    case 400:
    case 401:
      return data.message || "Unauthorized";
    case 403:
      return "Forbidden";
    case 500:
      return "Server error, please try again later";
    default:
      return data.message || "Something went wrong";
  }
};