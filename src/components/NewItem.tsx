import React, {FormEvent, ReactNode, useState} from 'react';
import Form from "./Form";
import Input from "./Input";
import Button from "./Button";
import Icon from "./Icon";
import Row from "./Row";


type propsType = {
    path: string;
    onSubmit?: (item: any) => void;
    icon: ReactNode
}

const NewItem: React.FC<propsType> = ({
                                          path,
                                          onSubmit,
                                          icon}) => {
    const [showInput, setShowInput] = useState<boolean>(false);
    const [itemValue, setItemValue] = useState<any>('');
    const addNewHandler = () => {
        setShowInput(true);
    }
    const closeHandler = () => {
        setShowInput(false);
    }
    const changeHandler = (args: any) => {
        setItemValue(args)
    }
    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (onSubmit) {
            onSubmit(itemValue)
        }
        setItemValue('')
        setShowInput(false)
    }
    return (
        <Row className='border border-gray-300 rounded py-0 content-stretch place-content-stretch overflow-hidden'>
            {showInput && <Button onClick={closeHandler} className='h-full bg-red-600 text-white px-1'>
                <Icon name='close' type='solid'/>
            </Button>}
            {!showInput && <Button onClick={addNewHandler} className=' px-2'>
                {icon}
            </Button>}
            {showInput && <Form className='h-full flex content-stretch'>
                <Input name='name' onChange={changeHandler} value={itemValue} />
                <Button onClick={submitHandler} className='h-full bg-green-700 text-white px-1'>
                    <Icon name='check' type='solid' className=''/>
                </Button>
            </Form>}
        </Row>

    );
};

export default NewItem;