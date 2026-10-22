import { useEffect, useRef } from 'react';
import { SiGithub } from 'react-icons/si';
import { ExternalLink } from 'lucide-react';
import { useSound } from '../../../context/SoundContext';
import styles from '../ProjectsSection.module.scss';

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  demo: string;
}

interface ProjectCardProps {
  project: Project;
  audioSrc: string;
}

export const ProjectCard = ({ project, audioSrc }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const { isSoundEnabled } = useSound();

  useEffect(() => {
    if (!isSoundEnabled && audioRef.current) {
      audioRef.current.pause();
    }
  }, [isSoundEnabled]);

  const handleMouseEnter = () => {
    if (window.matchMedia('(hover: none)').matches) return;
    if (!isSoundEnabled) return;

    if (!audioRef.current) {
      audioRef.current = new Audio(audioSrc);
      audioRef.current.volume = 0.8;
    }

    audioRef.current.play().catch((err) => console.log('Browser waiting for a click:', err));
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;

    const rotateX = y * -2;
    const rotateY = x * 2;

    cardRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;

    if (audioRef.current) {
      const intensity = Math.sqrt(x * x + y * y);

      audioRef.current.playbackRate = 1 + intensity * 0.3;
    }

    const percentX = ((e.clientX - rect.left) / rect.width) * 100;
    const percentY = ((e.clientY - rect.top) / rect.height) * 100;

    cardRef.current.style.setProperty('--mouse-x', `${percentX}%`);
    cardRef.current.style.setProperty('--mouse-y', `${percentY}%`);
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;

    cardRef.current.style.transform = 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';

    cardRef.current.style.setProperty('--mouse-x', '50%');
    cardRef.current.style.setProperty('--mouse-y', '50%');
  };

  return (
    <div style={{ perspective: '1000px', height: '100%' }}>
      <div
        ref={cardRef}
        className={styles.card}
        style={{ transition: 'transform 0.1s ease-out', height: '100%' }}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles.glare} />

        <div className={styles.imageWrapper}>
          <img src={project.image} alt={project.title} className={styles.image} />
        </div>

        <div className={styles.content}>
          <h3 className={styles.projectTitle}>{project.title}</h3>
          <p className={styles.projectDesc}>{project.description}</p>

          <div className={styles.techStack}>
            {project.tech.map((tech, i) => (
              <span key={i} className={styles.techTag}>
                {tech}
              </span>
            ))}
          </div>

          <div className={styles.links}>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkBtn}
            >
              <SiGithub size={18} />
              <span>Code</span>
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkBtn}
            >
              <ExternalLink size={18} />
              <span>Live Demo</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
