import { GraduationCap, Code2, Briefcase, MapPin } from 'lucide-react';
import styles from './AboutSection.module.scss';

export const AboutSection = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.glassContainer}>
        <h2 className={styles.title}>
          <span className={styles.tag}>&lt;h2&gt;</span>
            About Me
          <span className={styles.tag}>&lt;/h2&gt;</span>
        </h2>

        <div className={styles.content}>
          <div className={styles.textContent}>
            <p>
              I am passionate about building modern, fast, and accessible web applications. My
              journey in frontend development started with a desire to turn complex logical problems
              into intuitive and beautiful user interfaces.
            </p>
            <p>
              I am currently a 2nd-year Computer Science student, continuously deepening my
              knowledge in modern web architectures. I focus on the React ecosystem and
              writing clean, scalable code with TypeScript.
            </p>
            <p>
              Some text here but I don't know what to write here
            </p>
          </div>

          <div className={styles.factsWrapper}>
            <h3 className={styles.cardTitle}>Quick Facts</h3>
            <ul className={styles.factsList}>
              <li>
                <span className={styles.iconWrapper}>
                  <GraduationCap size={20} className={styles.icon} />
                </span>
                <span>University Student</span>
              </li>
              <li>
                <span className={styles.iconWrapper}>
                  <Code2 size={20} className={styles.icon} />
                </span>
                <span>React, Redux, TypeScript, SCSS</span>
              </li>
              <li>
                <span className={styles.iconWrapper}>
                  <Briefcase size={20} className={styles.icon} />
                </span>
                <span>Available for work</span>
              </li>
              <li>
                <span className={styles.iconWrapper}>
                  <MapPin size={20} className={styles.icon} />
                </span>
                <span>Kyiv, Ukraine <span className={styles.uaText}>U&zwnj;A</span></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
