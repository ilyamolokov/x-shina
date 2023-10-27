import React from 'react';
import styles from './BaseButton.module.css'

export interface BaseButtonProps {
    disabled?: boolean;
    children?: React.ReactNode;
    onClick?: () => void;
}

const BaseButton = (props: BaseButtonProps) => {
    const { disabled, children, onClick = () => {} } = props;

    return (
        <button
            type="submit"
            disabled={disabled}
            className={styles.baseButton}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default BaseButton;