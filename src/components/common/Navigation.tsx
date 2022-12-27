import Link from "next/link";
import { useRouter } from "next/router";

export const Navigation: React.FC = () => {
  return (
    <div className="flex h-full w-1/12 flex-col items-center justify-center gap-4">
      <NavItem href="/" label="H" title="Homepage" />
      <NavItem href="/tournaments" label="T" title="Tournaments" />
      <NavItem href="/users" label="U" title="Users" />
      <NavItem href="/matches" label="M" title="Matches" />
      <NavItem href="/champions" label="C" title="Champions" />
    </div>
  );
};

const NavItem: React.FC<{ label: string; href: string; title: string }> = (
  props
) => {
  const router = useRouter();

  const isRouteActive = router.asPath === props.href;

  const active = isRouteActive
    ? "bg-purple-800 text-zinc-900"
    : "text-purple-700";
  const hover = isRouteActive
    ? ""
    : "cursor-pointer hover:text-purple-500 border-purple-500 border-0 hover:border-4";

  return (
    <Link
      href={props.href}
      title={props.title}
      className={`grid h-16 w-16 place-items-center rounded-xl text-3xl font-bold transition-all ${hover} ${active}`}
    >
      {props.label}
    </Link>
  );
};
