import ModalPortal from "/src/portal.jsx";
import { ReactComponent as CloseImg } from "@/assets/icons/delete.svg";
import * as S from "./modalLayout.module.css";

function ModalLayout({ title, children, setShow }) {
  return (
    <ModalPortal>
      <div className={S.overlay} onClick={() => setShow(false)} />
      <div className={S.modalContainer} onClick={(e) => e.stopPropagation()}>
        <span className={S.span}>{title}</span>
        <CloseImg className={S.img} onClick={() => setShow(false)} />
        {children}
      </div>
    </ModalPortal>
  );
}

export default ModalLayout;
