import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

function isFetchBaseQueryError(error: unknown): error is FetchBaseQueryError {
  return typeof error === 'object' && error != null && 'status' in error;
}

function isErrorWithMessage(error: unknown): error is { message: string } {
  return (
    typeof error === 'object' &&
    error != null &&
    'message' in error &&
    typeof (error as any).message === 'string'
  );
}

export function handleErrorMessage(
  error: FetchBaseQueryError | SerializedError | undefined,
) {
  if (isFetchBaseQueryError(error)) {
    const errObj = 'error' in error ? error.error : error.data;
    if (isErrorWithMessage(errObj)) {
      throw new Error(errObj.message);
    }
  } else if (isErrorWithMessage(error)) {
    throw new Error(error.message);
  } else {
    throw error;
  }
}
