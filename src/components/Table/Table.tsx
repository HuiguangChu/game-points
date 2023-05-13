import React, { FC, memo } from 'react';
import styles from './Table.scss';

interface TableProps {
    fixed?: boolean;
    textAlign?: 'center' | 'left' | 'right';
    bodyRows: React.ReactNode;
    headerRows?: React.ReactNode;
    footerRows?: React.ReactNode;
}

const Table: FC<TableProps> = memo(({
    headerRows, footerRows, bodyRows, fixed, textAlign,
}: TableProps) => {
    return (
        <table className={`${styles.table} 
        ${fixed && styles.fixed} 
        ${textAlign ? styles[textAlign] : styles.center}`}
        >
            {
                headerRows && (
                    <thead>
                        {headerRows}
                    </thead>
                )
            }
            <tbody>
                {bodyRows}
            </tbody>
            {
                footerRows && (
                    <tfoot>
                        {footerRows}
                    </tfoot>
                )
            }
        </table>
    );
});
export default Table;
