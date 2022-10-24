import React from 'react';
import Counter from './components/Counter';

function App() {
  return (
    <React.Fragment>
      <Counter direction={'COUNT_UP'} />
      <Counter direction={'COUNT_DOWN'} />
    </React.Fragment>
  );
}

export default App;
