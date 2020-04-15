import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

// Features
const features = [
  {
    title: <>Better For Everyone</>,
    imageUrl: 'img/undraw_smiley.svg',
    description: (
      <>
        AraCred lets you provide top-down support to your community while <b>disbursing tokens</b> in a bottom-up manner based on <b>contributions</b> and <b>engagement</b>.    
      </>
    ),
  },
  {
    title: <>Focus on What Matters</>,
    imageUrl: 'img/undraw_coding.svg',
    description: (
      <>
        By automatically <b>recognizing and rewarding contributions</b>, you can focus on doing awesome stuff vs claiming credit for awesome stuff.  
      </>
    ),
  },
  {
    title: <>Powered by Aragon and SourceCred</>,
    imageUrl: 'img/logo.png',
    description: (
      <>
        AraCred runs <a href="https://sourcecred.io/">SourceCred</a> on all the things, then mints tokens for contributors in an <a href="https://aragon.org">Aragon</a> DAO. This way your community is recognized, rewarded, and empowered based on their contributions. 
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

// Main page
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
              to={useBaseUrl('docs/aracred')}>
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
