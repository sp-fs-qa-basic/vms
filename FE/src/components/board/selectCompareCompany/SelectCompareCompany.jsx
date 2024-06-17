import { ReactComponent as MinusImg } from "@/assets/icons/minus.svg";
import * as S from "./selectCompareCompany.module.css";

function SelectCompareCompany({src, name, category, onClick}) {
  return (
    <div className={S.container}>
      <MinusImg className={S.delete} onClick={onClick} />
      <img className={S.img} src={src} />
      <div className={S.titleContainer} >
        <h2 className={S.h2}>{name}</h2>
        <span className={S.span}>{category}</span>
      </div>
    </div>
  );
}

export default SelectCompareCompany;
