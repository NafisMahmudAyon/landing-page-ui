import React, { useEffect, useState, cloneElement, Children, isValidElement } from "react";
import { AccordionHeader } from "./AccordionHeader";
import { AccordionDetails } from "./AccordionDetails";

// import "../../../css/output.css"

interface AccordionProps {
  tagName: string;
  styles?: string;
  children?: React.ReactNode;
  active?: boolean;
  deactivate?: boolean;
  headerStyles?: string;
  activeHeaderStyles?: string;
  deactivateHeaderStyles?: string;
  detailsStyles?: string;
  variant?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  tagName,
  styles = "",
  children,
  active,
  deactivate,
  headerStyles = "",
  activeHeaderStyles = "",
  deactivateHeaderStyles = "",
  detailsStyles = "",
  variant="1",
  ...rest
}) => {
  function generateUniqueId() {
    const randomPart = Math.random().toString(36).substr(2, 9);
    const timestampPart = Date.now().toString(36);
    const uniqueId = "a" + randomPart + timestampPart;
    return uniqueId;
  }

  const id = generateUniqueId();

  let [customTag, setCustomTag]: any = useState(tagName || "div");
  const CustomTag: any = customTag.toLowerCase();
  const [isActive, setIsActive] = useState(false);

  const [variantValue, setVariantValue] = useState({
    styles: "",
    headerStyles: "",
    activeHeaderStyles: "",
    deactivateHeaderStyles: "",
    detailsStyles: "",
  });

  useEffect(() => {
    if (variant == "1") {
      setVariantValue({
        styles: "my-1",
        headerStyles:
          "flex gap-2 items-center bg-neutral-900 hover:bg-neutral-800 px-4 py-2 border-[1px] rounded-lg cursor-pointer",
        activeHeaderStyles: "!rounded-t-lg rounded-b-none",
        deactivateHeaderStyles:
          "!bg-neutral-700 hover:!bg-neutral-700 !opacity-50 !cursor-not-allowed !text-gray-400",
        detailsStyles: "",
      });
    }
    if (variant == "2") {
      setVariantValue({
        styles: "my-2",
        headerStyles:
          "flex gap-2 items-center bg-white border-2 border-transparent hover:border-2 hover:border-black px-4 py-2 rounded-lg !text-black text-xl !font-medium cursor-pointer",
        activeHeaderStyles:
          "!rounded-t-lg rounded-b-none !bg-black !text-white",
        deactivateHeaderStyles:
          "!bg-neutral-700 hover:!bg-neutral-700 !opacity-50 !cursor-not-allowed !text-gray-400",
        detailsStyles: "bg-black rounded-b-lg ",
      });
    }
    if (variant == "3") {
      setVariantValue({
        styles: "my-1",
        headerStyles:
          "flex gap-2 items-center bg-[#28303d] px-4 py-5 rounded-lg text-white text-xl !font-medium cursor-pointer",
        activeHeaderStyles: "!rounded-t-lg rounded-b-none",
        deactivateHeaderStyles:
          "!bg-neutral-700 !opacity-50 !cursor-not-allowed !text-gray-400 ",
        detailsStyles: "bg-white rounded-b-lg ",
      });
    }
    if (variant == "4") {
      setVariantValue({
        styles: " border-0 border-b border-b-[#343c46] py-1",
        headerStyles:
          "flex gap-2 items-center py-6 px-5 rounded-lg text-[#ffffffed] text-xl !font-medium cursor-pointer",
        activeHeaderStyles: "",
        deactivateHeaderStyles:
          "!opacity-50 !cursor-not-allowed !text-gray-400 ",
        detailsStyles: " ",
      });
    }
    if (variant == "5") {
      setVariantValue({
        styles:
          "my-3 drop-shadow-[5px_5px_0px_#0A0A0A] hover:drop-shadow-[5px_5px_4px_#0A0A0A] ",
        headerStyles:
          "flex gap-2 items-center bg-zinc-800 px-4 py-2 !text-amber-400 text-xl !font-medium cursor-pointer",
        activeHeaderStyles: "",
        deactivateHeaderStyles:
          "!bg-neutral-700 !text-amber-200 !opacity-70 !cursor-not-allowed",
        detailsStyles: " ",
      });
    }
    if (variant == "6") {
      setVariantValue({
        styles: "my-2 py-1 border-0 border-b border-dashed border-b-[#aeaeae] ",
        headerStyles:
          "flex gap-2 items-center px-5 py-6 text-[#1b1f24] text-xl font-medium cursor-pointer",
        activeHeaderStyles: "",
        deactivateHeaderStyles:
          "!opacity-50 !cursor-not-allowed !text-gray-400",
        detailsStyles: "",
      });
    }
  }, [variant]);





  useEffect(() => {
    if (active === true) {
      setIsActive(true);
    }
  }, [active]);

  // const accordionHeader = Children.toArray(children).find(
  //   (child) => isValidElement(child) && (child.type === AccordionHeader)
  // );
  // const accordionDetails = Children.toArray(children).find(
  //   (child) => isValidElement(child) && (child.type === AccordionDetails)
  // );

  type HeaderProps = {
    id: string,
    active?: boolean,
    isActive?: boolean,
    deactivate?: boolean,
    variant?: string;
  }
  type DetailsProps = {
    id: string,
    active?: boolean,
    deactivate?: boolean,
    variant?: string;
  }
  const headerProps: HeaderProps = {
    id: id,
    active: isActive,
    isActive: isActive,
    deactivate: deactivate,
    variant: variant,
  }
  const detailsProps: DetailsProps = {
    id: id,
    active: active,
    deactivate: deactivate,
    variant: variant,
  }

  return (
    <CustomTag className={` ${styles} ${variant ? variantValue.styles : ""} `} {...rest}>
      <div
        className={` select-none ${isActive ? activeHeaderStyles : ""}
          ${deactivate ? deactivateHeaderStyles : ""}
          ${headerStyles} ${variant ? (isActive ? variantValue.activeHeaderStyles : "") : ""}
          ${variant ? (deactivate ? variantValue.deactivateHeaderStyles : "") : ""}
          ${variant ? variantValue.headerStyles : ""}`}
        onClick={() => {
          if (!deactivate) {
            setIsActive(!isActive);
          }
        }}
      >
        {/* {accordionHeader && cloneElement(accordionHeader, {
          id: id,
          active: active,
          isActive: isActive,
          deactivate: deactivate,
          variant: variant,
        })} */}
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child) && child.type === AccordionHeader) {
            return React.cloneElement(child, headerProps);
          }
          return null;
        })}
      </div>
      <div
        className={`  ${isActive ? "min" : "max-h-0 overflow-hidden"}
          transition-all duration-300 ${detailsStyles} ${variant ? variantValue.detailsStyles : ""}
          `}
      >
        {/* {accordionDetails && cloneElement(accordionDetails, {
          id: id,
          active: active,
          deactivate: deactivate,
          variant: variant,
        })} */}
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child) && child.type === AccordionDetails) {
            return React.cloneElement(child, detailsProps);
          }
          return null;
        })}
      </div>
    </CustomTag>
  );
};
