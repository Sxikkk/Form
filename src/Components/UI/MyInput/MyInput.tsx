import React from 'react';

interface InputProps {
    placeholder?: string;
    value?: string;
    onChange?: (newValue: string) => void;
    defaultValue?: string;
    type?: string;
    label?: string;
}

const MyInput: React.FC<InputProps> = ({placeholder, value, onChange, defaultValue, type, label}) => {

    const handlerInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.value);
    }

    return (
        <div className="MyInput">
            <label>
                {label}
                <input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={handlerInputChange}
                />
                {defaultValue}
            </label>
        </div>
    );
};

export default MyInput;