import styled from 'styled-components';
import { theme } from '../../constants/theme';
import { devices } from '../../constants/devices';

const MiniCardStyles = styled.div`
  max-width: 416px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${theme.colors.white};
  border: 1px solid #f0f1f1;
  transition: transform 0.3s;
  .icon {
    width: 80px;
    height: 80px;
    margin-right: 8px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  &:hover {
    transform: scale(1.05);
  }
  @media ${devices.laptop} {
    padding: 0 8px;
    .icon {
      width: 60px;
      height: 60px;
      margin-right: 4px;
    }
  }
  @media ${devices.tablet} {
    width: 100%;
    max-width: 100%;
    padding: 8px 24px;
    .icon {
      margin-right: 12px;
    }
  }
`;

export default MiniCardStyles;
