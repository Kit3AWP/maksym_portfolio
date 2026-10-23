import { useRef, useState } from 'react';
import { useActiveSection } from '../../hooks/useActiveSection';
import { Menu, Volume2, VolumeX, X } from 'lucide-react';
import { useSound } from '../../../context/SoundContext';
import styles from './Header.module.scss';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isSoundEnabled, toggleSound } = useSound();

  const onSoundRef = useRef<HTMLAudioElement | null>(null);
  const offSoundRef = useRef<HTMLAudioElement | null>(null);

  const navSoundsRef = useRef<Record<string, HTMLAudioElement>>({});

  const activeSection = useActiveSection(['home', 'about', 'skills', 'projects', 'contacts']);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleSound = () => {
    toggleSound();

    if (!isSoundEnabled) {
      if (!onSoundRef.current) {
        onSoundRef.current = new Audio('/sounds/SpeakerOn.mp3');
      }
      onSoundRef.current.currentTime = 0;
      onSoundRef.current.play().catch(console.error);
    } else {
      if (!offSoundRef.current) {
        offSoundRef.current = new Audio('/sounds/SpeakerOff.mp3');
      }
      offSoundRef.current.currentTime = 0;
      offSoundRef.current.play().catch(console.error);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home', soundSrc: '/sounds/Link1.mp3' },
    { id: 'about', label: 'About', soundSrc: '/sounds/Link2.mp3' },
    { id: 'skills', label: 'Skills', soundSrc: '/sounds/Link3.mp3' },
    { id: 'projects', label: 'Projects', soundSrc: '/sounds/Link4.mp3' },
    { id: 'contacts', label: 'Contact', soundSrc: '/sounds/Link5.mp3' },
  ];

  const handleNavClick = (id: string, src: string) => {
    setIsMenuOpen(false);
    if (id === 'home') {
      scrollToTop();
    } else {
      scrollTo(id);
    }


    if (!isSoundEnabled) return;

    if (!navSoundsRef.current[src]) {
      navSoundsRef.current[src] = new Audio(src);
    }

    navSoundsRef.current[src].currentTime = 0;
    navSoundsRef.current[src].play().catch(console.error);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo} onClick={scrollToTop}>
        &lt;M /&gt;
      </div>

      <div className={styles.rightSection}>
        <button className={styles.soundButton} onClick={handleToggleSound}>
          {isSoundEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
        </button>

        <button className={styles.menuToggle} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`${styles.navLink} ${activeSection === item.id ? styles.active : ''}`}
              onClick={() => handleNavClick(item.id, item.soundSrc)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};
