import ReactTooltip from "react-tooltip";
import "./sloganList.css";
const SloganList = ({ slogans, search = "" }) => {
  return (
    <div>
      <div className="slogans-header">
        <p className="form-para">
          We've generated {slogans.length} slogans{" "}
          {search.length ? `for ${search}` : ""}
        </p>
        <button className="btn-secondary">Download all</button>
      </div>
      <div className="slogan-items">
        <ReactTooltip place="left" type="dark" effect="solid" />
        {slogans.length &&
          slogans.map((slogan) => {
            return (
              <p
                key={slogan.id}
                className="slogan-item"
                data-tip="copy to clipboard"
              >
                {slogan.slogan}
              </p>
            );
          })}
      </div>
    </div>
  );
};

export default SloganList;
