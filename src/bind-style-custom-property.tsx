import { FC, CSSProperties, useState } from 'react';
import styles from './bind-styles-custom-property.module.css';

export const BindStyleCustomProperty: FC = () => {
  const [value, setValue] = useState('');

  return (
    <div className={styles.wrapper} style={{ '--background-color': value } as CSSProperties}> 
       <input type="color" value={value} onChange={ e => setValue(e.target.value) } /> 
    </div>
  )
}

