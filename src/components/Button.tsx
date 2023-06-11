import styled from '@emotion/styled';

interface ButtonProps {
  title: string
}

const StyledButton = styled.button`
  color: black;
  background-color: aqua;
`

export default function Button(props: ButtonProps) {
  const { title } = props;
  return (
    <StyledButton>{title}</StyledButton>
  )
}