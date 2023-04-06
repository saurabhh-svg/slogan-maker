import { useState } from "react";
import Slogans from "../sloganList/SloganList";
import { SloganData } from "../../../assets/data/SloganData";
import { Divider } from "../../common/divider/Divider";
import { Pagination } from "../../common/pagination/Pagination";
import "./sloganForm.css";

const SloganForm = () => {
  const [filteredSlogans, setFilteredSlogans] = useState(SloganData);
  const [searchString, setSearchString] = useState();

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchString);
    setFilteredSlogans(
      SloganData.filter((slogan) =>
        slogan.slogan.toLowerCase().includes(searchString.toLowerCase())
      )
    );
  };

  const setSearch = (e) => {
    console.log(e.target.value);
    setSearchString(e.target.value);
  };

  return (
    <div className="container form-container">
      <div className="form-main">
        <h3 className="form-heading">Free slogan maker</h3>
        <p className="form-para">
          Simply enter a term that describes your business, and get up to 1,000
          relevant slogans for free
        </p>
        <form className="form-page">
          <label className="form-label" htmlFor="slogan">
            Word for your slogan
          </label>
          <input
            className="form-input"
            type="search"
            name="slogan"
            placeholder="cozy"
            onChange={setSearch}
          />
          <button className="btn-form mt-48" onClick={(e) => handleSearch(e)}>
            Generate slogans
          </button>
        </form>
        <Divider />
        <Slogans slogans={filteredSlogans} search={searchString} />
        <Divider />
        <Pagination />
      </div>
    </div>
  );
};

export default SloganForm;
