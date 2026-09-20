import { Link as RouterLink, useLocation } from "react-router-dom";

export function Link({ href, children }: { href: string; children: string }) {
  const location = useLocation();
  const isActive = href === "/" ? location.pathname === href : location.pathname.startsWith(href);

  return (
    <RouterLink to={href} className={isActive ? "is-active" : undefined}>
      {children}
    </RouterLink>
  );
}
