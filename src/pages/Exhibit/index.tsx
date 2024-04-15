import Bookmark from '../../components/Bookmark';
import pict from '../../assets/img/image-macro.png';
import ExhibitWidget from './styled';
import Wrapper from '../../components/Wrapper';

const Exhibit = () => {
  return (
    <Wrapper>
      <ExhibitWidget>
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
      </ExhibitWidget>
    </Wrapper>
  );
};

export default Exhibit;
