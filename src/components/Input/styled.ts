import styled from 'styled-components';
import { theme } from '../../constants/theme';

export const InputStyles = styled.div`
  max-width: 762px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
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
  }
`;
