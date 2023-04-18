import React from 'react';
import Icon from "./Icon";


type fileType = {
    name: string,
    extension: string
}
type folderType = {
    name: string
}
type propsType = {
    name: string,
    content?: fileType[] | folderType[]
}

const Directory: React.FC<propsType> = ({
                                            name
                                        }) => {
    return (
        <div>
            <div>{name}</div>
            <Icon name={'ghj'} type={'brands'} />

        </div>
    );
};

export default Directory;