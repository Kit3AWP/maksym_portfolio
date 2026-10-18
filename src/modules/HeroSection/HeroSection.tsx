import { TypeAnimation } from 'react-type-animation';
import myPhoto from '../../assets/images/avatar.jpg';
import { ArrowRight, Download, Mail } from 'lucide-react';
import styles from './HeroSection.module.scss';

export const HeroSection = () => {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.avatarWrapper}>
        <div className={styles.avatarInner}>
          <img src={myPhoto} alt="Maksym" className={styles.avatar} />
        </div>
      </div>

      <div className={styles.textContent}>
        <span className={styles.greeting}>👋 Hello, I'm</span>
        <h1 className={styles.name}>Maksym</h1>
        <TypeAnimation
          sequence={[
            'Frontend Developer',
            2000,
            'React & TypeScript Developer',
            2000,
            'UI/UX Enthusiast',
            2000,
          ]}
          wrapper="h2"
          speed={50}
          repeat={Infinity}
          className={styles.role}
        />
        <p className={styles.description}>
          I craft responsive, dynamic, and user-friendly web applications. Passionate about clean
          code, modern UI architectures, and bringing creative ideas to life in the browser.
        </p>
        <div className={styles.actions}>
          <div className={styles.mainButtons}>
            <button className={styles.primaryBtn}>
              View Projects <ArrowRight size={18} className={styles.arrow} />
            </button>
            <button className={styles.secondaryBtn}>
              Contact Me <Mail size={18} className={styles.mail} />
            </button>
          </div>

          <a href="/resume.pdf" download className={styles.cvLink}>
            <Download size={16} />
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};
