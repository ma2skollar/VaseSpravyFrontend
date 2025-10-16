'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import styles from './ImageContainer.module.scss';

interface ImageContainerProps {
    imageUrls: string[];
    altText: string;
    imageLabel: string;
}

const ImageContainer = (props: ImageContainerProps) => {
    const intervalMs = 4000;
    const images = props.imageUrls.filter(Boolean);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (images.length <= 1) return;
        const id = setInterval(
            () => setIndex((i) => (i + 1) % images.length),
            Math.max(1500, intervalMs)
        );
        return () => clearInterval(id);
    }, [images.length, intervalMs]);

    return (
        <div className={styles.container} aria-live="polite">
            <AnimatePresence mode="wait">
                {images.length > 0 && (
                    <motion.div
                        key={images[index]}
                        className={styles.slide}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6, ease: 'easeInOut' }}
                    >
                        <Image
                            src={images[index]}
                            alt={`Snímka udalosti č. ${index + 1}`}
                            fill
                            unoptimized
                            className={styles.image}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
            <div className={styles.imageOverlay}></div>
            <p className={`label-sans-light`}>{props.imageLabel}</p>
        </div>
    )
}

export default ImageContainer;