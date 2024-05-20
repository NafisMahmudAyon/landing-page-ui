import React from 'react';
interface TableCellProps extends React.HTMLAttributes<HTMLElement> {
    tagName?: string;
    header?: boolean;
    thStyles?: string;
    tdStyles?: string;
    variant?: string;
    scope?: string;
    children?: React.ReactNode;
    styles?: string;
}
export declare const TableCell: React.FC<TableCellProps>;
export {};
