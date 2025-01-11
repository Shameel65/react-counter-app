import React, { useState, useEffect } from 'react';

function CounterWithEffect() {
  const [count, setCount] = useState(0); 
  const [message, setMessage] = useState(''); 

  useEffect(() => {
    setMessage(`You clicked ${count} times!`); 
  }, [count]); 
  return (
    <div>
      <p>{message}</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}
export default CounterWithEffect;