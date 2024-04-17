import { FC } from 'react';

import { HeadlineStyles } from './styled';

interface IHeadlineText {
  title: string;
  subtitle: string;
}

const Headline: FC<IHeadlineText> = ({ title, subtitle }) => {
  return (
    <HeadlineStyles>
      <p>{subtitle}</p>
      <h4>{title}</h4>
    </HeadlineStyles>
  );
};

export default Headline;
