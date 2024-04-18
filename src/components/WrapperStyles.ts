import styled from 'styled-components';
import { devices } from '../constants/devices';

export const Wrapper = styled.div`
  max-width: 1370px;
  margin: 120px auto;
  padding: 0 45px;
  @media ${devices.laptop} {
    padding: 0 15px;
  }
  @media ${devices.tablet} {
    margin: 60px auto;
    padding: 0 5px;
  }
`;
