import { Container } from "./styles";
import incomeImg from "../../assets/incomeBlue.svg";
import outcomeImg from "../../assets/outcomeOrange.svg";
import totalImg from "../../assets/total.svg";

export function Summary() {

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