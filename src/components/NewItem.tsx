import React, {useState} from 'react';
import Form from "./Form";
import Input from "./Input";
import Button from "./Button";
import Icon from "./Icon";

type propsType = {
}

const NewItem: React.FC<propsType>  = () => {
    const [showInput, setShowInput] = useState<boolean>(false);

    const addNewHandler = () =>{
        setShowInput(!showInput);
    }
 return (
     <div className='flex flex-row'>
         <Button onClick={addNewHandler}>
             {showInput && <Icon name='close' type='solid'/>}
             {!showInput && <Icon name='plus-circle' type='solid'/>}
         </Button>
         {showInput && <Form>
             <Input name='name'/>
         </Form>}
     </div>

 );
};

export default NewItem;