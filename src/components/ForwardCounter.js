import { useState, useEffect } from 'react';

import Card from './Card';
import useCounter from './Hooks/useCounter';

const ForwardCounter = () => {
  const { counter } = useCounter('COUNT_UP');

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
