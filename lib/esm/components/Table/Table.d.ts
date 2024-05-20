import React from 'react';
interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
    styles?: string;
    variant?: string;
    children?: React.ReactNode;
}
export declare const Table: React.FC<TableProps>;
export {};
