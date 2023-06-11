import styled from '@emotion/styled';
import { getColor } from '../../core/bearStore';

interface ButtonProps {
  children: string;
}

interface StyledProps {
  backgroundColor: string;
  textColor: string;
}

const StyledButton = styled.button<StyledProps>`
  color: ${(props) => props.textColor};
  border: none;
  padding: 1rem 1.5rem;
  border-radius: 5px;
  background-color: ${(props) => props.backgroundColor};
`;

export default function Button(props: ButtonProps) {
  const { children } = props;
  return (
    <StyledButton backgroundColor={getColor('primary')} textColor={getColor('button')}>
      {children}
    </StyledButton>
  );
}
