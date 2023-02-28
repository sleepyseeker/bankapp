// ІМПОРТУЄМО БІБЛІОТЕКИ БЕЗ ЯКИХ НЕ МОЖЕМО ПИСАТИ КОД
import React from "react";
import styled from "styled-components";
// ІМПОРТУЄМО ПОТРІБНІ КОМПОНЕНТИ
import Page from "./component/Page";
import Header from "./component/Header";
import Balance from "./component/Balance";
import Menu from "./component/Menu";
import Payment from "./component/Payment";

// КОНФІГУРАЦІЯ ========================================
const START_BALANCE = 0;
const LIMIT_BALANCE = 100000;
const GET_MONEY = 3274;
const DE_MONEY = 427;
const SPEND_MONEY = 264;
export default function App() {
  // ФУНКЦІОНАЛ БАЛАНСУ ========================

  // Ось тут тримаємо актуальне значення балансу

  const [balance, setBalance] = React.useState(START_BALANCE);

  // Функція для прямого поповнення балансу
  const getMoney = () => {
    setBalance(balance + GET_MONEY);
    setpeyment([
      {
        name: "Вам нараховано:",
        amount: GET_MONEY,
        type: "+",
        ...payment
      }
    ]);
  };
  const dMoney = () => {
    setBalance(balance - DE_MONEY);
    setpeyment([
      {
        name: "Знято готівки:",
        amount: DE_MONEY,
        type: "-",
        ...payment
      }
    ]);
  };
  const spendMoney = () => {
    setBalance(balance - SPEND_MONEY);
    setpeyment([
      {
        name: "Витрачено на покупки",
        amount: SPEND_MONEY,
        type: "-",
        ...payment
      }
    ]);
  };
  // Функція яка виконується кожен раз коли наш баланс змінився
  React.useEffect(() => {
    // Перевірка на ліміт балансу
    if (balance > LIMIT_BALANCE) {
      alert(`Ваш ліміт балансу: ${LIMIT_BALANCE}`);
      setBalance(START_BALANCE);
    }

    // Перевірка на мінусовий баланс
    if (balance < 0) {
      alert(`Ви використали усі свої гроші. Поповніть картку`);
      // setBalance(0);
    }
    // Сюди записуються змінні при оновленні яких буде виконуватися функція
  }, [balance]);

  const [payment, setpeyment] = React.useState([]);
  // ВЕРСТКА ІНТЕРФЕЙСУ ==========================================

  const LOGIN = "aboba";
  const PASSWORD = "aboba";
  const [islogged, setlogged] = React.useState(false);
  const doLogin = () => {
    const login = prompt("Ваш логін");
    const password = prompt("Ваш пароль");
    if (login === LOGIN && password === PASSWORD) {
      alert("Ви увійшли");
      setlogged(true);
    } else {
      if (login != LOGIN) {
        return alert("Помилка в логіні");
      }
      if (password != PASSWORD) {
        return alert("Помилка в паролі");
      }
    }
  };
  return (
    <Page>
      {/* компонент шапки з нашою назвою
          також при кліку мишкою на шапку
          в нас визивається функція HelloWorld
      */}

      <Header name="Aboba Bank" onClick={doLogin} />

      {/* Компонент баланса в який передається
          Актуальне значення балансу  */}
      {islogged && <Balance balance={balance} />}

      {/* Компонент меню з кнопками */}
      {islogged && (
        <Menu
          // ось сюди ми передаємо конфігурацію кнопок
          config={[
            {
              name: "Зняти баланс",
              onClick: dMoney,
              img: "/icon/send.svg"
            },
            {
              name: "Поповнити баланс",
              onClick: getMoney,
              img: "/icon/payment.svg"
            },
            {
              name: "Придбати щось",
              onClick: spendMoney,
              img: "/icon/snake.svg"
            }
          ]}
        />
      )}
      {/* компонент списка наших транзакцій
          цей функціонал ми будемо робити на 3 уроці
      */}
      {islogged && <Payment payment={payment} />}
      {islogged === false && (
        <Notlogged>Вам потрібно увійти в акаунт</Notlogged>
      )}
    </Page>
  );
}
const Notlogged = styled.div`
  padding: 100px 50px;
  background: linear-gradient(0deg, rgba(107, 107, 107) 10%, rgba(0, 0, 0) 70%);
  color: #ffffff;
  text-align: center;
  margin-top: 350px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;
