// Runs before paint: marks the document as animation-enabled ONLY when JS is
// active and the user has not requested reduced motion. The CSS gate keys off
// data-anim="on" to pre-hide .wow-card elements with zero flash, so no-JS and
// reduced-motion visitors always see the cards.
export function AnimeScript() {
  const code = `(function(){try{if(!window.matchMedia||!window.matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.setAttribute('data-anim','on');}}catch(e){}})();`;
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
