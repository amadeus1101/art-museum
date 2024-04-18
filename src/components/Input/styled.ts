import styled from 'styled-components';
import { theme } from '../../constants/theme';

const InputStyles = styled.div`
  max-width: 762px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  input {
    width: 100%;
    padding: 24px 16px;
    text-align: left;
    font-family: 'InterRegular';
    font-size: 14px;
    color: ${theme.colors.black};
    background: rgba(57, 57, 57, 5%);
    border-radius: 16px;
    border: none;
    &:focus {
      outline: none;
    }
  }
  .sorting {
    width: 100%;
    display: flex;
    justify-content: center;
    ul {
      margin-top: 40px;
      display: flex;
      li {
        padding: 8px 24px;
        font-family: 'InterRegular';
        font-size: 14px;
        color: ${theme.colors.orange};
        &:hover {
          cursor: pointer;
          text-decoration: underline;
        }
      }
    }
  }
`;

export default InputStyles;
