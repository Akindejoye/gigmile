import Left from "../../assets/images/arrow-left.svg";
import Right from "../../assets/images/arrow-right.svg";
import "./style.css";

const Pagination = () => {
  return (
    <div className="pagination">
      <div className="pagination-box">
        <img src={Left} alt="Left" className="pagination__img-one" />
        <span className="pagination__span-1">1</span>
        <span className="pagination__span-2">2</span>
        <span className="pagination__span-3">...</span>
        <span className="pagination__span-4">16</span>
        <img src={Right} alt="right" className="pagination__img-two" />
      </div>
    </div>
  );
};

export default Pagination;
