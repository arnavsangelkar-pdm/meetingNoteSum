import React from 'react';

export default function Section({
  title,
  subtitle,
  children
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border bg-white p-4 md:p-6 shadow-sm">
      <div className="mb-4">
        <h2 className="text-lg md:text-xl font-semibold">{title}</h2>
        {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
      </div>
      {children}
    </section>
  );
}

