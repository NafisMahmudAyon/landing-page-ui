import React from 'react';
interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {
    variant?: string;
    children?: React.ReactNode;
    styles?: string;
}
export declare const TableBody: React.FC<TableBodyProps>;
export {};
