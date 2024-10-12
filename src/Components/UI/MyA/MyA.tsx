import React from 'react';
import "./MyA.css"

interface AProps {
    changeForm?: () => void;
    defaultValue?: string;
}

const MyA: React.FC<AProps> = ({changeForm, defaultValue}) => {

    return (
        <a onClick = {changeForm} className="MyA">
            {defaultValue}
        </a>
    );
};

export default MyA;