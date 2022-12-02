import Link from 'next/link';
import { useRouter } from 'next/router';

export const Navigation: React.FC = () => {
  return (
    <div className="h-full w-1/12 flex justify-center items-center flex-col gap-4">
      <NavItem href="/" label="H" />
      <NavItem href="/tournaments" label="T" />
      <NavItem href="/users" label="U" />
      <NavItem href="/matches" label="M" />
      <NavItem href="/champions" label="C" />
    </div>
  )
};

const NavItem: React.FC<{ label: string, href: string }> = (props) => {
  const router = useRouter();

  const isRouteActive = router.asPath === props.href;

  const active = isRouteActive ? 'bg-purple-800 text-zinc-900' : 'text-purple-700';
  const hover = isRouteActive ? '' : 'cursor-pointer hover:text-purple-500 border-purple-500 border-0 hover:border-4'

  return (
    <Link href={props.href} className={`font-bold text-3xl h-16 w-16 grid place-items-center transition-all rounded-xl ${hover} ${active}`}>
      {props.label}
    </Link>
  )
}
