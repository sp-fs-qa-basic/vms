import { navigatorLists } from "@/constants/navigatorList";
import LogoImg from "@/assets/images/img_logo.png";
import * as S from "./navbar.module.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className={S.container}>
      <img src={LogoImg} alt="logo" className={S.logo} onClick={() => navigate('/')} />
      <div className={S.navContainer}>
        {Object.keys(navigatorLists).map((list, index) => (
          <button
            key={index}
            className={S.button}
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
