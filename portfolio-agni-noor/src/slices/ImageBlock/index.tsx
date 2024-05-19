import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";
import Avatar from "../Biography/Avatar";

/**
 * Props for `ImageBlock`.
 */
export type ImageBlockProps = SliceComponentProps<Content.ImageBlockSlice>;

/**
 * Component for "ImageBlock" Slices.
 */
const ImageBlock = ({ slice }: ImageBlockProps): JSX.Element => {
  return (


    <PrismicNextImage field={slice.primary.image} 
    width={400}
     />



  );
};

export default ImageBlock;
