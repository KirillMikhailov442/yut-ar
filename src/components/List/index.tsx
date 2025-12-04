'use client';

import React, { FC, ReactNode, useEffect, useRef } from 'react';
import styles from './List.module.scss';
import gsap from 'gsap';

interface ListProps {
  title: ReactNode;
  items: {
    title: string;
    description: ReactNode;
  }[];
}

const List: FC<ListProps> = ({ title, items }) => {
  const titleRef = useRef<HTMLParagraphElement>(null);
  const containerRef = useRef<HTMLUListElement>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add('(min-width: 769px)', () => {
      gsap.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',

          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none reverse',
            scrub: true,
            once: true,
          },
        },
      );

      gsap.from(itemRefs.current, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          end: 'top 20%',
          toggleActions: 'play none none reverse',
          once: true,
        },
      });
    });
  }, []);

  useEffect(() => {
    itemRefs.current = itemRefs.current.slice(0, items.length);
  }, [items]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h4 ref={titleRef} className={styles.title}>
          {title}
        </h4>
        <ul ref={containerRef} className={styles.list}>
          {items.map((item, index) => (
            <li
              key={index}
              ref={el => {
                itemRefs.current[index] = el;
              }}
              className={styles.item}>
              <div className={styles.number}>{index + 1}</div>
              <h5>{item.title}</h5>
              {item.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default List;
