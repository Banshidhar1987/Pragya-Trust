import Link from 'next/link';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/#about', label: 'About Us' },
  { href: '/gallery', label: 'Photo' },
  { href: '/register', label: 'Member' },
  { href: '/#videos', label: 'Videos' },
  { href: '/contact', label: 'Contact Us' }
];

export default function Layout({ children }) {
  return (
    <div>
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <div>
            <p className="font-semibold text-brandgreen">Pragnya Educational & Social Service, Bhubaneswar</p>
            <p className="text-sm text-slate-600">A clean, eco-friendly trust for education and tree plantation.</p>
          </div>
          <nav className="hidden items-center gap-4 md:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-slate-700 transition hover:text-brandblue">
                {item.label}
              </Link>
            ))}
          </nav>
          <Link href="/admin" className="rounded-full bg-brandgreen px-4 py-2 text-sm font-semibold text-white transition hover:bg-brandblue">
            Admin
          </Link>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-slate-200 bg-white/90 px-5 py-6 text-center text-sm text-slate-600 md:px-8">
        © {new Date().getFullYear()} Pragnya Educational & Social Trust. Built with local JSON storage and Next.js.
      </footer>
    </div>
  );
}
