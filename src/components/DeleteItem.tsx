import React from 'react';
import Button from "./Button";
import Icon from "./Icon";
import Row from "./Row";


type propsType = {
    path: string;
    onClick?: (path: string) => void;
    isFolder?: boolean
}

const NewItem: React.FC<propsType> = ({
                                          path,
                                          onClick,
                                          isFolder = true
                                      }) => {

    const clickHandler = (e: React.MouseEvent<HTMLElement>) => {
        if (onClick) {
            onClick(path);
        }
    }
    return (
        <Row>
            {
                (path !== './root' || !isFolder ) &&
                <Button onClick={clickHandler} className='bg-red-600 px-2 py-1 rounded'>
                    <Icon name={'trash-can'} type='regular' className='text-white'/>
                </Button>
            }

        </Row>

    );
};

export default NewItem;