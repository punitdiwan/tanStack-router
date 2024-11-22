import { Link } from "@tanstack/react-router";

const activeProps = {
  style: {
    color: "hsl(142.1 70.6% 45.3%)",
  },
};

const className = "font-bold text-muted-foreground mx-1";

export const Header = () => {
  return (
    <div className="p-4 border-4 border-green-500">
      <h1
        className="scroll-m-20 text-4xl font-extrabold tracking-tight text-center mb-1 text-green-600"
      >
        TanStack Router
      </h1>
      <ul className="flex flex-wrap gap-1 justify-center">
        <li>
          <Link className={className} to="/" activeProps={activeProps}>
            Home
          </Link>
        </li>
        <li>
          <Link className={className} to="/profile" activeProps={activeProps}>
            {({ isActive }) => <>Profile {isActive}</>}
          </Link>
        </li>
        <li>
          <Link className={className} to="/pokemon" activeProps={activeProps}>
            Pokemons
          </Link>
        </li>
        <li>
          <Link className={className} to="/users" activeProps={activeProps}>
            Users
          </Link>
        </li>
      </ul>
    </div>
  );
};
