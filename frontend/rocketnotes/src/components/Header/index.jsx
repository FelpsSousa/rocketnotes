import { Container, Profile } from "./styles";

export function Header() {

  return (
    <Container>
      <Profile>
        <img 
          src="https://github.com/FelpsSousa.png"
         alt="Foto do usuário" 
        />

        <div>
          <span>Bem-vindo,</span>
          <strong>Felipe Sousa</strong>
        </div>
      </Profile>

    </Container>
  );
}