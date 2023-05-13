import React, { FC, KeyboardEvent, memo } from 'react';
import styles from './Button.scss';

interface ButtonProps {
    text: string
    className?: string;
    secondary?: boolean;
    onClick: () => void;
}

const Button: FC<ButtonProps> = memo(({
    text, className, secondary, onClick,
}: ButtonProps) => {
    const onKeyDown = (event: KeyboardEvent): void => {
        if (event.code === 'Enter') {
            onClick();
        }
    };
    return (
        <button
            type="button"
            className={`${styles.button} 
                ${className || ''}
                ${secondary ? styles.secondary : styles.primary}`}
            onClick={onClick}
            tabIndex={0}
            onKeyDown={onKeyDown}
            aria-label="Click to restart game"
        >
            {
                text
            }
        </button>
    );
});

export default Button;
