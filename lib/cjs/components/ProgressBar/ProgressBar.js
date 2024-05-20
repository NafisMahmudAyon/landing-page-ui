import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useRef } from 'react';
export const ProgressBar = ({ value, contentPosition = "right", duration = 2, animateOnLoad = true, animateOnVisible = false, children, styles = "", containerStyles = "", fillStyles = "", contentStyles = "", min = 0, max = 100, ...rest }) => {
    // Ensure value is within min and max range
    const clampedValue = Math.min(Math.max(value, min), max);
    // Calculate percentage
    const [percentage, setPercentage] = useState(((clampedValue - min) / (max - min)) * 100);
    const durationValue = (duration * 1000) / value;
    // Ref for the progress bar
    const progressBarRef = useRef(null);
    // State to track visibility
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsVisible(entry.isIntersecting);
        }, {
            root: null,
            rootMargin: "0px",
            threshold: 0.5, // Adjust this threshold as needed
        });
        if (progressBarRef.current) {
            observer.observe(progressBarRef.current);
        }
        return () => {
            if (progressBarRef.current) {
                observer.unobserve(progressBarRef.current);
            }
        };
    }, []);
    useEffect(() => {
        if (animateOnLoad === true && !isVisible) {
            setPercentage(0);
        }
    }, []);
    useEffect(() => {
        if (animateOnVisible === true && !isVisible) {
            setPercentage(0);
        }
        else if (isVisible) {
            const interval = setInterval(() => {
                if (percentage < value) {
                    setPercentage((prevPercentage) => Math.min(prevPercentage + 1, value));
                }
                else {
                    clearInterval(interval);
                }
            }, durationValue);
            return () => clearInterval(interval);
        }
    }, [animateOnVisible, isVisible, value]);
    return (_jsxs("div", { className: `${styles} flex items-center gap-4 w-full my-2`, ...rest, children: [contentPosition === "left" && (_jsxs("span", { className: ` ${contentStyles} min-w-8 `, children: [!children && _jsx(_Fragment, { children: `${percentage}%` }), children && children] })), _jsx("div", { className: ` ${containerStyles} flex-1 overflow-hidden rounded-full border p-1 `, children: _jsx("div", { className: ` ${fillStyles} flex relative h-4 bg-blue-200 rounded-full `, role: "progressbar", "aria-valuenow": clampedValue, "aria-valuemin": min, "aria-valuemax": max, style: { width: `${percentage}%` }, ref: progressBarRef }) }), contentPosition === "right" && (_jsxs("span", { className: ` ${contentStyles} min-w-8 `, children: [!children && _jsx(_Fragment, { children: `${percentage}%` }), children && children] }))] }));
};
