import React from 'react';
interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
    variant?: string | boolean | number;
    children?: React.ReactNode;
    styles?: string;
}
export declare const TableRow: React.FC<TableRowProps>;
export {};
