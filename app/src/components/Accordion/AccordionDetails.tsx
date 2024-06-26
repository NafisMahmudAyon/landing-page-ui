'use client'

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'

// import "../../../css/output.css"

interface AccordionDetailsProps {
  tagName?: string;
  styles?: string;
  children?: React.ReactNode;
  id?: string;
  active?: boolean;
  deactivate?: boolean;
  variant?: string | number;
}

export const AccordionDetails: React.FC<AccordionDetailsProps> = ({
  tagName,
  styles = '',
  children,
  id,
  active,
  deactivate,
  variant = "1",
  ...rest
}) => {
  // let [customTag]: any = useState(tagName || "div");
  // const CustomTag: any = customTag.toLowerCase();

  const [variantValue, setVariantValue] = useState({
    styles: '',
  });
  useEffect(() => {
    if (variant == "none") {
      setVariantValue({
        styles: "",
      });
    }
    if (variant == "1") {
      setVariantValue({
        styles: "bg-neutral-900 px-4 py-4 rounded-b-lg dark:bg-gray-900 border-x border-b !text-gray-200",
      });
    }
    if (variant == "2") {
      setVariantValue({
        styles: 'px-4 py-1 pb-3 !text-gray-200',
      });
    }
    if (variant == "3") {
      setVariantValue({
        styles: 'p-5  text-[#626262]',
      });
    }
    if (variant == "4") {
      setVariantValue({
        styles: 'p-5 !text-[#ffffff7d]',
      });
    }
    if (variant == "5") {
      setVariantValue({
        styles: 'px-4 py-1 pb-3 bg-zinc-800 !text-gray-200',
      });
    }
    if (variant == "6") {
      setVariantValue({
        styles: 'p-5 text-[#908e8e]',
      });
    }
  }, [variant]);
  useEffect(() => {
    console.log(active)
  }, [active])

  console.log(active)
  return (
    <AnimatePresence>
      {/* {active && ( */}
        <motion.div initial={{ height: "0px", opacity: 0, visibility: "hidden" }} animate={{ height: "max-content", opacity: 1, visibility: "visible"  }} exit={{ height: "0px" }} transition={{ duration: 1 }} id={id} className={` ${styles} ${variant ? variantValue.styles : ""} `} {...rest}>
          {children}
        </motion.div>
      {/* )} */}
    </AnimatePresence>
  );
};

