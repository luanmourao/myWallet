import { Container } from "./styles";

export function TransactionsTable() {

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de web site</td>
            <td className="deposit">R$ 12.000,00</td>
            <td>Profissional</td>
            <td>30/01/2021</td>
          </tr>

          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$ 2.000,00</td>
            <td>Casa</td>
            <td>30/01/2021</td>
          </tr>

          <tr>
            <td>Salário</td>
            <td className="deposit">R$ 6.000,00</td>
            <td>Profissional</td>
            <td>30/01/2021</td>
          </tr>

          <tr>
            <td>Supermercado</td>
            <td className="withdraw">- R$ 700,00</td>
            <td>Alimentação</td>
            <td>30/01/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}