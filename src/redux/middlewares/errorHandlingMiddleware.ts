import { Middleware, isRejectedWithValue } from '@reduxjs/toolkit';

const errorHandlingMiddleware: Middleware = () => (next) => (action: any) => {
  if (isRejectedWithValue(action)) {
    console.warn('We got a rejected action!');
    const message =
      'data' in action.error
        ? (action.error.data as { message: string }).message
        : action.payload.error;
    console.log(message);
    return next({ ...action, error: new Error(message) });
  }
  return next(action);
};

export default errorHandlingMiddleware;
