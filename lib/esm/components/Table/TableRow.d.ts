import React from 'react';
interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
    variant?: string;
    children?: React.ReactNode;
    styles?: string;
}
export declare const TableRow: React.FC<TableRowProps>;
export {};
