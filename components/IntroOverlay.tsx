import { useEffect, useState } from 'react';

/** Show the opening scene once per browser tab, only on the homepage. */
export default function IntroOverlay() {
  const [visible, setVisible] = useState(() =>
    window.location.pathname === '/' &&
    !window.location.hash &&
    !sessionStorage.getItem('roseval-intro-seen') &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    if (!visible) return;
    const finish = (event: MessageEvent) => {
      if (event.origin !== window.location.origin ||
          event.source !== document.querySelector<HTMLIFrameElement>('#roseval-intro-frame')?.contentWindow ||
          event.data?.type !== 'roseval-intro-complete') return;
      sessionStorage.setItem('roseval-intro-seen', '1');
      setVisible(false);
    };
    window.addEventListener('message', finish);
    // If the animation cannot load, never trap visitors behind the overlay.
    const fallback = window.setTimeout(() => {
      sessionStorage.setItem('roseval-intro-seen', '1');
      setVisible(false);
    }, 10000);
    return () => { window.removeEventListener('message', finish); window.clearTimeout(fallback); };
  }, [visible]);

  if (!visible) return null;
  return <div role="dialog" aria-label="Introduction Roseval Design" aria-modal="true" style={{ position: 'fixed', inset: 0, zIndex: 9999, background: '#0d0d11' }}>
    <iframe id="roseval-intro-frame" src="/roseval-intro.html" title="Animation d’ouverture Roseval Design" style={{ width: '100%', height: '100%', border: 0 }} />
  </div>;
}
