import { useState } from 'react';

export default function PrepNotes({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  async function onCopy() {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }
  return (
    <div>
      <p className="text-sm leading-6">{text}</p>
      <div className="mt-3">
        <button
          onClick={onCopy}
          className="text-sm rounded-lg border px-3 py-1.5 hover:bg-gray-50"
          aria-live="polite"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </div>
  );
}

