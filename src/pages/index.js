import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Recognize and Reward Community Contributors</>,
    imageUrl: 'img/sc-logo-new.png',
    description: (
      <>
        AraCred lets you provide top-down support to your commuinty while disbursing tokens in a bottom-up manner based on contributions and engagement.    
      </>
    ),
  },
  {
    title: <>Focus on What Matters</>,
    imageUrl: 'img/ethereum.png',
    description: (
      <>
        By automatically recognizing and rewarding contributions, you can focus on doing awesome stuff vs claiming credit for awesome stuff.  
      </>
    ),
  },
  {
    title: <>Powered by Aragon and SourceCred</>,
    imageUrl: 'img/logo.png',
    description: (
      <>
        AraCred runs SourceCred on all the things, then mints tokens for contributors in an Aragon DAO. This way your community is recognized, rewarded, and empowered in return for their contributions. 
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Aragon + SourceCred">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/doc1')}>
                  Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
