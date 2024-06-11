import ModalLayout from "@/components/modal/ModalLayout";
import Search from "@/components/search/Search";
import ChoiceTable from "@/components/table/companyChoice/ChoiceTable";
import Pagination from "@/components/button/pagination/Pagination";
import * as S from './choiceCompany.module.css';

function ChoiceCompany ({setShow, title}) {
  return (
    <ModalLayout title={title} setShow={setShow}>
      <Search />
      <ChoiceTable title="최근 선택한 기업"/>
      <ChoiceTable title="검색 결과"/>
      <div className={S.paginationContainer}>
        <Pagination />
      </div>
    </ModalLayout>
  )
}

export default ChoiceCompany