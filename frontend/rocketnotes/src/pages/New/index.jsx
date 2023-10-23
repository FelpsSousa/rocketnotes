import { Header } from '../../components/Header';

import { Container, Form } from './styles';

export function New() {

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <a href="/">voltar</a>

            <Input placeholder="Título" />
          </header>
        </Form>
      </main>
    </Container>
  );
}