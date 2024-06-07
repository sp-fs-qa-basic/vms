import PaginationBtn from "@/components/button/pagination/PaginationBtn";
import * as S from './paginationBtn.module.css';

function Pagination () {
  return (
    <div className={S.container}>
      <PaginationBtn type="<"/>
      <div>
        <PaginationBtn type="1"/>
      </div>
      <PaginationBtn type=">"/>
    </div>
  )
}

export default Pagination