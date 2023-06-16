import { css } from '@emotion/css';
import { getColor } from '../../core/bearStore';

interface TextProps {
  children: string;
}

export default function HighlightedText(props: TextProps) {
  return <span className={css`
    color: ${getColor('primary')}
  `}>{props.children}</span>;
}
