'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import { BandcampIcon, SpotifyIcon, YoutubeIcon } from '../components/Icons';
import { SECTIONS } from './sections';
import styles from './page.module.css';

function ChevronUpIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M18 15l-6-6-6 6" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export default function SoundtrackPage() {
  const [activeSection, setActiveSection] = useState(SECTIONS[0].id);
  const sectionRefs = useRef({});
  const containerRef = useRef(null);

  const currentIndex = SECTIONS.findIndex((s) => s.id === activeSection);

  const scrollToSection = useCallback((index) => {
    const clamped = Math.max(0, Math.min(index, SECTIONS.length - 1));
    const section = sectionRefs.current[SECTIONS[clamped].id];
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  useEffect(() => {
    const firstSection = sectionRefs.current[SECTIONS[0].id];
    if (firstSection) {
      firstSection.scrollIntoView({ behavior: 'auto', block: 'start' });
    }
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { root: container, rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    );

    SECTIONS.forEach(({ id }) => {
      const el = sectionRefs.current[id];
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        scrollToSection(currentIndex + 1);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        scrollToSection(currentIndex - 1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, scrollToSection]);

  const activeSectionData = SECTIONS.find((s) => s.id === activeSection) ?? SECTIONS[0];
  const RightContent = activeSectionData.RightContent;

  return (
    <div className={styles.themeWrapper}>
    <header className={styles.header}>
      <div className={styles.headerTagline}>
        Nafeu Nasir · Phrakture / Custom Soundtrack For Indie Games
      </div>
      <div className={styles.headerLinks}>
        <a href="https://phrakture.bandcamp.com/" target="_blank" rel="noopener noreferrer" aria-label="Bandcamp">
          <BandcampIcon />
        </a>
        <a href="https://youtube.com/phrakture" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <YoutubeIcon />
        </a>
        <a href="https://open.spotify.com/artist/4AlnXoFGT5zl3v85ScIOzK" target="_blank" rel="noopener noreferrer" aria-label="Spotify">
          <SpotifyIcon />
        </a>
        <a href="mailto:phrakturemusic@proton.me" className={styles.headerEmail}>
          phrakturemusic@proton.me
        </a>
      </div>
    </header>
    <div className={styles.layout}>
      <div ref={containerRef} className={styles.leftColumn}>
        {SECTIONS.map(({ id, LeftContent }) => (
          <section
            key={id}
            id={id}
            ref={(el) => (sectionRefs.current[id] = el)}
            className={styles.section}
          >
            <LeftContent />
          </section>
        ))}
      </div>
      <div className={styles.rightColumn}>
        <div className={styles.scrollArrows}>
          <button
            type="button"
            className={styles.scrollArrow}
            onClick={() => scrollToSection(currentIndex - 1)}
            disabled={currentIndex === 0}
            aria-label="Previous section"
          >
            <ChevronUpIcon />
          </button>
          <button
            type="button"
            className={styles.scrollArrow}
            onClick={() => scrollToSection(currentIndex + 1)}
            disabled={currentIndex === SECTIONS.length - 1}
            aria-label="Next section"
          >
            <ChevronDownIcon />
          </button>
        </div>
        <div className={styles.stickyContent}>
          <RightContent />
        </div>
      </div>
    </div>
    </div>
  );
}
