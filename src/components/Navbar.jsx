import { useState } from 'react';
import { Menu, X, Server } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-neutral-950/70 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-cyan-400 to-blue-600 text-neutral-900">
              <Server className="h-5 w-5" />
            </div>
            <span className="text-lg font-semibold tracking-tight text-white">ModuGrid</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-300">
            <a href="#solutions" className="hover:text-white transition-colors">Solutions</a>
            <a href="#platform" className="hover:text-white transition-colors">Platform</a>
            <a href="#customers" className="hover:text-white transition-colors">Customers</a>
            <a href="#resources" className="hover:text-white transition-colors">Resources</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#auth" className="rounded-md px-4 py-2 text-sm text-neutral-200 hover:text-white">Sign in</a>
            <a href="#auth" className="rounded-md bg-white px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-200">Create account</a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral-200 hover:bg-white/10"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-white/10 py-3">
            <nav className="flex flex-col gap-2 text-neutral-300">
              <a href="#solutions" className="rounded-md px-2 py-2 hover:bg-white/5">Solutions</a>
              <a href="#platform" className="rounded-md px-2 py-2 hover:bg-white/5">Platform</a>
              <a href="#customers" className="rounded-md px-2 py-2 hover:bg-white/5">Customers</a>
              <a href="#resources" className="rounded-md px-2 py-2 hover:bg-white/5">Resources</a>
              <div className="mt-2 flex gap-2">
                <a href="#auth" className="flex-1 rounded-md px-3 py-2 text-center text-sm text-neutral-200 hover:bg-white/5">Sign in</a>
                <a href="#auth" className="flex-1 rounded-md bg-white px-3 py-2 text-center text-sm font-medium text-neutral-900">Create account</a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
