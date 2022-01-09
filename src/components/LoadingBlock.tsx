import React from 'react';
import ContentLoader from 'react-content-loader';

interface LoadingBlockProps {
  width: number
}
const LoadingBlock: React.FC<LoadingBlockProps> = ({ width }) => {
  return (width > 768) ?
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <circle cx="132" cy="142" r="115" />
      <rect x="0" y="273" rx="6" ry="6" width="280" height="26" />
      <rect x="0" y="310" rx="6" ry="6" width="280" height="84" />
      <rect x="0" y="418" rx="6" ry="6" width="91" height="31" />
      <rect x="137" y="408" rx="25" ry="25" width="140" height="46" />
    </ContentLoader>
    :
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={250}
      height={250}
      viewBox="0 0 250 250"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="125" cy="65" r="60" />
      <rect x="23" y="131" rx="5" ry="5" width="200" height="16" />
      <rect x="1" y="154" rx="9" ry="9" width="250" height="60" />
      <rect x="150" y="219" rx="19" ry="19" width="100" height="26" />
      <rect x="3" y="219" rx="3" ry="3" width="50" height="26" />
    </ContentLoader>

}

export default LoadingBlock;


// <ContentLoader
//   speed={2}
//   width={250}
//   height={250}
//   viewBox="0 0 250 250"
//   backgroundColor="#f3f3f3"
//   foregroundColor="#ecebeb"
//   {...props}
// >
//   <circle cx="125" cy="65" r="60" />
//   <rect x="23" y="131" rx="5" ry="5" width="200" height="16" />
//   <rect x="1" y="154" rx="9" ry="9" width="250" height="60" />
//   <rect x="150" y="219" rx="19" ry="19" width="100" height="26" />
//   <rect x="3" y="219" rx="3" ry="3" width="50" height="26" />
// </ContentLoader>
