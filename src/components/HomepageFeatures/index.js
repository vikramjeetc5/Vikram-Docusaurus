import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    emoji: '🛒',
    title: 'Full CRUD in one API',
    description:
      'Create, read, update, and delete products with five simple REST endpoints.',
  },
  {
    emoji: '🔎',
    title: 'Filter, sort, and paginate',
    description:
      'Find products by category or status, order them by price or name, and page through large catalogs.',
  },
  {
    emoji: '⚡',
    title: 'Test it in your browser',
    description:
      'Use the live Swagger UI to send real requests, with no setup and no authentication.',
  },
];

function Feature({emoji, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center" style={{fontSize: '3.5rem'}}>
        {emoji}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}