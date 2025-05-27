import { useState } from "react";
import { FiImage } from "react-icons/fi";

interface ImageProps {
  src?: string;
  alt?: string;
  title?: string;
}
export const Img: React.FC<ImageProps> = ({ src, alt, title, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <div className="my-8 group">
      <div
        className={`relative overflow-hidden rounded-lg border border-gray-300 
                      bg-white hover:border-gray-400 transition-all duration-300
                      ${
                        isZoomed
                          ? "fixed inset-4 z-50 bg-black/70 flex items-center justify-center"
                          : ""
                      }`}
        onClick={() => setIsZoomed(!isZoomed)}
      >
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <FiImage className="w-12 h-12 text-gray-400 animate-pulse" />
          </div>
        )}
        <img
          {...props}
          src={src}
          alt={alt || "Image"}
          title={title}
          className={`max-w-full h-auto cursor-zoom-in hover:scale-105 
                        transition-all duration-300 ${
                          isLoaded ? "opacity-100" : "opacity-0"
                        }
                        ${
                          isZoomed
                            ? "cursor-zoom-out max-h-screen object-contain"
                            : ""
                        }`}
          onLoad={() => setIsLoaded(true)}
        />
        {isZoomed && (
          <button
            className="absolute top-4 right-4 p-2 bg-gray-800/80 rounded-full text-white
                         hover:bg-gray-900 transition-colors duration-200"
            onClick={(e) => {
              e.stopPropagation();
              setIsZoomed(false);
            }}
          >
            ✕
          </button>
        )}
      </div>
      {(alt || title) && (
        <p className="mt-2 text-sm text-gray-600 text-center italic">
          {title || alt}
        </p>
      )}
    </div>
  );
};
