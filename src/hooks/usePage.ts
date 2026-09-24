import { useEffect, useState } from 'react';

export type Page = 'home' | 'lineup' | 'schedule' | 'tickets' | 'info';

export function usePage(): [Page, (p: Page) => void] {
  const [page, setPage] = useState<Page>(() => {
    const hash = window.location.hash.replace('#/', '').replace('#', '');
    const valid: Page[] = ['home', 'lineup', 'schedule', 'tickets', 'info'];
    return valid.includes(hash as Page) ? (hash as Page) : 'home';
  });

  useEffect(() => {
    const handler = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      const valid: Page[] = ['home', 'lineup', 'schedule', 'tickets', 'info'];
      if (valid.includes(hash as Page)) {
        setPage(hash as Page);
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else {
        setPage('home');
      }
    };
    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
  }, []);

  const navigate = (p: Page) => {
    window.location.hash = `/${p}`;
  };

  return [page, navigate];
}
