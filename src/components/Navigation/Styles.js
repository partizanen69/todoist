import styled, { css } from 'styled-components';

export default styled.div`
  .container {
    display: flex;
    align-items: center;

    & div:nth-child(2) {
      display: flex;
      justify-content: flex-end;

      & a {
        margin: 0 5px;
        color: #777;
        text-decoration: none;
      }

      & a:hover {
        color: #333333;
      }

      & a:active {
        position: relative;
        top: -2px;
      }
    }
  }
`;
