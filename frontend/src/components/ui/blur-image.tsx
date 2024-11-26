import { useState } from 'react';
import { cn } from '../../lib/utils';

interface BlurImageProps {
    src: string;
    alt: string;
    className?: string;
    fill?: boolean;
    width?: number | string;
    height?: number | string;
}

export const BlurImage = ({
    src,
    alt,
    className,
    fill,
    width,
    height,
    ...rest
}: BlurImageProps) => {
    const [isLoading, setLoading] = useState(true);

    return (
        <img
            className={cn(
                "transition duration-300",
                isLoading ? "blur-sm" : "blur-0",
                fill && "absolute inset-0 h-full w-full",
                className
            )}
            onLoad={() => setLoading(false)}
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading="lazy"
            {...rest}
        />
    );
};