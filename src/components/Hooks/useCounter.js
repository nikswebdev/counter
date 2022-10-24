import { useReducer, useEffect } from 'react';

const initialState = {
  count: 0,
};

const reducer = (state, action) => {
  if (action.type === 'COUNT_DOWN') return { count: state.count - 1 };
  if (action.type === 'COUNT_UP') return { count: state.count + 1 };
};

const useCounter = (actionType) => {
  const [countState, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch({ type: actionType });
    }, 1000);

    return () => clearInterval(interval);
  }, [actionType]);

  return { counter: countState.count };
};
export default useCounter;
