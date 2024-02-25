import { useEffect, useState } from "react";

const Text = ({
	style = "",
	tagName,
	isLink,
	linkTo,
	target,
	children,
	variant,
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

export default Text;