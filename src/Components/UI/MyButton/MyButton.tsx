import React from 'react';

interface ButtonProps {
    click?: () => void;
    defaultValue?: string;
}

const MyButton: React.FC<ButtonProps> = ({click, defaultValue}) => {

    return (
        <a
            type="button"
            onClick={click}
        >
            {defaultValue}
        </a>
    );
};

export default MyButton;