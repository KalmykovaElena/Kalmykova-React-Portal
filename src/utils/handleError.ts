import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

export const handleError = (fetchError: FetchBaseQueryError | SerializedError) => {
  if ('error' in fetchError) {
    throw new Error(fetchError.error);
  } else {
    throw fetchError;
  }
};