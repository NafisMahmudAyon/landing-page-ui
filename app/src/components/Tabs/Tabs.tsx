'use client'

import React, { useState, ReactElement } from 'react';
import { TabsNav } from './TabsNav';
import { TabsPanel } from './TabsPanel';

// import "../../../css/output.css"

interface TabsProps {
  styles?: string;
  children: ReactElement | ReactElement[];
  active?: number;
  orientation?: 'horizontal' | 'vertical';
  navWrapStyles?: string;
  panelWrapStyles?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  styles = '',
  children,
  active = 1,
  orientation = 'horizontal',
  navWrapStyles = '',
  panelWrapStyles = '',
  ...rest
}) => {
  const [activeTab, setActiveTab] = useState<number>(active);

  const handleTabClick = (value: number) => {
    setActiveTab(value);
  };

  type TabsNavProps = {
    activeTab: number,
    onTabClick?: (value: number) => void,
    orientation?: 'horizontal' | 'vertical',
  }

  const tabsNavProps: TabsNavProps = {
    activeTab,
    onTabClick: handleTabClick,
    orientation,
  };

  return (
    <div {...rest} className={`${styles} ${orientation === 'vertical' ? 'flex' : ''}`}>
      <div className={` ${navWrapStyles} ${orientation === 'vertical' ? 'flex-col' : ''}`}>
        {React.Children.map(children, (child: ReactElement) => {
          if (React.isValidElement(child) && child.type === TabsNav) {
            return React.cloneElement(child, tabsNavProps);
          }
          return null;
        })}
      </div>
      <div className={` ${panelWrapStyles} `}>
        {React.Children.map(children, (child: React.ReactElement) => {
          if (React.isValidElement(child) && (child.type === TabsPanel && (child.props as any)?.value === activeTab)) {
            return child;
          }
          return null;
        })}

      </div>
    </div>
  );
};

