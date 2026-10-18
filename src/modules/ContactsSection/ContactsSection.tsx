import { useState } from 'react';
import { Mail, Send, Check } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa'
import styles from './ContactsSection.module.scss';

export const ContactsSection = () => {
  const [copied, setCopied] = useState(false);
  const email = 'maxim.golya@gmail.com';

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  const contacts = [
    {
      icon: copied ? <Check size={32} color="var(--color-accent)" /> : <Mail size={32} />,
      label: 'Email',
      value: copied ? 'Copied to clipboard!' : email,
      href: `mailto:${email}`,
      isEmail: true,
    },
    {
      icon: <Send size={32} />,
      label: 'Telegram',
      value: '@Kit3AWP',
      href: 'https://t.me/Kit3AWP',
    },
    {
      icon: <FaLinkedin size={32} />,
      label: 'LinkedIn',
      value: 'Maksym Holia',
      href: 'https://www.linkedin.com/in/maksym-holia/',
    },
    {
      icon: <SiGithub size={32} />,
      label: 'GitHub',
      value: 'Kit3AWP',
      href: 'https://github.com/Kit3AWP',
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
              onClick={contact.isEmail ? handleCopyEmail : undefined}
            >
              <div className={styles.iconWrapper}>{contact.icon}</div>
              <div className={styles.contactInfo}>
                <span className={styles.label}>{contact.label}</span>
                <span className={styles.value}>{contact.value}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
