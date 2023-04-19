import React from 'react';

type propsType = {
    name: string,
    type?: 'text' | 'password',

}

const Input: React.FC<propsType> = ({
                                     name,
                                     type='text',
                                    }) => {
    return (
        <input
            name={name}
            type={type}
        />
    );
};

export default Input;