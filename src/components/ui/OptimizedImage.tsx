// components/ui/OptimizedImage.tsx
"use client";

import Image from "next/image";
import { useState } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
  quality?: number;
  placeholder?: "blur" | "empty";
  blurDataURL?: string;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  fill = false,
  sizes,
  quality = 85,
  placeholder = "empty",
  blurDataURL,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Generate blur placeholder for better loading experience
  const shimmer = (w: number, h: number) => `
    <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <linearGradient id="g">
          <stop stop-color="#f6f7f8" offset="20%" />
          <stop stop-color="#edeef1" offset="50%" />
          <stop stop-color="#f6f7f8" offset="70%" />
        </linearGradient>
      </defs>
      <rect width="${w}" height="${h}" fill="#f6f7f8" />
      <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
      <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
    </svg>`;

  const toBase64 = (str: string) =>
    typeof window === "undefined"
      ? Buffer.from(str).toString("base64")
      : window.btoa(str);

  if (hasError) {
    return (
      <div
        className={`bg-gray-200 flex items-center justify-center text-gray-500 ${className}`}
      >
        <div className="text-center">
          <svg
            className="mx-auto mb-2 w-12 h-12"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-sm">Image not available</p>
        </div>
      </div>
    );
  }

  // Type-safe image props construction
  const baseProps = {
    src,
    alt,
    quality,
    priority,
    className: `${className} ${
      isLoading ? "opacity-0" : "opacity-100"
    } transition-opacity duration-300`,
    onLoad: () => setIsLoading(false),
    onError: () => {
      setIsLoading(false);
      setHasError(true);
    },
    placeholder: placeholder as "blur" | "empty" | undefined,
    blurDataURL:
      blurDataURL || `data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`,
  };

  // Add sizes if provided
  const imageProps = sizes ? { ...baseProps, sizes } : baseProps;

  // Add dimensions based on fill prop
  const finalImageProps = fill
    ? { ...imageProps, fill: true }
    : { ...imageProps, width: width!, height: height! };

  return (
    <div className={`relative ${fill ? "w-full h-full" : ""}`}>
      {isLoading && (
        <div
          className={`absolute inset-0 bg-gray-200 animate-pulse ${className}`}
        />
      )}
      <Image {...finalImageProps} />
    </div>
  );
}

// Helper component for portfolio images
interface PortfolioImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function PortfolioImage({
  src,
  alt,
  className = "",
}: PortfolioImageProps) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      width={600}
      height={400}
      className={`rounded-lg object-cover ${className}`}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      quality={80}
      placeholder="blur"
    />
  );
}

// Helper component for hero images
interface HeroImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function HeroImage({ src, alt, className = "" }: HeroImageProps) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      fill
      className={`object-cover ${className}`}
      sizes="100vw"
      quality={90}
      priority
      placeholder="blur"
    />
  );
}
