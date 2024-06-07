import ModalLayout from "@/components/modal/ModalLayout";
import Search from "@/components/search/Search";
import * as S from './myChoiceCompany.module.css';

function MyChoiceCompany ({setShow}) {
  return (
    <ModalLayout setShow={setShow}>
      <span className={S.span}>나의 기업 선택하기</span>
      <Search />
      
    </ModalLayout>
  )
}

export default MyChoiceCompany