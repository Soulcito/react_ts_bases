import { FC, useReducer } from 'react';

type ActionType = 'increment' | 'decrement' | 'reset';

interface State {
  count: number
}

const initialState: State = {
  count: 0
}

export const UseReducer: FC = () => {
  return (
    <div>Hello am UseReducer!</div>
  )
}

