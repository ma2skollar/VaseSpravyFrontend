import styles from './CoverageDetail.module.scss';

export enum CoverageDetailType {
    Distribution,
    Stats,
    Ownership
}

interface CoverageDetailProps {
    type: CoverageDetailType;
};