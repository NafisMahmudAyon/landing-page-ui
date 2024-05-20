import React from 'react';
interface TableHeadProps extends React.HTMLAttributes<HTMLTableSectionElement> {
    variant?: string;
    children?: React.ReactNode;
    styles?: string;
}
export declare const TableHead: React.FC<TableHeadProps>;
export {};
