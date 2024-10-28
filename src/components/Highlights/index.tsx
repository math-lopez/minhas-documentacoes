// src/components/Highlights.js

import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const highlights = [
  {
    title: 'Desenvolvimento Web',
    description: 'Descubra as melhores práticas e recursos para construir interfaces modernas e interativas.',
    emoji: '💻',
  },
  {
    title: 'Backend e APIs',
    description: 'Aprenda a criar APIs robustas e escaláveis com segurança e eficiência.',
    emoji: '🔗',
  },
  {
    title: 'Inteligência Artificial',
    description: 'Explore o mundo da IA e Machine Learning para automatizar processos e tomar decisões.',
    emoji: '🤖',
  },
  {
    title: 'Cloud e DevOps',
    description: 'Conheça as ferramentas de nuvem e automação para gerenciamento e deploy contínuo.',
    emoji: '☁️',
  },
];

export default function Highlights() {
  return (
    <div className={clsx('container', styles.highlightContainer)}>
      <h2>📝 Principais Categorias</h2>
      <div className={styles.highlightsGrid}>
        {highlights.map((highlight, index) => (
          <div key={index} className={styles.highlightCard}>
            <div className={styles.emoji}>{highlight.emoji}</div>
            <h3>{highlight.title}</h3>
            <p>{highlight.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
