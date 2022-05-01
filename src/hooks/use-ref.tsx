import { FC, useRef, useEffect } from 'react';

export const UseRef: FC = () => {

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
     const shouldFocus = Math.random() > 0.5;
     console.log(shouldFocus);
     if(shouldFocus) {
       inputRef.current?.focus();
     }
  }, []);
  

  return (
    <>
      <h1>Use Ref</h1>
      <input ref={inputRef}/>
    </>
  )
}

