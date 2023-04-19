import React, {useEffect, useState} from 'react';

type propsType = {
    name: string;
    type?: 'text' | 'password';
    value?: any;
    onBlur?: () => void;
    autoFocus?: boolean;
    onChange?: (ags?: any) => void;
}

const Input: React.FC<propsType> = ({
                                        name,
                                        type = 'text',
                                        value = '',
                                        onBlur,
                                        autoFocus = true,
                                        onChange
                                    }) => {
    const [val, setVal] = useState('');
    useEffect(() => {
        setVal(value)
    }, [value])
    const blurHandler = () => {
        if (onBlur) onBlur()
    }
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setVal(newValue);
        if (onChange) onChange(newValue)
    }
    return (
        <input
            name={name}
            type={type}
            onBlur={blurHandler}
            autoFocus={autoFocus}
            onChange={changeHandler}
            value={val}
            className='border border-gray-500 bg-gray-100 rounded'
        />
    );
};

export default Input;