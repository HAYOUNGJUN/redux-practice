import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type CounterItem = {
  id: number;
  value: number;
};

type CounterState = {
  items: CounterItem[];
};

const initialState: CounterState = {
  items: [
    {
      id: Date.now(),
      value: 0,
    },
  ],
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addCounter: (
      state,
      action: PayloadAction<{ value: number; id: number }>
    ) => {
      state.items.push(action.payload);
    },
    removeCounter: (state, action: PayloadAction<number>) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      state.items.splice(itemIndex, 1);
    },
    increment: (state, action: PayloadAction<number>) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      if (itemIndex >= 0) {
        state.items[itemIndex].value += 1;
      }
    },
    decrement: (state, action: PayloadAction<number>) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      if (itemIndex >= 0) {
        state.items[itemIndex].value -= 1;
      }
    },
    incrementByAmount: (
      state,
      action: PayloadAction<{ id: number; incrementValue: number }>
    ) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.items[itemIndex].value += action.payload.incrementValue;
      }
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  addCounter,
  removeCounter,
} = counterSlice.actions;
