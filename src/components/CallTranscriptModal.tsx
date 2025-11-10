import { CallNote } from '../lib/types';
import { formatDate } from '../lib/string';

export default function CallTranscriptModal({
  call,
  onClose
}: {
  call: CallNote | null;
  onClose: () => void;
}) {
  if (!call || !call.transcript) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-xl shadow-xl overflow-hidden flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-6 border-b">
          <div>
            <h2 className="text-xl font-semibold">Call Transcript</h2>
            <p className="text-sm text-gray-600 mt-1">{formatDate(call.date)}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-6">
          <div className="prose max-w-none">
            <div className="whitespace-pre-wrap text-sm leading-relaxed text-gray-700">
              {call.transcript}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

