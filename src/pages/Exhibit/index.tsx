import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ExhibitType } from '../../constants/ExhibitType';
import Bookmark from '../../components/Bookmark';
import pict from '../../assets/img/image-macro.png';
import ExhibitWidget from './styled';
import Wrapper from '../../components/Wrapper';
import axios from 'axios';

const Exhibit = () => {
  const { id } = useParams();
  const [exhibit, setExhibit] = useState<ExhibitType>();
  useEffect(() => {
    async function getExhibit() {
      try {
        const exhibitResp = await axios.get(
          `https://api.artic.edu/api/v1/artworks/${id}?fields=id,title,artist_title,is_public_domain,image_id,place_of_origin,dimensions,credit_line,exhibition_history,date_start,date_end`
        );
        setExhibit(exhibitResp.data.data);
      } catch (err) {
        console.log('Error', err);
      }
    }
    getExhibit();
  }, []);
  return (
    <Wrapper>
      <ExhibitWidget>
        <div className="illustration">
          <div className="bookmark__wrapper">
            <Bookmark />
          </div>
          <img
            src={`https://www.artic.edu/iiif/2/${exhibit?.image_id}/full/843,/0/default.jpg`}
            alt="exhibition-illustration"
          />
        </div>
        <div className="content">
          <div className="legend">
            <h4>{exhibit?.title}</h4>
            <p>{exhibit?.artist_title}</p>
            <b>{exhibit?.date_start + '-' + exhibit?.date_end}</b>
          </div>
          <div className="overview">
            <h4>Overview</h4>
            <ul>
              <li>
                <p>Artist nationality:</p>
                <span>{exhibit?.place_of_origin}</span>
              </li>
              <li>
                <p>Dimensions: Sheet:</p>
                <span>{exhibit?.dimensions}</span>
              </li>
              <li>
                <p>Credit Line:</p>
                <span>{exhibit?.credit_line}</span>
              </li>
              <li>
                <p>Repository:</p>
                <span>{exhibit?.exhibition_history}</span>
              </li>
              <li>
                <span>{exhibit?.is_public_domain ? 'Public' : 'Private'}</span>
              </li>
            </ul>
          </div>
        </div>
      </ExhibitWidget>
    </Wrapper>
  );
};

export default Exhibit;
