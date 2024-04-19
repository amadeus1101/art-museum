import { devices } from '../constants/devices';
import styled from 'styled-components';

export const Flex = styled.div`
  width: 100%;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 16px;
  row-gap: 16px;
  @media ${devices.tablet} {
    margin-top: 20px;
    column-gap: 6px;
    row-gap: 6px;
  }
`;
