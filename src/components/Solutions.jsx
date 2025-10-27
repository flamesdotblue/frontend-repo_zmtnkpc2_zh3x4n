import { Shield, Server, Users, Ticket } from 'lucide-react';

const items = [
  {
    icon: Server,
    title: 'Modular Deployment',
    desc: 'Rapidly assemble containerized data centers with standardized power, cooling, and network fabrics.',
  },
  {
    icon: Shield,
    title: 'Zero-Trust Security',
    desc: 'Identity-first controls, continuous verification, and encrypted interconnects by default.',
  },
  {
    icon: Users,
    title: 'People-Connected',
    desc: 'Unify teams, partners, and clients with secured access flows and granular permissions.',
  },
  {
    icon: Ticket,
    title: 'Integrated Ticketing',
    desc: 'Track provisioning, incidents, and service requests in one streamlined workspace.',
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="relative bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Built for modern infrastructure</h2>
          <p className="mt-4 text-neutral-300">
            From edge to core, design and operate high-density, modular facilities with enterprise-grade security and a human-centered experience.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-gradient-to-br from-cyan-400 to-blue-600 text-neutral-900">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-medium">{title}</h3>
              <p className="mt-2 text-sm text-neutral-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
