import styles from './LabelDistribution.module.scss'

export enum LabelDistributionBias {
    Center = 'S',
    Conservative = 'K',
    Liberal = 'L',
}

interface LabelDistributionProps {
    bias: LabelDistributionBias;
    value: number;
}

const LabelDistribution = (props: LabelDistributionProps) => {
    return (
        <div className={`${styles.container} ${styles[`container--${props.bias}`]}`}>
            <p className={`${styles.content} label-sans-small`}>{`${props.bias} ${props.value}%`}</p>
        </div>
    )
}

export default LabelDistribution;