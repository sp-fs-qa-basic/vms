import * as S from "./modalLayout.module.css";

function ModalLayout({ children }) {
  return (
    <div className={S.overlay}>
      <div className={S.outerModalContainer}>
        {children}
      </div>
    </div>
  );
}

export default ModalLayout;
