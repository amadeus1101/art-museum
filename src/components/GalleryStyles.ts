import { devices } from '../constants/devices';
import styled from 'styled-components';

const GalleryWrapper = styled.div`
  width: 100%;
`;

const Grid = styled.div`
  width: 100%;
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 16px;
  row-gap: 16px;
  @media ${devices.tablet} {
    margin-top: 20px;
    column-gap: 8px;
  }
`;

export { GalleryWrapper, Grid };
