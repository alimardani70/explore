import React, {FormEvent, ReactNode, useState} from 'react';
import Form from "./Form";
import Input from "./Input";
import Button from "./Button";
import Icon from "./Icon";
import {fileType, folderType} from "../store/structureSlice";


type propsType = {
    path: string;
    onClick?: (path: string) => void;
}

const NewItem: React.FC<propsType> = ({
                                          path,
                                          onClick
                                          }) => {

    const clickHandler = (e: React.MouseEvent<HTMLElement>) => {
        console.log("sdcsdcsdc")
        if (onClick) {
            onClick(path);
        }
    }
    console.log(path)
    return (
        <div className='flex flex-row'>
                 {
                     // path  !== './root' &&
                     <Button onClick={clickHandler}>
                         <Icon name={'trash-can'} type='regular'/>
                     </Button>
                 }

        </div>

    );
};

export default NewItem;