import React, { useEffect, useState, useRef } from "react";

// * package for masonry grid

// import {Masonry} from "masonry-layout";
// import imagesLoaded from "imagesloaded";

///////
// import Text from "./Text";

// *css
import "../css/output.css";

// * Text
const Text = ({
	style = "",
	tagName,
	isLink,
	linkTo,
	target,
	children,
	variant,
	onClick,
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
			onClick={onClick}
			className={`${style} ${variantValue}  block`}
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

// * Wrapper
const Wrapper = ({ tagName, style = "", children, isLink, linkTo, target }) => {
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
}) => {
	const [activeTab, setActiveTab] = useState(active || null);

	const handleTabClick = (value) => {
		setActiveTab(value);
	};

	return (
		<div className={`${style} ${orientation === "vertical" ? "flex" : ""}`}>
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
	buttonTextEnabled = true,
}) => {
	const tabsRef = useRef(null);

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

	const isFirstTabActive = activeTab === children[0].props.value;
	const isLastTabActive =
		activeTab === children[children.length - 1].props.value;

	return (
		<div
			className={`${style} ${
				orientation === "vertical" ? "flex-col" : "flex"
			}`}>
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
				{buttonTextEnabled && prevButtonText}
				{prevIconPosition == "right" && (
					<Icon
						iconLibrary={iconLibrary}
						icon={prevIcon}
						iconStyle={iconButtonStyle}
					/>
				)}
			</button>
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
				{buttonTextEnabled && nextButtonText}
				{nextIconPosition == "right" && (
					<Icon
						iconLibrary={iconLibrary}
						icon={nextIcon}
						iconStyle={iconButtonStyle}
					/>
				)}
			</button>
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
}) => {
	return (
		<button
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
const TabPanel = ({ style = "", value, children }) => {
	return <div className={` ${style} `}>{children}</div>;
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
	list,
	tagName,
	style = "",
	listStyle = "",
	iconLibrary,
	icon,
	iconStyle = "",
	iconPosition = "before",
}) => {
	const [customTag, setCustomTag] = useState(tagName || "ol");
	const CustomTag = customTag.toLowerCase();
	return (
		<CustomTag className={` ${style ? style : ""} `}>
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
	target,
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
}) => {
	const [customTag, setCustomTag] = useState(tagName || "div");
	const CustomTag = customTag.toLowerCase();
	const [iconX, setIconX] = useState(false);

	return (
		<CustomTag className={` ${style} `}>
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

			default:
				return "";
		}
	};
	return (
		<span
			className={` ${iconStyle ? iconStyle : ""} `}
			onClick={onClick}
			dangerouslySetInnerHTML={{ __html: icon }}
		/>
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
const FlexItem = ({ style, children, isLink, linkTo, target, tagName }) => {
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
const Accordion = ({ tagName, style = "", children, active, deactivate }) => {
	const [customTag, setCustomTag] = useState(tagName || "div");
	const CustomTag = customTag.toLowerCase();

	function generateUniqueId() {
		const randomPart = Math.random().toString(36).substr(2, 9);
		const timestampPart = Date.now().toString(36);
		const uniqueId = "a" + randomPart + timestampPart;
		return uniqueId;
	}

	const id = generateUniqueId();

	return (
		<CustomTag className={` ${style} `}>
			{React.Children.map(children, (child) => {
				return React.cloneElement(child, {
					id: id,
					active: active,
					deactivate: deactivate,
				});
			})}
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
	iconPosition,
	iconStyle,
	id,
	active,
	deactivate,
	deactivateStyle = "",
	labelStyle = "",
}) => {
	const [customTag, setCustomTag] = useState(tagName || "div");
	const CustomTag = customTag.toLowerCase();
	const [isActive, setIsActive] = useState(false);

	const toggleExpansion = () => {
		if (!deactivate) {
			setIsActive(!isActive);
			const contentElement = document.querySelector(`#${id}`);
			if (contentElement) {
				contentElement.style.display = !isActive ? "block" : "none";
			}
		}
	};
	// const [activeStyles, setActiveStyles] = useState("")
	useEffect(() => {
		if (active) {
			setIsActive(true);
		}
		// setActiveStyles(addExclamationSign(activeStyle))
	}, [active]);
	// 	const addExclamationSign = (classNames) => {
	// 		return classNames
	// 			.split(" ")
	// 			.map((className) => `!${className}`)
	// 			.join(" ");
	// 	};

	return (
		<CustomTag
			className={` ${isActive ? activeStyle : ""} ${
				deactivate ? deactivateStyle : ""
			} ${style}`}
			onClick={toggleExpansion}>
			{iconPosition === "before" && icon && (
				<>
					{!isActive && (
						<Icon iconLibrary={iconLibrary} icon={icon} iconStyle={iconStyle} />
					)}
					{isActive && toggleIcon && (
						<Icon
							iconLibrary={toggleIconLibrary ? toggleIconLibrary : iconLibrary}
							icon={toggleIcon ? toggleIcon : icon}
							iconStyle={toggleIconStyle ? toggleIconStyle : iconStyle}
						/>
					)}
				</>
			)}
			<span className={` ${labelStyle} `}>{children}</span>

			{iconPosition === "after" && icon && (
				<>
					{!isActive && (
						<Icon iconLibrary={iconLibrary} icon={icon} iconStyle={iconStyle} />
					)}
					{isActive && toggleIcon && (
						<Icon
							iconLibrary={toggleIconLibrary}
							icon={toggleIcon}
							iconStyle={toggleIconStyle}
						/>
					)}
				</>
			)}
		</CustomTag>
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
}) => {
	const [customTag, setCustomTag] = useState(tagName || "div");
	const CustomTag = customTag.toLowerCase();

	useEffect(() => {
		const contentElement = document.querySelector(`#${id}`);
		if (contentElement && !active) {
			contentElement.style.display = "none";
		}
	}, [active]);

	return (
		<CustomTag id={id} className={` ${style} `}>
			{children}
		</CustomTag>
	);
};

const Avatar = ({
	style="",
	name,
	children,
	src,
	altText,
	imageStyle="",
	onClick
}) => {
	if (name) {
		if (name.split(" ").length > 1) {
			var nameX = `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`;
		} else {
			var nameX = `${name[0]}`;
		}
	}
	return (
		<div className={` ${style} flex justify-center items-center w-[40px] h-[40px] bg-slate-500 rounded-full text-[1.25rem] leading-none overflow-hidden `} onClick={onClick}>
			{!children && (
				<>
					{src && (
						<img
							src={src}
							alt={altText || "alt text"}
							className={` ${imageStyle} w-full h-full object-cover text-transparent text-center `}
						/>
					)}

					{!src && name && <>{nameX || "A"}</>}
				</>
			)}
			{children}
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
	Text,
	Wrapper,
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
	Avatar,
	useThemeSwitcher,
};
