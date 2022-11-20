import './styles.css';
import ContentLoader from 'react-content-loader';

const ResultCardLoader = () => (
  <div className="card-loader-container">
    <ContentLoader
        speed={2}
        width={250}
        height={300}
        viewBox="0 0 300 250"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"    
    >

      <rect x="53" y="27" rx="0" ry="0" width="140" height="141" />
      <rect x="210" y="41" rx="0" ry="0" width="68" height="12" />
      <rect x="210" y="62" rx="0" ry="0" width="201" height="18" />
      <rect x="210" y="85" rx="0" ry="0" width="201" height="18" />
      <rect x="210" y="108" rx="0" ry="0" width="201" height="18" />
      <rect x="210" y="130" rx="0" ry="0" width="201" height="18" />
    </ContentLoader>
  </div>
);

export default ResultCardLoader;
