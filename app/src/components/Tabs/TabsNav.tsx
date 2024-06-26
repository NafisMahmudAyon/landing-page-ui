'use client'

import React, { useRef, ReactElement } from 'react';
import { Icon } from '../Icon';

interface TabsNavProps {
  showButton?: boolean;
  iconStyles?: string;
  iconLibrary?: "bootstrap-icons" | "font-awesome" | "icofont-icons";
  nextIcon?: string;
  prevIcon?: string;
  nextIconPosition?: 'left' | 'right';
  prevIconPosition?: 'left' | 'right';
  buttonStyles?: string;
  nextButtonStyles?: string;
  prevButtonStyles?: string;
  disabledStyles?: string;
  prevButtonText?: string;
  nextButtonText?: string;
  tabAreaStyles?: string;
  activeTabStyles?: string;
  styles?: string;
  children: ReactElement[] | ReactElement;
  buttonTextEnabled?: boolean;
  activeTab?: number | string;
  onTabClick?: (value: number) => void;
  orientation?: 'horizontal' | 'vertical';
}

export const TabsNav: React.FC<TabsNavProps> = ({
  showButton = false,
  iconStyles = "",
  iconLibrary = "font-awesome",
  nextIcon = "fa-caret-right",
  prevIcon = "fa-caret-left",
  nextIconPosition = "right",
  prevIconPosition = "left",
  buttonStyles = "",
  nextButtonStyles = "",
  prevButtonStyles = "",
  disabledStyles = "",
  prevButtonText,
  nextButtonText,
  tabAreaStyles = "",
  activeTabStyles = "",
  styles = "",
  children,
  buttonTextEnabled = false,
  activeTab = 1,
  onTabClick = () => { },
  orientation,
  ...rest
}) => {
  const tabsRef = useRef<HTMLDivElement>(null);

  const scrollPrev = () => {
    const tabs = tabsRef.current?.children as HTMLCollectionOf<HTMLButtonElement>;
    if (!tabs) return;
    const activeIndex = Array.from(tabs).findIndex(
      (tab) => parseInt(tab.dataset.value || '') === activeTab
    );
    if (activeIndex > 0) {
      const prevTab = tabs[activeIndex - 1];
      onTabClick(parseInt(prevTab.dataset.value || ''));
      prevTab.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };

  const scrollNext = () => {
    const tabs = tabsRef.current?.children as HTMLCollectionOf<HTMLButtonElement>;
    if (!tabs) return;
    const activeIndex = Array.from(tabs).findIndex(
      (tab) => parseInt(tab.dataset.value || '') === activeTab
    );
    if (activeIndex < tabs.length - 1) {
      const nextTab = tabs[activeIndex + 1];
      onTabClick(parseInt(nextTab.dataset.value || ''));
      nextTab.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };

  const isFirstTabActive = Array.isArray(children) && children.length > 0 && activeTab === (children[0] as React.ReactElement)?.props?.value;
  const isLastTabActive = Array.isArray(children) && children.length > 0 && activeTab === (children[children.length - 1] as React.ReactElement)?.props?.value;

  return (
    <div {...rest} className={`${styles} ${orientation === "vertical" ? "flex-col" : "flex"}`}>
      {showButton && (
        <button
          className={`${buttonStyles} ${prevButtonStyles} ${showButton ? "" : "hidden"} ${isFirstTabActive ? "disabled " + disabledStyles : ""
            }`}
          onClick={scrollPrev}
          disabled={isFirstTabActive}
        >
          {prevIconPosition === "left" && (
            <Icon iconLibrary={iconLibrary} icon={prevIcon} iconStyles={iconStyles} />
          )}
          {(buttonTextEnabled || prevButtonText) && <>{prevButtonText}</>}
          {prevIconPosition === "right" && (
            <Icon iconLibrary={iconLibrary} icon={prevIcon} iconStyles={iconStyles} />
          )}
        </button>
      )}
      <div ref={tabsRef} className={` ${tabAreaStyles}`}>
        {React.Children.map(children, (child: React.ReactElement) => {
          return React.cloneElement(child, {
            isActive: child.props.value === activeTab,
            activeTabStyles: child.props.activeTabStyles
              ? child.props.activeTabStyles
              : activeTabStyles,
            onClick: () => onTabClick(child.props.value),
            orientation,
          });
        })}
      </div>
      {showButton && (
        <button
          className={`${buttonStyles} ${nextButtonStyles} ${showButton ? "" : "hidden"} ${isLastTabActive ? "disabled " + disabledStyles : ""
            }`}
          onClick={scrollNext}
          disabled={isLastTabActive}
        >
          {nextIconPosition === "left" && (
            <Icon iconLibrary={iconLibrary} icon={nextIcon} iconStyles={iconStyles} />
          )}
          {(buttonTextEnabled || nextButtonText) && <>{nextButtonText}</>}
          {nextIconPosition === "right" && (
            <Icon iconLibrary={iconLibrary} icon={nextIcon} iconStyles={iconStyles} />
          )}
        </button>
      )}
    </div>
  );
};
