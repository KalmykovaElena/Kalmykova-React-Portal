import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
 authUserName: string;
}

const storedState = localStorage.getItem('userState');
const initialState: UserState = storedState
  ? JSON.parse(storedState)
  : { authUserName: '' };

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthUserName: (state, action: PayloadAction<string>) => {
      state.authUserName = action.payload;
       localStorage.setItem('userState', JSON.stringify(state));
    },
  },
});

export const { actions: UserActions } = userSlice;
export const { reducer: UserReducer } = userSlice;
