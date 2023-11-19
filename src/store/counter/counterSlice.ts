import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { z } from 'zod'

// Define a schema for the state using Zod
const initialStateSchema = z.object({
  count: z.number(),
})

// Define the initial state using the schema
const initialState = initialStateSchema.parse({
  count: 0,
})

// Define a schema for the incrementByAmount action payload
const incrementByAmountPayloadSchema = z.number()

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
    reset: (state) => {
      state.count = 0
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      // Validate the action payload using Zod
      const payload = incrementByAmountPayloadSchema.parse(action.payload)
      state.count += payload
    },
  },
})

export const { increment, decrement, reset, incrementByAmount } =
  counterSlice.actions

export default counterSlice.reducer
