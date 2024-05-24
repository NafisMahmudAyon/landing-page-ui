import React from 'react';
interface TableHeadProps extends React.HTMLAttributes<HTMLTableSectionElement> {
    variant?: number;
    children?: React.ReactNode;
    styles?: string;
}
export declare const TableHead: React.FC<TableHeadProps>;
export {};
