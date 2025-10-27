import { ArrowRight, LogIn, Send } from 'lucide-react';

export default function CTA() {
  return (
    <section id="auth" className="relative bg-neutral-950 py-20 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold tracking-tight">Access your workspace</h3>
            <p className="mt-2 text-neutral-300">Sign in or create an account to manage deployments and collaborate with your team.</p>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div>
              <label className="mb-1 block text-sm text-neutral-300">Email</label>
              <input type="email" required className="w-full rounded-md border border-white/10 bg-neutral-900 px-3 py-2 text-sm text-white placeholder-neutral-500 outline-none focus:ring-2 focus:ring-cyan-500" placeholder="you@company.com" />
            </div>
            <div>
              <label className="mb-1 block text-sm text-neutral-300">Password</label>
              <input type="password" required className="w-full rounded-md border border-white/10 bg-neutral-900 px-3 py-2 text-sm text-white placeholder-neutral-500 outline-none focus:ring-2 focus:ring-cyan-500" placeholder="••••••••" />
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-200">
                <LogIn className="h-4 w-4" /> Sign in
              </button>
              <button type="button" className="inline-flex items-center justify-center gap-2 rounded-md bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20">
                Create account <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>

        <div id="ticketing" className="rounded-2xl border border-white/10 bg-white/5 p-8">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold tracking-tight">Open a support ticket</h3>
            <p className="mt-2 text-neutral-300">Report incidents, request provisioning, or ask for help. Our team responds 24/7.</p>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm text-neutral-300">Name</label>
                <input className="w-full rounded-md border border-white/10 bg-neutral-900 px-3 py-2 text-sm text-white placeholder-neutral-500 outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="mb-1 block text-sm text-neutral-300">Email</label>
                <input type="email" className="w-full rounded-md border border-white/10 bg-neutral-900 px-3 py-2 text-sm text-white placeholder-neutral-500 outline-none focus:ring-2 focus:ring-cyan-500" placeholder="jane@company.com" />
              </div>
            </div>
            <div>
              <label className="mb-1 block text-sm text-neutral-300">Subject</label>
              <input className="w-full rounded-md border border-white/10 bg-neutral-900 px-3 py-2 text-sm text-white placeholder-neutral-500 outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Rack expansion in FRA-2" />
            </div>
            <div>
              <label className="mb-1 block text-sm text-neutral-300">Details</label>
              <textarea rows={4} className="w-full resize-none rounded-md border border-white/10 bg-neutral-900 px-3 py-2 text-sm text-white placeholder-neutral-500 outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Describe the request or issue..." />
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-md bg-cyan-500 px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-cyan-400">
                <Send className="h-4 w-4" /> Submit ticket
              </button>
              <a href="#" className="inline-flex items-center justify-center gap-2 rounded-md bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20">
                Check ticket status <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
