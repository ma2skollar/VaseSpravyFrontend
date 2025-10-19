// utils/copy.ts
export async function copy(text: string): Promise<boolean> {
  try {
    if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
      // Secure + async Clipboard API
      const isSecure = !!window.isSecureContext;
      const hasClipboard = 'clipboard' in navigator;

      if (isSecure && hasClipboard) {
        const clip = (navigator as Navigator & { clipboard: Clipboard }).clipboard;
        if (typeof clip?.writeText === 'function') {
          await clip.writeText(text);
          return true;
        }
      }

      // iOS Web Share sheet (has a "Copy" option)
      type NavigatorWithShare = Navigator & { share?: (data: ShareData) => Promise<void> };
      const nav = navigator as NavigatorWithShare;
      if (typeof nav.share === 'function') {
        await nav.share({ url: window.location.href });
      }
    }

    // Fallback: execCommand-based copy (requires user gesture)
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.top = '-9999px';
    ta.style.left = '-9999px';
    document.body.appendChild(ta);

    const range = document.createRange();
    range.selectNodeContents(ta);
    const sel = window.getSelection();
    sel?.removeAllRanges();
    sel?.addRange(range);
    ta.setSelectionRange(0, ta.value.length);

    const ok = document.execCommand('copy');
    document.body.removeChild(ta);
    return ok;
  } catch (e) {
    console.error('Copy failed:', e);
    return false;
  }
}
