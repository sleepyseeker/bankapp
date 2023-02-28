import styled from "styled-components";

export default function Page({ children }) {
  return <PageTag>{children}</PageTag>;
}

const PageTag = styled.div`
  /* робимо фон градієнтом */
  background: linear-gradient(
    0deg,
    rgba(131, 58, 180) 0%,
    rgba(253, 29, 29) 50%,
    rgba(252, 176, 69) 100%
  );

  /* робимо фон на всю ширину */
  width: 100%;
`;
