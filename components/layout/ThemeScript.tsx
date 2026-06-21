// Runs synchronously before paint to apply a stored theme choice with no flash.
// When nothing is stored, no attribute is set and CSS follows prefers-color-scheme.
export function ThemeScript() {
  const code = `(function(){try{var t=localStorage.getItem('gridcrm-theme');if(t==='light'||t==='dark'){document.documentElement.setAttribute('data-theme',t);}}catch(e){}})();`;
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
