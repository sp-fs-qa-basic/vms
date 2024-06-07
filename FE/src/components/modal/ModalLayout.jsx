import * as S from "./modalLayout.module.css";
import {ReactComponent as CloseImg} from '@/assets/icons/ic_delete.svg'

function ModalLayout({ children, setShow }) {
  return (
    <>
      <div className={S.overlay} />
      <div className={S.modalContainer}>
        <CloseImg className={S.img} onClick={() => setShow(false)} />
        {children}
      </div>
    </>
  );
}

export default ModalLayout;
