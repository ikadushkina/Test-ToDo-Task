import React from 'react';
import './ButtonCustom.css';
import cs from 'classnames';

const ButtonCustom = ({ children, onClick, isBlue, className, disabled }) => {

    return (
        <button className={cs('button', {'bgBlue': isBlue}, className)} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    )
}

export default ButtonCustom;