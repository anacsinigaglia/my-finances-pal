import logoImg from '../../assets/logo.svg';
import { HeaderProps } from '../../types';

import { Container, Content } from './styles';

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <div className="logo-div">
          <img src={logoImg} alt="my financial pal" />
          <p>My Finances Pal</p>
        </div>
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
