import { useRef } from 'react';
import { useSound } from '../../context/SoundContext';
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiHtml5,
  SiSass,
  SiDocker,
  SiGithub,
  SiGit,
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import { BsRobot } from 'react-icons/bs';
import { MonitorSmartphone } from 'lucide-react';
import styles from './SkillsSection.module.scss';

export const SkillsSection = () => {
  const skills = [
    { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E', soundSrc: '/sounds/1Skill.mp3'},
    { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6', soundSrc: '/sounds/2Skill.mp3' },
    { name: 'React', icon: <SiReact />, color: '#61DAFB', soundSrc: '/sounds/3Skill.mp3' },
    { name: 'Redux.js', icon: <SiRedux />, color: '#764ABC', soundSrc: '/sounds/4Skill.mp3' },
    { name: 'HTML5', icon: <SiHtml5 />, color: '#E34F26', soundSrc: '/sounds/5Skill.mp3' },
    { name: 'SCSS', icon: <SiSass />, color: '#CC6699', soundSrc: '/sounds/6Skill.mp3' },
    {
      name: 'Responsive Design',
      icon: <MonitorSmartphone size="1em" />,
      color: 'var(--color-accent)',
      soundSrc: '/sounds/12Skill.mp3',
    },
    { name: 'REST API & Axios', icon: <TbApi />, color: 'var(--color-accent)', soundSrc: '/sounds/11Skill.mp3' },
    { name: 'Git', icon: <SiGit />, color: '#F05032', soundSrc: '/sounds/10Skill.mp3' },
    { name: 'GitHub', icon: <SiGithub />, color: '#ffffff', soundSrc: '/sounds/9Skill.mp3' },
    { name: 'Docker', icon: <SiDocker />, color: '#2496ED', soundSrc: '/sounds/8Skill.mp3' },
    { name: 'AI & Prompts', icon: <BsRobot />, color: '#881c87', soundSrc: '/sounds/7Skill.mp3' },
  ];

  const { isSoundEnabled } = useSound();
  const soundsMapRef = useRef<Record<string, HTMLAudioElement>>({});

  const handleSkillHover = (name: string, src: string) => {
    if (!isSoundEnabled) return;

    if (!soundsMapRef.current[name]) {
      soundsMapRef.current[name] = new Audio(src);
    }

    soundsMapRef.current[name].currentTime = 0;
    soundsMapRef.current[name].play().catch(console.error)
  }

  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>SKILLS & EXPERTISE</span>
          <h2 className={styles.title}>
            <span className={styles.tag}>&lt;h2&gt;</span>
              My Tech Stack
            <span className={styles.tag}>&lt;/h2&gt;</span>
          </h2>
          <p className={styles.description}>
            Proficient in modern web technologies and frameworks, constantly expanding my skill set.
          </p>
        </div>

        <div className={styles.grid}>
          {skills.map((skill, index) => (
            <div
              key={index}
              className={styles.card}
              style={{ '--hover-color': skill.color } as React.CSSProperties}
              onMouseEnter={() => handleSkillHover(skill.name, skill.soundSrc)}
            >
              <div className={styles.iconWrapper}>{skill.icon}</div>
              <span className={styles.skillName}>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
