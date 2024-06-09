import ModalLayout from "@/components/modal/ModalLayout";
import Search from "@/components/search/Search";
import ChoiceTable from "@/components/table/choiceTable/ChoiceTable";
// import * as S from './myChoiceCompany.module.css';

function ChoiceCompany ({setShow, title}) {
  return (
    <ModalLayout title={title} setShow={setShow}>
      <Search />
      <ChoiceTable title="최근 비교한 기업"/>
      <ChoiceTable title="검색 결과"/>
    </ModalLayout>
  )
}

export default ChoiceCompany