import { addCounter } from '../store/counterSlice';
import { useAppDispatch } from '../store/hooks';

export default function Header() {
  const dispatch = useAppDispatch();

  return (
    <header>
      <button
        onClick={() => dispatch(addCounter({ id: Date.now(), value: 0 }))}
      >
        ADD COUNTER
      </button>
    </header>
  );
}
