import React, {FormEvent, useState} from 'react';
import Form from "./Form";
import Input from "./Input";
import Button from "./Button";
import Icon from "./Icon";
import {useDispatch} from "react-redux";
import {addFolder, addItem} from "../store/structureSlice";

type propsType = { path: string  }

const NewItem: React.FC<propsType> = ({path}) => {
    const [showInput, setShowInput] = useState<boolean>(false);
    const [itemValue, setItemValue] = useState<any>('');
    const dispatch = useDispatch()
    const addNewHandler = () => {
        setShowInput(true);
    }
    const closeHandler = () => {
        setShowInput(false);
    }
    const changeHandler = (args: any) => {
        // console.log(args)
        setItemValue(args)
    }
    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // dispatch(addItem({name: itemValue, path: path  }))
        dispatch(addFolder({name: itemValue, path: path ,content : [] , files:[]}))
        // setItemValue('')
    }
    return (
        <div className='flex flex-row'>
            {showInput && <Button onClick={closeHandler}>
                <Icon name='close' type='solid'/>
            </Button>}
            {!showInput && <Button onClick={addNewHandler}>
                <Icon name='plus-circle' type='solid'/>
            </Button>}
            {showInput && <Form>
                <Input name='name' onChange={changeHandler} value={itemValue}/>
                <Button onClick={submitHandler}>
                    <Icon name='check-square' type='solid'/>
                </Button>
            </Form>}
        </div>

    );
};

export default NewItem;