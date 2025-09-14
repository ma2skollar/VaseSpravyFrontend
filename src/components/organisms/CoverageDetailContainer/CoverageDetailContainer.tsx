import CoverageDetail, { CoverageDetailType } from '@/components/molecules/CoverageDetail/CoverageDetail';
import styles from './CoverageDetailContainer.module.scss';
import { useAppDispatch } from '@/lib/hooks';
// import { openDistributionDetail } from '@/lib/features/singleArticleSlice';

interface CoverageDetailContainerProps {
    eventName: string;
    distribution: {
        liberal: number;
        conservative: number;
        center: number;
    };
    publishedAgo: number;
    publishedUnit: string;
    updatedAgo: number;
    updatedUnit: string;
}

const CoverageDetailContainer = (props: CoverageDetailContainerProps) => {
    // const dispatch = useAppDispatch();

    return (
        <div className={styles.container}>
            {/* <CoverageDetail type={CoverageDetailType.Distribution} title='Distribúcia politickej zaujatosti' onClick={() => {dispatch(openDistributionDetail())}} text={`Zhrnutie politickej zaujatosti zdrojov pre udalosť ${props.eventName}. Otvor pre detaily a zobrazenie na politickom kompase.`} /> */}
            <CoverageDetail type={CoverageDetailType.Stats} title='Podrobnosti pokrytia' distribution={props.distribution} publishedAgo={props.publishedAgo} publishedUnit={props.publishedUnit} updatedAgo={props.updatedAgo} updatedUnit={props.updatedUnit} />
        </div>
    );
}

export default CoverageDetailContainer;