import React from 'react';

export default function Section({
  title,
  subtitle,
  actions,
  children
}: {
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="section">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <h2 className="text-lg md:text-xl font-semibold">{title}</h2>
          {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
        </div>
        {actions}
      </div>
      {children}
    </section>
  );
}

