import Card from './Card';
import useCounter from './Hooks/useCounter';

const Counter = (props) => {
  const { counter } = useCounter(props.direction);

  return <Card>{counter}</Card>;
};

export default Counter;
