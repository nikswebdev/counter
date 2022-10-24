import { useState, useEffect } from 'react';

import Card from './Card';
import useCounter from './Hooks/useCounter';

const BackwardCounter = () => {
  const { counter } = useCounter('COUNT_DOWN');

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
