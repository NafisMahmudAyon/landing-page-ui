import React, { useEffect, useState, useRef, Children } from "react";

// * package for masonry grid

// import {Masonry} from "masonry-layout";
// import imagesLoaded from "imagesloaded";

// * package for code snippets
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

///////
// import Text from "./Text";

// *css
import "../css/output.css";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";

const bootstrapIcons = [
	"bi-123",
	"bi-alarm-fill",
	"bi-alarm",
	"bi-align-bottom",
	"bi-align-center",
	"bi-align-end",
	"bi-align-middle",
	"bi-align-start",
	"bi-align-top",
	"bi-alt",
	"bi-app-indicator",
	"bi-app",
	"bi-archive-fill",
	"bi-archive",
	"bi-arrow-90deg-down",
	"bi-arrow-90deg-left",
	"bi-arrow-90deg-right",
	"bi-arrow-90deg-up",
	"bi-arrow-bar-down",
	"bi-arrow-bar-left",
	"bi-arrow-bar-right",
	"bi-arrow-bar-up",
	"bi-arrow-clockwise",
	"bi-arrow-counterclockwise",
	"bi-arrow-down-circle-fill",
	"bi-arrow-down-circle",
	"bi-arrow-down-left-circle-fill",
	"bi-arrow-down-left-circle",
	"bi-arrow-down-left-square-fill",
	"bi-arrow-down-left-square",
	"bi-arrow-down-left",
	"bi-arrow-down-right-circle-fill",
	"bi-arrow-down-right-circle",
	"bi-arrow-down-right-square-fill",
	"bi-arrow-down-right-square",
	"bi-arrow-down-right",
	"bi-arrow-down-short",
	"bi-arrow-down-square-fill",
	"bi-arrow-down-square",
	"bi-arrow-down-up",
	"bi-arrow-down",
	"bi-arrow-left-circle-fill",
	"bi-arrow-left-circle",
	"bi-arrow-left-right",
	"bi-arrow-left-short",
	"bi-arrow-left-square-fill",
	"bi-arrow-left-square",
	"bi-arrow-left",
	"bi-arrow-repeat",
	"bi-arrow-return-left",
	"bi-arrow-return-right",
	"bi-arrow-right-circle-fill",
	"bi-arrow-right-circle",
	"bi-arrow-right-short",
	"bi-arrow-right-square-fill",
	"bi-arrow-right-square",
	"bi-arrow-right",
	"bi-arrow-up-circle-fill",
	"bi-arrow-up-circle",
	"bi-arrow-up-left-circle-fill",
	"bi-arrow-up-left-circle",
	"bi-arrow-up-left-square-fill",
	"bi-arrow-up-left-square",
	"bi-arrow-up-left",
	"bi-arrow-up-right-circle-fill",
	"bi-arrow-up-right-circle",
	"bi-arrow-up-right-square-fill",
	"bi-arrow-up-right-square",
	"bi-arrow-up-right",
	"bi-arrow-up-short",
	"bi-arrow-up-square-fill",
	"bi-arrow-up-square",
	"bi-arrow-up",
	"bi-arrows-angle-contract",
	"bi-arrows-angle-expand",
	"bi-arrows-collapse",
	"bi-arrows-expand",
	"bi-arrows-fullscreen",
	"bi-arrows-move",
	"bi-aspect-ratio-fill",
	"bi-aspect-ratio",
	"bi-asterisk",
	"bi-at",
	"bi-award-fill",
	"bi-award",
	"bi-back",
	"bi-backspace-fill",
	"bi-backspace-reverse-fill",
	"bi-backspace-reverse",
	"bi-backspace",
	"bi-badge-3d-fill",
	"bi-badge-3d",
	"bi-badge-4k-fill",
	"bi-badge-4k",
	"bi-badge-8k-fill",
	"bi-badge-8k",
	"bi-badge-ad-fill",
	"bi-badge-ad",
	"bi-badge-ar-fill",
	"bi-badge-ar",
	"bi-badge-cc-fill",
	"bi-badge-cc",
	"bi-badge-hd-fill",
	"bi-badge-hd",
	"bi-badge-tm-fill",
	"bi-badge-tm",
	"bi-badge-vo-fill",
	"bi-badge-vo",
	"bi-badge-vr-fill",
	"bi-badge-vr",
	"bi-badge-wc-fill",
	"bi-badge-wc",
	"bi-bag-check-fill",
	"bi-bag-check",
	"bi-bag-dash-fill",
	"bi-bag-dash",
	"bi-bag-fill",
	"bi-bag-plus-fill",
	"bi-bag-plus",
	"bi-bag-x-fill",
	"bi-bag-x",
	"bi-bag",
	"bi-bar-chart-fill",
	"bi-bar-chart-line-fill",
	"bi-bar-chart-line",
	"bi-bar-chart-steps",
	"bi-bar-chart",
	"bi-basket-fill",
	"bi-basket",
	"bi-basket2-fill",
	"bi-basket2",
	"bi-basket3-fill",
	"bi-basket3",
	"bi-battery-charging",
	"bi-battery-full",
	"bi-battery-half",
	"bi-battery",
	"bi-bell-fill",
	"bi-bell",
	"bi-bezier",
	"bi-bezier2",
	"bi-bicycle",
	"bi-binoculars-fill",
	"bi-binoculars",
	"bi-blockquote-left",
	"bi-blockquote-right",
	"bi-book-fill",
	"bi-book-half",
	"bi-book",
	"bi-bookmark-check-fill",
	"bi-bookmark-check",
	"bi-bookmark-dash-fill",
	"bi-bookmark-dash",
	"bi-bookmark-fill",
	"bi-bookmark-heart-fill",
	"bi-bookmark-heart",
	"bi-bookmark-plus-fill",
	"bi-bookmark-plus",
	"bi-bookmark-star-fill",
	"bi-bookmark-star",
	"bi-bookmark-x-fill",
	"bi-bookmark-x",
	"bi-bookmark",
	"bi-bookmarks-fill",
	"bi-bookmarks",
	"bi-bookshelf",
	"bi-bootstrap-fill",
	"bi-bootstrap-reboot",
	"bi-bootstrap",
	"bi-border-all",
	"bi-border-bottom",
	"bi-border-center",
	"bi-border-inner",
	"bi-border-left",
	"bi-border-middle",
	"bi-border-outer",
	"bi-border-right",
	"bi-border-style",
	"bi-border-top",
	"bi-border-width",
	"bi-border",
	"bi-bounding-box-circles",
	"bi-bounding-box",
	"bi-box-arrow-down-left",
	"bi-box-arrow-down-right",
	"bi-box-arrow-down",
	"bi-box-arrow-in-down-left",
	"bi-box-arrow-in-down-right",
	"bi-box-arrow-in-down",
	"bi-box-arrow-in-left",
	"bi-box-arrow-in-right",
	"bi-box-arrow-in-up-left",
	"bi-box-arrow-in-up-right",
	"bi-box-arrow-in-up",
	"bi-box-arrow-left",
	"bi-box-arrow-right",
	"bi-box-arrow-up-left",
	"bi-box-arrow-up-right",
	"bi-box-arrow-up",
	"bi-box-seam",
	"bi-box",
	"bi-braces",
	"bi-bricks",
	"bi-briefcase-fill",
	"bi-briefcase",
	"bi-brightness-alt-high-fill",
	"bi-brightness-alt-high",
	"bi-brightness-alt-low-fill",
	"bi-brightness-alt-low",
	"bi-brightness-high-fill",
	"bi-brightness-high",
	"bi-brightness-low-fill",
	"bi-brightness-low",
	"bi-broadcast-pin",
	"bi-broadcast",
	"bi-brush-fill",
	"bi-brush",
	"bi-bucket-fill",
	"bi-bucket",
	"bi-bug-fill",
	"bi-bug",
	"bi-building",
	"bi-bullseye",
	"bi-calculator-fill",
	"bi-calculator",
	"bi-calendar-check-fill",
	"bi-calendar-check",
	"bi-calendar-date-fill",
	"bi-calendar-date",
	"bi-calendar-day-fill",
	"bi-calendar-day",
	"bi-calendar-event-fill",
	"bi-calendar-event",
	"bi-calendar-fill",
	"bi-calendar-minus-fill",
	"bi-calendar-minus",
	"bi-calendar-month-fill",
	"bi-calendar-month",
	"bi-calendar-plus-fill",
	"bi-calendar-plus",
	"bi-calendar-range-fill",
	"bi-calendar-range",
	"bi-calendar-week-fill",
	"bi-calendar-week",
	"bi-calendar-x-fill",
	"bi-calendar-x",
	"bi-calendar",
	"bi-calendar2-check-fill",
	"bi-calendar2-check",
	"bi-calendar2-date-fill",
	"bi-calendar2-date",
	"bi-calendar2-day-fill",
	"bi-calendar2-day",
	"bi-calendar2-event-fill",
	"bi-calendar2-event",
	"bi-calendar2-fill",
	"bi-calendar2-minus-fill",
	"bi-calendar2-minus",
	"bi-calendar2-month-fill",
	"bi-calendar2-month",
	"bi-calendar2-plus-fill",
	"bi-calendar2-plus",
	"bi-calendar2-range-fill",
	"bi-calendar2-range",
	"bi-calendar2-week-fill",
	"bi-calendar2-week",
	"bi-calendar2-x-fill",
	"bi-calendar2-x",
	"bi-calendar2",
	"bi-calendar3-event-fill",
	"bi-calendar3-event",
	"bi-calendar3-fill",
	"bi-calendar3-range-fill",
	"bi-calendar3-range",
	"bi-calendar3-week-fill",
	"bi-calendar3-week",
	"bi-calendar3",
	"bi-calendar4-event",
	"bi-calendar4-range",
	"bi-calendar4-week",
	"bi-calendar4",
	"bi-camera-fill",
	"bi-camera-reels-fill",
	"bi-camera-reels",
	"bi-camera-video-fill",
	"bi-camera-video-off-fill",
	"bi-camera-video-off",
	"bi-camera-video",
	"bi-camera",
	"bi-camera2",
	"bi-capslock-fill",
	"bi-capslock",
	"bi-card-checklist",
	"bi-card-heading",
	"bi-card-image",
	"bi-card-list",
	"bi-card-text",
	"bi-caret-down-fill",
	"bi-caret-down-square-fill",
	"bi-caret-down-square",
	"bi-caret-down",
	"bi-caret-left-fill",
	"bi-caret-left-square-fill",
	"bi-caret-left-square",
	"bi-caret-left",
	"bi-caret-right-fill",
	"bi-caret-right-square-fill",
	"bi-caret-right-square",
	"bi-caret-right",
	"bi-caret-up-fill",
	"bi-caret-up-square-fill",
	"bi-caret-up-square",
	"bi-caret-up",
	"bi-cart-check-fill",
	"bi-cart-check",
	"bi-cart-dash-fill",
	"bi-cart-dash",
	"bi-cart-fill",
	"bi-cart-plus-fill",
	"bi-cart-plus",
	"bi-cart-x-fill",
	"bi-cart-x",
	"bi-cart",
	"bi-cart2",
	"bi-cart3",
	"bi-cart4",
	"bi-cash-stack",
	"bi-cash",
	"bi-cast",
	"bi-chat-dots-fill",
	"bi-chat-dots",
	"bi-chat-fill",
	"bi-chat-left-dots-fill",
	"bi-chat-left-dots",
	"bi-chat-left-fill",
	"bi-chat-left-quote-fill",
	"bi-chat-left-quote",
	"bi-chat-left-text-fill",
	"bi-chat-left-text",
	"bi-chat-left",
	"bi-chat-quote-fill",
	"bi-chat-quote",
	"bi-chat-right-dots-fill",
	"bi-chat-right-dots",
	"bi-chat-right-fill",
	"bi-chat-right-quote-fill",
	"bi-chat-right-quote",
	"bi-chat-right-text-fill",
	"bi-chat-right-text",
	"bi-chat-right",
	"bi-chat-square-dots-fill",
	"bi-chat-square-dots",
	"bi-chat-square-fill",
	"bi-chat-square-quote-fill",
	"bi-chat-square-quote",
	"bi-chat-square-text-fill",
	"bi-chat-square-text",
	"bi-chat-square",
	"bi-chat-text-fill",
	"bi-chat-text",
	"bi-chat",
	"bi-check-all",
	"bi-check-circle-fill",
	"bi-check-circle",
	"bi-check-square-fill",
	"bi-check-square",
	"bi-check",
	"bi-check2-all",
	"bi-check2-circle",
	"bi-check2-square",
	"bi-check2",
	"bi-chevron-bar-contract",
	"bi-chevron-bar-down",
	"bi-chevron-bar-expand",
	"bi-chevron-bar-left",
	"bi-chevron-bar-right",
	"bi-chevron-bar-up",
	"bi-chevron-compact-down",
	"bi-chevron-compact-left",
	"bi-chevron-compact-right",
	"bi-chevron-compact-up",
	"bi-chevron-contract",
	"bi-chevron-double-down",
	"bi-chevron-double-left",
	"bi-chevron-double-right",
	"bi-chevron-double-up",
	"bi-chevron-down",
	"bi-chevron-expand",
	"bi-chevron-left",
	"bi-chevron-right",
	"bi-chevron-up",
	"bi-circle-fill",
	"bi-circle-half",
	"bi-circle-square",
	"bi-circle",
	"bi-clipboard-check",
	"bi-clipboard-data",
	"bi-clipboard-minus",
	"bi-clipboard-plus",
	"bi-clipboard-x",
	"bi-clipboard",
	"bi-clock-fill",
	"bi-clock-history",
	"bi-clock",
	"bi-cloud-arrow-down-fill",
	"bi-cloud-arrow-down",
	"bi-cloud-arrow-up-fill",
	"bi-cloud-arrow-up",
	"bi-cloud-check-fill",
	"bi-cloud-check",
	"bi-cloud-download-fill",
	"bi-cloud-download",
	"bi-cloud-drizzle-fill",
	"bi-cloud-drizzle",
	"bi-cloud-fill",
	"bi-cloud-fog-fill",
	"bi-cloud-fog",
	"bi-cloud-fog2-fill",
	"bi-cloud-fog2",
	"bi-cloud-hail-fill",
	"bi-cloud-hail",
	"bi-cloud-haze-1",
	"bi-cloud-haze-fill",
	"bi-cloud-haze",
	"bi-cloud-haze2-fill",
	"bi-cloud-lightning-fill",
	"bi-cloud-lightning-rain-fill",
	"bi-cloud-lightning-rain",
	"bi-cloud-lightning",
	"bi-cloud-minus-fill",
	"bi-cloud-minus",
	"bi-cloud-moon-fill",
	"bi-cloud-moon",
	"bi-cloud-plus-fill",
	"bi-cloud-plus",
	"bi-cloud-rain-fill",
	"bi-cloud-rain-heavy-fill",
	"bi-cloud-rain-heavy",
	"bi-cloud-rain",
	"bi-cloud-slash-fill",
	"bi-cloud-slash",
	"bi-cloud-sleet-fill",
	"bi-cloud-sleet",
	"bi-cloud-snow-fill",
	"bi-cloud-snow",
	"bi-cloud-sun-fill",
	"bi-cloud-sun",
	"bi-cloud-upload-fill",
	"bi-cloud-upload",
	"bi-cloud",
	"bi-clouds-fill",
	"bi-clouds",
	"bi-cloudy-fill",
	"bi-cloudy",
	"bi-code-slash",
	"bi-code-square",
	"bi-code",
	"bi-collection-fill",
	"bi-collection-play-fill",
	"bi-collection-play",
	"bi-collection",
	"bi-columns-gap",
	"bi-columns",
	"bi-command",
	"bi-compass-fill",
	"bi-compass",
	"bi-cone-striped",
	"bi-cone",
	"bi-controller",
	"bi-cpu-fill",
	"bi-cpu",
	"bi-credit-card-2-back-fill",
	"bi-credit-card-2-back",
	"bi-credit-card-2-front-fill",
	"bi-credit-card-2-front",
	"bi-credit-card-fill",
	"bi-credit-card",
	"bi-crop",
	"bi-cup-fill",
	"bi-cup-straw",
	"bi-cup",
	"bi-cursor-fill",
	"bi-cursor-text",
	"bi-cursor",
	"bi-dash-circle-dotted",
	"bi-dash-circle-fill",
	"bi-dash-circle",
	"bi-dash-square-dotted",
	"bi-dash-square-fill",
	"bi-dash-square",
	"bi-dash",
	"bi-diagram-2-fill",
	"bi-diagram-2",
	"bi-diagram-3-fill",
	"bi-diagram-3",
	"bi-diamond-fill",
	"bi-diamond-half",
	"bi-diamond",
	"bi-dice-1-fill",
	"bi-dice-1",
	"bi-dice-2-fill",
	"bi-dice-2",
	"bi-dice-3-fill",
	"bi-dice-3",
	"bi-dice-4-fill",
	"bi-dice-4",
	"bi-dice-5-fill",
	"bi-dice-5",
	"bi-dice-6-fill",
	"bi-dice-6",
	"bi-disc-fill",
	"bi-disc",
	"bi-discord",
	"bi-display-fill",
	"bi-display",
	"bi-distribute-horizontal",
	"bi-distribute-vertical",
	"bi-door-closed-fill",
	"bi-door-closed",
	"bi-door-open-fill",
	"bi-door-open",
	"bi-dot",
	"bi-download",
	"bi-droplet-fill",
	"bi-droplet-half",
	"bi-droplet",
	"bi-earbuds",
	"bi-easel-fill",
	"bi-easel",
	"bi-egg-fill",
	"bi-egg-fried",
	"bi-egg",
	"bi-eject-fill",
	"bi-eject",
	"bi-emoji-angry-fill",
	"bi-emoji-angry",
	"bi-emoji-dizzy-fill",
	"bi-emoji-dizzy",
	"bi-emoji-expressionless-fill",
	"bi-emoji-expressionless",
	"bi-emoji-frown-fill",
	"bi-emoji-frown",
	"bi-emoji-heart-eyes-fill",
	"bi-emoji-heart-eyes",
	"bi-emoji-laughing-fill",
	"bi-emoji-laughing",
	"bi-emoji-neutral-fill",
	"bi-emoji-neutral",
	"bi-emoji-smile-fill",
	"bi-emoji-smile-upside-down-fill",
	"bi-emoji-smile-upside-down",
	"bi-emoji-smile",
	"bi-emoji-sunglasses-fill",
	"bi-emoji-sunglasses",
	"bi-emoji-wink-fill",
	"bi-emoji-wink",
	"bi-envelope-fill",
	"bi-envelope-open-fill",
	"bi-envelope-open",
	"bi-envelope",
	"bi-eraser-fill",
	"bi-eraser",
	"bi-exclamation-circle-fill",
	"bi-exclamation-circle",
	"bi-exclamation-diamond-fill",
	"bi-exclamation-diamond",
	"bi-exclamation-octagon-fill",
	"bi-exclamation-octagon",
	"bi-exclamation-square-fill",
	"bi-exclamation-square",
	"bi-exclamation-triangle-fill",
	"bi-exclamation-triangle",
	"bi-exclamation",
	"bi-exclude",
	"bi-eye-fill",
	"bi-eye-slash-fill",
	"bi-eye-slash",
	"bi-eye",
	"bi-eyedropper",
	"bi-eyeglasses",
	"bi-facebook",
	"bi-file-arrow-down-fill",
	"bi-file-arrow-down",
	"bi-file-arrow-up-fill",
	"bi-file-arrow-up",
	"bi-file-bar-graph-fill",
	"bi-file-bar-graph",
	"bi-file-binary-fill",
	"bi-file-binary",
	"bi-file-break-fill",
	"bi-file-break",
	"bi-file-check-fill",
	"bi-file-check",
	"bi-file-code-fill",
	"bi-file-code",
	"bi-file-diff-fill",
	"bi-file-diff",
	"bi-file-earmark-arrow-down-fill",
	"bi-file-earmark-arrow-down",
	"bi-file-earmark-arrow-up-fill",
	"bi-file-earmark-arrow-up",
	"bi-file-earmark-bar-graph-fill",
	"bi-file-earmark-bar-graph",
	"bi-file-earmark-binary-fill",
	"bi-file-earmark-binary",
	"bi-file-earmark-break-fill",
	"bi-file-earmark-break",
	"bi-file-earmark-check-fill",
	"bi-file-earmark-check",
	"bi-file-earmark-code-fill",
	"bi-file-earmark-code",
	"bi-file-earmark-diff-fill",
	"bi-file-earmark-diff",
	"bi-file-earmark-easel-fill",
	"bi-file-earmark-easel",
	"bi-file-earmark-excel-fill",
	"bi-file-earmark-excel",
	"bi-file-earmark-fill",
	"bi-file-earmark-font-fill",
	"bi-file-earmark-font",
	"bi-file-earmark-image-fill",
	"bi-file-earmark-image",
	"bi-file-earmark-lock-fill",
	"bi-file-earmark-lock",
	"bi-file-earmark-lock2-fill",
	"bi-file-earmark-lock2",
	"bi-file-earmark-medical-fill",
	"bi-file-earmark-medical",
	"bi-file-earmark-minus-fill",
	"bi-file-earmark-minus",
	"bi-file-earmark-music-fill",
	"bi-file-earmark-music",
	"bi-file-earmark-person-fill",
	"bi-file-earmark-person",
	"bi-file-earmark-play-fill",
	"bi-file-earmark-play",
	"bi-file-earmark-plus-fill",
	"bi-file-earmark-plus",
	"bi-file-earmark-post-fill",
	"bi-file-earmark-post",
	"bi-file-earmark-ppt-fill",
	"bi-file-earmark-ppt",
	"bi-file-earmark-richtext-fill",
	"bi-file-earmark-richtext",
	"bi-file-earmark-ruled-fill",
	"bi-file-earmark-ruled",
	"bi-file-earmark-slides-fill",
	"bi-file-earmark-slides",
	"bi-file-earmark-spreadsheet-fill",
	"bi-file-earmark-spreadsheet",
	"bi-file-earmark-text-fill",
	"bi-file-earmark-text",
	"bi-file-earmark-word-fill",
	"bi-file-earmark-word",
	"bi-file-earmark-x-fill",
	"bi-file-earmark-x",
	"bi-file-earmark-zip-fill",
	"bi-file-earmark-zip",
	"bi-file-earmark",
	"bi-file-easel-fill",
	"bi-file-easel",
	"bi-file-excel-fill",
	"bi-file-excel",
	"bi-file-fill",
	"bi-file-font-fill",
	"bi-file-font",
	"bi-file-image-fill",
	"bi-file-image",
	"bi-file-lock-fill",
	"bi-file-lock",
	"bi-file-lock2-fill",
	"bi-file-lock2",
	"bi-file-medical-fill",
	"bi-file-medical",
	"bi-file-minus-fill",
	"bi-file-minus",
	"bi-file-music-fill",
	"bi-file-music",
	"bi-file-person-fill",
	"bi-file-person",
	"bi-file-play-fill",
	"bi-file-play",
	"bi-file-plus-fill",
	"bi-file-plus",
	"bi-file-post-fill",
	"bi-file-post",
	"bi-file-ppt-fill",
	"bi-file-ppt",
	"bi-file-richtext-fill",
	"bi-file-richtext",
	"bi-file-ruled-fill",
	"bi-file-ruled",
	"bi-file-slides-fill",
	"bi-file-slides",
	"bi-file-spreadsheet-fill",
	"bi-file-spreadsheet",
	"bi-file-text-fill",
	"bi-file-text",
	"bi-file-word-fill",
	"bi-file-word",
	"bi-file-x-fill",
	"bi-file-x",
	"bi-file-zip-fill",
	"bi-file-zip",
	"bi-file",
	"bi-files-alt",
	"bi-files",
	"bi-film",
	"bi-filter-circle-fill",
	"bi-filter-circle",
	"bi-filter-left",
	"bi-filter-right",
	"bi-filter-square-fill",
	"bi-filter-square",
	"bi-filter",
	"bi-flag-fill",
	"bi-flag",
	"bi-flower1",
	"bi-flower2",
	"bi-flower3",
	"bi-folder-check",
	"bi-folder-fill",
	"bi-folder-minus",
	"bi-folder-plus",
	"bi-folder-symlink-fill",
	"bi-folder-symlink",
	"bi-folder-x",
	"bi-folder",
	"bi-folder2-open",
	"bi-folder2",
	"bi-fonts",
	"bi-forward-fill",
	"bi-forward",
	"bi-front",
	"bi-fullscreen-exit",
	"bi-fullscreen",
	"bi-funnel-fill",
	"bi-funnel",
	"bi-gear-fill",
	"bi-gear-wide-connected",
	"bi-gear-wide",
	"bi-gear",
	"bi-gem",
	"bi-geo-alt-fill",
	"bi-geo-alt",
	"bi-geo-fill",
	"bi-geo",
	"bi-gift-fill",
	"bi-gift",
	"bi-github",
	"bi-globe",
	"bi-globe2",
	"bi-google",
	"bi-graph-down",
	"bi-graph-up",
	"bi-grid-1x2-fill",
	"bi-grid-1x2",
	"bi-grid-3x2-gap-fill",
	"bi-grid-3x2-gap",
	"bi-grid-3x2",
	"bi-grid-3x3-gap-fill",
	"bi-grid-3x3-gap",
	"bi-grid-3x3",
	"bi-grid-fill",
	"bi-grid",
	"bi-grip-horizontal",
	"bi-grip-vertical",
	"bi-hammer",
	"bi-hand-index-fill",
	"bi-hand-index-thumb-fill",
	"bi-hand-index-thumb",
	"bi-hand-index",
	"bi-hand-thumbs-down-fill",
	"bi-hand-thumbs-down",
	"bi-hand-thumbs-up-fill",
	"bi-hand-thumbs-up",
	"bi-handbag-fill",
	"bi-handbag",
	"bi-hash",
	"bi-hdd-fill",
	"bi-hdd-network-fill",
	"bi-hdd-network",
	"bi-hdd-rack-fill",
	"bi-hdd-rack",
	"bi-hdd-stack-fill",
	"bi-hdd-stack",
	"bi-hdd",
	"bi-headphones",
	"bi-headset",
	"bi-heart-fill",
	"bi-heart-half",
	"bi-heart",
	"bi-heptagon-fill",
	"bi-heptagon-half",
	"bi-heptagon",
	"bi-hexagon-fill",
	"bi-hexagon-half",
	"bi-hexagon",
	"bi-hourglass-bottom",
	"bi-hourglass-split",
	"bi-hourglass-top",
	"bi-hourglass",
	"bi-house-door-fill",
	"bi-house-door",
	"bi-house-fill",
	"bi-house",
	"bi-hr",
	"bi-hurricane",
	"bi-image-alt",
	"bi-image-fill",
	"bi-image",
	"bi-images",
	"bi-inbox-fill",
	"bi-inbox",
	"bi-inboxes-fill",
	"bi-inboxes",
	"bi-info-circle-fill",
	"bi-info-circle",
	"bi-info-square-fill",
	"bi-info-square",
	"bi-info",
	"bi-input-cursor-text",
	"bi-input-cursor",
	"bi-instagram",
	"bi-intersect",
	"bi-journal-album",
	"bi-journal-arrow-down",
	"bi-journal-arrow-up",
	"bi-journal-bookmark-fill",
	"bi-journal-bookmark",
	"bi-journal-check",
	"bi-journal-code",
	"bi-journal-medical",
	"bi-journal-minus",
	"bi-journal-plus",
	"bi-journal-richtext",
	"bi-journal-text",
	"bi-journal-x",
	"bi-journal",
	"bi-journals",
	"bi-joystick",
	"bi-justify-left",
	"bi-justify-right",
	"bi-justify",
	"bi-kanban-fill",
	"bi-kanban",
	"bi-key-fill",
	"bi-key",
	"bi-keyboard-fill",
	"bi-keyboard",
	"bi-ladder",
	"bi-lamp-fill",
	"bi-lamp",
	"bi-laptop-fill",
	"bi-laptop",
	"bi-layer-backward",
	"bi-layer-forward",
	"bi-layers-fill",
	"bi-layers-half",
	"bi-layers",
	"bi-layout-sidebar-inset-reverse",
	"bi-layout-sidebar-inset",
	"bi-layout-sidebar-reverse",
	"bi-layout-sidebar",
	"bi-layout-split",
	"bi-layout-text-sidebar-reverse",
	"bi-layout-text-sidebar",
	"bi-layout-text-window-reverse",
	"bi-layout-text-window",
	"bi-layout-three-columns",
	"bi-layout-wtf",
	"bi-life-preserver",
	"bi-lightbulb-fill",
	"bi-lightbulb-off-fill",
	"bi-lightbulb-off",
	"bi-lightbulb",
	"bi-lightning-charge-fill",
	"bi-lightning-charge",
	"bi-lightning-fill",
	"bi-lightning",
	"bi-link-45deg",
	"bi-link",
	"bi-linkedin",
	"bi-list-check",
	"bi-list-nested",
	"bi-list-ol",
	"bi-list-stars",
	"bi-list-task",
	"bi-list-ul",
	"bi-list",
	"bi-lock-fill",
	"bi-lock",
	"bi-mailbox",
	"bi-mailbox2",
	"bi-map-fill",
	"bi-map",
	"bi-markdown-fill",
	"bi-markdown",
	"bi-mask",
	"bi-megaphone-fill",
	"bi-megaphone",
	"bi-menu-app-fill",
	"bi-menu-app",
	"bi-menu-button-fill",
	"bi-menu-button-wide-fill",
	"bi-menu-button-wide",
	"bi-menu-button",
	"bi-menu-down",
	"bi-menu-up",
	"bi-mic-fill",
	"bi-mic-mute-fill",
	"bi-mic-mute",
	"bi-mic",
	"bi-minecart-loaded",
	"bi-minecart",
	"bi-moisture",
	"bi-moon-fill",
	"bi-moon-stars-fill",
	"bi-moon-stars",
	"bi-moon",
	"bi-mouse-fill",
	"bi-mouse",
	"bi-mouse2-fill",
	"bi-mouse2",
	"bi-mouse3-fill",
	"bi-mouse3",
	"bi-music-note-beamed",
	"bi-music-note-list",
	"bi-music-note",
	"bi-music-player-fill",
	"bi-music-player",
	"bi-newspaper",
	"bi-node-minus-fill",
	"bi-node-minus",
	"bi-node-plus-fill",
	"bi-node-plus",
	"bi-nut-fill",
	"bi-nut",
	"bi-octagon-fill",
	"bi-octagon-half",
	"bi-octagon",
	"bi-option",
	"bi-outlet",
	"bi-paint-bucket",
	"bi-palette-fill",
	"bi-palette",
	"bi-palette2",
	"bi-paperclip",
	"bi-paragraph",
	"bi-patch-check-fill",
	"bi-patch-check",
	"bi-patch-exclamation-fill",
	"bi-patch-exclamation",
	"bi-patch-minus-fill",
	"bi-patch-minus",
	"bi-patch-plus-fill",
	"bi-patch-plus",
	"bi-patch-question-fill",
	"bi-patch-question",
	"bi-pause-btn-fill",
	"bi-pause-btn",
	"bi-pause-circle-fill",
	"bi-pause-circle",
	"bi-pause-fill",
	"bi-pause",
	"bi-peace-fill",
	"bi-peace",
	"bi-pen-fill",
	"bi-pen",
	"bi-pencil-fill",
	"bi-pencil-square",
	"bi-pencil",
	"bi-pentagon-fill",
	"bi-pentagon-half",
	"bi-pentagon",
	"bi-people-fill",
	"bi-people",
	"bi-percent",
	"bi-person-badge-fill",
	"bi-person-badge",
	"bi-person-bounding-box",
	"bi-person-check-fill",
	"bi-person-check",
	"bi-person-circle",
	"bi-person-dash-fill",
	"bi-person-dash",
	"bi-person-fill",
	"bi-person-lines-fill",
	"bi-person-plus-fill",
	"bi-person-plus",
	"bi-person-square",
	"bi-person-x-fill",
	"bi-person-x",
	"bi-person",
	"bi-phone-fill",
	"bi-phone-landscape-fill",
	"bi-phone-landscape",
	"bi-phone-vibrate-fill",
	"bi-phone-vibrate",
	"bi-phone",
	"bi-pie-chart-fill",
	"bi-pie-chart",
	"bi-pin-angle-fill",
	"bi-pin-angle",
	"bi-pin-fill",
	"bi-pin",
	"bi-pip-fill",
	"bi-pip",
	"bi-play-btn-fill",
	"bi-play-btn",
	"bi-play-circle-fill",
	"bi-play-circle",
	"bi-play-fill",
	"bi-play",
	"bi-plug-fill",
	"bi-plug",
	"bi-plus-circle-dotted",
	"bi-plus-circle-fill",
	"bi-plus-circle",
	"bi-plus-square-dotted",
	"bi-plus-square-fill",
	"bi-plus-square",
	"bi-plus",
	"bi-power",
	"bi-printer-fill",
	"bi-printer",
	"bi-puzzle-fill",
	"bi-puzzle",
	"bi-question-circle-fill",
	"bi-question-circle",
	"bi-question-diamond-fill",
	"bi-question-diamond",
	"bi-question-octagon-fill",
	"bi-question-octagon",
	"bi-question-square-fill",
	"bi-question-square",
	"bi-question",
	"bi-rainbow",
	"bi-receipt-cutoff",
	"bi-receipt",
	"bi-reception-0",
	"bi-reception-1",
	"bi-reception-2",
	"bi-reception-3",
	"bi-reception-4",
	"bi-record-btn-fill",
	"bi-record-btn",
	"bi-record-circle-fill",
	"bi-record-circle",
	"bi-record-fill",
	"bi-record",
	"bi-record2-fill",
	"bi-record2",
	"bi-reply-all-fill",
	"bi-reply-all",
	"bi-reply-fill",
	"bi-reply",
	"bi-rss-fill",
	"bi-rss",
	"bi-rulers",
	"bi-save-fill",
	"bi-save",
	"bi-save2-fill",
	"bi-save2",
	"bi-scissors",
	"bi-screwdriver",
	"bi-search",
	"bi-segmented-nav",
	"bi-server",
	"bi-share-fill",
	"bi-share",
	"bi-shield-check",
	"bi-shield-exclamation",
	"bi-shield-fill-check",
	"bi-shield-fill-exclamation",
	"bi-shield-fill-minus",
	"bi-shield-fill-plus",
	"bi-shield-fill-x",
	"bi-shield-fill",
	"bi-shield-lock-fill",
	"bi-shield-lock",
	"bi-shield-minus",
	"bi-shield-plus",
	"bi-shield-shaded",
	"bi-shield-slash-fill",
	"bi-shield-slash",
	"bi-shield-x",
	"bi-shield",
	"bi-shift-fill",
	"bi-shift",
	"bi-shop-window",
	"bi-shop",
	"bi-shuffle",
	"bi-signpost-2-fill",
	"bi-signpost-2",
	"bi-signpost-fill",
	"bi-signpost-split-fill",
	"bi-signpost-split",
	"bi-signpost",
	"bi-sim-fill",
	"bi-sim",
	"bi-skip-backward-btn-fill",
	"bi-skip-backward-btn",
	"bi-skip-backward-circle-fill",
	"bi-skip-backward-circle",
	"bi-skip-backward-fill",
	"bi-skip-backward",
	"bi-skip-end-btn-fill",
	"bi-skip-end-btn",
	"bi-skip-end-circle-fill",
	"bi-skip-end-circle",
	"bi-skip-end-fill",
	"bi-skip-end",
	"bi-skip-forward-btn-fill",
	"bi-skip-forward-btn",
	"bi-skip-forward-circle-fill",
	"bi-skip-forward-circle",
	"bi-skip-forward-fill",
	"bi-skip-forward",
	"bi-skip-start-btn-fill",
	"bi-skip-start-btn",
	"bi-skip-start-circle-fill",
	"bi-skip-start-circle",
	"bi-skip-start-fill",
	"bi-skip-start",
	"bi-slack",
	"bi-slash-circle-fill",
	"bi-slash-circle",
	"bi-slash-square-fill",
	"bi-slash-square",
	"bi-slash",
	"bi-sliders",
	"bi-smartwatch",
	"bi-snow",
	"bi-snow2",
	"bi-snow3",
	"bi-sort-alpha-down-alt",
	"bi-sort-alpha-down",
	"bi-sort-alpha-up-alt",
	"bi-sort-alpha-up",
	"bi-sort-down-alt",
	"bi-sort-down",
	"bi-sort-numeric-down-alt",
	"bi-sort-numeric-down",
	"bi-sort-numeric-up-alt",
	"bi-sort-numeric-up",
	"bi-sort-up-alt",
	"bi-sort-up",
	"bi-soundwave",
	"bi-speaker-fill",
	"bi-speaker",
	"bi-speedometer",
	"bi-speedometer2",
	"bi-spellcheck",
	"bi-square-fill",
	"bi-square-half",
	"bi-square",
	"bi-stack",
	"bi-star-fill",
	"bi-star-half",
	"bi-star",
	"bi-stars",
	"bi-stickies-fill",
	"bi-stickies",
	"bi-sticky-fill",
	"bi-sticky",
	"bi-stop-btn-fill",
	"bi-stop-btn",
	"bi-stop-circle-fill",
	"bi-stop-circle",
	"bi-stop-fill",
	"bi-stop",
	"bi-stoplights-fill",
	"bi-stoplights",
	"bi-stopwatch-fill",
	"bi-stopwatch",
	"bi-subtract",
	"bi-suit-club-fill",
	"bi-suit-club",
	"bi-suit-diamond-fill",
	"bi-suit-diamond",
	"bi-suit-heart-fill",
	"bi-suit-heart",
	"bi-suit-spade-fill",
	"bi-suit-spade",
	"bi-sun-fill",
	"bi-sun",
	"bi-sunglasses",
	"bi-sunrise-fill",
	"bi-sunrise",
	"bi-sunset-fill",
	"bi-sunset",
	"bi-symmetry-horizontal",
	"bi-symmetry-vertical",
	"bi-table",
	"bi-tablet-fill",
	"bi-tablet-landscape-fill",
	"bi-tablet-landscape",
	"bi-tablet",
	"bi-tag-fill",
	"bi-tag",
	"bi-tags-fill",
	"bi-tags",
	"bi-telegram",
	"bi-telephone-fill",
	"bi-telephone-forward-fill",
	"bi-telephone-forward",
	"bi-telephone-inbound-fill",
	"bi-telephone-inbound",
	"bi-telephone-minus-fill",
	"bi-telephone-minus",
	"bi-telephone-outbound-fill",
	"bi-telephone-outbound",
	"bi-telephone-plus-fill",
	"bi-telephone-plus",
	"bi-telephone-x-fill",
	"bi-telephone-x",
	"bi-telephone",
	"bi-terminal-fill",
	"bi-terminal",
	"bi-text-center",
	"bi-text-indent-left",
	"bi-text-indent-right",
	"bi-text-left",
	"bi-text-paragraph",
	"bi-text-right",
	"bi-textarea-resize",
	"bi-textarea-t",
	"bi-textarea",
	"bi-thermometer-half",
	"bi-thermometer-high",
	"bi-thermometer-low",
	"bi-thermometer-snow",
	"bi-thermometer-sun",
	"bi-thermometer",
	"bi-three-dots-vertical",
	"bi-three-dots",
	"bi-toggle-off",
	"bi-toggle-on",
	"bi-toggle2-off",
	"bi-toggle2-on",
	"bi-toggles",
	"bi-toggles2",
	"bi-tools",
	"bi-tornado",
	"bi-trash-fill",
	"bi-trash",
	"bi-trash2-fill",
	"bi-trash2",
	"bi-tree-fill",
	"bi-tree",
	"bi-triangle-fill",
	"bi-triangle-half",
	"bi-triangle",
	"bi-trophy-fill",
	"bi-trophy",
	"bi-tropical-storm",
	"bi-truck-flatbed",
	"bi-truck",
	"bi-tsunami",
	"bi-tv-fill",
	"bi-tv",
	"bi-twitch",
	"bi-twitter",
	"bi-type-bold",
	"bi-type-h1",
	"bi-type-h2",
	"bi-type-h3",
	"bi-type-italic",
	"bi-type-strikethrough",
	"bi-type-underline",
	"bi-type",
	"bi-ui-checks-grid",
	"bi-ui-checks",
	"bi-ui-radios-grid",
	"bi-ui-radios",
	"bi-umbrella-fill",
	"bi-umbrella",
	"bi-union",
	"bi-unlock-fill",
	"bi-unlock",
	"bi-upc-scan",
	"bi-upc",
	"bi-upload",
	"bi-vector-pen",
	"bi-view-list",
	"bi-view-stacked",
	"bi-vinyl-fill",
	"bi-vinyl",
	"bi-voicemail",
	"bi-volume-down-fill",
	"bi-volume-down",
	"bi-volume-mute-fill",
	"bi-volume-mute",
	"bi-volume-off-fill",
	"bi-volume-off",
	"bi-volume-up-fill",
	"bi-volume-up",
	"bi-vr",
	"bi-wallet-fill",
	"bi-wallet",
	"bi-wallet2",
	"bi-watch",
	"bi-water",
	"bi-whatsapp",
	"bi-wifi-1",
	"bi-wifi-2",
	"bi-wifi-off",
	"bi-wifi",
	"bi-wind",
	"bi-window-dock",
	"bi-window-sidebar",
	"bi-window",
	"bi-wrench",
	"bi-x-circle-fill",
	"bi-x-circle",
	"bi-x-diamond-fill",
	"bi-x-diamond",
	"bi-x-octagon-fill",
	"bi-x-octagon",
	"bi-x-square-fill",
	"bi-x-square",
	"bi-x",
	"bi-youtube",
	"bi-zoom-in",
	"bi-zoom-out",
	"bi-bank",
	"bi-bank2",
	"bi-bell-slash-fill",
	"bi-bell-slash",
	"bi-cash-coin",
	"bi-check-lg",
	"bi-coin",
	"bi-currency-bitcoin",
	"bi-currency-dollar",
	"bi-currency-euro",
	"bi-currency-exchange",
	"bi-currency-pound",
	"bi-currency-yen",
	"bi-dash-lg",
	"bi-exclamation-lg",
	"bi-file-earmark-pdf-fill",
	"bi-file-earmark-pdf",
	"bi-file-pdf-fill",
	"bi-file-pdf",
	"bi-gender-ambiguous",
	"bi-gender-female",
	"bi-gender-male",
	"bi-gender-trans",
	"bi-headset-vr",
	"bi-info-lg",
	"bi-mastodon",
	"bi-messenger",
	"bi-piggy-bank-fill",
	"bi-piggy-bank",
	"bi-pin-map-fill",
	"bi-pin-map",
	"bi-plus-lg",
	"bi-question-lg",
	"bi-recycle",
	"bi-reddit",
	"bi-safe-fill",
	"bi-safe2-fill",
	"bi-safe2",
	"bi-sd-card-fill",
	"bi-sd-card",
	"bi-skype",
	"bi-slash-lg",
	"bi-translate",
	"bi-x-lg",
	"bi-safe",
	"bi-apple",
	"bi-microsoft",
	"bi-windows",
	"bi-behance",
	"bi-dribbble",
	"bi-line",
	"bi-medium",
	"bi-paypal",
	"bi-pinterest",
	"bi-signal",
	"bi-snapchat",
	"bi-spotify",
	"bi-stack-overflow",
	"bi-strava",
	"bi-wordpress",
	"bi-vimeo",
	"bi-activity",
	"bi-easel2-fill",
	"bi-easel2",
	"bi-easel3-fill",
	"bi-easel3",
	"bi-fan",
	"bi-fingerprint",
	"bi-graph-down-arrow",
	"bi-graph-up-arrow",
	"bi-hypnotize",
	"bi-magic",
	"bi-person-rolodex",
	"bi-person-video",
	"bi-person-video2",
	"bi-person-video3",
	"bi-person-workspace",
	"bi-radioactive",
	"bi-webcam-fill",
	"bi-webcam",
	"bi-yin-yang",
	"bi-bandaid-fill",
	"bi-bandaid",
	"bi-bluetooth",
	"bi-body-text",
	"bi-boombox",
	"bi-boxes",
	"bi-dpad-fill",
	"bi-dpad",
	"bi-ear-fill",
	"bi-ear",
	"bi-envelope-check-1",
	"bi-envelope-check-fill",
	"bi-envelope-check",
	"bi-envelope-dash-1",
	"bi-envelope-dash-fill",
	"bi-envelope-dash",
	"bi-envelope-exclamation-1",
	"bi-envelope-exclamation-fill",
	"bi-envelope-exclamation",
	"bi-envelope-plus-fill",
	"bi-envelope-plus",
	"bi-envelope-slash-1",
	"bi-envelope-slash-fill",
	"bi-envelope-slash",
	"bi-envelope-x-1",
	"bi-envelope-x-fill",
	"bi-envelope-x",
	"bi-explicit-fill",
	"bi-explicit",
	"bi-git",
	"bi-infinity",
	"bi-list-columns-reverse",
	"bi-list-columns",
	"bi-meta",
	"bi-mortorboard-fill",
	"bi-mortorboard",
	"bi-nintendo-switch",
	"bi-pc-display-horizontal",
	"bi-pc-display",
	"bi-pc-horizontal",
	"bi-pc",
	"bi-playstation",
	"bi-plus-slash-minus",
	"bi-projector-fill",
	"bi-projector",
	"bi-qr-code-scan",
	"bi-qr-code",
	"bi-quora",
	"bi-quote",
	"bi-robot",
	"bi-send-check-fill",
	"bi-send-check",
	"bi-send-dash-fill",
	"bi-send-dash",
	"bi-send-exclamation-1",
	"bi-send-exclamation-fill",
	"bi-send-exclamation",
	"bi-send-fill",
	"bi-send-plus-fill",
	"bi-send-plus",
	"bi-send-slash-fill",
	"bi-send-slash",
	"bi-send-x-fill",
	"bi-send-x",
	"bi-send",
	"bi-steam",
	"bi-terminal-dash-1",
	"bi-terminal-dash",
	"bi-terminal-plus",
	"bi-terminal-split",
	"bi-ticket-detailed-fill",
	"bi-ticket-detailed",
	"bi-ticket-fill",
	"bi-ticket-perforated-fill",
	"bi-ticket-perforated",
	"bi-ticket",
	"bi-tiktok",
	"bi-window-dash",
	"bi-window-desktop",
	"bi-window-fullscreen",
	"bi-window-plus",
	"bi-window-split",
	"bi-window-stack",
	"bi-window-x",
	"bi-xbox",
	"bi-ethernet",
	"bi-hdmi-fill",
	"bi-hdmi",
	"bi-usb-c-fill",
	"bi-usb-c",
	"bi-usb-fill",
	"bi-usb-plug-fill",
	"bi-usb-plug",
	"bi-usb-symbol",
	"bi-usb",
	"bi-boombox-fill",
	"bi-displayport-1",
	"bi-displayport",
	"bi-gpu-card",
	"bi-memory",
	"bi-modem-fill",
	"bi-modem",
	"bi-motherboard-fill",
	"bi-motherboard",
	"bi-optical-audio-fill",
	"bi-optical-audio",
	"bi-pci-card",
	"bi-router-fill",
	"bi-router",
	"bi-ssd-fill",
	"bi-ssd",
	"bi-thunderbolt-fill",
	"bi-thunderbolt",
	"bi-usb-drive-fill",
	"bi-usb-drive",
	"bi-usb-micro-fill",
	"bi-usb-micro",
	"bi-usb-mini-fill",
	"bi-usb-mini",
	"bi-cloud-haze2",
	"bi-device-hdd-fill",
	"bi-device-hdd",
	"bi-device-ssd-fill",
	"bi-device-ssd",
	"bi-displayport-fill",
	"bi-mortarboard-fill",
	"bi-mortarboard",
	"bi-terminal-x",
	"bi-arrow-through-heart-fill",
	"bi-arrow-through-heart",
	"bi-badge-sd-fill",
	"bi-badge-sd",
	"bi-bag-heart-fill",
	"bi-bag-heart",
	"bi-balloon-fill",
	"bi-balloon-heart-fill",
	"bi-balloon-heart",
	"bi-balloon",
	"bi-box2-fill",
	"bi-box2-heart-fill",
	"bi-box2-heart",
	"bi-box2",
	"bi-braces-asterisk",
	"bi-calendar-heart-fill",
	"bi-calendar-heart",
	"bi-calendar2-heart-fill",
	"bi-calendar2-heart",
	"bi-chat-heart-fill",
	"bi-chat-heart",
	"bi-chat-left-heart-fill",
	"bi-chat-left-heart",
	"bi-chat-right-heart-fill",
	"bi-chat-right-heart",
	"bi-chat-square-heart-fill",
	"bi-chat-square-heart",
	"bi-clipboard-check-fill",
	"bi-clipboard-data-fill",
	"bi-clipboard-fill",
	"bi-clipboard-heart-fill",
	"bi-clipboard-heart",
	"bi-clipboard-minus-fill",
	"bi-clipboard-plus-fill",
	"bi-clipboard-pulse",
	"bi-clipboard-x-fill",
	"bi-clipboard2-check-fill",
	"bi-clipboard2-check",
	"bi-clipboard2-data-fill",
	"bi-clipboard2-data",
	"bi-clipboard2-fill",
	"bi-clipboard2-heart-fill",
	"bi-clipboard2-heart",
	"bi-clipboard2-minus-fill",
	"bi-clipboard2-minus",
	"bi-clipboard2-plus-fill",
	"bi-clipboard2-plus",
	"bi-clipboard2-pulse-fill",
	"bi-clipboard2-pulse",
	"bi-clipboard2-x-fill",
	"bi-clipboard2-x",
	"bi-clipboard2",
	"bi-emoji-kiss-fill",
	"bi-emoji-kiss",
	"bi-envelope-heart-fill",
	"bi-envelope-heart",
	"bi-envelope-open-heart-fill",
	"bi-envelope-open-heart",
	"bi-envelope-paper-fill",
	"bi-envelope-paper-heart-fill",
	"bi-envelope-paper-heart",
	"bi-envelope-paper",
	"bi-filetype-aac",
	"bi-filetype-ai",
	"bi-filetype-bmp",
	"bi-filetype-cs",
	"bi-filetype-css",
	"bi-filetype-csv",
	"bi-filetype-doc",
	"bi-filetype-docx",
	"bi-filetype-exe",
	"bi-filetype-gif",
	"bi-filetype-heic",
	"bi-filetype-html",
	"bi-filetype-java",
	"bi-filetype-jpg",
	"bi-filetype-js",
	"bi-filetype-jsx",
	"bi-filetype-key",
	"bi-filetype-m4p",
	"bi-filetype-md",
	"bi-filetype-mdx",
	"bi-filetype-mov",
	"bi-filetype-mp3",
	"bi-filetype-mp4",
	"bi-filetype-otf",
	"bi-filetype-pdf",
	"bi-filetype-php",
	"bi-filetype-png",
	"bi-filetype-ppt-1",
	"bi-filetype-ppt",
	"bi-filetype-psd",
	"bi-filetype-py",
	"bi-filetype-raw",
	"bi-filetype-rb",
	"bi-filetype-sass",
	"bi-filetype-scss",
	"bi-filetype-sh",
	"bi-filetype-svg",
	"bi-filetype-tiff",
	"bi-filetype-tsx",
	"bi-filetype-ttf",
	"bi-filetype-txt",
	"bi-filetype-wav",
	"bi-filetype-woff",
	"bi-filetype-xls-1",
	"bi-filetype-xls",
	"bi-filetype-xml",
	"bi-filetype-yml",
	"bi-heart-arrow",
	"bi-heart-pulse-fill",
	"bi-heart-pulse",
	"bi-heartbreak-fill",
	"bi-heartbreak",
	"bi-hearts",
	"bi-hospital-fill",
	"bi-hospital",
	"bi-house-heart-fill",
	"bi-house-heart",
	"bi-incognito",
	"bi-magnet-fill",
	"bi-magnet",
	"bi-person-heart",
	"bi-person-hearts",
	"bi-phone-flip",
	"bi-plugin",
	"bi-postage-fill",
	"bi-postage-heart-fill",
	"bi-postage-heart",
	"bi-postage",
	"bi-postcard-fill",
	"bi-postcard-heart-fill",
	"bi-postcard-heart",
	"bi-postcard",
	"bi-search-heart-fill",
	"bi-search-heart",
	"bi-sliders2-vertical",
	"bi-sliders2",
	"bi-trash3-fill",
	"bi-trash3",
	"bi-valentine",
	"bi-valentine2",
	"bi-wrench-adjustable-circle-fill",
	"bi-wrench-adjustable-circle",
	"bi-wrench-adjustable",
	"bi-filetype-json",
	"bi-filetype-pptx",
	"bi-filetype-xlsx",
	"bi-1-circle-1",
	"bi-1-circle-fill-1",
	"bi-1-circle-fill",
	"bi-1-circle",
	"bi-1-square-fill",
	"bi-1-square",
	"bi-2-circle-1",
	"bi-2-circle-fill-1",
	"bi-2-circle-fill",
	"bi-2-circle",
	"bi-2-square-fill",
	"bi-2-square",
	"bi-3-circle-1",
	"bi-3-circle-fill-1",
	"bi-3-circle-fill",
	"bi-3-circle",
	"bi-3-square-fill",
	"bi-3-square",
	"bi-4-circle-1",
	"bi-4-circle-fill-1",
	"bi-4-circle-fill",
	"bi-4-circle",
	"bi-4-square-fill",
	"bi-4-square",
	"bi-5-circle-1",
	"bi-5-circle-fill-1",
	"bi-5-circle-fill",
	"bi-5-circle",
	"bi-5-square-fill",
	"bi-5-square",
	"bi-6-circle-1",
	"bi-6-circle-fill-1",
	"bi-6-circle-fill",
	"bi-6-circle",
	"bi-6-square-fill",
	"bi-6-square",
	"bi-7-circle-1",
	"bi-7-circle-fill-1",
	"bi-7-circle-fill",
	"bi-7-circle",
	"bi-7-square-fill",
	"bi-7-square",
	"bi-8-circle-1",
	"bi-8-circle-fill-1",
	"bi-8-circle-fill",
	"bi-8-circle",
	"bi-8-square-fill",
	"bi-8-square",
	"bi-9-circle-1",
	"bi-9-circle-fill-1",
	"bi-9-circle-fill",
	"bi-9-circle",
	"bi-9-square-fill",
	"bi-9-square",
	"bi-airplane-engines-fill",
	"bi-airplane-engines",
	"bi-airplane-fill",
	"bi-airplane",
	"bi-alexa",
	"bi-alipay",
	"bi-android",
	"bi-android2",
	"bi-box-fill",
	"bi-box-seam-fill",
	"bi-browser-chrome",
	"bi-browser-edge",
	"bi-browser-firefox",
	"bi-browser-safari",
	"bi-c-circle-1",
	"bi-c-circle-fill-1",
	"bi-c-circle-fill",
	"bi-c-circle",
	"bi-c-square-fill",
	"bi-c-square",
	"bi-capsule-pill",
	"bi-capsule",
	"bi-car-front-fill",
	"bi-car-front",
	"bi-cassette-fill",
	"bi-cassette",
	"bi-cc-circle-1",
	"bi-cc-circle-fill-1",
	"bi-cc-circle-fill",
	"bi-cc-circle",
	"bi-cc-square-fill",
	"bi-cc-square",
	"bi-cup-hot-fill",
	"bi-cup-hot",
	"bi-currency-rupee",
	"bi-dropbox",
	"bi-escape",
	"bi-fast-forward-btn-fill",
	"bi-fast-forward-btn",
	"bi-fast-forward-circle-fill",
	"bi-fast-forward-circle",
	"bi-fast-forward-fill",
	"bi-fast-forward",
	"bi-filetype-sql",
	"bi-fire",
	"bi-google-play",
	"bi-h-circle-1",
	"bi-h-circle-fill-1",
	"bi-h-circle-fill",
	"bi-h-circle",
	"bi-h-square-fill",
	"bi-h-square",
	"bi-indent",
	"bi-lungs-fill",
	"bi-lungs",
	"bi-microsoft-teams",
	"bi-p-circle-1",
	"bi-p-circle-fill-1",
	"bi-p-circle-fill",
	"bi-p-circle",
	"bi-p-square-fill",
	"bi-p-square",
	"bi-pass-fill",
	"bi-pass",
	"bi-prescription",
	"bi-prescription2",
	"bi-r-circle-1",
	"bi-r-circle-fill-1",
	"bi-r-circle-fill",
	"bi-r-circle",
	"bi-r-square-fill",
	"bi-r-square",
	"bi-repeat-1",
	"bi-repeat",
	"bi-rewind-btn-fill",
	"bi-rewind-btn",
	"bi-rewind-circle-fill",
	"bi-rewind-circle",
	"bi-rewind-fill",
	"bi-rewind",
	"bi-train-freight-front-fill",
	"bi-train-freight-front",
	"bi-train-front-fill",
	"bi-train-front",
	"bi-train-lightrail-front-fill",
	"bi-train-lightrail-front",
	"bi-truck-front-fill",
	"bi-truck-front",
	"bi-ubuntu",
	"bi-unindent",
	"bi-unity",
	"bi-universal-access-circle",
	"bi-universal-access",
	"bi-virus",
	"bi-virus2",
	"bi-wechat",
	"bi-yelp",
	"bi-sign-stop-fill",
	"bi-sign-stop-lights-fill",
	"bi-sign-stop-lights",
	"bi-sign-stop",
	"bi-sign-turn-left-fill",
	"bi-sign-turn-left",
	"bi-sign-turn-right-fill",
	"bi-sign-turn-right",
	"bi-sign-turn-slight-left-fill",
	"bi-sign-turn-slight-left",
	"bi-sign-turn-slight-right-fill",
	"bi-sign-turn-slight-right",
	"bi-sign-yield-fill",
	"bi-sign-yield",
	"bi-ev-station-fill",
	"bi-ev-station",
	"bi-fuel-pump-diesel-fill",
	"bi-fuel-pump-diesel",
	"bi-fuel-pump-fill",
	"bi-fuel-pump",
];

const fontawesomeClasses = [
	"fas fa-address-book",
	"fas fa-address-card",
	"fas fa-adjust",
	"fas fa-align-center",
	"fas fa-align-justify",
	"fas fa-align-left",
	"fas fa-align-right",
	"fas fa-allergies",
	"fas fa-ambulance",
	"fas fa-american-sign-language-interpreting",
	"fas fa-anchor",
	"fas fa-angle-double-down",
	"fas fa-angle-double-left",
	"fas fa-angle-double-right",
	"fas fa-angle-double-up",
	"fas fa-angle-down",
	"fas fa-angle-left",
	"fas fa-angle-right",
	"fas fa-angle-up",
	"fas fa-archive",
	"fas fa-arrow-alt-circle-down",
	"fas fa-arrow-alt-circle-left",
	"fas fa-arrow-alt-circle-right",
	"fas fa-arrow-alt-circle-up",
	"fas fa-arrow-circle-down",
	"fas fa-arrow-circle-left",
	"fas fa-arrow-circle-right",
	"fas fa-arrow-circle-up",
	"fas fa-arrow-down",
	"fas fa-arrow-left",
	"fas fa-arrow-right",
	"fas fa-arrow-up",
	"fas fa-arrows-alt",
	"fas fa-arrows-alt-h",
	"fas fa-arrows-alt-v",
	"fas fa-assistive-listening-systems",
	"fas fa-asterisk",
	"fas fa-at",
	"fas fa-audio-description",
	"fas fa-backward",
	"fas fa-balance-scale",
	"fas fa-ban",
	"fas fa-band-aid",
	"fas fa-barcode",
	"fas fa-bars",
	"fas fa-baseball-ball",
	"fas fa-basketball-ball",
	"fas fa-bath",
	"fas fa-battery-empty",
	"fas fa-battery-full",
	"fas fa-battery-half",
	"fas fa-battery-quarter",
	"fas fa-battery-three-quarters",
	"fas fa-bed",
	"fas fa-beer",
	"fas fa-bell",
	"fas fa-bell-slash",
	"fas fa-bicycle",
	"fas fa-binoculars",
	"fas fa-birthday-cake",
	"fas fa-blind",
	"fas fa-bold",
	"fas fa-bolt",
	"fas fa-bomb",
	"fas fa-book",
	"fas fa-bookmark",
	"fas fa-bowling-ball",
	"fas fa-box",
	"fas fa-box-open",
	"fas fa-boxes",
	"fas fa-braille",
	"fas fa-briefcase",
	"fas fa-briefcase-medical",
	"fas fa-bug",
	"fas fa-building",
	"fas fa-bullhorn",
	"fas fa-bullseye",
	"fas fa-burn",
	"fas fa-bus",
	"fas fa-calculator",
	"fas fa-calendar",
	"fas fa-calendar-alt",
	"fas fa-calendar-check",
	"fas fa-calendar-minus",
	"fas fa-calendar-plus",
	"fas fa-calendar-times",
	"fas fa-camera",
	"fas fa-camera-retro",
	"fas fa-capsules",
	"fas fa-car",
	"fas fa-caret-down",
	"fas fa-caret-left",
	"fas fa-caret-right",
	"fas fa-caret-square-down",
	"fas fa-caret-square-left",
	"fas fa-caret-square-right",
	"fas fa-caret-square-up",
	"fas fa-caret-up",
	"fas fa-cart-arrow-down",
	"fas fa-cart-plus",
	"fas fa-certificate",
	"fas fa-chart-area",
	"fas fa-chart-bar",
	"fas fa-chart-line",
	"fas fa-chart-pie",
	"fas fa-check",
	"fas fa-check-circle",
	"fas fa-check-square",
	"fas fa-chess",
	"fas fa-chess-bishop",
	"fas fa-chess-board",
	"fas fa-chess-king",
	"fas fa-chess-knight",
	"fas fa-chess-pawn",
	"fas fa-chess-queen",
	"fas fa-chess-rook",
	"fas fa-chevron-circle-down",
	"fas fa-chevron-circle-left",
	"fas fa-chevron-circle-right",
	"fas fa-chevron-circle-up",
	"fas fa-chevron-down",
	"fas fa-chevron-left",
	"fas fa-chevron-right",
	"fas fa-chevron-up",
	"fas fa-child",
	"fas fa-circle",
	"fas fa-circle-notch",
	"fas fa-clipboard",
	"fas fa-clipboard-check",
	"fas fa-clipboard-list",
	"fas fa-clock",
	"fas fa-clone",
	"fas fa-closed-captioning",
	"fas fa-cloud",
	"fas fa-cloud-download-alt",
	"fas fa-cloud-upload-alt",
	"fas fa-code",
	"fas fa-code-branch",
	"fas fa-coffee",
	"fas fa-cog",
	"fas fa-cogs",
	"fas fa-columns",
	"fas fa-comment",
	"fas fa-comment-alt",
	"fas fa-comment-dots",
	"fas fa-comment-slash",
	"fas fa-comments",
	"fas fa-compass",
	"fas fa-compress",
	"fas fa-copy",
	"fas fa-copyright",
	"fas fa-couch",
	"fas fa-credit-card",
	"fas fa-crop",
	"fas fa-crosshairs",
	"fas fa-cube",
	"fas fa-cubes",
	"fas fa-cut",
	"fas fa-database",
	"fas fa-deaf",
	"fas fa-desktop",
	"fas fa-diagnoses",
	"fas fa-dna",
	"fas fa-dollar-sign",
	"fas fa-dolly",
	"fas fa-dolly-flatbed",
	"fas fa-donate",
	"fas fa-dot-circle",
	"fas fa-dove",
	"fas fa-download",
	"fas fa-edit",
	"fas fa-eject",
	"fas fa-ellipsis-h",
	"fas fa-ellipsis-v",
	"fas fa-envelope",
	"fas fa-envelope-open",
	"fas fa-envelope-square",
	"fas fa-eraser",
	"fas fa-euro-sign",
	"fas fa-exchange-alt",
	"fas fa-exclamation",
	"fas fa-exclamation-circle",
	"fas fa-exclamation-triangle",
	"fas fa-expand",
	"fas fa-expand-arrows-alt",
	"fas fa-external-link-alt",
	"fas fa-external-link-square-alt",
	"fas fa-eye",
	"fas fa-eye-dropper",
	"fas fa-eye-slash",
	"fas fa-fast-backward",
	"fas fa-fast-forward",
	"fas fa-fax",
	"fas fa-female",
	"fas fa-fighter-jet",
	"fas fa-file",
	"fas fa-file-alt",
	"fas fa-file-archive",
	"fas fa-file-audio",
	"fas fa-file-code",
	"fas fa-file-excel",
	"fas fa-file-image",
	"fas fa-file-medical",
	"fas fa-file-medical-alt",
	"fas fa-file-pdf",
	"fas fa-file-powerpoint",
	"fas fa-file-video",
	"fas fa-file-word",
	"fas fa-film",
	"fas fa-filter",
	"fas fa-fire",
	"fas fa-fire-extinguisher",
	"fas fa-first-aid",
	"fas fa-flag",
	"fas fa-flag-checkered",
	"fas fa-flask",
	"fas fa-folder",
	"fas fa-folder-open",
	"fas fa-font",
	"fas fa-football-ball",
	"fas fa-forward",
	"fas fa-frown",
	"fas fa-futbol",
	"fas fa-gamepad",
	"fas fa-gavel",
	"fas fa-gem",
	"fas fa-genderless",
	"fas fa-gift",
	"fas fa-glass-martini",
	"fas fa-globe",
	"fas fa-golf-ball",
	"fas fa-graduation-cap",
	"fas fa-h-square",
	"fas fa-hand-holding",
	"fas fa-hand-holding-heart",
	"fas fa-hand-holding-usd",
	"fas fa-hand-lizard",
	"fas fa-hand-paper",
	"fas fa-hand-peace",
	"fas fa-hand-point-down",
	"fas fa-hand-point-left",
	"fas fa-hand-point-right",
	"fas fa-hand-point-up",
	"fas fa-hand-pointer",
	"fas fa-hand-rock",
	"fas fa-hand-scissors",
	"fas fa-hand-spock",
	"fas fa-hands",
	"fas fa-hands-helping",
	"fas fa-handshake",
	"fas fa-hashtag",
	"fas fa-hdd",
	"fas fa-heading",
	"fas fa-headphones",
	"fas fa-heart",
	"fas fa-heartbeat",
	"fas fa-history",
	"fas fa-hockey-puck",
	"fas fa-home",
	"fas fa-hospital",
	"fas fa-hospital-alt",
	"fas fa-hospital-symbol",
	"fas fa-hourglass",
	"fas fa-hourglass-end",
	"fas fa-hourglass-half",
	"fas fa-hourglass-start",
	"fas fa-i-cursor",
	"fas fa-id-badge",
	"fas fa-id-card",
	"fas fa-id-card-alt",
	"fas fa-image",
	"fas fa-images",
	"fas fa-inbox",
	"fas fa-indent",
	"fas fa-industry",
	"fas fa-info",
	"fas fa-info-circle",
	"fas fa-italic",
	"fas fa-key",
	"fas fa-keyboard",
	"fas fa-language",
	"fas fa-laptop",
	"fas fa-leaf",
	"fas fa-lemon",
	"fas fa-level-down-alt",
	"fas fa-level-up-alt",
	"fas fa-life-ring",
	"fas fa-lightbulb",
	"fas fa-link",
	"fas fa-lira-sign",
	"fas fa-list",
	"fas fa-list-alt",
	"fas fa-list-ol",
	"fas fa-list-ul",
	"fas fa-location-arrow",
	"fas fa-lock",
	"fas fa-lock-open",
	"fas fa-long-arrow-alt-down",
	"fas fa-long-arrow-alt-left",
	"fas fa-long-arrow-alt-right",
	"fas fa-long-arrow-alt-up",
	"fas fa-low-vision",
	"fas fa-magic",
	"fas fa-magnet",
	"fas fa-male",
	"fas fa-map",
	"fas fa-map-marker",
	"fas fa-map-marker-alt",
	"fas fa-map-pin",
	"fas fa-map-signs",
	"fas fa-mars",
	"fas fa-mars-double",
	"fas fa-mars-stroke",
	"fas fa-mars-stroke-h",
	"fas fa-mars-stroke-v",
	"fas fa-medkit",
	"fas fa-meh",
	"fas fa-mercury",
	"fas fa-microchip",
	"fas fa-microphone",
	"fas fa-microphone-slash",
	"fas fa-minus",
	"fas fa-minus-circle",
	"fas fa-minus-square",
	"fas fa-mobile",
	"fas fa-mobile-alt",
	"fas fa-money-bill-alt",
	"fas fa-moon",
	"fas fa-motorcycle",
	"fas fa-mouse-pointer",
	"fas fa-music",
	"fas fa-neuter",
	"fas fa-newspaper",
	"fas fa-notes-medical",
	"fas fa-object-group",
	"fas fa-object-ungroup",
	"fas fa-outdent",
	"fas fa-paint-brush",
	"fas fa-pallet",
	"fas fa-paper-plane",
	"fas fa-paperclip",
	"fas fa-parachute-box",
	"fas fa-paragraph",
	"fas fa-paste",
	"fas fa-pause",
	"fas fa-pause-circle",
	"fas fa-paw",
	"fas fa-pen-square",
	"fas fa-pencil-alt",
	"fas fa-people-carry",
	"fas fa-percent",
	"fas fa-phone",
	"fas fa-phone-slash",
	"fas fa-phone-square",
	"fas fa-phone-volume",
	"fas fa-piggy-bank",
	"fas fa-pills",
	"fas fa-plane",
	"fas fa-play",
	"fas fa-play-circle",
	"fas fa-plug",
	"fas fa-plus",
	"fas fa-plus-circle",
	"fas fa-plus-square",
	"fas fa-podcast",
	"fas fa-poo",
	"fas fa-pound-sign",
	"fas fa-power-off",
	"fas fa-prescription-bottle",
	"fas fa-prescription-bottle-alt",
	"fas fa-print",
	"fas fa-procedures",
	"fas fa-puzzle-piece",
	"fas fa-qrcode",
	"fas fa-question",
	"fas fa-question-circle",
	"fas fa-quidditch",
	"fas fa-quote-left",
	"fas fa-quote-right",
	"fas fa-random",
	"fas fa-recycle",
	"fas fa-redo",
	"fas fa-redo-alt",
	"fas fa-registered",
	"fas fa-reply",
	"fas fa-reply-all",
	"fas fa-retweet",
	"fas fa-ribbon",
	"fas fa-road",
	"fas fa-rocket",
	"fas fa-rss",
	"fas fa-rss-square",
	"fas fa-ruble-sign",
	"fas fa-rupee-sign",
	"fas fa-save",
	"fas fa-search",
	"fas fa-search-minus",
	"fas fa-search-plus",
	"fas fa-seedling",
	"fas fa-server",
	"fas fa-share",
	"fas fa-share-alt",
	"fas fa-share-alt-square",
	"fas fa-share-square",
	"fas fa-shekel-sign",
	"fas fa-shield-alt",
	"fas fa-ship",
	"fas fa-shipping-fast",
	"fas fa-shopping-bag",
	"fas fa-shopping-basket",
	"fas fa-shopping-cart",
	"fas fa-shower",
	"fas fa-sign",
	"fas fa-sign-in-alt",
	"fas fa-sign-language",
	"fas fa-sign-out-alt",
	"fas fa-signal",
	"fas fa-sitemap",
	"fas fa-sliders-h",
	"fas fa-smile",
	"fas fa-smoking",
	"fas fa-snowflake",
	"fas fa-sort",
	"fas fa-sort-alpha-down",
	"fas fa-sort-alpha-up",
	"fas fa-sort-amount-down",
	"fas fa-sort-amount-up",
	"fas fa-sort-down",
	"fas fa-sort-numeric-down",
	"fas fa-sort-numeric-up",
	"fas fa-sort-up",
	"fas fa-space-shuttle",
	"fas fa-spinner",
	"fas fa-square",
	"fas fa-square-full",
	"fas fa-star",
	"fas fa-star-half",
	"fas fa-step-backward",
	"fas fa-step-forward",
	"fas fa-stethoscope",
	"fas fa-sticky-note",
	"fas fa-stop",
	"fas fa-stop-circle",
	"fas fa-stopwatch",
	"fas fa-street-view",
	"fas fa-strikethrough",
	"fas fa-subscript",
	"fas fa-subway",
	"fas fa-suitcase",
	"fas fa-sun",
	"fas fa-superscript",
	"fas fa-sync",
	"fas fa-sync-alt",
	"fas fa-syringe",
	"fas fa-table",
	"fas fa-table-tennis",
	"fas fa-tablet",
	"fas fa-tablet-alt",
	"fas fa-tablets",
	"fas fa-tachometer-alt",
	"fas fa-tag",
	"fas fa-tags",
	"fas fa-tape",
	"fas fa-tasks",
	"fas fa-taxi",
	"fas fa-terminal",
	"fas fa-text-height",
	"fas fa-text-width",
	"fas fa-th",
	"fas fa-th-large",
	"fas fa-th-list",
	"fas fa-thermometer",
	"fas fa-thermometer-empty",
	"fas fa-thermometer-full",
	"fas fa-thermometer-half",
	"fas fa-thermometer-quarter",
	"fas fa-thermometer-three-quarters",
	"fas fa-thumbs-down",
	"fas fa-thumbs-up",
	"fas fa-thumbtack",
	"fas fa-ticket-alt",
	"fas fa-times",
	"fas fa-times-circle",
	"fas fa-tint",
	"fas fa-toggle-off",
	"fas fa-toggle-on",
	"fas fa-trademark",
	"fas fa-train",
	"fas fa-transgender",
	"fas fa-transgender-alt",
	"fas fa-trash",
	"fas fa-trash-alt",
	"fas fa-tree",
	"fas fa-trophy",
	"fas fa-truck",
	"fas fa-truck-loading",
	"fas fa-truck-moving",
	"fas fa-tty",
	"fas fa-tv",
	"fas fa-umbrella",
	"fas fa-underline",
	"fas fa-undo",
	"fas fa-undo-alt",
	"fas fa-universal-access",
	"fas fa-university",
	"fas fa-unlink",
	"fas fa-unlock",
	"fas fa-unlock-alt",
	"fas fa-upload",
	"fas fa-user",
	"fas fa-user-circle",
	"fas fa-user-md",
	"fas fa-user-plus",
	"fas fa-user-secret",
	"fas fa-user-times",
	"fas fa-users",
	"fas fa-utensil-spoon",
	"fas fa-utensils",
	"fas fa-venus",
	"fas fa-venus-double",
	"fas fa-venus-mars",
	"fas fa-vial",
	"fas fa-vials",
	"fas fa-video",
	"fas fa-video-slash",
	"fas fa-volleyball-ball",
	"fas fa-volume-down",
	"fas fa-volume-off",
	"fas fa-volume-up",
	"fas fa-warehouse",
	"fas fa-weight",
	"fas fa-wheelchair",
	"fas fa-wifi",
	"fas fa-window-close",
	"fas fa-window-maximize",
	"fas fa-window-minimize",
	"fas fa-window-restore",
	"fas fa-wine-glass",
	"fas fa-won-sign",
	"fas fa-wrench",
	"fas fa-x-ray",
	"fas fa-yen-sign",
	"far fa-address-book",
	"far fa-address-card",
	"far fa-arrow-alt-circle-down",
	"far fa-arrow-alt-circle-left",
	"far fa-arrow-alt-circle-right",
	"far fa-arrow-alt-circle-up",
	"far fa-bell",
	"far fa-bell-slash",
	"far fa-bookmark",
	"far fa-building",
	"far fa-calendar",
	"far fa-calendar-alt",
	"far fa-calendar-check",
	"far fa-calendar-minus",
	"far fa-calendar-plus",
	"far fa-calendar-times",
	"far fa-caret-square-down",
	"far fa-caret-square-left",
	"far fa-caret-square-right",
	"far fa-caret-square-up",
	"far fa-chart-bar",
	"far fa-check-circle",
	"far fa-check-square",
	"far fa-circle",
	"far fa-clipboard",
	"far fa-clock",
	"far fa-clone",
	"far fa-closed-captioning",
	"far fa-comment",
	"far fa-comment-alt",
	"far fa-comments",
	"far fa-compass",
	"far fa-copy",
	"far fa-copyright",
	"far fa-credit-card",
	"far fa-dot-circle",
	"far fa-edit",
	"far fa-envelope",
	"far fa-envelope-open",
	"far fa-eye-slash",
	"far fa-file",
	"far fa-file-alt",
	"far fa-file-archive",
	"far fa-file-audio",
	"far fa-file-code",
	"far fa-file-excel",
	"far fa-file-image",
	"far fa-file-pdf",
	"far fa-file-powerpoint",
	"far fa-file-video",
	"far fa-file-word",
	"far fa-flag",
	"far fa-folder",
	"far fa-folder-open",
	"far fa-frown",
	"far fa-futbol",
	"far fa-gem",
	"far fa-hand-lizard",
	"far fa-hand-paper",
	"far fa-hand-peace",
	"far fa-hand-point-down",
	"far fa-hand-point-left",
	"far fa-hand-point-right",
	"far fa-hand-point-up",
	"far fa-hand-pointer",
	"far fa-hand-rock",
	"far fa-hand-scissors",
	"far fa-hand-spock",
	"far fa-handshake",
	"far fa-hdd",
	"far fa-heart",
	"far fa-hospital",
	"far fa-hourglass",
	"far fa-id-badge",
	"far fa-id-card",
	"far fa-image",
	"far fa-images",
	"far fa-keyboard",
	"far fa-lemon",
	"far fa-life-ring",
	"far fa-lightbulb",
	"far fa-list-alt",
	"far fa-map",
	"far fa-meh",
	"far fa-minus-square",
	"far fa-money-bill-alt",
	"far fa-moon",
	"far fa-newspaper",
	"far fa-object-group",
	"far fa-object-ungroup",
	"far fa-paper-plane",
	"far fa-pause-circle",
	"far fa-play-circle",
	"far fa-plus-square",
	"far fa-question-circle",
	"far fa-registered",
	"far fa-save",
	"far fa-share-square",
	"far fa-smile",
	"far fa-snowflake",
	"far fa-square",
	"far fa-star",
	"far fa-star-half",
	"far fa-sticky-note",
	"far fa-stop-circle",
	"far fa-sun",
	"far fa-thumbs-down",
	"far fa-thumbs-up",
	"far fa-times-circle",
	"far fa-trash-alt",
	"far fa-user",
	"far fa-user-circle",
	"far fa-window-close",
	"far fa-window-maximize",
	"far fa-window-minimize",
	"far fa-window-restore",
	"fab fa-500px",
	"fab fa-accessible-icon",
	"fab fa-accusoft",
	"fab fa-adn",
	"fab fa-adversal",
	"fab fa-affiliatetheme",
	"fab fa-algolia",
	"fab fa-amazon",
	"fab fa-amazon-pay",
	"fab fa-amilia",
	"fab fa-android",
	"fab fa-angellist",
	"fab fa-angrycreative",
	"fab fa-angular",
	"fab fa-app-store",
	"fab fa-app-store-ios",
	"fab fa-apper",
	"fab fa-apple",
	"fab fa-apple-pay",
	"fab fa-asymmetrik",
	"fab fa-audible",
	"fab fa-autoprefixer",
	"fab fa-avianex",
	"fab fa-aviato",
	"fab fa-aws",
	"fab fa-bandcamp",
	"fab fa-behance",
	"fab fa-behance-square",
	"fab fa-bimobject",
	"fab fa-bitbucket",
	"fab fa-bitcoin",
	"fab fa-bity",
	"fab fa-black-tie",
	"fab fa-blackberry",
	"fab fa-blogger",
	"fab fa-blogger-b",
	"fab fa-bluetooth",
	"fab fa-bluetooth-b",
	"fab fa-btc",
	"fab fa-buromobelexperte",
	"fab fa-buysellads",
	"fab fa-cc-amazon-pay",
	"fab fa-cc-amex",
	"fab fa-cc-apple-pay",
	"fab fa-cc-diners-club",
	"fab fa-cc-discover",
	"fab fa-cc-jcb",
	"fab fa-cc-mastercard",
	"fab fa-cc-paypal",
	"fab fa-cc-stripe",
	"fab fa-cc-visa",
	"fab fa-centercode",
	"fab fa-chrome",
	"fab fa-cloudscale",
	"fab fa-cloudsmith",
	"fab fa-cloudversify",
	"fab fa-codepen",
	"fab fa-codiepie",
	"fab fa-connectdevelop",
	"fab fa-contao",
	"fab fa-cpanel",
	"fab fa-creative-commons",
	"fab fa-css3",
	"fab fa-css3-alt",
	"fab fa-cuttlefish",
	"fab fa-d-and-d",
	"fab fa-dashcube",
	"fab fa-delicious",
	"fab fa-deploydog",
	"fab fa-deskpro",
	"fab fa-deviantart",
	"fab fa-digg",
	"fab fa-digital-ocean",
	"fab fa-discord",
	"fab fa-discourse",
	"fab fa-dochub",
	"fab fa-docker",
	"fab fa-draft2digital",
	"fab fa-dribbble",
	"fab fa-dribbble-square",
	"fab fa-dropbox",
	"fab fa-drupal",
	"fab fa-dyalog",
	"fab fa-earlybirds",
	"fab fa-edge",
	"fab fa-elementor",
	"fab fa-ember",
	"fab fa-empire",
	"fab fa-envira",
	"fab fa-erlang",
	"fab fa-ethereum",
	"fab fa-etsy",
	"fab fa-expeditedssl",
	"fab fa-facebook",
	"fab fa-facebook-f",
	"fab fa-facebook-messenger",
	"fab fa-facebook-square",
	"fab fa-firefox",
	"fab fa-first-order",
	"fab fa-firstdraft",
	"fab fa-flickr",
	"fab fa-flipboard",
	"fab fa-fly",
	"fab fa-font-awesome",
	"fab fa-font-awesome-alt",
	"fab fa-font-awesome-flag",
	"fab fa-fonticons",
	"fab fa-fonticons-fi",
	"fab fa-fort-awesome",
	"fab fa-fort-awesome-alt",
	"fab fa-forumbee",
	"fab fa-foursquare",
	"fab fa-free-code-camp",
	"fab fa-freebsd",
	"fab fa-get-pocket",
	"fab fa-gg",
	"fab fa-gg-circle",
	"fab fa-git",
	"fab fa-git-square",
	"fab fa-github",
	"fab fa-github-alt",
	"fab fa-github-square",
	"fab fa-gitkraken",
	"fab fa-gitlab",
	"fab fa-gitter",
	"fab fa-glide",
	"fab fa-glide-g",
	"fab fa-gofore",
	"fab fa-goodreads",
	"fab fa-goodreads-g",
	"fab fa-google",
	"fab fa-google-drive",
	"fab fa-google-play",
	"fab fa-google-plus",
	"fab fa-google-plus-g",
	"fab fa-google-plus-square",
	"fab fa-google-wallet",
	"fab fa-gratipay",
	"fab fa-grav",
	"fab fa-gripfire",
	"fab fa-grunt",
	"fab fa-gulp",
	"fab fa-hacker-news",
	"fab fa-hacker-news-square",
	"fab fa-hips",
	"fab fa-hire-a-helper",
	"fab fa-hooli",
	"fab fa-hotjar",
	"fab fa-houzz",
	"fab fa-html5",
	"fab fa-hubspot",
	"fab fa-imdb",
	"fab fa-instagram",
	"fab fa-internet-explorer",
	"fab fa-ioxhost",
	"fab fa-itunes",
	"fab fa-itunes-note",
	"fab fa-jenkins",
	"fab fa-joget",
	"fab fa-joomla",
	"fab fa-js",
	"fab fa-js-square",
	"fab fa-jsfiddle",
	"fab fa-keycdn",
	"fab fa-kickstarter",
	"fab fa-kickstarter-k",
	"fab fa-korvue",
	"fab fa-laravel",
	"fab fa-lastfm",
	"fab fa-lastfm-square",
	"fab fa-leanpub",
	"fab fa-less",
	"fab fa-line",
	"fab fa-linkedin",
	"fab fa-linkedin-in",
	"fab fa-linode",
	"fab fa-linux",
	"fab fa-lyft",
	"fab fa-magento",
	"fab fa-maxcdn",
	"fab fa-medapps",
	"fab fa-medium",
	"fab fa-medium-m",
	"fab fa-medrt",
	"fab fa-meetup",
	"fab fa-microsoft",
	"fab fa-mix",
	"fab fa-mixcloud",
	"fab fa-mizuni",
	"fab fa-modx",
	"fab fa-monero",
	"fab fa-napster",
	"fab fa-nintendo-switch",
	"fab fa-node",
	"fab fa-node-js",
	"fab fa-npm",
	"fab fa-ns8",
	"fab fa-nutritionix",
	"fab fa-odnoklassniki",
	"fab fa-odnoklassniki-square",
	"fab fa-opencart",
	"fab fa-openid",
	"fab fa-opera",
	"fab fa-optin-monster",
	"fab fa-osi",
	"fab fa-page4",
	"fab fa-pagelines",
	"fab fa-palfed",
	"fab fa-patreon",
	"fab fa-paypal",
	"fab fa-periscope",
	"fab fa-phabricator",
	"fab fa-phoenix-framework",
	"fab fa-php",
	"fab fa-pied-piper",
	"fab fa-pied-piper-alt",
	"fab fa-pied-piper-pp",
	"fab fa-pinterest",
	"fab fa-pinterest-p",
	"fab fa-pinterest-square",
	"fab fa-playstation",
	"fab fa-product-hunt",
	"fab fa-pushed",
	"fab fa-python",
	"fab fa-qq",
	"fab fa-quinscape",
	"fab fa-quora",
	"fab fa-ravelry",
	"fab fa-react",
	"fab fa-readme",
	"fab fa-rebel",
	"fab fa-red-river",
	"fab fa-reddit",
	"fab fa-reddit-alien",
	"fab fa-reddit-square",
	"fab fa-rendact",
	"fab fa-renren",
	"fab fa-replyd",
	"fab fa-resolving",
	"fab fa-rocketchat",
	"fab fa-rockrms",
	"fab fa-safari",
	"fab fa-sass",
	"fab fa-schlix",
	"fab fa-scribd",
	"fab fa-searchengin",
	"fab fa-sellcast",
	"fab fa-sellsy",
	"fab fa-servicestack",
	"fab fa-shirtsinbulk",
	"fab fa-simplybuilt",
	"fab fa-sistrix",
	"fab fa-skyatlas",
	"fab fa-skype",
	"fab fa-slack",
	"fab fa-slack-hash",
	"fab fa-slideshare",
	"fab fa-snapchat",
	"fab fa-snapchat-ghost",
	"fab fa-snapchat-square",
	"fab fa-soundcloud",
	"fab fa-speakap",
	"fab fa-spotify",
	"fab fa-stack-exchange",
	"fab fa-stack-overflow",
	"fab fa-staylinked",
	"fab fa-steam",
	"fab fa-steam-square",
	"fab fa-steam-symbol",
	"fab fa-sticker-mule",
	"fab fa-strava",
	"fab fa-stripe",
	"fab fa-stripe-s",
	"fab fa-studiovinari",
	"fab fa-stumbleupon",
	"fab fa-stumbleupon-circle",
	"fab fa-superpowers",
	"fab fa-supple",
	"fab fa-telegram",
	"fab fa-telegram-plane",
	"fab fa-tencent-weibo",
	"fab fa-themeisle",
	"fab fa-trello",
	"fab fa-tripadvisor",
	"fab fa-tumblr",
	"fab fa-tumblr-square",
	"fab fa-twitch",
	"fab fa-twitter",
	"fab fa-twitter-square",
	"fab fa-typo3",
	"fab fa-uber",
	"fab fa-uikit",
	"fab fa-uniregistry",
	"fab fa-untappd",
	"fab fa-usb",
	"fab fa-ussunnah",
	"fab fa-vaadin",
	"fab fa-viacoin",
	"fab fa-viadeo",
	"fab fa-viadeo-square",
	"fab fa-viber",
	"fab fa-vimeo",
	"fab fa-vimeo-square",
	"fab fa-vimeo-v",
	"fab fa-vine",
	"fab fa-vk",
	"fab fa-vnv",
	"fab fa-vuejs",
	"fab fa-weibo",
	"fab fa-weixin",
	"fab fa-whatsapp",
	"fab fa-whatsapp-square",
	"fab fa-whmcs",
	"fab fa-wikipedia-w",
	"fab fa-windows",
	"fab fa-wordpress",
	"fab fa-wordpress-simple",
	"fab fa-wpbeginner",
	"fab fa-wpexplorer",
	"fab fa-wpforms",
	"fab fa-xbox",
	"fab fa-xing",
	"fab fa-xing-square",
	"fab fa-y-combinator",
	"fab fa-yahoo",
	"fab fa-yandex",
	"fab fa-yandex-international",
	"fab fa-yelp",
	"fab fa-yoast",
	"fab fa-youtube",
	"fab fa-youtube-square",
];

const iconfontClasses = [
	"icofont-angry-monster",
	"icofont-bathtub ",
	"icofont-bird-wings ",
	"icofont-bow ",
	"icofont-castle ",
	"icofont-circuit ",
	"icofont-crown-king ",
	"icofont-crown-queen ",
	"icofont-dart ",
	"icofont-disability-race ",
	"icofont-diving-goggle ",
	"icofont-eye-open ",
	"icofont-flora-flower ",
	"icofont-flora ",
	"icofont-gift-box ",
	"icofont-halloween-pumpkin ",
	"icofont-hand-power ",
	"icofont-hand-thunder ",
	"icofont-king-monster ",
	"icofont-love ",
	"icofont-magician-hat ",
	"icofont-native-american ",
	"icofont-owl-look ",
	"icofont-phoenix ",
	"icofont-robot-face ",
	"icofont-sand-clock ",
	"icofont-shield-alt ",
	"icofont-ship-wheel ",
	"icofont-skull-danger ",
	"icofont-skull-face ",
	"icofont-snowmobile ",
	"icofont-space-shuttle ",
	"icofont-star-shape ",
	"icofont-swirl ",
	"icofont-tattoo-wing ",
	"icofont-throne ",
	"icofont-tree-alt ",
	"icofont-triangle ",
	"icofont-unity-hand ",
	"icofont-weed ",
	"icofont-woman-bird ",
	"icofont-bat ",
	"icofont-bear-face ",
	"icofont-bear-tracks ",
	"icofont-bear ",
	"icofont-bird-alt ",
	"icofont-bird-flying ",
	"icofont-bird ",
	"icofont-birds ",
	"icofont-bone ",
	"icofont-bull ",
	"icofont-butterfly-alt ",
	"icofont-butterfly ",
	"icofont-camel-alt ",
	"icofont-camel-head ",
	"icofont-camel ",
	"icofont-cat-alt-1 ",
	"icofont-cat-alt-2 ",
	"icofont-cat-alt-3 ",
	"icofont-cat-dog ",
	"icofont-cat-face ",
	"icofont-cat ",
	"icofont-cow-head ",
	"icofont-cow ",
	"icofont-crab ",
	"icofont-crocodile ",
	"icofont-deer-head ",
	"icofont-dog-alt ",
	"icofont-dog-barking ",
	"icofont-dog ",
	"icofont-dolphin ",
	"icofont-duck-tracks ",
	"icofont-eagle-head ",
	"icofont-eaten-fish ",
	"icofont-elephant-alt ",
	"icofont-elephant-head-alt ",
	"icofont-elephant-head ",
	"icofont-elephant ",
	"icofont-elk ",
	"icofont-fish-1 ",
	"icofont-fish-2 ",
	"icofont-fish-3 ",
	"icofont-fish-4 ",
	"icofont-fish-5 ",
	"icofont-fish ",
	"icofont-fox-alt ",
	"icofont-fox ",
	"icofont-frog-tracks ",
	"icofont-frog ",
	"icofont-froggy ",
	"icofont-giraffe-head-1 ",
	"icofont-giraffe-head-2 ",
	"icofont-giraffe-head ",
	"icofont-giraffe ",
	"icofont-goat-head ",
	"icofont-gorilla ",
	"icofont-hen-tracks ",
	"icofont-horse-head-1 ",
	"icofont-horse-head-2 ",
	"icofont-horse-head ",
	"icofont-horse-tracks ",
	"icofont-jellyfish ",
	"icofont-kangaroo ",
	"icofont-lemur ",
	"icofont-lion-head-1 ",
	"icofont-lion-head-2 ",
	"icofont-lion-head ",
	"icofont-lion ",
	"icofont-monkey-2 ",
	"icofont-monkey-3 ",
	"icofont-monkey-face ",
	"icofont-monkey ",
	"icofont-octopus-alt ",
	"icofont-octopus ",
	"icofont-owl ",
	"icofont-panda-face ",
	"icofont-panda ",
	"icofont-panther ",
	"icofont-parrot-lip ",
	"icofont-parrot ",
	"icofont-paw ",
	"icofont-pelican ",
	"icofont-penguin ",
	"icofont-pig-face ",
	"icofont-pig ",
	"icofont-pigeon-1 ",
	"icofont-pigeon-2 ",
	"icofont-pigeon ",
	"icofont-rabbit ",
	"icofont-rat ",
	"icofont-rhino-head ",
	"icofont-rhino ",
	"icofont-rooster ",
	"icofont-seahorse ",
	"icofont-seal ",
	"icofont-shrimp-alt ",
	"icofont-shrimp ",
	"icofont-snail-1 ",
	"icofont-snail-2 ",
	"icofont-snail-3 ",
	"icofont-snail ",
	"icofont-snake ",
	"icofont-squid ",
	"icofont-squirrel ",
	"icofont-tiger-face ",
	"icofont-tiger ",
	"icofont-turtle ",
	"icofont-whale ",
	"icofont-woodpecker ",
	"icofont-zebra ",
	"icofont-brand-acer ",
	"icofont-brand-adidas ",
	"icofont-brand-adobe ",
	"icofont-brand-air-new-zealand ",
	"icofont-brand-airbnb ",
	"icofont-brand-aircell ",
	"icofont-brand-airtel ",
	"icofont-brand-alcatel ",
	"icofont-brand-alibaba ",
	"icofont-brand-aliexpress ",
	"icofont-brand-alipay ",
	"icofont-brand-amazon ",
	"icofont-brand-amd ",
	"icofont-brand-american-airlines ",
	"icofont-brand-android-robot ",
	"icofont-brand-android ",
	"icofont-brand-aol ",
	"icofont-brand-apple ",
	"icofont-brand-appstore ",
	"icofont-brand-asus ",
	"icofont-brand-ati ",
	"icofont-brand-att ",
	"icofont-brand-audi ",
	"icofont-brand-axiata ",
	"icofont-brand-bada ",
	"icofont-brand-bbc ",
	"icofont-brand-bing ",
	"icofont-brand-blackberry ",
	"icofont-brand-bmw ",
	"icofont-brand-box ",
	"icofont-brand-burger-king ",
	"icofont-brand-business-insider ",
	"icofont-brand-buzzfeed ",
	"icofont-brand-cannon ",
	"icofont-brand-casio ",
	"icofont-brand-china-mobile ",
	"icofont-brand-china-telecom ",
	"icofont-brand-china-unicom ",
	"icofont-brand-cisco ",
	"icofont-brand-citibank ",
	"icofont-brand-cnet ",
	"icofont-brand-cnn ",
	"icofont-brand-cocal-cola ",
	"icofont-brand-compaq ",
	"icofont-brand-debian ",
	"icofont-brand-delicious ",
	"icofont-brand-dell ",
	"icofont-brand-designbump ",
	"icofont-brand-designfloat ",
	"icofont-brand-disney ",
	"icofont-brand-dodge ",
	"icofont-brand-dove ",
	"icofont-brand-drupal ",
	"icofont-brand-ebay ",
	"icofont-brand-eleven ",
	"icofont-brand-emirates ",
	"icofont-brand-espn ",
	"icofont-brand-etihad-airways ",
	"icofont-brand-etisalat ",
	"icofont-brand-etsy ",
	"icofont-brand-fastrack ",
	"icofont-brand-fedex ",
	"icofont-brand-ferrari ",
	"icofont-brand-fitbit ",
	"icofont-brand-flikr ",
	"icofont-brand-forbes ",
	"icofont-brand-foursquare ",
	"icofont-brand-foxconn ",
	"icofont-brand-fujitsu ",
	"icofont-brand-general-electric ",
	"icofont-brand-gillette ",
	"icofont-brand-gizmodo ",
	"icofont-brand-gnome ",
	"icofont-brand-google ",
	"icofont-brand-gopro ",
	"icofont-brand-gucci ",
	"icofont-brand-hallmark ",
	"icofont-brand-hi5 ",
	"icofont-brand-honda ",
	"icofont-brand-hp ",
	"icofont-brand-hsbc ",
	"icofont-brand-htc ",
	"icofont-brand-huawei ",
	"icofont-brand-hulu ",
	"icofont-brand-hyundai ",
	"icofont-brand-ibm ",
	"icofont-brand-icofont ",
	"icofont-brand-icq ",
	"icofont-brand-ikea ",
	"icofont-brand-imdb ",
	"icofont-brand-indiegogo ",
	"icofont-brand-intel ",
	"icofont-brand-ipair ",
	"icofont-brand-jaguar ",
	"icofont-brand-java ",
	"icofont-brand-joomla ",
	"icofont-brand-kickstarter ",
	"icofont-brand-kik ",
	"icofont-brand-lastfm ",
	"icofont-brand-lego ",
	"icofont-brand-lenovo ",
	"icofont-brand-levis ",
	"icofont-brand-lexus ",
	"icofont-brand-lg ",
	"icofont-brand-life-hacker ",
	"icofont-brand-linux-mint ",
	"icofont-brand-linux ",
	"icofont-brand-lionix ",
	"icofont-brand-loreal ",
	"icofont-brand-louis-vuitton ",
	"icofont-brand-mac-os ",
	"icofont-brand-marvel-app ",
	"icofont-brand-mashable ",
	"icofont-brand-mazda ",
	"icofont-brand-mcdonals ",
	"icofont-brand-mercedes ",
	"icofont-brand-micromax ",
	"icofont-brand-microsoft ",
	"icofont-brand-mobileme ",
	"icofont-brand-mobily ",
	"icofont-brand-motorola ",
	"icofont-brand-msi ",
	"icofont-brand-mts ",
	"icofont-brand-myspace ",
	"icofont-brand-mytv ",
	"icofont-brand-nasa ",
	"icofont-brand-natgeo ",
	"icofont-brand-nbc ",
	"icofont-brand-nescafe ",
	"icofont-brand-nestle ",
	"icofont-brand-netflix ",
	"icofont-brand-nexus ",
	"icofont-brand-nike ",
	"icofont-brand-nokia ",
	"icofont-brand-nvidia ",
	"icofont-brand-omega ",
	"icofont-brand-opensuse ",
	"icofont-brand-oracle ",
	"icofont-brand-panasonic ",
	"icofont-brand-paypal ",
	"icofont-brand-pepsi ",
	"icofont-brand-philips ",
	"icofont-brand-pizza-hut ",
	"icofont-brand-playstation ",
	"icofont-brand-puma ",
	"icofont-brand-qatar-air ",
	"icofont-brand-qvc ",
	"icofont-brand-readernaut ",
	"icofont-brand-redbull ",
	"icofont-brand-reebok ",
	"icofont-brand-reuters ",
	"icofont-brand-samsung ",
	"icofont-brand-sap ",
	"icofont-brand-saudia-airlines ",
	"icofont-brand-scribd ",
	"icofont-brand-shell ",
	"icofont-brand-siemens ",
	"icofont-brand-sk-telecom ",
	"icofont-brand-slideshare ",
	"icofont-brand-smashing-magazine ",
	"icofont-brand-snapchat ",
	"icofont-brand-sony-ericsson ",
	"icofont-brand-sony ",
	"icofont-brand-soundcloud ",
	"icofont-brand-sprint ",
	"icofont-brand-squidoo ",
	"icofont-brand-starbucks ",
	"icofont-brand-stc ",
	"icofont-brand-steam ",
	"icofont-brand-suzuki ",
	"icofont-brand-symbian ",
	"icofont-brand-t-mobile ",
	"icofont-brand-tango ",
	"icofont-brand-target ",
	"icofont-brand-tata-indicom ",
	"icofont-brand-techcrunch ",
	"icofont-brand-telenor ",
	"icofont-brand-teliasonera ",
	"icofont-brand-tesla ",
	"icofont-brand-the-verge ",
	"icofont-brand-thenextweb ",
	"icofont-brand-toshiba ",
	"icofont-brand-toyota ",
	"icofont-brand-tribenet ",
	"icofont-brand-ubuntu ",
	"icofont-brand-unilever ",
	"icofont-brand-vaio ",
	"icofont-brand-verizon ",
	"icofont-brand-viber ",
	"icofont-brand-vodafone ",
	"icofont-brand-volkswagen ",
	"icofont-brand-walmart ",
	"icofont-brand-warnerbros ",
	"icofont-brand-whatsapp ",
	"icofont-brand-wikipedia ",
	"icofont-brand-windows ",
	"icofont-brand-wire ",
	"icofont-brand-wordpress ",
	"icofont-brand-xiaomi ",
	"icofont-brand-yahoobuzz ",
	"icofont-brand-yamaha ",
	"icofont-brand-youtube ",
	"icofont-brand-zain ",
	"icofont-bank-alt ",
	"icofont-bank ",
	"icofont-barcode ",
	"icofont-bill-alt ",
	"icofont-billboard ",
	"icofont-briefcase-1 ",
	"icofont-briefcase-2 ",
	"icofont-businessman ",
	"icofont-businesswoman ",
	"icofont-chair ",
	"icofont-coins ",
	"icofont-company ",
	"icofont-contact-add ",
	"icofont-files-stack ",
	"icofont-handshake-deal ",
	"icofont-id-card ",
	"icofont-meeting-add ",
	"icofont-money-bag ",
	"icofont-pie-chart ",
	"icofont-presentation-alt ",
	"icofont-presentation ",
	"icofont-stamp ",
	"icofont-stock-mobile ",
	"icofont-chart-arrows-axis ",
	"icofont-chart-bar-graph ",
	"icofont-chart-flow-1 ",
	"icofont-chart-flow-2 ",
	"icofont-chart-flow ",
	"icofont-chart-growth ",
	"icofont-chart-histogram-alt ",
	"icofont-chart-histogram ",
	"icofont-chart-line-alt ",
	"icofont-chart-line ",
	"icofont-chart-pie-alt ",
	"icofont-chart-pie ",
	"icofont-chart-radar-graph ",
	"icofont-architecture-alt ",
	"icofont-architecture ",
	"icofont-barricade ",
	"icofont-bolt ",
	"icofont-bricks ",
	"icofont-building-alt ",
	"icofont-bull-dozer ",
	"icofont-calculations ",
	"icofont-cement-mix ",
	"icofont-cement-mixer ",
	"icofont-concrete-mixer ",
	"icofont-danger-zone ",
	"icofont-drill ",
	"icofont-eco-energy ",
	"icofont-eco-environmen ",
	"icofont-energy-air ",
	"icofont-energy-oil ",
	"icofont-energy-savings ",
	"icofont-energy-solar ",
	"icofont-energy-water ",
	"icofont-engineer ",
	"icofont-fire-extinguisher-alt ",
	"icofont-fire-extinguisher ",
	"icofont-fix-tools ",
	"icofont-fork-lift ",
	"icofont-glue-oil ",
	"icofont-hammer-alt ",
	"icofont-hammer ",
	"icofont-help-robot ",
	"icofont-industries-1 ",
	"icofont-industries-2 ",
	"icofont-industries-3 ",
	"icofont-industries-4 ",
	"icofont-industries-5 ",
	"icofont-industries ",
	"icofont-labour ",
	"icofont-mining ",
	"icofont-paint-brush ",
	"icofont-pollution ",
	"icofont-power-zone ",
	"icofont-radio-active ",
	"icofont-recycle-alt ",
	"icofont-recycling-man ",
	"icofont-safety-hat-light ",
	"icofont-safety-hat ",
	"icofont-saw ",
	"icofont-screw-driver ",
	"icofont-tools-1 ",
	"icofont-tools-bag ",
	"icofont-tow-truck ",
	"icofont-trolley ",
	"icofont-trowel ",
	"icofont-under-construction-alt ",
	"icofont-under-construction ",
	"icofont-vehicle-cement ",
	"icofont-vehicle-crane ",
	"icofont-vehicle-delivery-van ",
	"icofont-vehicle-dozer ",
	"icofont-vehicle-excavator ",
	"icofont-vehicle-trucktor ",
	"icofont-vehicle-wrecking ",
	"icofont-worker ",
	"icofont-workers-group ",
	"icofont-wrench ",
	"icofont-afghani-false ",
	"icofont-afghani-minus ",
	"icofont-afghani-plus ",
	"icofont-afghani-true ",
	"icofont-afghani ",
	"icofont-baht-false ",
	"icofont-baht-minus ",
	"icofont-baht-plus ",
	"icofont-baht-true ",
	"icofont-baht ",
	"icofont-bitcoin-false ",
	"icofont-bitcoin-minus ",
	"icofont-bitcoin-plus ",
	"icofont-bitcoin-true ",
	"icofont-bitcoin ",
	"icofont-dollar-flase ",
	"icofont-dollar-minus ",
	"icofont-dollar-plus ",
	"icofont-dollar-true ",
	"icofont-dollar ",
	"icofont-dong-false ",
	"icofont-dong-minus ",
	"icofont-dong-plus ",
	"icofont-dong-true ",
	"icofont-dong ",
	"icofont-euro-false ",
	"icofont-euro-minus ",
	"icofont-euro-plus ",
	"icofont-euro-true ",
	"icofont-euro ",
	"icofont-frank-false ",
	"icofont-frank-minus ",
	"icofont-frank-plus ",
	"icofont-frank-true ",
	"icofont-frank ",
	"icofont-hryvnia-false ",
	"icofont-hryvnia-minus ",
	"icofont-hryvnia-plus ",
	"icofont-hryvnia-true ",
	"icofont-hryvnia ",
	"icofont-lira-false ",
	"icofont-lira-minus ",
	"icofont-lira-plus ",
	"icofont-lira-true ",
	"icofont-lira ",
	"icofont-peseta-false ",
	"icofont-peseta-minus ",
	"icofont-peseta-plus ",
	"icofont-peseta-true ",
	"icofont-peseta ",
	"icofont-peso-false ",
	"icofont-peso-minus ",
	"icofont-peso-plus ",
	"icofont-peso-true ",
	"icofont-peso ",
	"icofont-pound-false ",
	"icofont-pound-minus ",
	"icofont-pound-plus ",
	"icofont-pound-true ",
	"icofont-pound ",
	"icofont-renminbi-false ",
	"icofont-renminbi-minus ",
	"icofont-renminbi-plus ",
	"icofont-renminbi-true ",
	"icofont-renminbi ",
	"icofont-riyal-false ",
	"icofont-riyal-minus ",
	"icofont-riyal-plus ",
	"icofont-riyal-true ",
	"icofont-riyal ",
	"icofont-rouble-false ",
	"icofont-rouble-minus ",
	"icofont-rouble-plus ",
	"icofont-rouble-true ",
	"icofont-rouble ",
	"icofont-rupee-false ",
	"icofont-rupee-minus ",
	"icofont-rupee-plus ",
	"icofont-rupee-true ",
	"icofont-rupee ",
	"icofont-taka-false ",
	"icofont-taka-minus ",
	"icofont-taka-plus ",
	"icofont-taka-true ",
	"icofont-taka ",
	"icofont-turkish-lira-false ",
	"icofont-turkish-lira-minus ",
	"icofont-turkish-lira-plus ",
	"icofont-turkish-lira-true ",
	"icofont-turkish-lira ",
	"icofont-won-false ",
	"icofont-won-minus ",
	"icofont-won-plus ",
	"icofont-won-true ",
	"icofont-won ",
	"icofont-yen-false ",
	"icofont-yen-minus ",
	"icofont-yen-plus ",
	"icofont-yen-true ",
	"icofont-yen ",
	"icofont-android-nexus ",
	"icofont-android-tablet ",
	"icofont-apple-watch ",
	"icofont-drawing-tablet ",
	"icofont-earphone ",
	"icofont-flash-drive ",
	"icofont-game-console ",
	"icofont-game-controller ",
	"icofont-game-pad ",
	"icofont-game ",
	"icofont-headphone-alt-1 ",
	"icofont-headphone-alt-2 ",
	"icofont-headphone-alt-3 ",
	"icofont-headphone-alt ",
	"icofont-headphone ",
	"icofont-htc-one ",
	"icofont-imac ",
	"icofont-ipad ",
	"icofont-iphone ",
	"icofont-ipod-nano ",
	"icofont-ipod-touch ",
	"icofont-keyboard-alt ",
	"icofont-keyboard-wireless ",
	"icofont-keyboard ",
	"icofont-laptop-alt ",
	"icofont-laptop ",
	"icofont-macbook ",
	"icofont-magic-mouse ",
	"icofont-micro-chip ",
	"icofont-microphone-alt ",
	"icofont-microphone ",
	"icofont-monitor ",
	"icofont-mouse ",
	"icofont-mp3-player ",
	"icofont-nintendo ",
	"icofont-playstation-alt ",
	"icofont-psvita ",
	"icofont-radio-mic ",
	"icofont-radio ",
	"icofont-refrigerator ",
	"icofont-samsung-galaxy ",
	"icofont-surface-tablet ",
	"icofont-ui-head-phone ",
	"icofont-ui-keyboard ",
	"icofont-washing-machine ",
	"icofont-wifi-router ",
	"icofont-wii-u ",
	"icofont-windows-lumia ",
	"icofont-wireless-mouse ",
	"icofont-xbox-360 ",
	"icofont-arrow-down ",
	"icofont-arrow-left ",
	"icofont-arrow-right ",
	"icofont-arrow-up ",
	"icofont-block-down ",
	"icofont-block-left ",
	"icofont-block-right ",
	"icofont-block-up ",
	"icofont-bubble-down ",
	"icofont-bubble-left ",
	"icofont-bubble-right ",
	"icofont-bubble-up ",
	"icofont-caret-down ",
	"icofont-caret-left ",
	"icofont-caret-right ",
	"icofont-caret-up ",
	"icofont-circled-down ",
	"icofont-circled-left ",
	"icofont-circled-right ",
	"icofont-circled-up ",
	"icofont-collapse ",
	"icofont-cursor-drag ",
	"icofont-curved-double-left ",
	"icofont-curved-double-right ",
	"icofont-curved-down ",
	"icofont-curved-left ",
	"icofont-curved-right ",
	"icofont-curved-up ",
	"icofont-dotted-down ",
	"icofont-dotted-left ",
	"icofont-dotted-right ",
	"icofont-dotted-up ",
	"icofont-double-left ",
	"icofont-double-right ",
	"icofont-expand-alt ",
	"icofont-hand-down ",
	"icofont-hand-drag ",
	"icofont-hand-drag1 ",
	"icofont-hand-drag2 ",
	"icofont-hand-drawn-alt-down ",
	"icofont-hand-drawn-alt-left ",
	"icofont-hand-drawn-alt-right ",
	"icofont-hand-drawn-alt-up ",
	"icofont-hand-drawn-down ",
	"icofont-hand-drawn-left ",
	"icofont-hand-drawn-right ",
	"icofont-hand-drawn-up ",
	"icofont-hand-grippers ",
	"icofont-hand-left ",
	"icofont-hand-right ",
	"icofont-hand-up ",
	"icofont-line-block-down ",
	"icofont-line-block-left ",
	"icofont-line-block-right ",
	"icofont-line-block-up ",
	"icofont-long-arrow-down ",
	"icofont-long-arrow-left ",
	"icofont-long-arrow-right ",
	"icofont-long-arrow-up ",
	"icofont-rounded-collapse ",
	"icofont-rounded-double-left ",
	"icofont-rounded-double-right ",
	"icofont-rounded-down ",
	"icofont-rounded-expand ",
	"icofont-rounded-left-down ",
	"icofont-rounded-left-up ",
	"icofont-rounded-left ",
	"icofont-rounded-right-down ",
	"icofont-rounded-right-up ",
	"icofont-rounded-right ",
	"icofont-rounded-up ",
	"icofont-scroll-bubble-down ",
	"icofont-scroll-bubble-left ",
	"icofont-scroll-bubble-right ",
	"icofont-scroll-bubble-up ",
	"icofont-scroll-double-down ",
	"icofont-scroll-double-left ",
	"icofont-scroll-double-right ",
	"icofont-scroll-double-up ",
	"icofont-scroll-down ",
	"icofont-scroll-left ",
	"icofont-scroll-long-down ",
	"icofont-scroll-long-left ",
	"icofont-scroll-long-right ",
	"icofont-scroll-long-up ",
	"icofont-scroll-right ",
	"icofont-scroll-up ",
	"icofont-simple-down ",
	"icofont-simple-left-down ",
	"icofont-simple-left-up ",
	"icofont-simple-left ",
	"icofont-simple-right-down ",
	"icofont-simple-right-up ",
	"icofont-simple-right ",
	"icofont-simple-up ",
	"icofont-square-down ",
	"icofont-square-left ",
	"icofont-square-right ",
	"icofont-square-up ",
	"icofont-stylish-down ",
	"icofont-stylish-left ",
	"icofont-stylish-right ",
	"icofont-stylish-up ",
	"icofont-swoosh-down ",
	"icofont-swoosh-left ",
	"icofont-swoosh-right ",
	"icofont-swoosh-up ",
	"icofont-thin-double-left ",
	"icofont-thin-double-right ",
	"icofont-thin-down ",
	"icofont-thin-left ",
	"icofont-thin-right ",
	"icofont-thin-up ",
	"icofont-abc ",
	"icofont-atom ",
	"icofont-award ",
	"icofont-bell-alt ",
	"icofont-black-board ",
	"icofont-book-alt ",
	"icofont-book ",
	"icofont-brainstorming ",
	"icofont-certificate-alt-1 ",
	"icofont-certificate-alt-2 ",
	"icofont-certificate ",
	"icofont-education ",
	"icofont-electron ",
	"icofont-fountain-pen ",
	"icofont-globe-alt ",
	"icofont-graduate-alt ",
	"icofont-graduate ",
	"icofont-group-students ",
	"icofont-hat-alt ",
	"icofont-hat ",
	"icofont-instrument ",
	"icofont-lamp-light ",
	"icofont-medal ",
	"icofont-microscope-alt ",
	"icofont-microscope ",
	"icofont-paper ",
	"icofont-pen-alt-4 ",
	"icofont-pen-nib ",
	"icofont-pencil-alt-5 ",
	"icofont-quill-pen ",
	"icofont-read-book-alt ",
	"icofont-read-book ",
	"icofont-school-bag ",
	"icofont-school-bus ",
	"icofont-student-alt ",
	"icofont-student ",
	"icofont-teacher ",
	"icofont-test-bulb ",
	"icofont-test-tube-alt ",
	"icofont-university ",
	"icofont-angry ",
	"icofont-astonished ",
	"icofont-confounded ",
	"icofont-confused ",
	"icofont-crying ",
	"icofont-dizzy ",
	"icofont-expressionless ",
	"icofont-heart-eyes ",
	"icofont-laughing ",
	"icofont-nerd-smile ",
	"icofont-open-mouth ",
	"icofont-rage ",
	"icofont-rolling-eyes ",
	"icofont-sad ",
	"icofont-simple-smile ",
	"icofont-slightly-smile ",
	"icofont-smirk ",
	"icofont-stuck-out-tongue ",
	"icofont-wink-smile ",
	"icofont-worried ",
	"icofont-file-alt ",
	"icofont-file-audio ",
	"icofont-file-avi-mp4 ",
	"icofont-file-bmp ",
	"icofont-file-code ",
	"icofont-file-css ",
	"icofont-file-document ",
	"icofont-file-eps ",
	"icofont-file-excel ",
	"icofont-file-exe ",
	"icofont-file-file ",
	"icofont-file-flv ",
	"icofont-file-gif ",
	"icofont-file-html5 ",
	"icofont-file-image ",
	"icofont-file-iso ",
	"icofont-file-java ",
	"icofont-file-javascript ",
	"icofont-file-jpg ",
	"icofont-file-midi ",
	"icofont-file-mov ",
	"icofont-file-mp3 ",
	"icofont-file-pdf ",
	"icofont-file-php ",
	"icofont-file-png ",
	"icofont-file-powerpoint ",
	"icofont-file-presentation ",
	"icofont-file-psb ",
	"icofont-file-psd ",
	"icofont-file-python ",
	"icofont-file-ruby ",
	"icofont-file-spreadsheet ",
	"icofont-file-sql ",
	"icofont-file-svg ",
	"icofont-file-text ",
	"icofont-file-tiff ",
	"icofont-file-video ",
	"icofont-file-wave ",
	"icofont-file-wmv ",
	"icofont-file-word ",
	"icofont-file-zip ",
	"icofont-cycling-alt ",
	"icofont-cycling ",
	"icofont-dumbbell ",
	"icofont-dumbbells ",
	"icofont-gym-alt-1 ",
	"icofont-gym-alt-2 ",
	"icofont-gym-alt-3 ",
	"icofont-gym ",
	"icofont-muscle-weight ",
	"icofont-muscle ",
	"icofont-apple ",
	"icofont-arabian-coffee ",
	"icofont-artichoke ",
	"icofont-asparagus ",
	"icofont-avocado ",
	"icofont-baby-food ",
	"icofont-banana ",
	"icofont-bbq ",
	"icofont-beans ",
	"icofont-beer ",
	"icofont-bell-pepper-capsicum ",
	"icofont-birthday-cake ",
	"icofont-bread ",
	"icofont-broccoli ",
	"icofont-burger ",
	"icofont-cabbage ",
	"icofont-carrot ",
	"icofont-cauli-flower ",
	"icofont-cheese ",
	"icofont-chef ",
	"icofont-cherry ",
	"icofont-chicken-fry ",
	"icofont-chicken ",
	"icofont-cocktail ",
	"icofont-coconut-water ",
	"icofont-coconut ",
	"icofont-coffee-alt ",
	"icofont-coffee-cup ",
	"icofont-coffee-mug ",
	"icofont-coffee-pot ",
	"icofont-cola ",
	"icofont-corn ",
	"icofont-croissant ",
	"icofont-crop-plant ",
	"icofont-cucumber ",
	"icofont-culinary ",
	"icofont-cup-cake ",
	"icofont-dining-table ",
	"icofont-donut ",
	"icofont-egg-plant ",
	"icofont-egg-poached ",
	"icofont-farmer-alt ",
	"icofont-farmer ",
	"icofont-fast-food ",
	"icofont-food-basket ",
	"icofont-food-cart ",
	"icofont-fork-and-knife ",
	"icofont-french-fries ",
	"icofont-fruits ",
	"icofont-grapes ",
	"icofont-honey ",
	"icofont-hot-dog ",
	"icofont-ice-cream-alt ",
	"icofont-ice-cream ",
	"icofont-juice ",
	"icofont-ketchup ",
	"icofont-kiwi ",
	"icofont-layered-cake ",
	"icofont-lemon-alt ",
	"icofont-lemon ",
	"icofont-lobster ",
	"icofont-mango ",
	"icofont-milk ",
	"icofont-mushroom ",
	"icofont-noodles ",
	"icofont-onion ",
	"icofont-orange ",
	"icofont-pear ",
	"icofont-peas ",
	"icofont-pepper ",
	"icofont-pie-alt ",
	"icofont-pie ",
	"icofont-pineapple ",
	"icofont-pizza-slice ",
	"icofont-pizza ",
	"icofont-plant ",
	"icofont-popcorn ",
	"icofont-potato ",
	"icofont-pumpkin ",
	"icofont-raddish ",
	"icofont-restaurant-menu ",
	"icofont-restaurant ",
	"icofont-salt-and-pepper ",
	"icofont-sandwich ",
	"icofont-sausage ",
	"icofont-soft-drinks ",
	"icofont-soup-bowl ",
	"icofont-spoon-and-fork ",
	"icofont-steak ",
	"icofont-strawberry ",
	"icofont-sub-sandwich ",
	"icofont-sushi ",
	"icofont-taco ",
	"icofont-tea-pot ",
	"icofont-tea ",
	"icofont-tomato ",
	"icofont-watermelon ",
	"icofont-wheat ",
	"icofont-baby-backpack ",
	"icofont-baby-cloth ",
	"icofont-baby-milk-bottle ",
	"icofont-baby-trolley ",
	"icofont-baby ",
	"icofont-candy ",
	"icofont-holding-hands ",
	"icofont-infant-nipple ",
	"icofont-kids-scooter ",
	"icofont-safety-pin ",
	"icofont-teddy-bear ",
	"icofont-toy-ball ",
	"icofont-toy-cat ",
	"icofont-toy-duck ",
	"icofont-toy-elephant ",
	"icofont-toy-hand ",
	"icofont-toy-horse ",
	"icofont-toy-lattu ",
	"icofont-toy-train ",
	"icofont-burglar ",
	"icofont-cannon-firing ",
	"icofont-cc-camera ",
	"icofont-cop-badge ",
	"icofont-cop ",
	"icofont-court-hammer ",
	"icofont-court ",
	"icofont-finger-print ",
	"icofont-gavel ",
	"icofont-handcuff-alt ",
	"icofont-handcuff ",
	"icofont-investigation ",
	"icofont-investigator ",
	"icofont-jail ",
	"icofont-judge ",
	"icofont-law-alt-1 ",
	"icofont-law-alt-2 ",
	"icofont-law-alt-3 ",
	"icofont-law-book ",
	"icofont-law-document ",
	"icofont-law-order ",
	"icofont-law-protect ",
	"icofont-law-scales ",
	"icofont-law ",
	"icofont-lawyer-alt-1 ",
	"icofont-lawyer-alt-2 ",
	"icofont-lawyer ",
	"icofont-legal ",
	"icofont-pistol ",
	"icofont-police-badge ",
	"icofont-police-cap ",
	"icofont-police-car-alt-1 ",
	"icofont-police-car-alt-2 ",
	"icofont-police-car ",
	"icofont-police-hat ",
	"icofont-police-van ",
	"icofont-police ",
	"icofont-thief-alt ",
	"icofont-thief ",
	"icofont-abacus-alt ",
	"icofont-abacus ",
	"icofont-angle-180 ",
	"icofont-angle-45 ",
	"icofont-angle-90 ",
	"icofont-angle ",
	"icofont-calculator-alt-1 ",
	"icofont-calculator-alt-2 ",
	"icofont-calculator ",
	"icofont-circle-ruler-alt ",
	"icofont-circle-ruler ",
	"icofont-compass-alt-1 ",
	"icofont-compass-alt-2 ",
	"icofont-compass-alt-3 ",
	"icofont-compass-alt-4 ",
	"icofont-golden-ratio ",
	"icofont-marker-alt-1 ",
	"icofont-marker-alt-2 ",
	"icofont-marker-alt-3 ",
	"icofont-marker ",
	"icofont-math ",
	"icofont-mathematical-alt-1 ",
	"icofont-mathematical-alt-2 ",
	"icofont-mathematical ",
	"icofont-pen-alt-1 ",
	"icofont-pen-alt-2 ",
	"icofont-pen-alt-3 ",
	"icofont-pen-holder-alt-1 ",
	"icofont-pen-holder ",
	"icofont-pen ",
	"icofont-pencil-alt-1 ",
	"icofont-pencil-alt-2 ",
	"icofont-pencil-alt-3 ",
	"icofont-pencil-alt-4 ",
	"icofont-pencil ",
	"icofont-ruler-alt-1 ",
	"icofont-ruler-alt-2 ",
	"icofont-ruler-compass-alt ",
	"icofont-ruler-compass ",
	"icofont-ruler-pencil-alt-1 ",
	"icofont-ruler-pencil-alt-2 ",
	"icofont-ruler-pencil ",
	"icofont-ruler ",
	"icofont-rulers-alt ",
	"icofont-rulers ",
	"icofont-square-root ",
	"icofont-ui-calculator ",
	"icofont-aids ",
	"icofont-ambulance-crescent ",
	"icofont-ambulance-cross ",
	"icofont-ambulance ",
	"icofont-autism ",
	"icofont-bandage ",
	"icofont-blind ",
	"icofont-blood-drop ",
	"icofont-blood-test ",
	"icofont-blood ",
	"icofont-brain-alt ",
	"icofont-brain ",
	"icofont-capsule ",
	"icofont-crutch ",
	"icofont-disabled ",
	"icofont-dna-alt-1 ",
	"icofont-dna-alt-2 ",
	"icofont-dna ",
	"icofont-doctor-alt ",
	"icofont-doctor ",
	"icofont-drug-pack ",
	"icofont-drug ",
	"icofont-first-aid-alt ",
	"icofont-first-aid ",
	"icofont-heart-beat-alt ",
	"icofont-heart-beat ",
	"icofont-heartbeat ",
	"icofont-herbal ",
	"icofont-hospital ",
	"icofont-icu ",
	"icofont-injection-syringe ",
	"icofont-laboratory ",
	"icofont-medical-sign-alt ",
	"icofont-medical-sign ",
	"icofont-nurse-alt ",
	"icofont-nurse ",
	"icofont-nursing-home ",
	"icofont-operation-theater ",
	"icofont-paralysis-disability ",
	"icofont-patient-bed ",
	"icofont-patient-file ",
	"icofont-pills ",
	"icofont-prescription ",
	"icofont-pulse ",
	"icofont-stethoscope-alt ",
	"icofont-stethoscope ",
	"icofont-stretcher ",
	"icofont-surgeon-alt ",
	"icofont-surgeon ",
	"icofont-tablets ",
	"icofont-test-bottle ",
	"icofont-test-tube ",
	"icofont-thermometer-alt ",
	"icofont-thermometer ",
	"icofont-tooth ",
	"icofont-xray ",
	"icofont-ui-add ",
	"icofont-ui-alarm ",
	"icofont-ui-battery ",
	"icofont-ui-block ",
	"icofont-ui-bluetooth ",
	"icofont-ui-brightness ",
	"icofont-ui-browser ",
	"icofont-ui-calendar ",
	"icofont-ui-call ",
	"icofont-ui-camera ",
	"icofont-ui-cart ",
	"icofont-ui-cell-phone ",
	"icofont-ui-chat ",
	"icofont-ui-check ",
	"icofont-ui-clip-board ",
	"icofont-ui-clip ",
	"icofont-ui-clock ",
	"icofont-ui-close ",
	"icofont-ui-contact-list ",
	"icofont-ui-copy ",
	"icofont-ui-cut ",
	"icofont-ui-delete ",
	"icofont-ui-dial-phone ",
	"icofont-ui-edit ",
	"icofont-ui-email ",
	"icofont-ui-file ",
	"icofont-ui-fire-wall ",
	"icofont-ui-flash-light ",
	"icofont-ui-flight ",
	"icofont-ui-folder ",
	"icofont-ui-game ",
	"icofont-ui-handicapped ",
	"icofont-ui-home ",
	"icofont-ui-image ",
	"icofont-ui-laoding ",
	"icofont-ui-lock ",
	"icofont-ui-love-add ",
	"icofont-ui-love-broken ",
	"icofont-ui-love-remove ",
	"icofont-ui-love ",
	"icofont-ui-map ",
	"icofont-ui-message ",
	"icofont-ui-messaging ",
	"icofont-ui-movie ",
	"icofont-ui-music-player ",
	"icofont-ui-music ",
	"icofont-ui-mute ",
	"icofont-ui-network ",
	"icofont-ui-next ",
	"icofont-ui-note ",
	"icofont-ui-office ",
	"icofont-ui-password ",
	"icofont-ui-pause ",
	"icofont-ui-play-stop ",
	"icofont-ui-play ",
	"icofont-ui-pointer ",
	"icofont-ui-power ",
	"icofont-ui-press ",
	"icofont-ui-previous ",
	"icofont-ui-rate-add ",
	"icofont-ui-rate-blank ",
	"icofont-ui-rate-remove ",
	"icofont-ui-rating ",
	"icofont-ui-record ",
	"icofont-ui-remove ",
	"icofont-ui-reply ",
	"icofont-ui-rotation ",
	"icofont-ui-rss ",
	"icofont-ui-search ",
	"icofont-ui-settings ",
	"icofont-ui-social-link ",
	"icofont-ui-tag ",
	"icofont-ui-text-chat ",
	"icofont-ui-text-loading ",
	"icofont-ui-theme ",
	"icofont-ui-timer ",
	"icofont-ui-touch-phone ",
	"icofont-ui-travel ",
	"icofont-ui-unlock ",
	"icofont-ui-user-group ",
	"icofont-ui-user ",
	"icofont-ui-v-card ",
	"icofont-ui-video-chat ",
	"icofont-ui-video-message ",
	"icofont-ui-video-play ",
	"icofont-ui-video ",
	"icofont-ui-volume ",
	"icofont-ui-weather ",
	"icofont-ui-wifi ",
	"icofont-ui-zoom-in ",
	"icofont-ui-zoom-out ",
	"icofont-cassette-player ",
	"icofont-cassette ",
	"icofont-forward ",
	"icofont-guiter ",
	"icofont-movie ",
	"icofont-multimedia ",
	"icofont-music-alt ",
	"icofont-music-disk ",
	"icofont-music-note ",
	"icofont-music-notes ",
	"icofont-music ",
	"icofont-mute-volume ",
	"icofont-pause ",
	"icofont-play-alt-1 ",
	"icofont-play-alt-2 ",
	"icofont-play-alt-3 ",
	"icofont-play-pause ",
	"icofont-play ",
	"icofont-record ",
	"icofont-retro-music-disk ",
	"icofont-rewind ",
	"icofont-song-notes ",
	"icofont-sound-wave-alt ",
	"icofont-sound-wave ",
	"icofont-stop ",
	"icofont-video-alt ",
	"icofont-video-cam ",
	"icofont-video-clapper ",
	"icofont-video ",
	"icofont-volume-bar ",
	"icofont-volume-down ",
	"icofont-volume-mute ",
	"icofont-volume-off ",
	"icofont-volume-up ",
	"icofont-youtube-play ",
	"icofont-2checkout-alt ",
	"icofont-2checkout ",
	"icofont-amazon-alt ",
	"icofont-amazon ",
	"icofont-american-express-alt ",
	"icofont-american-express ",
	"icofont-apple-pay-alt ",
	"icofont-apple-pay ",
	"icofont-bank-transfer-alt ",
	"icofont-bank-transfer ",
	"icofont-braintree-alt ",
	"icofont-braintree ",
	"icofont-cash-on-delivery-alt ",
	"icofont-cash-on-delivery ",
	"icofont-diners-club-alt-1 ",
	"icofont-diners-club-alt-2 ",
	"icofont-diners-club-alt-3 ",
	"icofont-diners-club ",
	"icofont-discover-alt ",
	"icofont-discover ",
	"icofont-eway-alt ",
	"icofont-eway ",
	"icofont-google-wallet-alt-1 ",
	"icofont-google-wallet-alt-2 ",
	"icofont-google-wallet-alt-3 ",
	"icofont-google-wallet ",
	"icofont-jcb-alt ",
	"icofont-jcb ",
	"icofont-maestro-alt ",
	"icofont-maestro ",
	"icofont-mastercard-alt ",
	"icofont-mastercard ",
	"icofont-payoneer-alt ",
	"icofont-payoneer ",
	"icofont-paypal-alt ",
	"icofont-paypal ",
	"icofont-sage-alt ",
	"icofont-sage ",
	"icofont-skrill-alt ",
	"icofont-skrill ",
	"icofont-stripe-alt ",
	"icofont-stripe ",
	"icofont-visa-alt ",
	"icofont-visa-electron ",
	"icofont-visa ",
	"icofont-western-union-alt ",
	"icofont-western-union ",
	"icofont-boy ",
	"icofont-business-man-alt-1 ",
	"icofont-business-man-alt-2 ",
	"icofont-business-man-alt-3 ",
	"icofont-business-man ",
	"icofont-female ",
	"icofont-funky-man ",
	"icofont-girl-alt ",
	"icofont-girl ",
	"icofont-group ",
	"icofont-hotel-boy-alt ",
	"icofont-hotel-boy ",
	"icofont-kid ",
	"icofont-man-in-glasses ",
	"icofont-people ",
	"icofont-support ",
	"icofont-user-alt-1 ",
	"icofont-user-alt-2 ",
	"icofont-user-alt-3 ",
	"icofont-user-alt-4 ",
	"icofont-user-alt-5 ",
	"icofont-user-alt-6 ",
	"icofont-user-alt-7 ",
	"icofont-user-female ",
	"icofont-user-male ",
	"icofont-user-suited ",
	"icofont-user ",
	"icofont-users-alt-1 ",
	"icofont-users-alt-2 ",
	"icofont-users-alt-3 ",
	"icofont-users-alt-4 ",
	"icofont-users-alt-5 ",
	"icofont-users-alt-6 ",
	"icofont-users-social ",
	"icofont-users ",
	"icofont-waiter-alt ",
	"icofont-waiter ",
	"icofont-woman-in-glasses ",
	"icofont-search-1 ",
	"icofont-search-2 ",
	"icofont-search-document ",
	"icofont-search-folder ",
	"icofont-search-job ",
	"icofont-search-map ",
	"icofont-search-property ",
	"icofont-search-restaurant ",
	"icofont-search-stock ",
	"icofont-search-user ",
	"icofont-search ",
	"icofont-500px ",
	"icofont-aim ",
	"icofont-badoo ",
	"icofont-baidu-tieba ",
	"icofont-bbm-messenger ",
	"icofont-bebo ",
	"icofont-behance ",
	"icofont-blogger ",
	"icofont-bootstrap ",
	"icofont-brightkite ",
	"icofont-cloudapp ",
	"icofont-concrete5 ",
	"icofont-delicious ",
	"icofont-designbump ",
	"icofont-designfloat ",
	"icofont-deviantart ",
	"icofont-digg ",
	"icofont-dotcms ",
	"icofont-dribbble ",
	"icofont-dribble ",
	"icofont-dropbox ",
	"icofont-ebuddy ",
	"icofont-ello ",
	"icofont-ember ",
	"icofont-envato ",
	"icofont-evernote ",
	"icofont-facebook-messenger ",
	"icofont-facebook ",
	"icofont-feedburner ",
	"icofont-flikr ",
	"icofont-folkd ",
	"icofont-foursquare ",
	"icofont-friendfeed ",
	"icofont-ghost ",
	"icofont-github ",
	"icofont-gnome ",
	"icofont-google-buzz ",
	"icofont-google-hangouts ",
	"icofont-google-map ",
	"icofont-google-plus ",
	"icofont-google-talk ",
	"icofont-hype-machine ",
	"icofont-instagram ",
	"icofont-kakaotalk ",
	"icofont-kickstarter ",
	"icofont-kik ",
	"icofont-kiwibox ",
	"icofont-line-messenger ",
	"icofont-line ",
	"icofont-linkedin ",
	"icofont-linux-mint ",
	"icofont-live-messenger ",
	"icofont-livejournal ",
	"icofont-magento ",
	"icofont-meetme ",
	"icofont-meetup ",
	"icofont-mixx ",
	"icofont-newsvine ",
	"icofont-nimbuss ",
	"icofont-odnoklassniki ",
	"icofont-opencart ",
	"icofont-oscommerce ",
	"icofont-pandora ",
	"icofont-photobucket ",
	"icofont-picasa ",
	"icofont-pinterest ",
	"icofont-prestashop ",
	"icofont-qik ",
	"icofont-qq ",
	"icofont-readernaut ",
	"icofont-reddit ",
	"icofont-renren ",
	"icofont-rss ",
	"icofont-shopify ",
	"icofont-silverstripe ",
	"icofont-skype ",
	"icofont-slack ",
	"icofont-slashdot ",
	"icofont-slidshare ",
	"icofont-smugmug ",
	"icofont-snapchat ",
	"icofont-soundcloud ",
	"icofont-spotify ",
	"icofont-stack-exchange ",
	"icofont-stack-overflow ",
	"icofont-steam ",
	"icofont-stumbleupon ",
	"icofont-tagged ",
	"icofont-technorati ",
	"icofont-telegram ",
	"icofont-tinder ",
	"icofont-trello ",
	"icofont-tumblr ",
	"icofont-twitch ",
	"icofont-twitter ",
	"icofont-typo3 ",
	"icofont-ubercart ",
	"icofont-viber ",
	"icofont-viddler ",
	"icofont-vimeo ",
	"icofont-vine ",
	"icofont-virb ",
	"icofont-virtuemart ",
	"icofont-vk ",
	"icofont-wechat ",
	"icofont-weibo ",
	"icofont-whatsapp ",
	"icofont-xing ",
	"icofont-yahoo ",
	"icofont-yelp ",
	"icofont-youku ",
	"icofont-youtube ",
	"icofont-zencart ",
	"icofont-badminton-birdie ",
	"icofont-baseball ",
	"icofont-baseballer ",
	"icofont-basketball-hoop ",
	"icofont-basketball ",
	"icofont-billiard-ball ",
	"icofont-boot-alt-1 ",
	"icofont-boot-alt-2 ",
	"icofont-boot ",
	"icofont-bowling-alt ",
	"icofont-bowling ",
	"icofont-canoe ",
	"icofont-cheer-leader ",
	"icofont-climbing ",
	"icofont-corner ",
	"icofont-field-alt ",
	"icofont-field ",
	"icofont-football-alt ",
	"icofont-football-american ",
	"icofont-football ",
	"icofont-foul ",
	"icofont-goal-keeper ",
	"icofont-goal ",
	"icofont-golf-alt ",
	"icofont-golf-bag ",
	"icofont-golf-cart ",
	"icofont-golf-field ",
	"icofont-golf ",
	"icofont-golfer ",
	"icofont-helmet ",
	"icofont-hockey-alt ",
	"icofont-hockey ",
	"icofont-ice-skate ",
	"icofont-jersey-alt ",
	"icofont-jersey ",
	"icofont-jumping ",
	"icofont-kick ",
	"icofont-leg ",
	"icofont-match-review ",
	"icofont-medal-sport ",
	"icofont-offside ",
	"icofont-olympic-logo ",
	"icofont-olympic ",
	"icofont-padding ",
	"icofont-penalty-card ",
	"icofont-racer ",
	"icofont-racing-car ",
	"icofont-racing-flag-alt ",
	"icofont-racing-flag ",
	"icofont-racings-wheel ",
	"icofont-referee ",
	"icofont-refree-jersey ",
	"icofont-result-sport ",
	"icofont-rugby-ball ",
	"icofont-rugby-player ",
	"icofont-rugby ",
	"icofont-runner-alt-1 ",
	"icofont-runner-alt-2 ",
	"icofont-runner ",
	"icofont-score-board ",
	"icofont-skiing-man ",
	"icofont-skydiving-goggles ",
	"icofont-snow-mobile ",
	"icofont-steering ",
	"icofont-stopwatch ",
	"icofont-substitute ",
	"icofont-swimmer ",
	"icofont-table-tennis ",
	"icofont-team-alt ",
	"icofont-team ",
	"icofont-tennis-player ",
	"icofont-tennis ",
	"icofont-tracking ",
	"icofont-trophy-alt ",
	"icofont-trophy ",
	"icofont-volleyball-alt ",
	"icofont-volleyball-fire ",
	"icofont-volleyball ",
	"icofont-water-bottle ",
	"icofont-whistle-alt ",
	"icofont-whistle ",
	"icofont-win-trophy ",
	"icofont-align-center ",
	"icofont-align-left ",
	"icofont-align-right ",
	"icofont-all-caps ",
	"icofont-bold ",
	"icofont-brush ",
	"icofont-clip-board ",
	"icofont-code-alt ",
	"icofont-color-bucket ",
	"icofont-color-picker ",
	"icofont-copy-invert ",
	"icofont-copy ",
	"icofont-cut ",
	"icofont-delete-alt ",
	"icofont-edit-alt ",
	"icofont-eraser-alt ",
	"icofont-font ",
	"icofont-heading ",
	"icofont-indent ",
	"icofont-italic-alt ",
	"icofont-italic ",
	"icofont-justify-all ",
	"icofont-justify-center ",
	"icofont-justify-left ",
	"icofont-justify-right ",
	"icofont-link-broken ",
	"icofont-outdent ",
	"icofont-paper-clip ",
	"icofont-paragraph ",
	"icofont-pin ",
	"icofont-printer ",
	"icofont-redo ",
	"icofont-rotation ",
	"icofont-save ",
	"icofont-small-cap ",
	"icofont-strike-through ",
	"icofont-sub-listing ",
	"icofont-subscript ",
	"icofont-superscript ",
	"icofont-table ",
	"icofont-text-height ",
	"icofont-text-width ",
	"icofont-trash ",
	"icofont-underline ",
	"icofont-undo ",
	"icofont-air-balloon ",
	"icofont-airplane-alt ",
	"icofont-airplane ",
	"icofont-articulated-truck ",
	"icofont-auto-mobile ",
	"icofont-auto-rickshaw ",
	"icofont-bicycle-alt-1 ",
	"icofont-bicycle-alt-2 ",
	"icofont-bicycle ",
	"icofont-bus-alt-1 ",
	"icofont-bus-alt-2 ",
	"icofont-bus-alt-3 ",
	"icofont-bus ",
	"icofont-cab ",
	"icofont-cable-car ",
	"icofont-car-alt-1 ",
	"icofont-car-alt-2 ",
	"icofont-car-alt-3 ",
	"icofont-car-alt-4 ",
	"icofont-car ",
	"icofont-delivery-time ",
	"icofont-fast-delivery ",
	"icofont-fire-truck-alt ",
	"icofont-fire-truck ",
	"icofont-free-delivery ",
	"icofont-helicopter ",
	"icofont-motor-bike-alt ",
	"icofont-motor-bike ",
	"icofont-motor-biker ",
	"icofont-oil-truck ",
	"icofont-rickshaw ",
	"icofont-rocket-alt-1 ",
	"icofont-rocket-alt-2 ",
	"icofont-rocket ",
	"icofont-sail-boat-alt-1 ",
	"icofont-sail-boat-alt-2 ",
	"icofont-sail-boat ",
	"icofont-scooter ",
	"icofont-sea-plane ",
	"icofont-ship-alt ",
	"icofont-ship ",
	"icofont-speed-boat ",
	"icofont-taxi ",
	"icofont-tractor ",
	"icofont-train-line ",
	"icofont-train-steam ",
	"icofont-tram ",
	"icofont-truck-alt ",
	"icofont-truck-loaded ",
	"icofont-truck ",
	"icofont-van-alt ",
	"icofont-van ",
	"icofont-yacht ",
	"icofont-5-star-hotel ",
	"icofont-air-ticket ",
	"icofont-beach-bed ",
	"icofont-beach ",
	"icofont-camping-vest ",
	"icofont-direction-sign ",
	"icofont-hill-side ",
	"icofont-hill ",
	"icofont-hotel ",
	"icofont-island-alt ",
	"icofont-island ",
	"icofont-sandals-female ",
	"icofont-sandals-male ",
	"icofont-travelling ",
	"icofont-breakdown ",
	"icofont-celsius ",
	"icofont-clouds ",
	"icofont-cloudy ",
	"icofont-dust ",
	"icofont-eclipse ",
	"icofont-fahrenheit ",
	"icofont-forest-fire ",
	"icofont-full-night ",
	"icofont-full-sunny ",
	"icofont-hail-night ",
	"icofont-hail-rainy-night ",
	"icofont-hail-rainy-sunny ",
	"icofont-hail-rainy ",
	"icofont-hail-sunny ",
	"icofont-hail-thunder-night ",
	"icofont-hail-thunder-sunny ",
	"icofont-hail-thunder ",
	"icofont-hail ",
	"icofont-hill-night ",
	"icofont-hill-sunny ",
	"icofont-hurricane ",
	"icofont-meteor ",
	"icofont-night ",
	"icofont-rainy-night ",
	"icofont-rainy-sunny ",
	"icofont-rainy-thunder ",
	"icofont-rainy ",
	"icofont-snow-alt ",
	"icofont-snow-flake ",
	"icofont-snow-temp ",
	"icofont-snow ",
	"icofont-snowy-hail ",
	"icofont-snowy-night-hail ",
	"icofont-snowy-night-rainy ",
	"icofont-snowy-night ",
	"icofont-snowy-rainy ",
	"icofont-snowy-sunny-hail ",
	"icofont-snowy-sunny-rainy ",
	"icofont-snowy-sunny ",
	"icofont-snowy-thunder-night ",
	"icofont-snowy-thunder-sunny ",
	"icofont-snowy-thunder ",
	"icofont-snowy-windy-night ",
	"icofont-snowy-windy-sunny ",
	"icofont-snowy-windy ",
	"icofont-snowy ",
	"icofont-sun-alt ",
	"icofont-sun-rise ",
	"icofont-sun-set ",
	"icofont-sun ",
	"icofont-sunny-day-temp ",
	"icofont-sunny ",
	"icofont-thunder-light ",
	"icofont-tornado ",
	"icofont-umbrella-alt ",
	"icofont-umbrella ",
	"icofont-volcano ",
	"icofont-wave ",
	"icofont-wind-scale-0 ",
	"icofont-wind-scale-1 ",
	"icofont-wind-scale-10 ",
	"icofont-wind-scale-11 ",
	"icofont-wind-scale-12 ",
	"icofont-wind-scale-2 ",
	"icofont-wind-scale-3 ",
	"icofont-wind-scale-4 ",
	"icofont-wind-scale-5 ",
	"icofont-wind-scale-6 ",
	"icofont-wind-scale-7 ",
	"icofont-wind-scale-8 ",
	"icofont-wind-scale-9 ",
	"icofont-wind-waves ",
	"icofont-wind ",
	"icofont-windy-hail ",
	"icofont-windy-night ",
	"icofont-windy-raining ",
	"icofont-windy-sunny ",
	"icofont-windy-thunder-raining ",
	"icofont-windy-thunder ",
	"icofont-windy ",
	"icofont-addons ",
	"icofont-address-book ",
	"icofont-adjust ",
	"icofont-alarm ",
	"icofont-anchor ",
	"icofont-archive ",
	"icofont-at ",
	"icofont-attachment ",
	"icofont-audio ",
	"icofont-automation ",
	"icofont-badge ",
	"icofont-bag-alt ",
	"icofont-bag ",
	"icofont-ban ",
	"icofont-bar-code ",
	"icofont-bars ",
	"icofont-basket ",
	"icofont-battery-empty ",
	"icofont-battery-full ",
	"icofont-battery-half ",
	"icofont-battery-low ",
	"icofont-beaker ",
	"icofont-beard ",
	"icofont-bed ",
	"icofont-bell ",
	"icofont-beverage ",
	"icofont-bill ",
	"icofont-bin ",
	"icofont-binary ",
	"icofont-binoculars ",
	"icofont-bluetooth ",
	"icofont-bomb ",
	"icofont-book-mark ",
	"icofont-box ",
	"icofont-briefcase ",
	"icofont-broken ",
	"icofont-bucket ",
	"icofont-bucket1 ",
	"icofont-bucket2 ",
	"icofont-bug ",
	"icofont-building ",
	"icofont-bulb-alt ",
	"icofont-bullet ",
	"icofont-bullhorn ",
	"icofont-bullseye ",
	"icofont-calendar ",
	"icofont-camera-alt ",
	"icofont-camera ",
	"icofont-card ",
	"icofont-cart-alt ",
	"icofont-cart ",
	"icofont-cc ",
	"icofont-charging ",
	"icofont-chat ",
	"icofont-check-alt ",
	"icofont-check-circled ",
	"icofont-check ",
	"icofont-checked ",
	"icofont-children-care ",
	"icofont-clip ",
	"icofont-clock-time ",
	"icofont-close-circled ",
	"icofont-close-line-circled ",
	"icofont-close-line-squared-alt ",
	"icofont-close-line-squared ",
	"icofont-close-line ",
	"icofont-close-squared-alt ",
	"icofont-close-squared ",
	"icofont-close ",
	"icofont-cloud-download ",
	"icofont-cloud-refresh ",
	"icofont-cloud-upload ",
	"icofont-cloud ",
	"icofont-code-not-allowed ",
	"icofont-code ",
	"icofont-comment ",
	"icofont-compass-alt ",
	"icofont-compass ",
	"icofont-computer ",
	"icofont-connection ",
	"icofont-console ",
	"icofont-contacts ",
	"icofont-contrast ",
	"icofont-copyright ",
	"icofont-credit-card ",
	"icofont-crop ",
	"icofont-crown ",
	"icofont-cube ",
	"icofont-cubes ",
	"icofont-dashboard-web ",
	"icofont-dashboard ",
	"icofont-data ",
	"icofont-database-add ",
	"icofont-database-locked ",
	"icofont-database-remove ",
	"icofont-database ",
	"icofont-delete ",
	"icofont-diamond ",
	"icofont-dice-multiple ",
	"icofont-dice ",
	"icofont-disc ",
	"icofont-diskette ",
	"icofont-document-folder ",
	"icofont-download-alt ",
	"icofont-download ",
	"icofont-downloaded ",
	"icofont-drag ",
	"icofont-drag1 ",
	"icofont-drag2 ",
	"icofont-drag3 ",
	"icofont-earth ",
	"icofont-ebook ",
	"icofont-edit ",
	"icofont-eject ",
	"icofont-email ",
	"icofont-envelope-open ",
	"icofont-envelope ",
	"icofont-eraser ",
	"icofont-error ",
	"icofont-excavator ",
	"icofont-exchange ",
	"icofont-exclamation-circle ",
	"icofont-exclamation-square ",
	"icofont-exclamation-tringle ",
	"icofont-exclamation ",
	"icofont-exit ",
	"icofont-expand ",
	"icofont-external-link ",
	"icofont-external ",
	"icofont-eye-alt ",
	"icofont-eye-blocked ",
	"icofont-eye-dropper ",
	"icofont-eye ",
	"icofont-favourite ",
	"icofont-fax ",
	"icofont-file-fill ",
	"icofont-film ",
	"icofont-filter ",
	"icofont-fire-alt ",
	"icofont-fire-burn ",
	"icofont-fire ",
	"icofont-flag-alt-1 ",
	"icofont-flag-alt-2 ",
	"icofont-flag ",
	"icofont-flame-torch ",
	"icofont-flash-light ",
	"icofont-flash ",
	"icofont-flask ",
	"icofont-focus ",
	"icofont-folder-open ",
	"icofont-folder ",
	"icofont-foot-print ",
	"icofont-garbage ",
	"icofont-gear-alt ",
	"icofont-gear ",
	"icofont-gears ",
	"icofont-gift ",
	"icofont-glass ",
	"icofont-globe ",
	"icofont-graffiti ",
	"icofont-grocery ",
	"icofont-hand ",
	"icofont-hanger ",
	"icofont-hard-disk ",
	"icofont-heart-alt ",
	"icofont-heart ",
	"icofont-history ",
	"icofont-home ",
	"icofont-horn ",
	"icofont-hour-glass ",
	"icofont-id ",
	"icofont-image ",
	"icofont-inbox ",
	"icofont-infinite ",
	"icofont-info-circle ",
	"icofont-info-square ",
	"icofont-info ",
	"icofont-institution ",
	"icofont-interface ",
	"icofont-invisible ",
	"icofont-jacket ",
	"icofont-jar ",
	"icofont-jewlery ",
	"icofont-karate ",
	"icofont-key-hole ",
	"icofont-key ",
	"icofont-label ",
	"icofont-lamp ",
	"icofont-layers ",
	"icofont-layout ",
	"icofont-leaf ",
	"icofont-leaflet ",
	"icofont-learn ",
	"icofont-lego ",
	"icofont-lens ",
	"icofont-letter ",
	"icofont-letterbox ",
	"icofont-library ",
	"icofont-license ",
	"icofont-life-bouy ",
	"icofont-life-buoy ",
	"icofont-life-jacket ",
	"icofont-life-ring ",
	"icofont-light-bulb ",
	"icofont-lighter ",
	"icofont-lightning-ray ",
	"icofont-like ",
	"icofont-line-height ",
	"icofont-link-alt ",
	"icofont-link ",
	"icofont-list ",
	"icofont-listening ",
	"icofont-listine-dots ",
	"icofont-listing-box ",
	"icofont-listing-number ",
	"icofont-live-support ",
	"icofont-location-arrow ",
	"icofont-location-pin ",
	"icofont-lock ",
	"icofont-login ",
	"icofont-logout ",
	"icofont-lollipop ",
	"icofont-long-drive ",
	"icofont-look ",
	"icofont-loop ",
	"icofont-luggage ",
	"icofont-lunch ",
	"icofont-lungs ",
	"icofont-magic-alt ",
	"icofont-magic ",
	"icofont-magnet ",
	"icofont-mail-box ",
	"icofont-mail ",
	"icofont-male ",
	"icofont-map-pins ",
	"icofont-map ",
	"icofont-maximize ",
	"icofont-measure ",
	"icofont-medicine ",
	"icofont-mega-phone ",
	"icofont-megaphone-alt ",
	"icofont-megaphone ",
	"icofont-memorial ",
	"icofont-memory-card ",
	"icofont-mic-mute ",
	"icofont-mic ",
	"icofont-military ",
	"icofont-mill ",
	"icofont-minus-circle ",
	"icofont-minus-square ",
	"icofont-minus ",
	"icofont-mobile-phone ",
	"icofont-molecule ",
	"icofont-money ",
	"icofont-moon ",
	"icofont-mop ",
	"icofont-muffin ",
	"icofont-mustache ",
	"icofont-navigation-menu ",
	"icofont-navigation ",
	"icofont-network-tower ",
	"icofont-network ",
	"icofont-news ",
	"icofont-newspaper ",
	"icofont-no-smoking ",
	"icofont-not-allowed ",
	"icofont-notebook ",
	"icofont-notepad ",
	"icofont-notification ",
	"icofont-numbered ",
	"icofont-opposite ",
	"icofont-optic ",
	"icofont-options ",
	"icofont-package ",
	"icofont-page ",
	"icofont-paint ",
	"icofont-paper-plane ",
	"icofont-paperclip ",
	"icofont-papers ",
	"icofont-pay ",
	"icofont-penguin-linux ",
	"icofont-pestle ",
	"icofont-phone-circle ",
	"icofont-phone ",
	"icofont-picture ",
	"icofont-pine ",
	"icofont-pixels ",
	"icofont-plugin ",
	"icofont-plus-circle ",
	"icofont-plus-square ",
	"icofont-plus ",
	"icofont-polygonal ",
	"icofont-power ",
	"icofont-price ",
	"icofont-print ",
	"icofont-puzzle ",
	"icofont-qr-code ",
	"icofont-queen ",
	"icofont-question-circle ",
	"icofont-question-square ",
	"icofont-question ",
	"icofont-quote-left ",
	"icofont-quote-right ",
	"icofont-random ",
	"icofont-recycle ",
	"icofont-refresh ",
	"icofont-repair ",
	"icofont-reply-all ",
	"icofont-reply ",
	"icofont-resize ",
	"icofont-responsive ",
	"icofont-retweet ",
	"icofont-road ",
	"icofont-robot ",
	"icofont-royal ",
	"icofont-rss-feed ",
	"icofont-safety ",
	"icofont-sale-discount ",
	"icofont-satellite ",
	"icofont-send-mail ",
	"icofont-server ",
	"icofont-settings-alt ",
	"icofont-settings ",
	"icofont-share-alt ",
	"icofont-share-boxed ",
	"icofont-share ",
	"icofont-shield ",
	"icofont-shopping-cart ",
	"icofont-sign-in ",
	"icofont-sign-out ",
	"icofont-signal ",
	"icofont-site-map ",
	"icofont-smart-phone ",
	"icofont-soccer ",
	"icofont-sort-alt ",
	"icofont-sort ",
	"icofont-space ",
	"icofont-spanner ",
	"icofont-speech-comments ",
	"icofont-speed-meter ",
	"icofont-spinner-alt-1 ",
	"icofont-spinner-alt-2 ",
	"icofont-spinner-alt-3 ",
	"icofont-spinner-alt-4 ",
	"icofont-spinner-alt-5 ",
	"icofont-spinner-alt-6 ",
	"icofont-spinner ",
	"icofont-spreadsheet ",
	"icofont-square ",
	"icofont-ssl-security ",
	"icofont-star-alt-1 ",
	"icofont-star-alt-2 ",
	"icofont-star ",
	"icofont-street-view ",
	"icofont-support-faq ",
	"icofont-tack-pin ",
	"icofont-tag ",
	"icofont-tags ",
	"icofont-tasks-alt ",
	"icofont-tasks ",
	"icofont-telephone ",
	"icofont-telescope ",
	"icofont-terminal ",
	"icofont-thumbs-down ",
	"icofont-thumbs-up ",
	"icofont-tick-boxed ",
	"icofont-tick-mark ",
	"icofont-ticket ",
	"icofont-tie ",
	"icofont-toggle-off ",
	"icofont-toggle-on ",
	"icofont-tools-alt-2 ",
	"icofont-tools ",
	"icofont-touch ",
	"icofont-traffic-light ",
	"icofont-transparent ",
	"icofont-tree ",
	"icofont-unique-idea ",
	"icofont-unlock ",
	"icofont-unlocked ",
	"icofont-upload-alt ",
	"icofont-upload ",
	"icofont-usb-drive ",
	"icofont-usb ",
	"icofont-vector-path ",
	"icofont-verification-check ",
	"icofont-wall-clock ",
	"icofont-wall ",
	"icofont-wallet ",
	"icofont-warning-alt ",
	"icofont-warning ",
	"icofont-water-drop ",
	"icofont-web ",
	"icofont-wheelchair ",
	"icofont-wifi-alt ",
	"icofont-wifi ",
	"icofont-world ",
	"icofont-zigzag ",
	"icofont-zipped ",
	"icofont-xs ",
	"icofont-sm ",
	"icofont-md ",
	"icofont-lg ",
	"icofont-1x ",
	"icofont-2x ",
	"icofont-3x ",
	"icofont-4x ",
	"icofont-5x ",
	"icofont-6x ",
	"icofont-7x ",
	"icofont-8x ",
	"icofont-9x ",
	"icofont-10x ",
	"icofont-fw ",
	"icofont-ul ",
	"icofont-border ",
	"icofont-spin ",
	"icofont-pulse",
];

// * Text
const Text = ({
	style = "",
	tagName,
	isLink,
	linkTo,
	id,
	target = "_self",
	children,
	variant,
	onClick,
	...rest
}) => {
	const [customTag, setCustomTag] = useState(tagName || "div");
	const [variantValue, setVariantValue] = useState("");

	useEffect(() => {
		if (isLink) {
			setCustomTag("a");
		} else {
			setCustomTag(tagName || "div");
		}
	}, [isLink, tagName]);

	useEffect(() => {
		if (variant == "1") {
			setVariantValue(
				"relative text-3xl font-bold  cursor-pointer transition hover:bg-blue-900 duration-500 ease-in-out hover:text-blue-500  hover:after:w-full after:absolute after:-bottom-2 after:left-0 after:w-2 after:h-2 after:bg-blue-500 after:transition-all after:duration-500 after:ease-in-out "
			);
		}
	}, [variant]);

	const CustomTag = customTag.toLowerCase();

	return (
		<CustomTag
			{...rest}
			onClick={onClick}
			id={id}
			className={` ${style} ${variantValue} `}
			{...(isLink && {
				href: linkTo,
				target: target,
			})}
			// dangerouslySetInnerHTML={{ __html: content }}
		>
			{children}
		</CustomTag>
	);
};

// * Block
const Block = ({
	tagName,
	style = "",
	children,
	isLink,
	linkTo,
	target = "_self",
	...rest
}) => {
	const [customTag, setCustomTag] = useState(tagName || "div"); // *Use prop value or default to "div"

	useEffect(() => {
		if (isLink) {
			setCustomTag("a");
		} else {
			setCustomTag(tagName || "div");
		}
	}, [isLink, tagName]);

	const CustomTag = customTag.toLowerCase();
	return (
		<CustomTag
			{...rest}
			className={` ${style} `}
			{...(isLink && {
				href: linkTo,
				target: target,
			})}>
			{children}
		</CustomTag>
	);
};

// * Tabs
const Tabs = ({
	style = "",
	children,
	active,
	orientation,
	navWrapStyle = "",
	panelWrapStyle = "",
	...rest
}) => {
	const [activeTab, setActiveTab] = useState(active || null);

	const handleTabClick = (value) => {
		setActiveTab(value);
	};

	return (
		<div
			{...rest}
			className={`${style} ${orientation === "vertical" ? "flex" : ""}`}>
			<div
				className={` ${navWrapStyle} ${
					orientation === "vertical" ? "flex-col" : ""
				}`}>
				{React.Children.map(children, (child) => {
					if (child.type === TabsNav) {
						return React.cloneElement(child, {
							activeTab,
							onTabClick: handleTabClick,
							orientation,
						});
					}
					return null;
				})}
			</div>
			<div className={` ${panelWrapStyle} `}>
				{React.Children.map(children, (child) => {
					if (child.type === TabPanel && child.props.value === activeTab) {
						return child;
					}
					return null;
				})}
			</div>
		</div>
	);
};

// * TabsNav
const TabsNav = ({
	style = "",
	children,
	activeTab,
	onTabClick,
	orientation,
	tabAreaStyle = "",
	buttonStyle = "",
	nextButtonStyle = "",
	prevButtonStyle = "",
	disabledStyle = "",
	showButton = false,
	prevButtonText,
	nextButtonText,
	activeTabStyle = "",
	iconButtonStyle = "",
	iconLibrary,
	nextIcon,
	prevIcon,
	nextIconPosition = "right",
	prevIconPosition = "left",
	buttonTextEnabled = false,
	...rest
}) => {
	const tabsRef = useRef(null);
	console.log("showButton : ", showButton);
	console.log(typeof showButton);
	console.log("buttonTextEnabled: ", buttonTextEnabled);

	const scrollPrev = () => {
		const tabs = Array.from(tabsRef.current.children);
		const activeIndex = tabs.findIndex(
			(tab) => tab.dataset.value === activeTab
		);
		if (activeIndex > 0) {
			const prevTab = tabs[activeIndex - 1];
			onTabClick(prevTab.dataset.value);
			prevTab.scrollIntoView({ behavior: "smooth", block: "nearest" });
		}
	};

	const scrollNext = () => {
		const tabs = Array.from(tabsRef.current.children);
		const activeIndex = tabs.findIndex(
			(tab) => tab.dataset.value === activeTab
		);
		if (activeIndex < tabs.length - 1) {
			const nextTab = tabs[activeIndex + 1];
			onTabClick(nextTab.dataset.value);
			nextTab.scrollIntoView({ behavior: "smooth", block: "nearest" });
		}
	};
	//  console.log(children[0])
	const isFirstTabActive = activeTab === children[0].props.value;
	const isLastTabActive =
		activeTab === children[children.length - 1].props.value;

	return (
		<div
			{...rest}
			className={`${style} ${
				orientation === "vertical" ? "flex-col" : "flex"
			}`}>
			{showButton == true && (
				<button
					className={` ${buttonStyle} ${prevButtonStyle} ${
						showButton ? "" : "hidden"
					} ${isFirstTabActive ? "disabled " + disabledStyle : ""}`}
					onClick={scrollPrev}
					disabled={isFirstTabActive}>
					{prevIconPosition == "left" && (
						<Icon
							iconLibrary={iconLibrary}
							icon={prevIcon}
							iconStyle={iconButtonStyle}
						/>
					)}
					{buttonTextEnabled && <>{prevButtonText}</>}
					{prevIconPosition == "right" && (
						<Icon
							iconLibrary={iconLibrary}
							icon={prevIcon}
							iconStyle={iconButtonStyle}
						/>
					)}
				</button>
			)}
			<div ref={tabsRef} className={` ${tabAreaStyle}`} style={{}}>
				{React.Children.map(children, (child) => {
					return React.cloneElement(child, {
						isActive: child.props.value === activeTab,
						activeTabStyle: child.props.activeTabStyle
							? child.props.activeTabStyle
							: activeTabStyle,
						onClick: () => onTabClick(child.props.value),
						orientation,
					});
				})}
			</div>
			{showButton == true && (
				<button
					className={` ${buttonStyle} ${nextButtonStyle} ${
						showButton ? "" : "hidden"
					}  ${isLastTabActive ? "disabled " + disabledStyle : ""}`}
					onClick={scrollNext}
					disabled={isLastTabActive}>
					{nextIconPosition == "left" && (
						<Icon
							iconLibrary={iconLibrary}
							icon={nextIcon}
							iconStyle={iconButtonStyle}
						/>
					)}
					{buttonTextEnabled && <>{nextButtonText}</>}
					{nextIconPosition == "right" && (
						<Icon
							iconLibrary={iconLibrary}
							icon={nextIcon}
							iconStyle={iconButtonStyle}
						/>
					)}
				</button>
			)}
		</div>
	);
};

// * Tab
const Tab = ({
	style = "",
	activeTabStyle = "",
	value,
	isActive,
	onClick,
	children,
	orientation,
	...rest
}) => {
	return (
		<button
			{...rest}
			className={`${style} ${isActive ? activeTabStyle : ""} ${
				orientation === "vertical" ? "block" : "inline-block"
			}`}
			onClick={onClick}
			data-value={value}>
			{children}
		</button>
	);
};

// * TabPanel
const TabPanel = ({ style = "", value, children, ...rest }) => {
	return (
		<div {...rest} className={` ${style} `}>
			{children}
		</div>
	);
};

// * MasonryGrid

const MasonryGrid = ({
	tagName,
	style = "",
	children,
	itemSelector = ".combo-masonry-item",
	columnWidth,
	percentPosition,
	gutter,
	fitWidth,
	horizontalOrder,
	originLeft,
	originTop,
	resize,
}) => {
	const [customTag, setCustomTag] = useState(tagName || "div");
	const CustomTag = customTag.toLowerCase();

	const [masonryOptions, setMasonryOptions] = useState({
		itemSelector: itemSelector,
	});

	useEffect(() => {
		const updatedOptions = {};

		if (columnWidth !== undefined && columnWidth > 0) {
			updatedOptions.columnWidth = columnWidth;
		}

		if (gutter !== undefined && gutter > 0) {
			updatedOptions.gutter = gutter;
		}
		if (percentPosition !== undefined && percentPosition > 0) {
			updatedOptions.percentPosition = percentPosition;
		}
		if (fitWidth !== undefined && fitWidth > 0) {
			updatedOptions.fitWidth = fitWidth;
		}
		if (horizontalOrder !== undefined && horizontalOrder > 0) {
			updatedOptions.horizontalOrder = horizontalOrder;
		}
		if (originLeft !== undefined && originLeft > 0) {
			updatedOptions.originLeft = originLeft;
		}
		if (originTop !== undefined && originTop > 0) {
			updatedOptions.originTop = originTop;
		}
		if (resize !== undefined && resize > 0) {
			updatedOptions.resize = resize;
		}

		setMasonryOptions((prevOptions) => ({
			...prevOptions,
			...updatedOptions,
		}));
	}, [
		columnWidth,
		percentPosition,
		gutter,
		fitWidth,
		horizontalOrder,
		originLeft,
		originTop,
		resize,
	]);

	useEffect(() => {
		const layoutMasonry = () => {
			const elem = ".combo-masonry";
			const elemX = document.querySelector(elem);
			if (elemX) {
				imagesLoaded(elemX, function () {
					new Masonry(elemX, masonryOptions);
				});
			}
		};

		const timeout = setTimeout(layoutMasonry, 1000);

		return () => clearTimeout(timeout);
	}, [masonryOptions]);

	return (
		<CustomTag className={` ${style} combo-masonry `}>
			{React.Children.map(children, (child) => {
				return React.cloneElement(child, {
					gutter: child.props.gutter ? child.props.gutter : gutter,
					columnWidth: child.props.columnWidth
						? child.props.columnWidth
						: columnWidth,
					// iconStyle: child.props.iconStyle ? child.props.iconStyle : iconStyle,
					// icon: child.props.icon ? child.props.icon : icon,
				});
			})}
		</CustomTag>
	);
};

// * MasonryGridItem
const MasonryGridItem = ({
	tagName,
	style = "",
	children,
	gutter,
	columnWidth,
}) => {
	const [customTag, setCustomTag] = useState(tagName || "div");
	const CustomTag = customTag.toLowerCase();
	const gutterX = {
		marginBottom: `${gutter}px`,
		width: `${columnWidth}px`,
	};

	return (
		<CustomTag className={` ${style} combo-masonry-item `} style={gutterX}>
			{children}
		</CustomTag>
	);
};

// * List
const List = ({
	list = [],
	tagName,
	style = "",
	listStyle = "",
	iconLibrary,
	icon,
	iconStyle = "",
	iconPosition = "before",
	...rest
}) => {
	const [customTag, setCustomTag] = useState(tagName || "ol");
	const CustomTag = customTag.toLowerCase();
	return (
		<CustomTag {...rest} className={` ${style ? style : ""} `}>
			{list.map((item, index) => {
				return (
					<li key={index} className={` ${listStyle ? listStyle : ""} `}>
						{iconPosition == "before" && (
							<Icon
								iconLibrary={iconLibrary}
								icon={icon}
								iconStyle={iconStyle}
							/>
						)}

						<span dangerouslySetInnerHTML={{ __html: item }} />
						{iconPosition == "after" && (
							<Icon
								iconLibrary={iconLibrary}
								icon={icon}
								iconStyle={iconStyle}
							/>
						)}
					</li>
				);
			})}
		</CustomTag>
	);
};

// * ImageGallery

const ImageGallery = ({
	tagName,
	style = "",
	children,
	imageCaption,
	captionEnabled,
	captionStyle,
	lightBox,
	lightBoxStyle,
	lightBoxImageStyle,
	lightBoxImageSrc,
	lightBoxCaption,
	lightBoxCaptionEnabled,
	lightBoxCaptionStyle,
	closeButtonStyle,
}) => {
	const [customTag, setCustomTag] = useState(tagName || "div");
	const CustomTag = customTag.toLowerCase();
	return (
		<CustomTag className={` ${style} `}>
			{React.Children.map(children, (child) => {
				return React.cloneElement(child, {
					imageCaption: child.props.imageCaption
						? child.props.imageCaption
						: imageCaption,
					captionEnabled: child.props.captionEnabled
						? child.props.captionEnabled
						: captionEnabled,
					captionStyle: child.props.captionStyle
						? child.props.captionStyle
						: captionStyle,
					lightBox: child.props.lightBox ? child.props.lightBox : lightBox,
					lightBoxStyle: child.props.lightBoxStyle
						? child.props.lightBoxStyle
						: lightBoxStyle,
					lightBoxImageStyle: child.props.lightBoxImageStyle
						? child.props.lightBoxImageStyle
						: lightBoxImageStyle,
					lightBoxImageSrc: child.props.lightBoxImageSrc
						? child.props.lightBoxImageSrc
						: lightBoxImageSrc,
					lightBoxCaption: child.props.lightBoxCaption
						? child.props.lightBoxCaption
						: lightBoxCaption,
					lightBoxCaptionEnabled: child.props.lightBoxCaptionEnabled
						? child.props.lightBoxCaptionEnabled
						: lightBoxCaptionEnabled,
					lightBoxCaptionStyle: child.props.lightBoxCaptionStyle
						? child.props.lightBoxCaptionStyle
						: lightBoxCaptionStyle,
					closeButtonStyle: child.props.closeButtonStyle
						? child.props.closeButtonStyle
						: closeButtonStyle,
				});
			})}
		</CustomTag>
	);
};

// * Image
const Image = ({
	src,
	isLink,
	linkTo,
	target = "_self",
	tagName,
	style = "",
	imageStyle,
	lightBox,
	altText,
	imageCaption,
	captionEnabled,
	captionStyle,
	lightBoxStyle,
	lightBoxImageStyle,
	lightBoxImageSrc,
	lightBoxCaption,
	lightBoxCaptionEnabled,
	lightBoxCaptionStyle,
	closeButtonStyle,
	lazyLoad,
}) => {
	const [customTag, setCustomTag] = useState(tagName || "div");
	const [isOpen, setIsOpen] = useState(false);
	const [lightboxSrc, setLightboxSrc] = useState("");

	useEffect(() => {
		if (isLink) {
			setCustomTag("a");
		} else {
			setCustomTag(tagName || "div");
		}
	}, [isLink, tagName]);

	const openLightbox = () => {
		setLightboxSrc(src);
		setIsOpen(true);
	};

	const closeLightbox = () => {
		setIsOpen(false);
	};

	// const CustomTag = customTag.charAt(0).toUpperCase() + customTag.slice(1);

	const CustomTag = customTag.toLowerCase();

	return (
		<CustomTag
			className={` ${style} `}
			{...(isLink && {
				href: linkTo,
				target: target,
			})}>
			<figure className=" flex flex-col items-center">
				<img
					className={` ${
						imageStyle ? imageStyle : ""
					} max-w-full h-auto shadow-lg `}
					src={
						src ||
						"https://images.pexels.com/photos/127428/pexels-photo-127428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					}
					alt={altText || imageCaption || "Description of the image"}
					onClick={linkTo ? undefined : lightBox ? openLightbox : undefined}
				/>
				{captionEnabled && (
					<figcaption
						className={` ${
							captionStyle ? captionStyle : ""
						} text-gray-600 text-sm mt-2 `}>
						{imageCaption || altText || "This is the caption for the image."}
					</figcaption>
				)}
			</figure>
			{isOpen && (
				<div
					className={` ${
						lightBoxStyle ? lightBoxStyle : ""
					} fixed top-0 left-0 w-full h-full bg-black bg-opacity-85 flex justify-center items-center z-20 overflow-auto `}>
					<div className="flex flex-col items-center">
						<button
							className={` ${
								closeButtonStyle ? closeButtonStyle : ""
							} absolute top-0 right-0 m-2 h-8 w-8 flex items-center justify-center bg-red-500 rounded-full text-black hover:bg-gray-200  text-base `}
							onClick={closeLightbox}>
							&times;
						</button>
						<img
							src={
								lightBoxImageSrc ||
								src ||
								"https://images.pexels.com/photos/127428/pexels-photo-127428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
							}
							alt={altText || "lightbox"}
							className={` ${
								lightBoxImageStyle ? lightBoxImageStyle : ""
							} max-w-[95%] w-full rounded-md  max-h-full`}
						/>
						{lightBoxCaptionEnabled && (
							<figcaption
								className={` ${
									lightBoxCaptionStyle ? lightBoxCaptionStyle : ""
								} text-gray-400 text-sm mt-2 text-center `}>
								{lightBoxCaption ||
									imageCaption ||
									altText ||
									"This is the caption for the image."}
							</figcaption>
						)}
					</div>
				</div>
			)}
		</CustomTag>
	);
};

// * IconButton

const IconButton = ({
	tagName,
	style = "",
	text,
	textStyle = "",
	linkStyle = "",
	iconLibrary = "font-awesome",
	icon,
	iconPosition = "beforePrefix",
	iconStyle = "",
	isLink = false,
	linkTo = "#",
	target = "_self",
	prefix,
	prefixStyle = "",
	postfix,
	postfixStyle = "",
	textOnClick,
	iconOnClick,
	onClick,
}) => {
	const [customTag, setCustomTag] = useState(tagName || "div");
	const CustomTag = customTag.toLowerCase();
	const [iconX, setIconX] = useState(false);

	return (
		<CustomTag className={` ${style} `} onClick={onClick}>
			{iconPosition == "beforePrefix" && (
				<Icon
					iconLibrary={iconLibrary}
					icon={icon}
					iconStyle={iconStyle}
					onClick={iconOnClick}
				/>
			)}
			{prefix && (
				<span
					className={` ${prefixStyle} `}
					dangerouslySetInnerHTML={{ __html: prefix }}
				/>
			)}
			{iconPosition == "afterPrefix" && (
				<Icon
					iconLibrary={iconLibrary}
					icon={icon}
					iconStyle={iconStyle}
					onClick={iconOnClick}
				/>
			)}
			{isLink && (
				<>
					{iconPosition == "beforeLink" && (
						<Icon
							iconLibrary={iconLibrary}
							icon={icon}
							iconStyle={iconStyle}
							onClick={iconOnClick}
						/>
					)}

					<a
						className={` ${textStyle} `}
						{...(isLink && {
							href: linkTo,
							target: target,
						})}>
						{iconPosition == "beforeText" && (
							<Icon
								iconLibrary={iconLibrary}
								icon={icon}
								iconStyle={iconStyle}
							/>
						)}
						<span
							className={` ${textStyle} `}
							onClick={textOnClick}
							dangerouslySetInnerHTML={{ __html: text }}
						/>
						{iconPosition == "afterText" && (
							<Icon
								iconLibrary={iconLibrary}
								icon={icon}
								iconStyle={iconStyle}
							/>
						)}
					</a>

					{iconPosition == "afterLink" && (
						<Icon
							iconLibrary={iconLibrary}
							icon={icon}
							iconStyle={iconStyle}
							onClick={iconOnClick}
						/>
					)}
				</>
			)}

			{!isLink && (
				<>
					{iconPosition == "beforeText" && (
						<Icon
							iconLibrary={iconLibrary}
							icon={icon}
							iconStyle={iconStyle}
							onClick={iconOnClick}
						/>
					)}
					<span
						className={` ${textStyle} `}
						onClick={textOnClick}
						dangerouslySetInnerHTML={{ __html: text }}
					/>
					{iconPosition == "afterText" && (
						<Icon
							iconLibrary={iconLibrary}
							icon={icon}
							iconStyle={iconStyle}
							onClick={iconOnClick}
						/>
					)}
				</>
			)}

			{iconPosition == "beforePostfix" && (
				<Icon
					iconLibrary={iconLibrary}
					icon={icon}
					iconStyle={iconStyle}
					onClick={iconOnClick}
				/>
			)}
			{prefix && (
				<span
					className={` ${postfixStyle} `}
					dangerouslySetInnerHTML={{ __html: postfix }}
				/>
			)}
			{iconPosition == "afterPostfix" && (
				<Icon
					iconLibrary={iconLibrary}
					icon={icon}
					iconStyle={iconStyle}
					onClick={iconOnClick}
				/>
			)}
		</CustomTag>
	);
};

// * Icon
const Icon = ({
	// icon = '<span class="material-icons ">search</span>',
	icon,
	iconStyle,
	iconLibrary = "material-icons",
	isLink,
	linkTo = "",
	target = "_self",
	onClick,
}) => {
	useEffect(() => {
		const link = document.createElement("link");
		link.href = getStylesheetUrl(iconLibrary);
		link.rel = "stylesheet";
		document.head.appendChild(link);
		return () => {
			document.head.removeChild(link);
		};
	}, [iconLibrary]);

	const getStylesheetUrl = (iconLibrary) => {
		switch (iconLibrary) {
			case "material-icons":
				return "https://fonts.googleapis.com/icon?family=Material+Icons";
			case "material-icons-outlined":
				return "https://fonts.googleapis.com/icon?family=Material+Icons+Outlined";
			case "material-icons-round":
				return "https://fonts.googleapis.com/icon?family=Material+Icons+Round";
			case "material-icons-sharp":
				return "https://fonts.googleapis.com/icon?family=Material+Icons+Sharp";
			case "material-icons-two-tone":
				return "https://fonts.googleapis.com/icon?family=Material+Icons+Two+Tone";
			case "bootstrap-icons":
				return "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css";
			case "font-awesome":
				return "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css";
			case "icon-font":
				return "https://cdn.jsdelivr.net/npm/@icon/icofont@1.0.1-alpha.1/icofont.min.css";

			default:
				return "";
		}
	};

	// const iconHtml = `<i class="${icon}"></i>`;
	const iconHtml =
		iconLibrary === "font-awesome"
			? `<i class="fa-solid ${icon}"></i>`
			: `<i class="${icon}"></i>`;

	return (
		<>
			{(isLink || linkTo) && (
				<a
					href={linkTo || "#"}
					target={target}
					className={` ${iconStyle ? iconStyle : ""} `}
					onClick={onClick}
					dangerouslySetInnerHTML={{ __html: iconHtml }}
				/>
			)}
			{(!isLink || !linkTo) && (
				<span
					className={` ${iconStyle ? iconStyle : ""} `}
					onClick={onClick}
					dangerouslySetInnerHTML={{ __html: iconHtml }}
				/>
			)}
		</>
	);
};

// * Grid
const Grid = ({ tagName, style, children }) => {
	const [customTag, setCustomTag] = useState(tagName || "div");
	const CustomTag = customTag.toLowerCase();

	return (
		<CustomTag className={` ${style ? style : ""} grid grid-cols-3 `}>
			{children}
		</CustomTag>
	);
};

// * GridItem
const GridItem = ({ style, children, isLink, linkTo, target, tagName }) => {
	const [customTag, setCustomTag] = useState(tagName || "div");
	const CustomTag = customTag.toLowerCase();
	useEffect(() => {
		if (isLink) {
			setCustomTag("a");
		} else {
			setCustomTag(tagName || "div");
		}
	}, [isLink, tagName]);

	return (
		<CustomTag
			className={`itemstyle ${style}`}
			{...(isLink && {
				href: linkTo,
				target: target,
			})}>
			{children}
		</CustomTag>
	);
};

// * Flex
const Flex = ({ tagName, style, children }) => {
	const [customTag, setCustomTag] = useState(tagName || "div");
	const CustomTag = customTag.toLowerCase();

	return (
		<CustomTag className={` ${style ? style : ""} flex gap-2 flex-wrap `}>
			{children}
		</CustomTag>
	);
};

// * FlexItem
const FlexItem = ({
	style,
	children,
	isLink,
	linkTo,
	target = "_self",
	tagName,
}) => {
	const [customTag, setCustomTag] = useState(tagName || "div");
	const CustomTag = customTag.toLowerCase();
	useEffect(() => {
		if (isLink) {
			setCustomTag("a");
		} else {
			setCustomTag(tagName || "div");
		}
	}, [isLink, tagName]);

	return (
		<CustomTag
			className={`itemstyle ${style}`}
			{...(isLink && {
				href: linkTo,
				target: target,
			})}>
			{children}
		</CustomTag>
	);
};

// *ComboList
const ComboList = ({
	tagName,
	style = "",
	children,
	iconPosition,
	icon,
	iconLibrary,
	iconStyle,
}) => {
	const [customTag, setCustomTag] = useState(tagName || "ol");
	const CustomTag = customTag.toLowerCase();

	return (
		<CustomTag className={` ${style} `}>
			{React.Children.map(children, (child) => {
				return React.cloneElement(child, {
					iconPosition: child.props.iconPosition
						? child.props.iconPosition
						: iconPosition,
					iconLibrary: child.props.iconLibrary
						? child.props.iconLibrary
						: iconLibrary,
					iconStyle: child.props.iconStyle ? child.props.iconStyle : iconStyle,
					icon: child.props.icon ? child.props.icon : icon,
				});
			})}
		</CustomTag>
	);
};

// * ComboListItem
const ComboListItem = ({
	tagName,
	style = "",
	children,
	iconPosition,
	icon,
	iconLibrary,
	iconStyle,
}) => {
	const [customTag, setCustomTag] = useState(tagName || "li");
	const CustomTag = customTag.toLowerCase();

	return (
		<CustomTag className={` ${style} `}>
			{iconPosition === "before" && icon && (
				<Icon iconLibrary={iconLibrary} icon={icon} iconStyle={iconStyle} />
			)}
			{children}
			{iconPosition === "after" && icon && (
				<Icon iconLibrary={iconLibrary} icon={icon} iconStyle={iconStyle} />
			)}
		</CustomTag>
	);
};

// * Accordion
const Accordion = ({
	tagName,
	style = "",
	children,
	active,
	deactivate,
	headerStyle = "",
	activeHeaderStyle = "",
	deactivateHeaderStyle = "",
	detailsStyle = "",
	variant,
}) => {
	const [customTag, setCustomTag] = useState(tagName || "div");
	const CustomTag = customTag.toLowerCase();

	const [variantValue, setVariantValue] = useState({
		style: "",
		headerStyle: "",
		activeHeaderStyle: "",
		deactivateHeaderStyle: "",
		detailsStyle: "",
	});

	useEffect(() => {
		if (variant == "1") {
			setVariantValue({
				style: "my-2",
				headerStyle:
					"flex gap-2 items-center bg-neutral-900 hover:bg-neutral-800 px-4 py-2 border-[1px] rounded-lg cursor-pointer",
				activeHeaderStyle: "!rounded-t-lg rounded-b-none",
				deactivateHeaderStyle:
					"!bg-neutral-700 hover:!bg-neutral-700 !cursor-default",
				detailsStyle: "",
			});
		}
		if (variant == "2") {
			setVariantValue({
				style: "my-2",
				headerStyle:
					"flex gap-2 items-center bg-white border-2 border-transparent hover:border-2 hover:border-black px-4 py-2 rounded-lg !text-black text-xl !font-medium cursor-pointer",
				activeHeaderStyle: "!rounded-t-lg rounded-b-none !bg-black !text-white",
				deactivateHeaderStyle:
					"!bg-neutral-700 hover:!bg-neutral-700 !text-white !cursor-default",
				detailsStyle: "bg-black rounded-b-lg ",
			});
		}
		if (variant == "3") {
			setVariantValue({
				style:
					"my-3 drop-shadow-[5px_5px_0px_#0A0A0A] hover:drop-shadow-[5px_5px_4px_#0A0A0A] ",
				headerStyle:
					"flex gap-2 items-center bg-zinc-800 px-4 py-2 !text-amber-400 text-xl !font-medium cursor-pointer",
				activeHeaderStyle: "",
				deactivateHeaderStyle:
					"!bg-neutral-700 !text-amber-200 !cursor-default",
				detailsStyle: " ",
			});
		}
	}, [variant]);

	function generateUniqueId() {
		const randomPart = Math.random().toString(36).substr(2, 9);
		const timestampPart = Date.now().toString(36);
		const uniqueId = "a" + randomPart + timestampPart;
		return uniqueId;
	}

	const id = generateUniqueId();

	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		if (active == true) {
			setIsActive(true);
		}
	}, [active]);

	var max = "400px";
	var min = `max-h-[${max}]`;

	return (
		<CustomTag className={` ${style} ${variant ? variantValue.style : ""} `}>
			<div
				className={` select-none ${isActive ? activeHeaderStyle : ""} ${
					deactivate ? deactivateHeaderStyle : ""
				} ${headerStyle} ${
					variant ? (isActive ? variantValue.activeHeaderStyle : "") : ""
				}  ${
					variant ? (deactivate ? variantValue.deactivateHeaderStyle : "") : ""
				} ${variant ? variantValue.headerStyle : ""}`}
				onClick={() => {
					if (!deactivate) {
						setIsActive(!isActive);
					}
				}}>
				{React.Children.map(children, (child) => {
					if (child.type === AccordionHeader) {
						return React.cloneElement(child, {
							id: id,
							active: active,
							isActive: isActive,
							deactivate: deactivate,
							variant: variant,
						});
					}
					return null;
				})}
			</div>
			<div
				className={`  ${
					isActive ? min : "max-h-0 overflow-hidden"
				} transition-all duration-300 ${detailsStyle} ${
					variant ? variantValue.detailsStyle : ""
				} `}>
				{React.Children.map(children, (child) => {
					if (child.type === AccordionDetails) {
						return React.cloneElement(child, {
							id: id,
							active: active,
							deactivate: deactivate,
							variant: variant,
						});
					}
					return null;
				})}
			</div>
		</CustomTag>
	);
};

// * AccordionHeader
const AccordionHeader = ({
	tagName,
	style = "",
	activeStyle = "",
	children,
	iconLibrary,
	icon,
	toggleIcon,
	toggleIconLibrary,
	toggleIconStyle,
	iconPosition = "before",
	iconStyle,
	id,
	active,
	isActive,
	deactivate,
	deactivateStyle = "",
	labelStyle = "",
	variant,
}) => {
	const [customTag, setCustomTag] = useState(tagName || "div");
	const CustomTag = customTag.toLowerCase();

	const [iconStyleX, setIconStyleX] = useState(iconStyle);
	const [toggleIconStyleX, setToggleIconStyleX] = useState(toggleIconStyle);

	const [variantValue, setVariantValue] = useState({
		iconStyle: "",
		labelStyle: "",
		toggleIconStyle: "",
	});
	useEffect(() => {
		if (variant == "1") {
			setVariantValue({
				iconStyle: "",
				labelStyle: "",
				toggleIconStyle: "",
			});
		}
		if (variant == true) {
			setIconStyleX(iconStyle + " " + variantValue.iconStyle);
			setToggleIconStyleX(toggleIconStyle + " " + variantValue.toggleIconStyle);
		}
	}, [variant]);
	// const [isActive, setIsActive] = useState(false);
	// console.log(isActive);
	var ids = `#${id}`;
	console.log(ids);
	const toggleExpansion = () => {
		if (!deactivate) {
			// setIsActive(!isActive);

			const contentElement = document.querySelector(`#${id}`);
			if (contentElement) {
				// contentElement.style.display = !isActive ? "block" : "none";
			}
		}
	};

	useEffect(() => {
		if (active) {
			// setIsActive(true);
		}
	}, [active]);

	return (
		<>
			{/* <CustomTag
			className={` ${isActive ? activeStyle : ""} ${
				deactivate ? deactivateStyle : ""
			} ${style}`}
			// onClick={toggleExpansion}
		> */}
			{iconPosition === "before" && icon && (
				<>
					{!isActive && (
						<Icon
							iconLibrary={iconLibrary}
							icon={icon}
							iconStyle={iconStyleX}
						/>
					)}
					{isActive && (icon || toggleIcon) && (
						<Icon
							iconLibrary={toggleIconLibrary ? toggleIconLibrary : iconLibrary}
							icon={toggleIcon ? toggleIcon : icon}
							iconStyle={toggleIconStyle ? toggleIconStyleX : iconStyleX}
						/>
					)}
				</>
			)}
			<span
				className={` ${labelStyle} ${variant ? variantValue.labelStyle : ""} `}>
				{children}
			</span>

			{iconPosition === "after" && icon && (
				<>
					{!isActive && (
						<Icon
							iconLibrary={iconLibrary}
							icon={icon}
							iconStyle={iconStyleX}
						/>
					)}
					{isActive && toggleIcon && (
						<Icon
							iconLibrary={toggleIconLibrary}
							icon={toggleIcon}
							iconStyle={toggleIconStyle ? toggleIconStyleX : iconStyleX}
						/>
					)}
				</>
			)}
			{/* </CustomTag> */}
		</>
	);
};

// * AccordionDetails
const AccordionDetails = ({
	tagName,
	style = "",
	children,
	id,
	active,
	deactivate,
	variant,
}) => {
	const [customTag, setCustomTag] = useState(tagName || "div");
	const CustomTag = customTag.toLowerCase();

	const [variantValue, setVariantValue] = useState({
		style: "",
	});

	useEffect(() => {
		if (variant == "1") {
			setVariantValue({
				style:
					"bg-neutral-900 px-4 py-4 rounded-b-lg dark:bg-gray-900 border-x border-b !text-gray-200",
			});
		}
		if (variant == "2") {
			setVariantValue({
				style: "px-4 py-1 pb-3 ",
			});
		}
		if (variant == "3") {
			setVariantValue({
				style: "px-4 py-1 pb-3 bg-zinc-800 ",
			});
		}
	}, [variant]);

	return (
		<CustomTag id={id} className={` ${style} ${variantValue.style} `}>
			{children}
		</CustomTag>
	);
};

const AvatarGroup = ({ style = "", children }) => {
	return (
		<div className={` ${style} flex items-center -space-x-2 `}>
			{!children ? (
				<>
					<Avatar />
					<Avatar />
				</>
			) : (
				<>{children}</>
			)}
		</div>
	);
};

// * Avatar
const Avatar = ({
	style = "",
	name,
	// children,
	src,
	altText,
	imageStyle = "",
	onClick,
}) => {
	if (name !== undefined) {
		if (name.split(" ").length > 1) {
			var nameX = `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`;
		} else {
			var nameX = `${name[0]}`;
		}
	}
	return (
		<div
			className={` ${style} flex justify-center items-center w-12 h-12 bg-gray-500  rounded-full text-[1.25rem] leading-none overflow-hidden `}
			{...(name && { title: name })}
			onClick={onClick}>
			{/* {!children && (
				<> */}
			{src && (
				<img
					src={src}
					alt={altText || "alt text"}
					className={` ${imageStyle} max-w-full h-auto object-cover text-transparent text-center rounded-full `}
				/>
			)}

			{!src && name && <>{nameX || "A"}</>}
			{!src && !name && <Icon icon="fa-user" iconLibrary="font-awesome" />}
			{/* </>
			)} */}
			{/* {children} */}
		</div>
	);
};

// * Badge
const Badge = ({
	style,
	badgeStyle,
	position = "top right",
	tagName,
	content,
	maxContent,
	children,
}) => {
	const [customTag, setCustomTag] = useState(tagName || "span");
	const CustomTag = customTag.toLowerCase();
	// Check if position contains "top" or "bottom" and "left" or "right"
	const isTop = position.includes("top");
	const isBottom = position.includes("bottom");
	const isLeft = position.includes("left");
	const isRight = position.includes("right");

	// Assigning vertical and horizontal classes based on position values
	const verticalClass = isTop ? "top" : isBottom ? "bottom" : "top";
	const horizontalClass = isLeft ? "left" : isRight ? "right" : "right";

	let displayContent = content; // By default, content remains the same

	// If maxContent is not passed and content is divisible by 100, adjust content
	if (!maxContent && content % 100 === 0 && content !== "0") {
		content -= 1;
		content += "+";
		displayContent = content;
	} else if (!maxContent && content === 0) {
		displayContent = "0";
	}
	// Adjust content based on maxContent
	if (maxContent !== undefined) {
		if (content > maxContent) {
			displayContent = maxContent + "+"; // If content is greater than maxContent, set to maxContent and add plus sign
		} else {
			displayContent = content; // If content is less than or equal to maxContent, keep it as it is
		}
	}
	return (
		<CustomTag className={` ${style} relative inline-flex align-middle `}>
			{children}
			<span
				className={` ${badgeStyle} ${isTop ? "top-0" : ""} ${
					isLeft ? "left-0" : ""
				} ${isRight ? "right-0" : ""} ${isBottom ? "bottom-0" : ""} ${
					isTop && isRight ? "translate-x-1/2 -translate-y-1/2 " : ""
				}  ${isTop && isLeft ? "-translate-x-1/2 -translate-y-1/2 " : ""}  ${
					isBottom && isRight ? "translate-x-1/2 translate-y-1/2 " : ""
				}  ${
					isBottom && isLeft ? "-translate-x-1/2 translate-y-1/2 " : ""
				} flex flex-wrap place-content-center items-center absolute font-medium text-[0.75rem] min-w-[20px] h-[20px] bg-gray-900 text-white leading-none px-[6px] rounded-[10px] `}>
				{displayContent}
			</span>
		</CustomTag>
	);
};

// * CodeSnippet
const CodeSnippet = ({
	content,
	lang = "html",
	style = "",
	headerStyle = "",
	bodyStyle = "",
}) => {
	const [copySuccess, setCopySuccess] = useState(null);

	const handleCopyClick = () => {
		navigator.clipboard
			.writeText(content.trim())
			.then(() => setCopySuccess(true))
			.catch(() => setCopySuccess(false));

		// Reset copy success message after 2 seconds
		setTimeout(() => {
			setCopySuccess(null);
		}, 2000);
	};
	return (
		<Code style={` ${style}  rounded-t-lg rounded-b-lg relative`}>
			<CodeHeader
				style={` ${headerStyle} flex items-center justify-between   p-2 w-full bg-[#b4b4b4] text-white rounded-t-lg pl-4 `}>
				<Text style="">{lang}</Text>
				<IconButton
					tagName="button"
					textOnClick={handleCopyClick}
					icon="fa-copy"
					iconLibrary="font-awesome"
					iconStyle="mr-2"
					text={
						copySuccess === null
							? "Copy code"
							: copySuccess === true
							? "Code copied"
							: "Failed to copy"
					}
					style="absolute top-0 right-0 p-2 text-inherit z-10 pr-4 cursor-pointer "
				/>
			</CodeHeader>
			<CodeBody
				content={content}
				language={lang}
				style={` ${bodyStyle} pt-1 px-4 pb-1 text-sm overflow-y-scroll block  `}
			/>
		</Code>
	);
};

// * Code
const Code = ({
	style,
	content,
	tagName = "pre",
	languages = "css",
	styles,
	children,
}) => {
	const [customTag, setCustomTag] = useState(tagName || "pre");
	const CustomTag = customTag.toLowerCase();

	return (
		<CustomTag className={` ${style} `}>
			{/* <SyntaxHighlighter language={languages} style={styles || "vscDarkPlus"}>
				{content}
			</SyntaxHighlighter> */}
			{children}
		</CustomTag>
	);
};

// * CodeHeader
const CodeHeader = ({ tagName, style, children }) => {
	const [customTag, setCustomTag] = useState(tagName || "div");
	const CustomTag = customTag.toLowerCase();
	return <CustomTag className={` ${style} `}>{children}</CustomTag>;
};

// * CodeBody
const CodeBody = ({ tagName, style, language, content }) => {
	const [customTag, setCustomTag] = useState(tagName || "code");
	const CustomTag = customTag.toLowerCase();
	return (
		<SyntaxHighlighter
			className={` ${style} `}
			language={language}
			style={vscDarkPlus}>
			{content}
		</SyntaxHighlighter>
	);
};

// * Divider
const Divider = ({
	tagName,
	style = "",
	children,
	position = "center",
	contentStyle = "",
}) => {
	return (
		<>
			{!children && (
				<hr
					className={` ${style} max-w-full border-b-0 border-t border-t-gray-500 my-1 `}
				/>
			)}
			{children && (
				<>
					{position == "center" && (
						<div className="flex items-center ">
							<span
								className={` ${style} flex-1 border-b-0 border-t border-t-gray-500`}></span>
							<span className={` ${contentStyle} px-2 mx-2 `}>{children}</span>
							<span
								className={` ${style} flex-1 border-b-0 border-t border-t-gray-500`}></span>
						</div>
					)}
					{position == "left" && (
						<div className="flex items-center ">
							<span className={` ${contentStyle} pr-2 mr-2 `}>{children}</span>
							<span
								className={` ${style} flex-1 border-b-0 border-t border-t-gray-500`}></span>
						</div>
					)}
					{position == "right" && (
						<div className="flex items-center ">
							<span
								className={` ${style} flex-1 border-b-0 border-t border-t-gray-500`}></span>
							<span className={` ${contentStyle} pl-2 ml-2 `}>{children}</span>
						</div>
					)}
				</>
			)}
		</>
	);
};

// * Card
const Card = ({ children, style = "" }) => {
	return (
		<div
			className={` ${style} bg-gray-500 rounded shadow text-white overflow-hidden xs:w-full sm:w-full md:w-1/2 lg:w-1/3 xl:1/4 `}>
			{children}
		</div>
	);
};

const CardContent = ({ children, style = "" }) => {
	return <div className={` ${style} p-3 text-left `}>{children}</div>;
};

// * CardMedia
const CardMedia = ({
	children,
	mediaStyle = "",
	style = "",
	src = "https://mui.com/static/images/cards/contemplative-reptile.jpg",
	badge,
	badgePosition,
	badgeStyle = "",
}) => {
	const isTop = badgePosition.includes("top");
	const isBottom = badgePosition.includes("bottom");
	const isLeft = badgePosition.includes("left");
	const isRight = badgePosition.includes("right");
	return (
		<span className={` ${style} block w-full relative`}>
			{!children && (
				<img
					src={src}
					className={` ${mediaStyle} object-cover w-full min-h-40 `}
				/>
			)}
			{badge && (
				<span
					className={` ${badgeStyle} ${isTop ? "top-2" : ""} ${
						isLeft ? "left-2" : ""
					} ${isRight ? "right-2" : ""} ${isBottom ? "bottom-2  " : ""} ${
						isTop && isRight ? "top-2 right-2 " : ""
					}  ${isTop && isLeft ? "top-2 left-2" : ""}  ${
						isBottom && isRight ? "bottom-2 right-2 " : ""
					}  ${
						isBottom && isLeft ? "bottom-2 left-2 " : ""
					} absolute bg-red-500 px-3 py-0.5 rounded-full inline-block  `}>
					{badge}
				</span>
			)}
			{children}
		</span>
	);
};

// * CardAction
const CardAction = ({ children, style = "", link = "#", target = "_self" }) => {
	const handleClick = (e) => {
		e.preventDefault();
		// window.location.href = link;
		window.open(link, target);
	};
	return (
		<button
			className={` ${style} bg-red-500 block bg-transparent outline-0 border-0 m-0 p-0 cursor-pointer select-none w-full text-inherit hover:opacity-85 transition-all duration-300 `}
			onClick={handleClick}>
			{children}
		</button>
	);
};

// * Label
const Label = ({ children, style = "", htmlFor = "" }) => {
	return (
		<>
			<label
				className={` ${style} block text-sm font-medium text-gray-500 `}
				htmlFor={htmlFor}>
				{children}
			</label>
		</>
	);
};

// * Input

const Input = ({
	placeholder,
	style = "",
	type = "text",
	icon = "fa-envelope",
	iconLibrary = "font-awesome",
	iconPosition = "left",
	iconEnable,
	iconStyle = "",
	inputStyle = "",
	onChange,
	value: propValue,
	error = false,
	errorStyle = "",
	helperText = "Incorrect Value",
	autoComplete = "on",
	id,
	title,
}) => {
	const [value, setValue] = useState(propValue || "");
	const [showPassword, setShowPassword] = useState(false);
	// const [error, setError] = useState(helperText); // State to store email validation error message
	// const [errorShow, setErrorShow] = useState(false); // State to store email validation error message

	const handleChange = (e) => {
		const newValue = e.target.value;
		setValue(newValue);

		// Invoke the onChange prop, if provided
		if (onChange) {
			onChange(newValue);
		}

		// Validate email if type is "email"
		// if (type === "email") {
		// 	// Regular expression for email validation
		// 	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		// 	const isValidEmail = emailRegex.test(newValue);

		// 	// Set error message if email is invalid
		// 	if (newValue.length > 6) {
		// 		setErrorShow(isValidEmail ? false : true);
		// 	}
		// }
	};

	const toggleShowPassword = () => {
		setShowPassword(!showPassword);
	};

	return (
		<>
			{iconEnable && (
				<fieldset className={` ${style} relative  `}>
					<Icon
						icon={icon}
						iconLibrary={iconLibrary}
						iconStyle={` ${iconStyle} pointer-events-none absolute inset-y-0 start-0 flex items-center ps-4 peer-disabled:pointer-events-none peer-disabled:opacity-50 `}
					/>
					<input
						id={id}
						title={title}
						type={type === "password" && showPassword ? "text" : type}
						placeholder={placeholder}
						className={` ${inputStyle} border border-gray-400 w-full rounded-lg px-3 py-2 h-11 placeholder:font-normal placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-600 
						focus-visible:shadow-md text-gray-600 disabled:cursor-not-allowed disabled:opacity-50 bg-transparent ps-11 pe-11 `}
						autoComplete={autoComplete}
						value={value}
						onChange={handleChange}
					/>
					{type === "password" && (
						<span
							className="absolute inset-y-0 end-0 flex items-center pe-4 text-gray-600  peer-disabled:opacity-50 cursor-pointer"
							onClick={toggleShowPassword}>
							{showPassword && (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 576 512"
									className="h-4 w-4">
									<path
										fill="currentColor"
										d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"
									/>
								</svg>
							)}
							{!showPassword && (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 640 512"
									className="h-4 w-4">
									<path
										fill="currentColor"
										d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"
									/>
								</svg>
							)}
						</span>
					)}
				</fieldset>
			)}
			{!iconEnable && (
				<fieldset className={` ${style} relative  `}>
					<input
						type={type === "password" && showPassword ? "text" : type}
						placeholder={placeholder}
						className={` ${style} ${inputStyle} border border-gray-400 w-full rounded-lg px-3 py-2 h-11 placeholder:font-normal placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-600 
						focus-visible:shadow-md text-gray-600 disabled:cursor-not-allowed disabled:opacity-50 bg-transparent pe-11 `}
						autoComplete={autoComplete}
						value={value}
						onChange={handleChange}
					/>
					{type === "password" && (
						<span
							className="absolute inset-y-0 end-0 flex items-center pe-4 text-gray-600  peer-disabled:opacity-50 cursor-pointer"
							onClick={toggleShowPassword}>
							{showPassword && (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 576 512"
									className="h-4 w-4">
									<path
										fill="currentColor"
										d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"
									/>
								</svg>
							)}
							{!showPassword && (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 640 512"
									className="h-4 w-4">
									<path
										fill="currentColor"
										d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"
									/>
								</svg>
							)}
						</span>
					)}
				</fieldset>
			)}
			{error && <p className={` ${errorStyle} text-red-500`}>{helperText}</p>}{" "}
			{/* Display error message */}
		</>
	);
};

// * TextArea

const TextArea = ({
	placeholder,
	style = "",
	inputStyle = "",
	onChange,
	value: propValue,
	error = false,
	errorStyle = "",
	helperText = "Incorrect Value",
	autoComplete = "on",
	id,
	title,
	disabled = false,
	disabledStyle = "",
	required = false,
}) => {
	const [value, setValue] = useState(propValue || "");
	const [showPassword, setShowPassword] = useState(false);
	// const [error, setError] = useState(helperText); // State to store email validation error message
	// const [errorShow, setErrorShow] = useState(false); // State to store email validation error message

	const handleChange = (e) => {
		const newValue = e.target.value;
		setValue(newValue);

		if (onChange) {
			onChange(newValue);
		}
	};

	return (
		<>
			<fieldset className={` ${style} relative  `}>
				<textarea
					id={id}
					title={title}
					placeholder={placeholder}
					className={` ${inputStyle} ${disabledStyle} min-h-16 border border-gray-400 w-full rounded-lg px-3 py-2 h-11 placeholder:font-normal placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-600 
						focus-visible:shadow-md text-gray-600 disabled:cursor-not-allowed disabled:opacity-50 bg-transparent  `}
					autoComplete={autoComplete}
					value={value}
					disabled={disabled}
					onChange={handleChange}
					{...(required && { required: required })}
				/>
			</fieldset>
			{error && <p className={` ${errorStyle} text-red-500`}>{helperText}</p>}{" "}
			{/* Display error message */}
		</>
	);
};

// * Progress Bar
const ProgressBar = ({
	value,
	min = 0,
	max = 100,
	className = "",
	style = "",
	containerStyle = "",
	fillStyle = "",
	contentStyle = "",
	contentPosition = "right",
	duration = 10,
	animateOnLoad = true,
	animateOnVisible = false,
	children,
}) => {
	// Ensure value is within min and max range
	const clampedValue = Math.min(Math.max(value, min), max);
	// Calculate percentage
	const [percentage, setPercentage] = useState(
		((clampedValue - min) / (max - min)) * 100
	);

	console.log(percentage);

	// Ref for the progress bar
	const progressBarRef = useRef(null);
	// State to track visibility
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsVisible(entry.isIntersecting);
			},
			{
				root: null,
				rootMargin: "0px",
				threshold: 0.5, // Adjust this threshold as needed
			}
		);

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
		if (animateOnLoad == true && !isVisible) {
			setPercentage(0);
		}
	}, []);

	useEffect(() => {
		if (animateOnVisible == true && !isVisible) {
			setPercentage(0);
		} else if (isVisible) {
			const interval = setInterval(() => {
				if (percentage < value) {
					setPercentage((prevPercentage) =>
						Math.min(prevPercentage + 1, value)
					);
				} else {
					clearInterval(interval);
				}
			}, duration);

			return () => clearInterval(interval);
		}
	}, [animateOnVisible, isVisible, value]);

	return (
		<div className={` ${style} flex items-center gap-4 my-2 ${className}`}>
			{contentPosition === "left" && (
				<span className={` ${contentStyle} min-w-8 `}>
					{!children && <>{`${percentage}%`}</>}
					{children && children}
				</span>
			)}
			<div
				className={` ${containerStyle} flex-1 overflow-hidden rounded-full border p-1 `}>
				<div
					className={` ${fillStyle} flex relative h-4 bg-blue-200 rounded-full `}
					role="progressbar"
					aria-valuenow={clampedValue}
					aria-valuemin={min}
					aria-valuemax={max}
					style={{ width: `${percentage}%` }} // Initial width for animation
					ref={progressBarRef}></div>
			</div>
			{contentPosition === "right" && (
				<span className={` ${contentStyle} min-w-8 `}>
					{!children && <>{`${percentage}%`}</>}
					{children && children}
				</span>
			)}
		</div>
	);
};

const CircularProgressBar = ({
	value,
	// min = 0,
	// max = 100,
	style = "",
	onVisible,
	duration = 10,
	stroke = "#6b7280",
	strokeWidth = 2,
	textStyle = "",
	children,
	onClick,
}) => {
	const [isVisible, setIsVisible] = useState(false);
	const [percentage, setPercentage] = useState(0);
	const svgRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsVisible(entry.isIntersecting);
			},
			{
				root: null,
				rootMargin: "0px",
				threshold: 0.5, // Adjust this threshold as needed
			}
		);

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
		} else if (isVisible) {
			const interval = setInterval(() => {
				if (percentage < value) {
					setPercentage((prevPercentage) =>
						Math.min(prevPercentage + 1, value)
					);
				} else {
					clearInterval(interval);
				}
			}, duration);

			return () => clearInterval(interval);
		}
	}, [onVisible, isVisible, value]);

	// console.log(max)
	// console.log(percentage);
	// console.log((percentage * 100) / max);

	return (
		<div className="relative h-24 w-24 " onClick={onClick} role="progressbar">
			<div className="absolute top-0 left-0 w-full h-full transform -rotate-90 origin-center">
				<svg className="" viewBox="0 0 24 24" ref={svgRef}>
					<circle
						className=" "
						cx="12"
						cy="12"
						r="10"
						fill="none"
						// width="300px" height="300px"
						stroke={stroke}
						strokeLinecap="round"
						strokeDasharray="62.83"
						strokeWidth={strokeWidth}
						style={{
							strokeDashoffset: `${((100 - percentage) * 62.83) / 100}`,
							// strokeDashoffset: `${(percentage * 100) / max}`,
						}}
					/>
				</svg>
				<span
					className={` absolute inset-0 w-full h-full flex items-center justify-center text-gray-500 text-inherit rotate-90 `}>
					{!children && <>{percentage}%</>}
					{children && <>{children}</>}
				</span>
			</div>
		</div>
	);
};

const ScrollTop = () => {
	const [isVisible, setIsVisible] = useState(false);
	console.log(isVisible);

	const handleScroll = () => {
		console.log("first");
		const scrollTop = window.scrollY;
		if (scrollTop > 300) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	let scrolling = false;
	console.log(scrolling);

	window.scroll = () => {
		scrolling = true;
	};

	setInterval(() => {
		if (scrolling) {
			scrolling = false;
			// place the scroll handling logic here
		}
	}, 300);

	const scrollToTop = () => {
		console.log("first");
		window.scrollTo(0, 0);
	};
	window.onscroll = function (e) {
		console.log("firstsdsds");
	};

	useEffect(() => {
		window.addEventListener("scroll", (event) => {
			console.log("Scrolling...");
		});
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div
			className={`fixed flex items-center justify-center p-4 bg-red-500 bottom-5 right-5 cursor-pointer transition-all duration-300 ease-in-out ${
				isVisible ? "opacity-100 visible" : "opacity-1 visible"
			}`}
			onClick={scrollToTop}>
			^
		</div>
	);
};

// * Carousel

// const Carousel = ({ slides }) => {
// 	const [currentSlide, setCurrentSlide] = useState(0);

// 	const nextSlide = () => {
// 		setCurrentSlide((prevSlide) =>
// 			prevSlide === slides.length - 1 ? 0 : prevSlide + 1
// 		);
// 	};

// 	const prevSlide = () => {
// 		setCurrentSlide((prevSlide) =>
// 			prevSlide === 0 ? slides.length - 1 : prevSlide - 1
// 		);
// 	};

// 	return (
// 		<div className="relative">
// 			<div className="carousel-container flex overflow-x-hidden">
// 				{slides.map((slide, index) => (
// 					<div
// 						key={index}
// 						className={`slide ${
// 							index === currentSlide ? "block" : "hidden"
// 						} w-full`}>
// 						<img
// 							src={slide.image}
// 							alt={`Slide ${index}`}
// 							className="w-full"
// 						/>
// 						<div className="slide-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
// 							<h2 className="text-3xl font-bold">{slide.title}</h2>
// 							<p className="text-lg">{slide.description}</p>
// 						</div>
// 					</div>
// 				))}
// 			</div>
// 			<button
// 				className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-2xl focus:outline-none"
// 				onClick={prevSlide}>
// 				&#8249;
// 			</button>
// 			<button
// 				className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-2xl focus:outline-none"
// 				onClick={nextSlide}>
// 				&#8250;
// 			</button>
// 		</div>
// 	);
// };

// * tessst

// const Carousel = ({ children }) => {
// 	const [currentIndex, setCurrentIndex] = useState(0);
// 	const carouselRef = useRef(null);

// 	const handlePrev = () => {
// 		setCurrentIndex((prevIndex) =>
// 			prevIndex === 0 ? children.length - 1 : prevIndex - 1
// 		);
// 	};

// 	const handleNext = () => {
// 		setCurrentIndex((prevIndex) =>
// 			prevIndex === children.length - 1 ? 0 : prevIndex + 1
// 		);
// 	};

// 	const handleSlide = (index) => {
// 		setCurrentIndex(index);
// 	};

// 	return (
// 		<div className="relative overflow-hidden">
// 			<div	className="flex transition-transform duration-300 ease-in-out"
// 				style={{ transform: `translateX(-${currentIndex * 100}%)` }}
// 				ref={carouselRef}>
// 				{React.Children.map(children, (child, index) => (

// 					<div className="w-full bg-black mx-3 ">{index}{child}</div>

// 				))}
// 			</div>
// 			<div className="absolute top-0 left-0 w-full h-full flex items-center justify-between">
// 				<button
// 					className="text-2xl text-gray-500 focus:outline-none"
// 					onClick={handlePrev}>
// 					&#8249;
// 				</button>
// 				<button
// 					className="text-2xl text-gray-500 focus:outline-none"
// 					onClick={handleNext}>
// 					&#8250;
// 				</button>
// 			</div>
// 			<div className="absolute bottom-0 left-0 w-full flex justify-center">
// 				<div className="flex mt-2">
// 					{React.Children.map(children, (child, index) => (
// 						<button
// 							key={index}
// 							className={`h-2 w-2 mx-1 rounded-full focus:outline-none ${
// 								index === currentIndex ? "bg-blue-500" : "bg-gray-400"
// 							}`}
// 							onClick={() => handleSlide(index)}></button>
// 					))}
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// const Carousel = () => {
// 	// Define your static data
// 	const slides = [
// 		{
// 			id: 1,
// 			title: "Slide 1",
// 			description: "Description for Slide 1",
// 			imageUrl: "https://via.placeholder.com/400x200",
// 		},
// 		{
// 			id: 2,
// 			title: "Slide 2",
// 			description: "Description for Slide 2",
// 			imageUrl: "https://via.placeholder.com/400x200",
// 		},
// 		{
// 			id: 3,
// 			title: "Slide 3",
// 			description: "Description for Slide 3",
// 			imageUrl: "https://via.placeholder.com/400x200",
// 		},
// 	];

// 	// State to track current slide index
// 	const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

// 	// Function to handle next slide
// 	const handleNext = () => {
// 		setCurrentSlideIndex((prevIndex) =>
// 			prevIndex === slides.length - 1 ? 0 : prevIndex + 1
// 		);
// 	};

// 	// Function to handle previous slide
// 	const handlePrev = () => {
// 		setCurrentSlideIndex((prevIndex) =>
// 			prevIndex === 0 ? slides.length - 1 : prevIndex - 1
// 		);
// 	};

// 	return (
// 		<div className="carousel">
// 			{/* Display current slide */}
// 			<div className="slide">
// 				<img
// 					src={slides[currentSlideIndex].imageUrl}
// 					alt={slides[currentSlideIndex].title}
// 				/>
// 				<h2>{slides[currentSlideIndex].title}</h2>
// 				<p>{slides[currentSlideIndex].description}</p>
// 			</div>

// 			{/* Navigation buttons */}
// 			<button onClick={handlePrev}>Previous</button>
// 			<button onClick={handleNext}>Next</button>
// 		</div>
// 	);
// };

// const Carousel = ({ children }) => {
// 	const [currentIndex, setCurrentIndex] = useState(0);
// 	console.log(currentIndex)
// 	const carouselRef = useRef(null);

// 	const handlePrev = () => {
// 		setCurrentIndex((prevIndex) =>
// 			prevIndex === 0 ? children.length - 1 : prevIndex - 1
// 		);
// 	};

// 	const handleNext = () => {
// 		setCurrentIndex((prevIndex) =>
// 			prevIndex === children.length - 1 ? 0 : prevIndex + 1
// 		);
// 	};

// 	return (
// 		<div className="relative overflow-hidden">
// 				<div
// 					className="flex transition-transform duration-300 ease-in-out"
// 					style={{ transform: `translateX(-${currentIndex * 100}%)` }}
// 					>
// 					{children[currentIndex]}

// 				</div>
// 			<div className="absolute top-0 left-0 w-full h-full flex items-center justify-between">
// 				<button
// 					className="text-2xl text-gray-500 focus:outline-none"
// 					onClick={handlePrev}>
// 					&#8249;
// 				</button>
// 				<button
// 					className="text-2xl text-gray-500 focus:outline-none"
// 					onClick={handleNext}>
// 					&#8250;
// 				</button>
// 			</div>
// 			<div className="absolute bottom-0 left-0 w-full flex justify-center">
// 				<div className="flex mt-2">
// 					{React.Children.map(children, (_, index) => (
// 						<button
// 							key={index}
// 							className={`h-2 w-2 mx-1 rounded-full focus:outline-none ${
// 								index === currentIndex ? "bg-blue-500" : "bg-gray-400"
// 							}`}
// 							onClick={() => setCurrentIndex(index)}></button>
// 					))}
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// const Carousel = ({ children }) => {
// 	const [currentIndex, setCurrentIndex] = useState(0);
// 	const [transitionEnabled, setTransitionEnabled] = useState(true); // State to manage transition
// 	const carouselRef = useRef(null);

// 	const handlePrev = () => {
// 		setCurrentIndex((prevIndex) =>
// 			prevIndex === 0 ? children.length - 1 : prevIndex - 1
// 		);
// 	};

// 	const handleNext = () => {
// 		setCurrentIndex((prevIndex) =>
// 			prevIndex === children.length - 1 ? 0 : prevIndex + 1
// 		);
// 	};

// 	const handleSlideChange = (index) => {
// 		setCurrentIndex(index);
// 		setTransitionEnabled(true); // Enable transition
// 	};

// 	const handleTransitionEnd = () => {
// 		setTransitionEnabled(false); // Disable transition after it ends
// 	};

// 	return (
// 		<div className="relative overflow-hidden">
// 			<div
// 				className={
// 					`flex transition-transform duration-300 ease-in-out ${
// 						transitionEnabled ? "transition-all" : ""
// 					}` /* Add a CSS class to enable/disable transition */
// 				}
// 				// style={{ transform: `translateX(-${0}%)` }}
// 				// ref={carouselRef}
// 				onTransitionEnd={handleTransitionEnd} // Handle transition end event
// 			>
// 				{/* {children[currentIndex]} */}
// 				{React.Children.map(children, (child, index) => (

// 					<div className={` ${index === currentIndex ? "block" : "hidden"} w-full bg-black mx-3  `}>{index}{child}</div>

// 				))}
// 			</div>
// 			<div className="absolute top-0 left-0 w-full h-full flex items-center justify-between">
// 				<button
// 					className="text-2xl text-gray-500 focus:outline-none"
// 					onClick={handlePrev}>
// 					&#8249;
// 				</button>
// 				<button
// 					className="text-2xl text-gray-500 focus:outline-none"
// 					onClick={handleNext}>
// 					&#8250;
// 				</button>
// 			</div>
// 			<div className="absolute bottom-0 left-0 w-full flex justify-center">
// 				<div className="flex mt-2">
// 					{React.Children.map(children, (_, index) => (
// 						<button
// 							key={index}
// 							className={`h-2 w-2 mx-1 rounded-full focus:outline-none ${
// 								index === currentIndex ? "bg-blue-500" : "bg-gray-400"
// 							}`}
// 							onClick={() => handleSlideChange(index)} // Handle slide change
// 						></button>
// 					))}
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

const Carousel = ({ children }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [transitionEnabled, setTransitionEnabled] = useState(true);

	const handlePrev = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? children.length - 1 : prevIndex - 1
		);
	};

	const handleNext = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === children.length - 1 ? 0 : prevIndex + 1
		);
	};

	const handleSlideChange = (index) => {
		setCurrentIndex(index);
		setTransitionEnabled(true);
	};

	const handleTransitionEnd = () => {
		setTransitionEnabled(false);
	};

	return (
		<div className="relative overflow-hidden">
			<div
				className={`flex flex-row overflow-hidden `}
				onTransitionEnd={handleTransitionEnd}>
				{React.Children.map(children, (child, index) => (
					<div
						className={` overflow-hidden duration-1000 ease-in-out bg-black  ${
							transitionEnabled ? "transition-[width]" : ""
						} ${index === currentIndex ? "w-full h-auto " : "w-0 h-0"}`}
						key={index}>
						{child}
					</div>
				))}
			</div>
			<div className="absolute top-0 left-0 w-full h-full flex items-center justify-between">
				<button
					className="text-2xl text-gray-500 focus:outline-none"
					onClick={handlePrev}>
					&#8249;
				</button>
				<button
					className="text-2xl text-gray-500 focus:outline-none"
					onClick={handleNext}>
					&#8250;
				</button>
			</div>
			<div className="absolute bottom-0 left-0 w-full flex justify-center">
				<div className="flex mt-2">
					{React.Children.map(children, (_, index) => (
						<button
							key={index}
							className={`h-2 w-2 mx-1 rounded-full focus:outline-none ${
								index === currentIndex ? "bg-blue-500" : "bg-gray-400"
							}`}
							onClick={() => handleSlideChange(index)}></button>
					))}
				</div>
			</div>
		</div>
	);
};

const XXX = ({ children }) => {
	return (
		<div>
			{children}
			{React.Children.map(children, (child, index) => (
				<div key={index}>
					hello{index}
					{child}
				</div>
			))}
		</div>
	);
};

// * HOOK

const useThemeSwitcher = () => {
	const preferDarkQuery = "(prefer-color-scheme: dark)";
	const [mode, setMode] = useState("");

	useEffect(() => {
		const mediaQuery = window.matchMedia(preferDarkQuery);
		const userPref = window.localStorage.getItem("theme");

		const handleChange = () => {
			if (userPref) {
				let check = userPref === "dark" ? "dark" : "light";
				setMode(check);
				if (check === "dark") {
					document.documentElement.classList.add("dark");
				} else {
					document.documentElement.classList.remove("dark");
				}
			} else {
				let check = mediaQuery.matches ? "dark" : "light";
				setMode(check);
				if (check === "dark") {
					document.documentElement.classList.add("dark");
				} else {
					document.documentElement.classList.remove("dark");
				}
			}
		};

		handleChange();

		mediaQuery.addEventListener("change", handleChange);

		return () => mediaQuery.removeEventListener("change", handleChange);
	}, []);

	useEffect(() => {
		if (mode === "dark") {
			window.localStorage.setItem("theme", "dark");
			document.documentElement.classList.add("dark");
		}
		if (mode === "light") {
			window.localStorage.setItem("theme", "light");
			document.documentElement.classList.remove("dark");
		}
	}, [mode]);

	return [mode, setMode];
};

export {
	XXX,
	Carousel,
	// Slide,
	Text,
	Block,
	Tabs,
	TabsNav,
	Tab,
	TabPanel,
	List,
	ImageGallery,
	Image,
	IconButton,
	Icon,
	Grid,
	GridItem,
	Flex,
	FlexItem,
	ComboList,
	ComboListItem,
	Accordion,
	AccordionDetails,
	AccordionHeader,
	AvatarGroup,
	Avatar,
	Badge,
	CodeSnippet,
	Code,
	CodeHeader,
	CodeBody,
	Divider,
	Card,
	CardContent,
	CardMedia,
	CardAction,
	Label,
	Input,
	TextArea,
	ProgressBar,
	CircularProgressBar,
	// ScrollTop,
	useThemeSwitcher,
};
