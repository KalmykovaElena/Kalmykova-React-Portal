import { CSSProperties, memo } from 'react';
import styles from './Skeleton.module.scss';
import classNames from 'classnames';

interface SkeletonProps {
    className?: string;
    height?: string | number;
    width?: string | number;
    border?: string;
}

export const Skeleton = memo((props: SkeletonProps) => {
    const {
        className,
        height,
        width,
        border,
    } = props;

    const style: CSSProperties = {
        width,
        height,
        borderRadius: border,
    };

    return (
        <div
            className={classNames(styles.Skeleton, [className])}
            style={style}
        />
    );
});
