import { useLocation, useNavigate, useParams } from "react-router-dom";
import { navigatorLists } from "@/constants/navigatorList";
import LogoImg from "@/assets/images/img_logo.png";
import * as S from "./navbar.module.css";

function Navbar() {
  const navigate = useNavigate();
  const pathname = useLocation().pathname;

  return (
    <div className={S.container}>
      <img
        src={LogoImg}
        alt="logo"
        className={S.logo}
        onClick={() => navigate("/")}
      />
      <div className={S.navContainer}>
        {Object.keys(navigatorLists).map((list, index) => (
          <button
            key={index}
            className={`${S.button} ${
              pathname === navigatorLists[list] ? S.focus : ""
            }`}
            onClick={() => navigate(navigatorLists[list])}
          >
            {list}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
