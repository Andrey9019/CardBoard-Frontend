import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <div className="text-lg font-bold uppercase leading-none">
      <Link to="/">
        CARDS&
        <br />
        BOARD
      </Link>
    </div>
  );
}
