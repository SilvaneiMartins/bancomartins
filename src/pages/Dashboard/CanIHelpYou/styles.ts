import styled from 'styled-components';

import Colors from '../../../util/colors'

export const Container = styled.div`
  margin: 30px 0 22px;
  width: 100%;
  max-width: 840px;

  @media (min-width: 1128px) {
    width: 264px;
  }
`;

export const Content = styled.div`
  border-radius: 5px;
  background-color: ${Colors.Content};
  height: 100px;

  padding: 0 20px;
  border: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
    align-items: center;
  }

  .circle {
    background-color: ${Colors.backgroundCircle};
    height: 40px;
    width: 40px;
    border-radius: 50%;
  }

  span {
    font-size: 13px;
    margin-left: 5px;
    color: ${Colors.Span};
  }

  .canihelpyou img {
    height: 50px;
    width: 50px;
    margin-right: 2px;
  }

  .next img {
    height: 21px;
    width: 21px;
    margin: 10px;
  }
`;
