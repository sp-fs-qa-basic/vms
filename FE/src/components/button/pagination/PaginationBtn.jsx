import * as S from "./paginationBtn.module.css";

function PaginationBtn({ type, click = false, onClick, disabled }) {

  return (
    <button
      className={`${S.button} ${click ? S.btn_click : S.btn_unClick}`}
      onClick={onClick}
      disabled={disabled}
    >
      {type}
    </button>
  );
}

export default PaginationBtn;
