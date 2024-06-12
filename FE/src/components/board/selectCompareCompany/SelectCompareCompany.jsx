import { ReactComponent as MinusImg } from "@/assets/icons/minus.svg";
import * as S from "./selectCompareCompany.module.css";

function SelectCompareCompany({src, name, category}) {
  return (
    <div className={S.container}>
      <MinusImg className={S.delete} />
      <img className={S.img} src={src} />
      <div className={S.titleContainer} >
        <h2 className={S.h2}>{name}</h2>
        <span className={S.span}>{category}</span>
      </div>
    </div>
  );
}

export default SelectCompareCompany;
