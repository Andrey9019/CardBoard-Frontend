import { Link } from "react-router-dom";

const MobileMenu = ({ onClose }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-screen bg-primary text-white flex flex-col items-center p-6">
      <button className="self-end text-2xl" onClick={onClose}>
        ❌
      </button>
      <nav className="flex flex-col items-center space-y-4 mt-10">
        <Link to="/" onClick={onClose}>
          Складність гри
        </Link>
        <Link to="/" onClick={onClose}>
          Тривалість гри
        </Link>
        <Link to="/" onClick={onClose}>
          Типи гри
        </Link>
        <Link to="/" onClick={onClose}>
          Жанр гри
        </Link>
        <Link to="/" onClick={onClose}>
          Механіка гри
        </Link>
        <Link to="/" onClick={onClose}>
          Аксесуари
        </Link>
        <Link to="/" onClick={onClose}>
          Оренда і обмін
        </Link>
      </nav>
    </div>
  );
};

export default MobileMenu;
