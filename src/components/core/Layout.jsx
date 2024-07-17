import { Link } from "react-router-dom";

const NavItems = [
  {
    id: "nav-item-001",
    title: "Home",
    path: "/",
  },
  {
    id: "nav-item-002",
    title: "Counter",
    path: "/counter",
  },
];

export default function Layout({ children }) {
  return (
    <>
      <div>
        <div>
          {NavItems.map(({ id, title, path }) => (
            <Link key={id} to={path}>
              {title}
            </Link>
          ))}
        </div>
      </div>
      <div>{children}</div>
    </>
  );
}
