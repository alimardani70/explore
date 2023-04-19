import React, {ReactNode} from 'react';

type propsType = {
    children?: ReactNode,
    className?: string
}

const Row: React.FC<propsType>  = ({children,className}) => {
 return (
  <div className={`flex flex-row ${className}`} >
      {children}
  </div>
 );
};

export default Row;