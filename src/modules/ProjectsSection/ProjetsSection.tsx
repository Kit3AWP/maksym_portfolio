import { ProjectCard } from './ProjectCard/ProjectCard';
import styles from './ProjectsSection.module.scss';

export const ProjectsSection = () => {
  const projects = [
    {
      title: 'Gift Finder App',
      description:
        'A dynamic web application for finding gifts, featuring advanced product filtering, smooth loading animations, personal profile and interactive wishlist management.',
      tech: ['React', 'Redux', 'TypeScript', 'REST API', 'Docker', 'SCSS'],
      github: 'https://github.com/eugeneermakov696/gift-finder-app',
      demo: 'https://frontend-test-3fea.up.railway.app',
      image: 'https://via.placeholder.com/600x400/141419/56b0ff?text=Gift+Finder+App',
    },
    {
      title: 'Phone Catalog',
      description:
        'An interactive catalog of Apple devices with cart, favorites, category filtering, pagination, and detailed specification pages.',
      tech: ['React', 'React Context', 'TypeScript', 'REST API', 'SCSS'],
      github: 'https://github.com/Kit3AWP/Phone_catalog',
      demo: 'https://kit3awp.github.io/Phone_catalog/',
      image: '/screenshots/phoneCatalog.webp',
    },
    {
      title: 'Personal Portfolio',
      description:
        'A modern, responsive developer portfolio (the one you are viewing right now) featuring a custom glassmorphism design system and CSS animations.',
      tech: ['React', 'TypeScript', 'Vite', 'SCSS'],
      github: 'https://github.com/Kit3AWP/maksym_portfolio',
      demo: 'https://maksym-portfolio-three.vercel.app',
      image: 'https://via.placeholder.com/600x400/141419/56b0ff?text=Portfolio',
    },
    {
      title: '2048 Game Clone',
      description:
        'A fully functional browser-based recreation of the classic 2048 puzzle game, focusing on object oriented programming, state management, and DOM manipulation.',
      tech: ['JavaScript', 'OOP', 'HTML5', 'CSS3'],
      github: 'https://github.com/Kit3AWP/JavaScript_2048_game',
      demo: 'https://kit3awp.github.io/JavaScript_2048_game/',
      image: '/screenshots/2048game.webp',
    },
  ];

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            <span className={styles.tag}>&lt;h2&gt;</span>
            Featured Projects
            <span className={styles.tag}>&lt;/h2&gt;</span>
          </h2>
        </div>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              audioSrc="/sounds/ActiveTile2.mp3"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
