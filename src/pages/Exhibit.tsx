import { theme } from '../constants/theme';
import { devices } from '../constants/devices';
import styled from 'styled-components';
import Bookmark from '../components/Bookmark';
import pict from '../assets/img/image-macro.png';

const ExhibitWrapper = styled.div`
  max-width: 1370px;
  width: 100%;
  margin: 120px auto;
  padding: 0 45px;
  display: flex;
  justify-content: space-between;
  .illustration {
    width: 497px;
    margin-right: 32px;
    position: relative;
    img {
      max-width: 100%;
      aspect-ratio: 497/570;
    }
    .bookmark__wrapper {
      position: absolute;
      right: 16px;
      top: 16px;
    }
  }
  .content {
    max-width: 640px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h4 {
      font-family: 'LexendRegular', sans-serif;
      font-size: 32px;
      color: ${theme.colors.black};
    }
    .legend {
      p {
        margin-top: 32px;
        font-family: 'LexendRegular', sans-serif;
        font-size: 24px;
        color: ${theme.colors.orange};
      }
      b {
        margin-top: 16px;
        display: block;
        font-family: 'LexendBold', sans-serif;
        font-size: 16px;
        color: ${theme.colors.black};
      }
    }
    .overview {
      margin-top: 32px;
      ul {
        margin-top: 32px;
        li {
          margin-top: 16px;
          display: flex;
          p {
            margin-right: 10px;
            font-family: 'LexendRegular', sans-serif;
            font-size: 16px;
            color: ${theme.colors.orange};
          }
          span {
            font-family: 'LexendRegular', sans-serif;
            font-size: 16px;
            color: ${theme.colors.black};
          }
        }
      }
    }
  }
  @media ${devices.laptop} {
    .content {
      h4 {
        font-size: 24px;
      }
      .legend {
        p {
          margin-top: 24px;
          font-size: 18px;
        }
        b {
          margin-top: 12px;
          font-size: 14px;
        }
      }
      .overview {
        ul {
          margin-top: 24px;
          li {
            margin-top: 12px;
            p,
            span {
              font-size: 14px;
            }
          }
        }
      }
    }
  }
  @media ${devices.tablet} {
    flex-direction: column;
    align-items: center;
    .illustration {
      max-width: 250px;
      margin: 0;
    }
    .content {
      .legend {
        margin-top: 32px;
        p {
          margin-top: 12px;
        }
        b {
          margin-top: 8px;
        }
      }
    }
  }
`;

const Exhibit = () => {
  return (
    <ExhibitWrapper>
      <div className="illustration">
        <div className="bookmark__wrapper">
          <Bookmark />
        </div>
        <img src={pict} alt="exhibition-illustration" />
      </div>
      <div className="content">
        <div className="legend">
          <h4>Charles V, bust length, holding a sword, facing right</h4>
          <p>Giovanni Britto</p>
          <b>1535–45</b>
        </div>
        <div className="overview">
          <h4>Overview</h4>
          <ul>
            <li>
              <p>Artist nationality:</p>
              <span>German</span>
            </li>
            <li>
              <p>Dimensions: Sheet:</p>
              <span>19 3/8 × 13 11/16 in. (49.2 × 34.8 cm)</span>
            </li>
            <li>
              <p>Credit Line:</p>
              <span>Rogers Fund, 1917</span>
            </li>
            <li>
              <p>Repository:</p>
              <span>Metropolitan Museum of Art, New York, NY</span>
            </li>
            <li>
              <span>Public</span>
            </li>
          </ul>
        </div>
      </div>
    </ExhibitWrapper>
  );
};

export default Exhibit;
