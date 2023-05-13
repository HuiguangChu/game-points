import React, { FC, memo } from 'react';
import styles from './Header.scss';

interface HeaderProps {
    titleCaption: string;
}

const Header: FC<HeaderProps> = memo(({ titleCaption }: HeaderProps) => {
    return (
        <h4 className={styles.header}>
            {titleCaption}
        </h4>
    );
});

export default Header;
