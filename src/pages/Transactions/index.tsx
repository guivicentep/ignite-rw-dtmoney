import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from './components/SearchForm'
import {
  PriceHighlight,
  TransactionsContainer,
  TranscationsTable,
} from './styles'

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TranscationsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighlight variant="income">R$ 12.000,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>13/04/2023</td>
            </tr>
            <tr>
              <td width="50%">Coxinha</td>
              <td>
                <PriceHighlight variant="outcome">- R$ 2.000,00</PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>13/04/2023</td>
            </tr>
          </tbody>
        </TranscationsTable>
      </TransactionsContainer>
    </div>
  )
}
