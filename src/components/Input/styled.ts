import styled, { css } from 'styled-components';
import { theme } from '../../constants/theme';

export const InputStyles = styled.div<{ $primary?: boolean }>`
  max-width: 762px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  label {
    font-family: 'InterRegular';
    font-size: 14px;
    color: red;
  }
  input,
  .loader,
  .error {
    width: 100%;
    padding: 24px 16px;
    text-align: left;
    font-family: 'InterRegular';
    font-size: 14px;
    color: ${theme.colors.black};
    background: rgba(57, 57, 57, 5%);
    border-radius: 16px;
    border: none;
  }
  input {
    &:focus {
      outline: none;
    }
    ${(props) =>
      props.$primary &&
      css`
        border: 1px solid red;
      `}
  }
`;
