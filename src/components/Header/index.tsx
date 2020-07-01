import React from 'react';

import { NavLink } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
  windowSize?: number;
}

const Header: React.FC<HeaderProps> = ({
  size = 'large',
  windowSize = 700,
}: HeaderProps) => (
  <Container size={size} windowSize={windowSize}>
    <header>
      <img src={Logo} alt="GoFinances" />

      <nav>
        <NavLink to="/dashboard">Listagem</NavLink>
        <NavLink to="/register">Registrar</NavLink>
        <NavLink to="/import">Importar</NavLink>
      </nav>
    </header>
  </Container>
);

export default Header;
