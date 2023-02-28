import styled from "styled-components";

export default function Header({ name, onClick }) {
  return (
    <HeaderTag>
      <NameTag>Aboba Bank</NameTag>
      <LoginButtomTag onClick={onClick}>Вхід</LoginButtomTag>
    </HeaderTag>
  );
}

const LoginButtomTag = styled.div`
  color: #fff;
  padding: 8px 32px;
  border: 2px solid#000;
  border-radius: 4px;
  cursor: pointer;
`;

const NameTag = styled.div`
  color: #fff;
`;

const HeaderTag = styled.div`
  /* робимо темний колір фону блока */
  background: #2b2b2b;

  /* робимо щоб знизу блок мав закруглення */
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;

  /* режим верстки flex, робимо текст по центру */
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* ставимо колір тексту білим */
  color: #fff;

  /* робимо відступи вертикальні та горизонтальні,
    щоб текст не притискався до країв блоку
   */
  padding: 15px;
`;
