import * as S from './paginationBtn.module.css';

function PaginationBtn ({type, click = false}) {
  return (
    <button className={`${S.button} ${click ? S.btn_click : S.btn_unClick}` }>
      {type}
    </button>
  )
}

export default PaginationBtn