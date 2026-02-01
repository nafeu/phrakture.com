'use client';

import { useEffect, useRef, useState } from 'react';

import { SECTIONS } from './sections';
import styles from './page.module.css';

export default function SoundtrackPage() {
  const [activeSection, setActiveSection] = useState(SECTIONS[0].id);
  const sectionRefs = useRef({});
  const containerRef = useRef(null);

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

  const activeSectionData = SECTIONS.find((s) => s.id === activeSection) ?? SECTIONS[0];
  const RightContent = activeSectionData.RightContent;

  return (
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
        <div className={styles.stickyContent}>
          <RightContent />
        </div>
      </div>
    </div>
  );
}
