import styled from 'styled-components';

import Colors from '../../../../util/colors'

export const Container = styled.div`
  min-height: 176px;
  min-width: 264px;
  background-color: ${Colors.Content};
  border-radius: 8px;
  padding: 20px 15px;

  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.08);

  .header {
    display: flex;
    justify-content: space-between;

    > div {
      display: flex;
      align-items: center;
    }

    > div span {
      margin-left: 10px;
      color: ${Colors.Span};
      font-size: 12px;
    }

    button {
      border: 0;
      background: none;
    }

    button img {
      height: 11px;
      width: 11px;
    }
  }

  .main {
    display: flex;
    height: 100%;
    align-items: center;

    img {
      width: 101px;
      height: 110px;
    }

    span {
      margin-left: 8px;
      font-size: 12px;
      font-weight: normal;
      width: 94px;
      color: ${Colors.Span};
    }
  }
`;
