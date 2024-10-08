import { useState } from "react";
import search from "../../assets/search.png";
import "./searchbar.scss";
import { Link, useNavigate } from "react-router-dom";
function Searchbar() {
  const navigate = useNavigate();
  const [activeType, setActiveType] = useState({
    type: "Buy",
    location: "",
    maxPrice: "",
    minPrice: "",
  });
  const toListPage = () => navigate("/list");
  const btnTypes = ["Buy", "Rent"];
  const handleTypeChange = (type) => {
    setActiveType((pv) => ({ ...pv, type }));
  };
  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setActiveType((pv) => ({ ...pv, [name]: value }));
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    setActiveType((pv) => ({
      ...pv,
      location: "",
      maxPrice: "",
      minPrice: "",
    }));
  };
  return (
    <div className="searchBar">
      <div className="type">
        {btnTypes.map((type) => (
          <button
            key={type}
            className={`${activeType.type === type && "active"}`}
            onClick={() => handleTypeChange(type)}
          >
            {type}
          </button>
        ))}
      </div>
      <form onSubmit={onHandleSubmit}>
        <input
          type="text"
          name="location"
          placeholder="City Location"
          onChange={onHandleChange}
          value={activeType.location}
        />
        <input
          type="number"
          name="minPrice"
          value={activeType.minPrice}
          min={0}
          max={10000000}
          placeholder="Min Price"
          onChange={onHandleChange}
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={10000000}
          value={activeType.maxPrice}
          placeholder="Max Price"
          onChange={onHandleChange}
        />

        <button type="button" onClick={toListPage}>
          <img src={search} alt="Search" />
        </button>
      </form>
    </div>
  );
}

export default Searchbar;
