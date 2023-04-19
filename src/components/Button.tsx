import React, {ReactNode} from 'react';

type propsType = {
  children: ReactNode;
 className?: string;
 onClick?: (args?: any) => void;
}

const Button: React.FC<propsType>  = ({
                                       children,
                                       className='',
                                       onClick,
                                      }) => {
 const clickHandler = (event: React.MouseEvent<HTMLElement>) => {
  if (!!onClick) {
   onClick(event);
  }
 };
 return (
  <button className={className}  onClick={clickHandler}>
   {children}
  </button>
 );
};

export default Button;