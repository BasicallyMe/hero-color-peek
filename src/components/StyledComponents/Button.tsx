import { css } from '@emotion/css';
import { getColor } from '../../core/bearStore';

interface ButtonProps {
  children: any;
  type: any;
}

export default function Button(props: ButtonProps) {
  return (
    <button className={css`
      border: none;
      padding: 0.7rem 1.2rem;
      color: ${getColor('button')};
      border-radius: 6px;
      cursor: pointer;
      background-color: ${getColor('primary')};
    `} type={props.type}>
      {props.children}
    </button>
  );
}
