'use client'
import styles from './ArticleImageContainer.module.scss';
import { useAppSelector } from '@/lib/hooks';
import UpdatingPopup from '../UpdatingPopup/UpdatingPopup';

type ArticleImageContainerProps = {
    imageUrl?: string;
    altText?: string;
    caption?: string;
}

const ArticleImageContainer: React.FC<ArticleImageContainerProps> = (props) => {

    const isUpdating = useAppSelector((state) => state.articleUpdating)

    return (
        <div>
            <UpdatingPopup visible={isUpdating.isUpdating} />
        </div>
    )
}

export default ArticleImageContainer;