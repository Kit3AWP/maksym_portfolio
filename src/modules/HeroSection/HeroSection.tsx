import { TypeAnimation } from 'react-type-animation';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { MagneticWrapper } from '../../shared/components/MagneticWrapper/MagneticWrapper';
import { useSound } from '../../context/SoundContext';
import { useRef } from 'react';
import myPhoto from '../../assets/images/avatar.jpg';
import styles from './HeroSection.module.scss';

export const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.body.style.pointerEvents = 'none';

    setTimeout(() => {
      document.body.style.pointerEvents = '';
    }, 800);

    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const { isSoundEnabled } = useSound();
  const downloadSoundRef = useRef<HTMLAudioElement | null>(null);

  const handleDownloadClick = () => {
    if (!isSoundEnabled) return;

    if (!downloadSoundRef.current) {
      downloadSoundRef.current = new Audio('/sounds/Download.mp3');
      downloadSoundRef.current.volume = 0.5;
    }

    downloadSoundRef.current.currentTime = 0;
    downloadSoundRef.current.play().catch(console.error);
  };

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
            <MagneticWrapper>
              <button className={styles.primaryBtn} onClick={() => scrollTo('projects')}>
                View Projects <ArrowRight size={18} className={styles.arrow} />
              </button>
            </MagneticWrapper>

            <MagneticWrapper>
              <button className={styles.secondaryBtn} onClick={() => scrollTo('contacts')}>
                Contact Me <Mail size={18} className={styles.mail} />
              </button>
            </MagneticWrapper>
          </div>

          <a href="/resume.pdf" download className={styles.cvLink} onClick={handleDownloadClick}>
            <Download size={16} />
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};
