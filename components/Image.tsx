import { faSpinner } from "@fortawesome/free-solid-svg-icons/faSpinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";

export function LazyLoadImage({
  src,
  alt,
  height,
  width,
}: {
  src: string;
  alt: string;
  height: number;
  width: number;
}) {
  const [image, setImage] = useState<string | null>(null);
  const placeHolderRef = useRef<SVGSVGElement | null>(null);

  async function downloadUrl(imageUrl: string) {
    try {
      fetch(imageUrl)
        .then((response) => response.blob())
        .then((blob) => {
          setImage(URL.createObjectURL(blob));
        });
    } catch (error) {
      console.error("Error downloading image:", error);
    }
  }

  useEffect(() => {
    if (!image && placeHolderRef.current && placeHolderRef.current.checkVisibility()) {
      downloadUrl(src);
    }
  }, [placeHolderRef.current, width, height, src]);

  if (image) {
    return <img src={image} height={height} width={width} alt={alt} />;
  }

  return <FontAwesomeIcon ref={placeHolderRef} size="2x" icon={faSpinner} spin={true} />;
}
