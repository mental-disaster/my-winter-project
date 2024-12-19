'use client';

import { useTheme } from 'next-themes';

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <div>
        The current theme is: {theme}
        <button onClick={() => setTheme('light')}>Light Mode</button>
        <button onClick={() => setTheme('dark')}>Dark Mode</button>
      </div>

      <div className="w-full justify-center mx-auto">
        <div className="p-4">
          <input type="text" placeholder="primary" className="input input-bordered w-full max-w-xs bg-primary" />
          <input type="text" placeholder="secondary" className="input input-bordered w-full max-w-xs bg-secondary" />
          <input type="text" placeholder="accent" className="input input-bordered w-full max-w-xs bg-accent" />
          <input type="text" placeholder="neutral" className="input input-bordered w-full max-w-xs bg-neutral" />
          <input type="text" placeholder="base-100" className="input input-bordered w-full max-w-xs bg-base-100" />
          <input type="text" placeholder="base-content" className="input input-bordered w-full max-w-xs bg-base-content" />
          <input type="text" placeholder="info" className="input input-bordered w-full max-w-xs bg-info" />
          <input type="text" placeholder="success" className="input input-bordered w-full max-w-xs bg-success" />
          <input type="text" placeholder="warning" className="input input-bordered w-full max-w-xs bg-warning" />
          <input type="text" placeholder="error" className="input input-bordered w-full max-w-xs bg-error" />
          <span className="font-light">안녕</span>
          <span className="font-medium">안녕</span>
          <span className="font-bold">안녕</span>
        </div>
      </div>
    </>
  );
}