import { FC, useState } from 'react';

export const UseStateInmutable: FC = () => {

  const [array, setArray] = useState<number[]>([]);

  const handleClick = () => {
    setArray( prevValue => [...prevValue, 1]);
  }

  return (
    <button onClick={handleClick}>
      {array.map( (x,idx) => (
        <span key={idx}>{x}</span>
        ))}
    </button>
  )
}

