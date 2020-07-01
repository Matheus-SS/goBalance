import styled from 'styled-components';

interface ContainerProps {
  windowSize?: number;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  background: #5636d3;
  height: 60px;
  box-shadow: 0px 3px 9px 2px #000;

  position: fixed;
  bottom: 0;

  display: none;
  justify-content: center;
  align-items: center;

  nav {
    display: flex;
    justify-content: space-around;
    flex: 1;

    .active {
      color: #ff872c;
    }
    a {
      color: #fff;
      text-decoration: none;
      transition: opacity 0.2s;

      flex-direction: column;
      display: flex;
      align-items: center;

      &:hover {
        opacity: 0.6;
      }
    }
  }

  /* Resize the window according to the size that was passed through the properties */
  @media (max-width: ${props => props.windowSize}px) {
    display: flex;
  }
`;
