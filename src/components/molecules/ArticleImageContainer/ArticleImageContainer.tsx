'use client'

import { useState } from 'react';
import styles from './ArticleImageContainer.module.scss';

type ArticleImageContainerProps = {
    imageUrl: string;
    altText?: string;
    caption?: string;
}

const ArticleImageContainer: React.FC<ArticleImageContainerProps> = (props) => {

    // TODO: Use state for image loading status
    const [isLoading, setIsLoading] = useState(false);

    return (
        <div></div>
    )
}

export default ArticleImageContainer;