import { useAppSelector } from '../store/hooks';
import CardItem from './CardItem';

export default function CardList() {
  const counters = useAppSelector((state) => state.counter.items);

  return (
    <main>
      <ul>
        {counters.map((item) => (
          <li key={item.id}>
            <CardItem key={item.id} counter={item} />
          </li>
        ))}
      </ul>
    </main>
  );
}
