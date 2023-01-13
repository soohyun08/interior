import "./section6.scss";
import { Link } from "react-router-dom";

function Section6(props) {
  return (
    <div className="section6">
      <div className="section6Txt">
        <div className="section6Dots"></div>
        <h3>
          고객상담 및 <strong>인테리어 문의</strong>
        </h3>
        <p>고객만족으로 보답하겠습니다</p>
        <Link to="/" className="article6_btn">
          문의상담
        </Link>
      </div>
    </div>
  );
}

export default Section6;
