import styled from 'styled-components';

interface CardProps {
  total?: boolean;
}

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
`;

export const CardContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  grid-gap: 32px;
  margin-top: -150px;
`;

export const Card = styled.div`
  background: ${({ total }: CardProps): string => (total ? '#FF872C' : '#fff')};
  padding: 22px 32px;
  border-radius: 5px;
  color: ${({ total }: CardProps): string => (total ? '#fff' : '#363F5F')};
  box-shadow: 1px 2px 5px -2px #000;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 16px;
    }
  }

  h1 {
    margin-top: 14px;
    font-size: 36px;
    font-weight: normal;
    line-height: 54px;
    word-break: break-all;
  }
`;

export const TableContainer = styled.section`
  margin-top: 64px;
  margin-bottom: 60px;
  table {
    width: 100%;
    border-spacing: 0 8px;
    border-collapse: separate;
    table-layout: fixed;

    th {
      color: #969cb3;
      font-weight: normal;
      padding: 20px 32px;
      text-align: left;
      font-size: 16px;
      line-height: 24px;
    }

    tr {
      box-shadow: 1px 2px 5px -2px #000;
    }
    td {
      padding: 20px 32px;
      border: 0;
      background: #fff;
      font-size: 16px;
      font-weight: normal;
      color: #969cb3;

      &.title {
        color: #363f5f;
      }

      &.income {
        color: #12a454;
      }

      &.outcome {
        color: #e83f5b;
      }

      button {
        border: none;
        background: transparent;
      }
    }
  }

  /* Table responsive */
  @media screen and (max-width: 630px) {
    table {
      border: 0;
      border-collapse: collapse;
      thead {
        border: none;
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
      }

      tr {
        display: block;
        margin-bottom: 0.625em;
        box-shadow: 1px 2px 5px -2px #000;
      }

      td {
        border-bottom: 1px solid #ddd;
        display: block;
        font-size: 16px;
        text-align: right;

        &::before {
          /*
    * aria-label has no advantage, it won't be read inside a table
    content: attr(aria-label);
    */
          content: attr(data-label);
          float: left;
          font-weight: bold;
          text-transform: uppercase;
        }
      }
    }
  }
`;
