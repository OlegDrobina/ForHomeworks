import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../../redux/slices/counterSlice';

const Counter = () => {
    const count = useSelector(state => state.counter);
    const dispatch = useDispatch();

    return (
        <div>
          <p>Value: {count}</p>
          <button onClick={() => dispatch(increment())}>+</button>
          <button onClick={() => dispatch(decrement())}>-</button>
        </div>
      );
}

export default Counter;