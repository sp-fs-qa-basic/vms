import * as S from "./modalLayout.module.css";
import { ReactComponent as CloseImg } from "@/assets/icons/ic_delete.svg";

function ModalLayout({ title, children, setShow }) {
  return (
    <>
      <div className={S.overlay} onClick={() => setShow(false)} />
      <div className={S.modalContainer}>
        <span className={S.span}>{title}</span>
        <CloseImg className={S.img} onClick={() => setShow(false)} />
        {children}
      </div>
    </>
  );
}

export default ModalLayout;
