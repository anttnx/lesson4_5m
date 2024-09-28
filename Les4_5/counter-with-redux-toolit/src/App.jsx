import { useSelector, useDispatch } from 'react-redux'
import {
	decrement,
	decrementTen,
	increment,
	incrementTen,
	reset,
} from './store/counterSlice'

const App = () => {
	const count = useSelector((state) => state.counter.value)

	const dispatch = useDispatch()

	return (
		<div>
			<h1>Counter: {count}</h1>
			<div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
				<button onClick={() => dispatch(increment())}> + 1</button>
				<button disabled={count === 0} onClick={() => dispatch(decrement())}>
					- 1
				</button>
				<button onClick={() => dispatch(incrementTen())}> + 10</button>

				<button disabled={count < 10} onClick={() => dispatch(decrementTen())}>
					- 10
				</button>
				<button onClick={() => dispatch(reset())}>Reset</button>
			</div>
		</div>
	)
}

export default App
