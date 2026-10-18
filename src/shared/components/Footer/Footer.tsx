import { Mail, Send } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import styles from './Footer.module.scss';

export const Footer = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brandCol}>
          <div className={styles.logo} onClick={scrollToTop}>
            &lt;M /&gt;
          </div>
          <p className={styles.desc}>
            Crafting beautiful, functional web experiences with modern technologies and clean code.
          </p>
        </div>

        <div className={styles.linksCol}>
          <h4 className={styles.colTitle}>Quick Links</h4>
          <nav className={styles.nav}>
            <button onClick={scrollToTop}>Home</button>
            <button onClick={() => scrollTo('about')}>About</button>
            <button onClick={() => scrollTo('skills')}>Skills</button>
            <button onClick={() => scrollTo('projects')}>Projects</button>
            <button onClick={() => scrollTo('contacts')}>Contact</button>
          </nav>
        </div>

        <div className={styles.socialCol}>
          <h4 className={styles.colTitle}>Connect</h4>
          <div className={styles.socialIcons}>
            <a href="https://github.com/Kit3AWP" target="_blank" rel="noopener noreferrer">
              <SiGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/maksym-holia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={20} />
            </a>
            <a href="https://t.me/Kit3AWP" target="_blank" rel="noopener noreferrer">
              <Send size={20} />
            </a>
          </div>
          <a href="maxim.golya@gmail.com" className={styles.email}>
            Email: maxim.golya@gmail.com <Mail size={20} className={styles.icon}/>
          </a>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>© {new Date().getFullYear()} Maksym. All rights reserved.</p>
        <p>
          Made with <span className={styles.heart}>❤️</span> by a passionate developer
        </p>
      </div>
    </footer>
  );
};
