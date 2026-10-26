import { useRef, useState } from 'react';
import { Mail, Send, Check, ExternalLink, Copy } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import { useSound } from '../../context/SoundContext';
import styles from './ContactsSection.module.scss';

export const ContactsSection = () => {
  const [copied, setCopied] = useState(false);
  const soundsMapRef = useRef<Record<string, HTMLAudioElement>>({});
  const copySoundRef = useRef<HTMLAudioElement | null>(null);
  const clickSoundRef = useRef<HTMLAudioElement | null>(null);

  const { isSoundEnabled } = useSound();

  const email = 'maxim.golya@gmail.com';

  const handleCardHover = (label: string, src: string) => {
    if (
      window.matchMedia('(hover: none)').matches ||
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0
    ) {
      return;
    }

    if (!isSoundEnabled) return;

    if (!soundsMapRef.current[label]) {
      soundsMapRef.current[label] = new Audio(src);
    }

    soundsMapRef.current[label].currentTime = 0;
    soundsMapRef.current[label].volume = 0.7;
    soundsMapRef.current[label].play().catch((err) => console.log(err));
  };

  const handleCardClick = () => {
    if (!isSoundEnabled) return;

    if (!clickSoundRef.current) {
      clickSoundRef.current = new Audio('/sounds/Enter.mp3');
      clickSoundRef.current.volume = 0.4;
    }

    clickSoundRef.current.currentTime = 0;
    clickSoundRef.current.play().catch((err) => console.log(err));
  };

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);

    if (!copySoundRef.current) {
      copySoundRef.current = new Audio('/sounds/Mark.mp3');
    }

    if (!isSoundEnabled) return;

    copySoundRef.current.currentTime = 0;
    copySoundRef.current.play().catch((err) => console.log(err));
  };

  const contacts = [
    {
      icon: copied ? <Check size={32} color="var(--color-accent)" /> : <Mail size={32} />,
      label: 'Email',
      value: copied ? 'Copied to clipboard!' : email,
      href: `mailto:${email}`,
      isEmail: true,
      hoverSoundSrc: '/sounds/1_1Tile.mp3',
    },
    {
      icon: <Send size={32} />,
      label: 'Telegram',
      value: '@Kit3AWP',
      href: 'https://t.me/Kit3AWP',
      hoverSoundSrc: '/sounds/1_2Tile.mp3',
    },
    {
      icon: <FaLinkedin size={32} />,
      label: 'LinkedIn',
      value: 'Maksym Holia',
      href: 'https://www.linkedin.com/in/maksym-holia/',
      hoverSoundSrc: '/sounds/1_4Tile.mp3',
    },
    {
      icon: <SiGithub size={32} />,
      label: 'GitHub',
      value: 'Kit3AWP',
      href: 'https://github.com/Kit3AWP',
      hoverSoundSrc: '/sounds/1_3Tile.mp3',
    },
  ];

  return (
    <section id="contacts" className={styles.contactsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            <span className={styles.tag}>&lt;h2&gt;</span>
            Let's Connect
            <span className={styles.tag}>&lt;/h2&gt;</span>
          </h2>
          <p className={styles.description}>
            I'm currently looking for new opportunities. Whether you have a question or just want to
            say hi, feel free to reach out!
          </p>
        </div>

        <div className={styles.grid}>
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              target={contact.isEmail ? undefined : '_blank'}
              rel="noopener noreferrer"
              className={`${styles.contactCard} ${contact.isEmail && copied ? styles.copiedState : ''}`}
              onClick={contact.isEmail ? handleCopyEmail : handleCardClick}
              onMouseEnter={() => handleCardHover(contact.label, contact.hoverSoundSrc)}
            >
              <div className={styles.iconWrapper}>{contact.icon}</div>
              <div className={styles.contactInfo}>
                <span className={styles.label}>{contact.label}</span>
                <span className={styles.value}>{contact.value}</span>
              </div>

              <div className={styles.externalIcon}>
                {contact.isEmail ? (
                  copied ? (
                    <Check size={20} />
                  ) : (
                    <Copy size={20} />
                  )
                ) : (
                  <ExternalLink size={20} />
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
