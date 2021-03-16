import { createServer } from 'miragejs'
import { GlobalStyle } from "./styles/global";

import { Header } from "./components/Header";
import { Dashboard } from "./pages/Dashboard";

createServer({
  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Desenvolvimento de site',
          amount: 35,
          type: 'deposit',
          category: 'Sale',
          createdAt: new Date()
        }
      ]
    })
  }
})

export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </>
  );
}
