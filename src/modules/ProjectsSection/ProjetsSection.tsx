import { ExternalLink } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import styles from './ProjectsSection.module.scss';

export const ProjectsSection = () => {
  const projects = [
    {
      title: 'Gift Finder App',
      description: 'A dynamic web application for finding gifts, featuring advanced product filtering, smooth loading animations, and interactive wishlist management.',
      tech: ['React', 'Redux', 'TypeScript', 'SCSS'],
      github: 'https://github.com/eugeneermakov696/gift-finder-app',
      demo: 'https://frontend-test-3fea.up.railway.app',
      image: 'https://via.placeholder.com/600x400/141419/56b0ff?text=Gift+Finder+App',
    },
    {
      title: 'Phone Catalog',
      description: 'An interactive catalog of smartphones with product search, category filtering, pagination, and detailed specification pages.',
      tech: ['React', 'TypeScript', 'REST API', 'SCSS'],
      github: 'https://github.com/Kit3AWP/Phone_catalog',
      demo: 'https://kit3awp.github.io/Phone_catalog/',
      image: '/screenshots/phoneCatalog.webp',
    },
    {
      title: 'Personal Portfolio',
      description: 'A modern, responsive developer portfolio (the one you are viewing right now) featuring a custom glassmorphism design system and CSS animations.',
      tech: ['React', 'TypeScript', 'Vite', 'SCSS'],
      github: 'https://github.com/Kit3AWP/maksym_portfolio',
      demo: 'https://maksym-portfolio-three.vercel.app',
      image: 'https://via.placeholder.com/600x400/141419/56b0ff?text=Portfolio',
    },
    {
      title: '2048 Game Clone',
      description: 'A fully functional browser-based recreation of the classic 2048 puzzle game, focusing on grid logic, state management, and DOM manipulation.',
      tech: ['JavaScript', 'HTML5', 'CSS3'],
      github: 'https://github.com/Kit3AWP/JavaScript_2048_game',
      demo: 'https://kit3awp.github.io/JavaScript_2048_game/',
      image: '/screenshots/2048game.webp',
    }
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
            <div key={index} className={styles.card}>
              
              <div className={styles.imageWrapper}>
                <img src={project.image} alt={project.title} className={styles.image} />
              </div>

              <div className={styles.content}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.description}</p>
                
                <div className={styles.techStack}>
                  {project.tech.map((tech, i) => (
                    <span key={i} className={styles.techTag}>{tech}</span>
                  ))}
                </div>

                <div className={styles.links}>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>
                    <SiGithub size={18} />
                    <span>Code</span>
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};