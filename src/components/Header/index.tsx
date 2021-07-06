import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <div className="logo-div">
          <img src={logoImg} alt="my financial pal" />
          <p>My Finances Pal</p>
        </div>
        <button type="button">Nova transação</button>
      </Content>
    </Container>
  );
}
