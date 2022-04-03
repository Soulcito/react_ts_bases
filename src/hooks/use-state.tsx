import { FC, useState } from 'react';

export const UseState: FC = () => {
  
  const [value, setValue] = useState('hello');

  const handleClick = () => {
    setValue(prevState => `${prevState} world`);
  }
  
  return (
    <button onClick={handleClick}>
      <span>{value}</span> 
    </button>
  )
}

