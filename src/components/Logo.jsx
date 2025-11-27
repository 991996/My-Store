import { Link } from "react-router-dom";

function Logo({ color }) {
  return (
    <Link to="/">
      {color === "white" ? (
        <span className="uppercase text-3xl lg:text-4xl font-bold text-white">
          rk-store
        </span>
      ) : (
        <span className="uppercase text-3xl lg:text-4xl font-bold bg-linear-to-r from-mustard via-cherry-blossom to-blue bg-clip-text text-transparent">
          rk-store
        </span>
      )}
    </Link>
  );
}

export default Logo;
