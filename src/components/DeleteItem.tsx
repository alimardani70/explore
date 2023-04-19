import React, {FormEvent, ReactNode, useState} from 'react';
import Form from "./Form";
import Input from "./Input";
import Button from "./Button";
import Icon from "./Icon";
import {fileType, folderType} from "../store/structureSlice";
import Row from "./Row";


type propsType = {
    path: string;
    onClick?: (path: string) => void;
}

const NewItem: React.FC<propsType> = ({
                                          path,
                                          onClick
                                          }) => {

    const clickHandler = (e: React.MouseEvent<HTMLElement>) => {
        if (onClick) {
            onClick(path);
        }
    }
    return (
        <Row>
                 {
                     // path  !== './root' &&
                     <Button onClick={clickHandler} className='bg-red-600 px-2 py-1 rounded'>
                         <Icon name={'trash-can'} type='regular' className='text-white'/>
                     </Button>
                 }

        </Row>

    );
};

export default NewItem;