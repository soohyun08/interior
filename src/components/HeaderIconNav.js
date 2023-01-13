import "./HeaderIconNav.scss";
import { Link } from "react-router-dom";

function HeaderIconNav() {
  return (
    <div className="HeaderIconNavStyle">
      <ul>
        <li className="mainTitle">
          <Link to="/">메인페이지</Link>
        </li>
      </ul>
      <ul>
        <li class="mainTitle">
          <Link to="/">
            회사소개
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
            </svg>
          </Link>
        </li>
        <li className="bold">
          <Link to="/">회사소개</Link>
        </li>
        <li>
          <Link to="/">&middot; 회사소개 스타일1</Link>
        </li>
        <li>
          <Link to="/">&middot; 회사소개 스타일2</Link>
        </li>
        <li>
          <Link to="/">&middot; 회사소개 스타일3</Link>
        </li>
        <li className="bold">
          <Link to="/">회사비전</Link>
        </li>
        <li>
          <Link to="/">&middot; 회사비전 스타일1</Link>
        </li>
        <li>
          <Link to="/">&middot; 회사비전 스타일2</Link>
        </li>
        <li>
          <Link to="/">&middot; 회사비전 스타일3</Link>
        </li>
        <li className="bold">
          <Link to="/">회사연혁</Link>
        </li>
        <li className="bold">
          <Link to="/">조직소개</Link>
        </li>
        <li className="bold">
          <Link to="/">오시는길</Link>
        </li>
      </ul>
      <ul>
        <li class="mainTitle">
          <Link to="/">
            제품서비스
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
            </svg>
          </Link>
        </li>
        <li className="bold">
          <Link to="/">서비스소개</Link>
        </li>
        <li>
          <Link to="/">&middot; 서비스소개 스타일1</Link>
        </li>
        <li>
          <Link to="/">&middot; 서비스소개 스타일2</Link>
        </li>
        <li>
          <Link to="/">&middot; 서비스소개 스타일3</Link>
        </li>
        <li className="bold">
          <Link to="/">제품안내</Link>
        </li>
        <li>
          <Link to="/">&middot; 제품안내 스타일1</Link>
        </li>
      </ul>
      <ul>
        <li class="mainTitle">
          <Link to="/">
            갤러리
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
            </svg>
          </Link>
        </li>
        <li className="bold">
          <Link to="/"> 갤러리 스타일1</Link>
        </li>
        <li className="bold">
          <Link to="/"> 갤러리 스타일2</Link>
        </li>
        <li className="bold">
          <Link to="/"> 갤러리 스타일3</Link>
        </li>
      </ul>
      <ul>
        <li class="mainTitle">
          <Link to="/">
            고객센터
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
            </svg>
          </Link>
        </li>
        <li className="bold">
          <Link to="/">집꾸미기</Link>
        </li>
        <li className="bold">
          <Link to="/">인테리어 트랜드</Link>
        </li>
        <li className="bold">
          <Link to="/">자주묻는 질문</Link>
        </li>
        <li className="bold">
          <Link to="/">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
}

export default HeaderIconNav;
