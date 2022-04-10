import {createContext, FC, useContext, useState} from 'react';

interface CounterState {
  counter: number,
  setCounter: (newCounter: number) => Promise<void>
  incrementCounter: () => void
}

export const CounterContext = createContext<CounterState>({
  counter: Number(localStorage.getItem('counter')) ?? 0,
  setCounter: async () => {},
  incrementCounter: () => {},
})

const ComoponentA: FC = () => {
  const { counter, setCounter, incrementCounter } = useContext(CounterContext);
  return (
    <>
      <p>Component working with Context API</p>
      <button onClick={() => setCounter(counter)}>{counter}</button>
      <button onClick={() => incrementCounter()}>{counter}</button>
      <button onClick={() => setCounter(counter)}>{counter}</button>
    </>
  )
}

const ComoponentB: FC = () => {
  return (
    <CounterContext.Consumer>
      {
        ({counter, setCounter, incrementCounter}) => 
          <>
           <p>Component working with Context Consumer</p>
           <button onClick={() => setCounter(counter)}>{counter}</button>
           <button onClick={() => incrementCounter}>{counter}</button>
           <button onClick={() => setCounter(counter)}>{counter}</button>
          </>
      }
    </CounterContext.Consumer>
  )
}

export const Context: FC = () => {

  const [state, setState] = useState(0);

  async function setData() {
    setState(1);
  }

  return (
    <CounterContext.Provider
       value={{
         counter: state,
         setCounter: counter => setData(),
         incrementCounter: () => setState(state + 1)
       }}
    >
       <ComoponentA/>
       <ComoponentB/>
    </CounterContext.Provider>
  )
}

