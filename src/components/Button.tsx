import React from 'react';
import classNames from 'classnames';

interface ButtonProps {
    onClick?: () => void,
    className?: string,
    outline?: boolean,
    disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({ onClick, className, outline, disabled, children }) => {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={classNames('button', className, {
                'button--outline': outline,
            })}>
            {children}
        </button>
    );
};



export default Button;
