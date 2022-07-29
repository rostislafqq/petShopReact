import React from 'react';
import ContentLoader from 'react-content-loader';

const CardScelet = (props) => (
  <ContentLoader
    speed={2}
    width={309}
    height={320}
    viewBox="0 0 309 320"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="50" y="0" rx="10" ry="10" width="200" height="200" />
    <rect x="108" y="211" rx="0" ry="0" width="80" height="22" />
    <rect x="50" y="240" rx="0" ry="0" width="201" height="46" />
    <rect x="51" y="287" rx="19" ry="19" width="200" height="30" />
  </ContentLoader>
);

export default CardScelet;
