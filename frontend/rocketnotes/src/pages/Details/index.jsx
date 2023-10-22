import { Container, Links } from './styles';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';

export function Details () {
  return (
    <Container>

      <Header />
      
      <Section title="Links úteis">
        <Links>
          <li><a href='https://github.com/FelpsSousa'>GitHub</a></li>
          <li><a href='https://linkedin.com/in/felipeluis-felpssousa'>LinkedIn</a></li>
          <li>Link 3</li>
        </Links>
      </Section>
      
      <Button title="Voltar"/>
      
    </Container>
  )
}
