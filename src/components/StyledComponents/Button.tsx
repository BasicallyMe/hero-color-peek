import { css } from '@emotion/css';

interface ButtonProps {
  children: any;
  type: any;
  textColor: string;
  buttonColor: string;
}

export default function Button(props: ButtonProps) {
  return (
    <button className={css`
      border: none;
      padding: 0.7rem 1.2rem;
      color: ${props.textColor};
      border-radius: 6px;
      cursor: pointer;
      background-color: ${props.buttonColor};
    `} type={props.type}>
      {props.children}
    </button>
  );
}
