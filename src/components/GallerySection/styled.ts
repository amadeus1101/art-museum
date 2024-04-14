import styled from 'styled-components';
import { devices } from '../../constants/devices';

const GallerySectionWidget = styled.div`
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

const GalleryGrid = styled.div`
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

export { GallerySectionWidget, GalleryGrid };
