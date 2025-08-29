import Image from "next/image";
import Link from "next/link";

type Lib = { slug: string; name: string; img: string };

const LIBRARIES: Lib[] = [
  { slug: "baillieu", name: "Baillieu Library", img: "/baillieu.jpg" },
  { slug: "erc", name: "ERC Library", img: "/erc.jpg" },
  { slug: "giblin", name: "Giblin Eunson Library", img: "/giblin.jpg" },
];

function LocIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s7-4.35 7-11a7 7 0 1 0-14 0c0 6.65 7 11 7 11Z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 11l9-8 9 8" />
      <path d="M9 22V12h6v10" />
    </svg>
  );
}
function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-3.6-3.6" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}
function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 21a8 8 0 1 0-16 0" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function NavItem({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <Link href={href} className="flex flex-col items-center gap-1">
      <div className="w-6 h-6">{icon}</div>
      <span className="sr-only">{label}</span>
    </Link>
  );
}

export default function Home() {
  const hour = new Date().getHours();
  const greet =
    hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening";

  return (
    <main className="pb-24">
      {/* Hero with location pill */}
      <div className="relative h-40 w-full">
        <Image
          src="/unimelbbg.jpg"
          alt="University of Melbourne"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute top-4 left-4">
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur px-3 py-2 rounded-xl shadow-sm border text-sm">
            <LocIcon />
            <span>University of Melbourne</span>
          </div>
        </div>
      </div>

      {/* Greeting */}
      <section className="px-6 py-8 text-center">
        <h1 className="text-3xl font-semibold">{greet}, User!</h1>
        <p className="text-slate-600 mt-2">
          Where would you like to study today?
        </p>
      </section>

      {/* Library cards */}
      <section className="px-6 space-y-8">
        {LIBRARIES.map((lib) => (
          <Link
            key={lib.slug}
            href={`/libraries/${lib.slug}`}
            className="block rounded-2xl overflow-hidden shadow-sm border hover:shadow-md transition"
          >
            <div className="relative h-44 w-full">
              <Image
                src={lib.img}
                alt={lib.name}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <div className="bg-[#0D2946] text-white px-4 py-2 rounded-xl inline-block">
                  {lib.name}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>

      {/* Bottom nav */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#0D2946] text-white">
        <div className="mx-auto max-w-screen-sm flex justify-around py-3">
          <NavItem href="/" label="Home" icon={<HomeIcon />} />
          <NavItem href="/search" label="Search" icon={<SearchIcon />} />
          <NavItem href="/timer" label="Timer" icon={<ClockIcon />} />
          <NavItem href="/profile" label="Profile" icon={<UserIcon />} />
        </div>
      </nav>
    </main>
  );
}
