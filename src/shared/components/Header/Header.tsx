import { useActiveSection } from '../../hooks/useActiveSection';
import { Volume2, VolumeX } from 'lucide-react';
import { useSound } from '../../../context/SoundContext';
import { useRef } from 'react';
import styles from './Header.module.scss';

export const Header = () => {
  const { isSoundEnabled, toggleSound } = useSound();

  const offSoundRef = useRef<HTMLAudioElement | null>(null);

  const activeSection = useActiveSection(['home', 'about', 'skills', 'projects', 'contacts']);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleSound = () => {
    toggleSound()

    if (!offSoundRef.current) {
      offSoundRef.current = new Audio('/sounds/SoundOnOff.mp3');
    }

    offSoundRef.current.currentTime = 0;
    offSoundRef.current.play().catch((err) => console.log(err));
  }

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contacts', label: 'Contact' },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.logo} onClick={scrollToTop}>
        &lt;M /&gt;
      </div>

      <div className={styles.rightSection}>

        <button className={styles.soundButton} onClick={handleToggleSound}>
          {isSoundEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
        </button>

        <nav className={styles.nav}>
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`${styles.navLink} ${activeSection === item.id ? styles.active : ''}`}
              onClick={() => (item.id === 'home' ? scrollToTop() : scrollTo(item.id))}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};
