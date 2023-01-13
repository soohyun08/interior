import "./section2.scss";
import { Link } from "react-router-dom";

function Section2() {
  return (
    <>
      <div className="BgBeige"></div>
      <article className="section2">
        <div className="bg-image"></div>
        <section>
          <div className="txt">
            <div className="section2Dots"></div>
            <h2>
              인테리어 케이와 <br />
              함께하는 <strong>좋은 집 프로젝트</strong>
            </h2>
            <p>
              2022년 인테리어 케이와 함께하는
              <br />
              새로운 라이프스타일 트렌드를 만나보세요
            </p>
          </div>
          <div className="btn">
            <Link to="/">공유하기</Link>
            <Link to="/">상담신청</Link>
          </div>
        </section>
      </article>
    </>
  );
}

export default Section2;
