import styled from 'styled-components';
import { theme } from '../../constants/theme';

const MiniCardStyles = styled.div`
  max-width: 416px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${theme.colors.white};
  border: 1px solid #f0f1f1;
  .icon {
    width: 80px;
    height: 80px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .content {
    margin: 0 16px;
    display: flex;
    flex-direction: column;
    p {
      width: 219px;
      font-family: 'InterMedium';
      font-size: 17px;
      color: ${theme.colors.black};
      line-height: 26px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    span {
      font-family: 'InterRegular';
      font-size: 15px;
      color: ${theme.colors.orange};
      line-height: 26px;
    }
    b {
      margin-top: 8px;
      font-family: 'InterBold';
      font-size: 15px;
      color: ${theme.colors.black};
      line-height: 26px;
    }
  }
`;

export default MiniCardStyles;
