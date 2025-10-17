// utils/copy.ts
export async function copy(text: string): Promise<boolean> {
  try {
    // Only use async Clipboard API if we can prove it exists *and* we're secure.
    if (
      typeof window !== 'undefined' &&
      typeof navigator !== 'undefined' &&
      'isSecureContext' in window &&
      (window as any).isSecureContext &&
      'clipboard' in navigator
    ) {
      const clip = (navigator as any).clipboard;
      if (clip && typeof clip.writeText === 'function') {
        await clip.writeText(text);
        return true;
      }
    }

    if ('share' in navigator) {
      await (navigator as any).share({ url: window.location.href }); // opens iOS share sheet w/ "Copy" option
    }

    // Fallback (works on iOS Safari when triggered by a user gesture)
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.top = '-9999px';
    ta.style.left = '-9999px';
    document.body.appendChild(ta);

    // iOS selection quirks
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
