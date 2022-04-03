import { FC, useState } from 'react';

// TS
interface Props {
  label: string;
  value: number;
  onChange(newValue: number) : void;
}

export const NumericInput: FC = () => {
  
  const [number, setNumber] = useState(0);
  
  return (
    <MyNumericInput
       onChange={setNumber}
       value={number}
       label="Enter a number"
    />
  );
}


export const MyNumericInput: FC<Props> = ({ value, label, onChange }) => {
  return (
    <label>
      {label}
      <input type='number' value={value} onChange={ e => onChange(Number(e.target.value))}/>
    </label>
  );
}

