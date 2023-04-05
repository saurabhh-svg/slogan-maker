import "./pagination.css";
const Pagination = () => {
  return (
    <div className="pagination-main">
      <div></div>
      <div className="pagination-pages">
        <p className="active">1</p>
        <p>2</p>
        <p>3</p>
        <p>...</p>
        <p>21</p>
      </div>
      <div>
        <p>Next {`>`}</p>
      </div>
    </div>
  );
};

export { Pagination };
