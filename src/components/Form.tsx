import React from 'react';

type propsType = {
 children: any,
 className?: string
}

const Form: React.FC<propsType>  = ({children ,className=''}) => {
 return (
  <form className={className}>
   {children}
  </form>
 );
};

export default Form;