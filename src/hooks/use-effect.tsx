import { FC, useEffect, useState } from 'react';

export const UseEffect: FC = () => {
  
  const [count, setCount] = useState(1);
  const [countTwo, setCountTwo] = useState(2);
  const [, setKeyPressed] = useState('');

  useEffect(() => {
    document.title = (count + countTwo).toString();
    console.log(document.title);
  }, [count, countTwo]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
       setKeyPressed(e.code);
    }
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    }

  }, []);
  
  
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Next</button>
      <button onClick={() => setCountTwo(countTwo + 1)}>Next</button>
    </div>
  )
}

