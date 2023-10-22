import { Container, Links, Content } from './styles';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';

export function Details () {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />
          
          <h1>
            Introdução ao React
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Qui numquam temporibus, animi dolorem aliquam exercitationem similique voluptas porro. 
            Modi odit non ut soluta deleniti doloribus officia voluptatum molestiae animi blanditiis!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Saepe officiis facere numquam soluta perferendis praesentium odio nihil illo possimus accusamus? 
            Temporibus, velit ab error hic asperiores odit mollitia possimus! Dolores?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore dolorem ratione corrupti incidunt, aliquam facilis doloremque quasi officia accusantium. 
            Sapiente in dolorum pariatur tempore maxime rem vel nesciunt sequi illum.
          </p>
          
          <Section title="Links úteis">
            <Links>
              <li><a href='https://github.com/FelpsSousa'>GitHub</a></li>
              <li><a href='https://linkedin.com/in/felipeluis-felpssousa'>LinkedIn</a></li>
              <li>Link 3</li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express"/>
            <Tag title="nodejs"/>
          </Section>
          
          <Button title="Voltar"/>
        </Content>
      </main>
    </Container>
  )
}
