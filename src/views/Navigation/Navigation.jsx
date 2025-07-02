import "./Navigation.css";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
const Navigation = ({ handleInputChange, query }) => {
  return (
    <nav>
      <div className="nav-container">
        <input
          type="text"
          className="serch-input"
          value={query}
          onChange={handleInputChange}
          placeholder="Enter your search shoes."
        />
      </div>
      <div className="profile-container">
        <a href="">
          <FiHeart className="nav-icon" />
        </a>
        <a href="">
          <AiOutlineUserAdd className="nav-icon" />
        </a>
        <a href="">
          <AiOutlineShoppingCart className="nav-icon" />
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
