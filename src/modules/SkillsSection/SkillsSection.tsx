import { 
  SiJavascript, SiTypescript, SiReact, SiRedux, 
  SiHtml5, SiSass, SiDocker, SiGithub, SiGit 
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import { BsRobot } from 'react-icons/bs';
import { MonitorSmartphone } from 'lucide-react'; 
import styles from './SkillsSection.module.scss';

export const SkillsSection = () => {
  const skills = [
    { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
    { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
    { name: 'React', icon: <SiReact />, color: '#61DAFB' },
    { name: 'Redux.js', icon: <SiRedux />, color: '#764ABC' },
    { name: 'HTML5', icon: <SiHtml5 />, color: '#E34F26' },
    { name: 'SCSS', icon: <SiSass />, color: '#CC6699' },
    { name: 'Responsive Design', icon: <MonitorSmartphone size="1em" />, color: 'var(--color-accent)' },
    { name: 'REST API & Axios', icon: <TbApi />, color: 'var(--color-accent)' },
    { name: 'Git', icon: <SiGit />, color: '#F05032' },
    { name: 'GitHub', icon: <SiGithub />, color: '#ffffff' },
    { name: 'Docker', icon: <SiDocker />, color: '#2496ED' },
    { name: 'AI & Prompts', icon: <BsRobot />, color: '#881c87' },
  ];

  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.container}>
        
        <div className={styles.header}>
          <span className={styles.subtitle}>SKILLS & EXPERTISE</span>
          <h2 className={styles.title}>
            My <span className={styles.highlight}>Tech Stack</span>
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
            >
              <div className={styles.iconWrapper}>
                {skill.icon}
              </div>
              <span className={styles.skillName}>{skill.name}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};