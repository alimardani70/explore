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
        <Row>
            {showInput && <Button onClick={closeHandler}>
                <Icon name='close' type='solid'/>
            </Button>}
            {!showInput && <Button onClick={addNewHandler}>
                {icon}
            </Button>}
            {showInput && <Form>
                <Input name='name' onChange={changeHandler} value={itemValue}/>
                <Button onClick={submitHandler}>
                    <Icon name='check-square' type='solid'/>
                </Button>
            </Form>}
        </Row>

    );
};

export default NewItem;