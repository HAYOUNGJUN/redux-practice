import { ChangeEvent, useState } from 'react';
import {
  decrement,
  increment,
  incrementByAmount,
  removeCounter,
} from '../store/counterSlice';
import { useAppDispatch } from '../store/hooks';
import { type CounterItem } from '../store/counterSlice';

type CardItemProps = {
  counter: CounterItem;
};

export default function CardItem({ counter }: CardItemProps) {
  const [incrementValue, setIncrementValue] = useState(10);
  const [warning, setWarning] = useState(false);
  const dispatch = useAppDispatch();
  const { id, value } = counter;

  function handleIncrementValue(event: ChangeEvent<HTMLInputElement>) {
    const inputValue = event.target.value;
    if (!isNaN(+inputValue)) {
      setWarning(false);
      setIncrementValue(+inputValue);
    } else {
      event.target.value = '';
      setWarning(true);
    }
  }

  return (
    <div className={`card-item ${warning && 'warning'}`}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        x='0px'
        y='0px'
        width='20'
        height='20'
        viewBox='0 0 30 30'
        fill='white'
        style={{
          position: 'inherit',
          top: '1rem',
          left: '11rem',
          cursor: 'pointer',
        }}
        onClick={() => dispatch(removeCounter(id))}
      >
        <path d='M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z'></path>
      </svg>
      <h1>{value}</h1>
      <input
        type='text'
        placeholder='default 10'
        onChange={handleIncrementValue}
      />
      <div>
        <button onClick={() => dispatch(increment(id))}>increase</button>
        <button onClick={() => dispatch(decrement(id))}>decrease</button>
        <button
          onClick={() => dispatch(incrementByAmount({ id, incrementValue }))}
        >
          increase by input
        </button>
      </div>
    </div>
  );
}
