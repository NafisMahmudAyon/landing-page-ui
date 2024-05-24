'use client';
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useRef } from 'react';
export const CircularProgressBar = ({ value = 75, styles = "", onVisible, duration = 2, strokeColor = "#CCCCCC", strokeFillColor = "#333333", strokeWidth = 2, contentStyles = "", children, onClick, ...rest }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [percentage, setPercentage] = useState(0);
    const svgRef = useRef(null);
    const durationValue = (duration * 1000) / value;
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsVisible(entry.isIntersecting);
        }, {
            root: null,
            rootMargin: "0px",
            threshold: 0.5, // Adjust this threshold as needed
        });
        if (svgRef.current) {
            observer.observe(svgRef.current);
        }
        return () => {
            if (svgRef.current) {
                observer.unobserve(svgRef.current);
            }
        };
    }, []);
    useEffect(() => {
        if (onVisible && !isVisible) {
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
    }, [onVisible, isVisible, value]);
    return (_jsx("div", { className: `${styles} relative h-24 w-24 `, onClick: onClick, role: "progressbar", ...rest, children: _jsxs("div", { className: "absolute top-0 left-0 w-full h-full transform -rotate-90 origin-center", children: [_jsx("svg", { className: "absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full text-red-400", viewBox: "0 0 24 24", ref: svgRef, children: _jsx("circle", { className: " ", cx: "12", cy: "12", r: "10", fill: "none", stroke: strokeColor, strokeLinecap: "round", strokeWidth: strokeWidth }) }), _jsx("svg", { className: "absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full", viewBox: "0 0 24 24", ref: svgRef, children: _jsx("circle", { className: " ", cx: "12", cy: "12", r: "10", fill: "none", stroke: strokeFillColor, strokeLinecap: "round", strokeDasharray: "62.83", strokeWidth: strokeWidth, style: {
                            strokeDashoffset: `${((100 - percentage) * 62.83) / 100}`,
                        } }) }), _jsxs("span", { className: `${contentStyles} absolute inset-0 w-full h-full flex items-center justify-center text-gray-500 text-inherit rotate-90 `, children: [!children && _jsxs(_Fragment, { children: [percentage, "%"] }), children && _jsx(_Fragment, { children: children })] })] }) }));
};
