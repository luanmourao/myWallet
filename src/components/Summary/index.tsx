import { useContext } from "react";
import incomeImg from "../../assets/incomeBlue.svg";
import outcomeImg from "../../assets/outcomeOrange.svg";
import totalImg from "../../assets/total.svg";
import { TransactionsContext } from "../../TransactionsContext";
import { Container } from "./styles";

export function Summary() {
  const { transactions } = useContext(TransactionsContext);
  console.log(transactions);

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>

          <img src={incomeImg} alt="entradas" />
        </header>

        <strong>R$ 18.000,00</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>

          <img src={outcomeImg} alt="saídas" />
        </header>

        <strong>- R$ 2.700,00</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>

          <img src={totalImg} alt="total" />
        </header>

        <strong>R$ 15.300,00</strong>
      </div>
    </Container>
  );
}