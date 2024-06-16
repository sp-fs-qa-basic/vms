import * as S from "./paginationBtn.module.css";

function PaginationBtn({ type, disabled, active, onClick }) {
  return (
    <button
      className={`${S.button} ${active ? S.btn_click : S.btn_unClick}`}
      onClick={onClick}
      disabled={disabled}
    >
      {type}
    </button>
  );
}

export default PaginationBtn;
