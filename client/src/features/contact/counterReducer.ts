import { PayloadAction } from '@reduxjs/toolkit';
import { Action } from 'redux';

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

export interface CounterState {
  data: number;
  title: string;
}

const initialState: CounterState = {
  data: 42,
  title: 'YARC (yet another redux counter)',
};

export const increment = (amount = 1) => {
  return {
    type: INCREMENT_COUNTER,
    payload: amount,
  };
};

export const decrement = (amount = 1) => {
  return {
    type: DECREMENT_COUNTER,
    payload: amount,
  };
};

export default function counterReducer(
  state = initialState,
  action: Action<unknown>
) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        data: state.data + (action as PayloadAction<number>).payload,
      };
    case DECREMENT_COUNTER:
      return {
        ...state,
        data: state.data - (action as PayloadAction<number>).payload,
      };
    default:
      return state;
  }
}
