import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
	name: 'counter',
	initialState: { value: 0 },
	reducers: {
		increment: (state) => {
			state.value += 1
		},
		decrement: (state) => {
			state.value -= 1
		},
		incrementTen: (state) => {
			state.value += 10
		},
		decrementTen: (state) => {
			state.value -= 10
		},
		reset: (state) => {
			state.value = 0
		},
	},
})

export const { increment, decrement, reset, decrementTen, incrementTen } =
	counterSlice.actions
export default counterSlice.reducer
