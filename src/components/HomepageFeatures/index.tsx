import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Aprendizado Contínuo',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Este portal foi desenvolvido para registrar cada nova descoberta e aprendizado no mundo da tecnologia, facilitando consultas e revisões futuras.
      </>
    ),
  },
  {
    title: 'Organização por Tópicos',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        A estrutura do portal permite organizar informações por categorias e temas, facilitando o acesso a conteúdos como documentação, código, e melhores práticas.
      </>
    ),
  },
  {
    title: 'Expansível e Personalizável',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Totalmente baseado em React, o portal pode ser personalizado para incluir funcionalidades específicas, oferecendo flexibilidade para crescer junto com suas descobertas.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
