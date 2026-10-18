import { useActiveSection } from '../../hooks/useActiveSection';
import styles from './Header.module.scss';

export const Header = () => {
  const activeSection = useActiveSection(['home', 'about', 'skills', 'projects', 'contacts']);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
    </header>
  );
};
