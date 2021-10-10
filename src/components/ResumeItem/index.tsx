import * as C from './styled'

type Props = {
  title: string;
  value: number;
  color?: string;
}

export const ResumeItem = ({ title, value, color }: Props) => {
  return (
    <C.Container>
      <C.Title>{title}</C.Title>
      <C.Info color={color}>RS {value}</C.Info>
    </C.Container>
  );
}