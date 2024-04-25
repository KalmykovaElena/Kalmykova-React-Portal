import { Middleware, isRejectedWithValue } from '@reduxjs/toolkit';

const errorHandlingMiddleware: Middleware = () => (next) => (action: any) => {
  if (isRejectedWithValue(action)) {
    console.warn('We got a rejected action!');
    const message =
      'data' in action.payload
        ? (action.payload.data.message as { message: string })
        : action.payload.error;
    console.log(message);

    return next({ ...action, payload:{...action.payload,message} });
  }
  return next(action);
};

export default errorHandlingMiddleware;
