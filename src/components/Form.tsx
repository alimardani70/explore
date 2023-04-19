import React from 'react';

type propsType = {
 children: any
}

const Form: React.FC<propsType>  = ({children }) => {
 return (
  <form>
   {children}
  </form>
 );
};

export default Form;