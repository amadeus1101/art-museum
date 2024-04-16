import BannerText from '../../components/BannerText';
import Headline from '../../components/Headline';
import Wrapper from '../../components/Wrapper';
import bookmark_big from '../../assets/img/icon-bookmark-big.png';

const Favourites = () => {
  const temp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const arr = temp.map((elem) => {
    return {
      id: elem,
      icon: './assets/img/image-micro.png',
      title: 'Charles V, bust length, holding a sword, facing right',
      author: 'Giovanni Britto',
      status: 'Public'
    };
  });
  return (
    <Wrapper>
      <BannerText>
        Here Are Your{' '}
        <span>
          <img src={bookmark_big} alt="big-bookmark-icon" />
          Favourites
        </span>
      </BannerText>
      <Headline subtitle="Saved for you" title="Your favourites list" />
      {/* <CardsSection cards={arr} /> */}
    </Wrapper>
  );
};

export default Favourites;
