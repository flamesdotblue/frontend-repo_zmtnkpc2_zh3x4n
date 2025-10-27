import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative isolate min-h-[80vh] w-full overflow-hidden bg-neutral-950" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Nhk4dWoYLj83rV44/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,255,255,0.15),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.2),transparent_60%)]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 py-24 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Live across 40+ regions
        </div>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
          Modular data centers for a connected world
        </h1>
        <p className="max-w-2xl text-base text-neutral-300 sm:text-lg">
          Deploy, scale, and connect secure micro-datacenters anywhere. Built for compliance, performance, and global collaboration.
        </p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <a href="#auth" className="rounded-md bg-white px-5 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-200">
            Get started
          </a>
          <a href="#ticketing" className="rounded-md bg-white/10 px-5 py-3 text-sm font-medium text-white hover:bg-white/20">
            Open a support ticket
          </a>
        </div>
      </div>
    </section>
  );
}
