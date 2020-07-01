import React from 'react';

import { NavLink } from 'react-router-dom';

import { IoIosList, IoIosSave, IoIosDocument } from 'react-icons/io';

import { Container } from './styles';

interface MobileNavBarProps {
  windowSize?: number;
}
const MobileNavBar: React.FC<MobileNavBarProps> = ({
  windowSize = 700,
}: MobileNavBarProps) => {
  return (
    <Container windowSize={windowSize}>
      <nav>
        <NavLink to="/dashboard">
          <IoIosList size={25} />
          <span>Listagem</span>
        </NavLink>
        <NavLink to="/register">
          <IoIosSave size={25} />
          <span>Registrar</span>
        </NavLink>
        <NavLink to="/import">
          <IoIosDocument size={25} />
          <span>Importar</span>
        </NavLink>
      </nav>
    </Container>
  );
};

export default MobileNavBar;
