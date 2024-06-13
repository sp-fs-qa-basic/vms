import DoInvestForm from "@/components/form/doInvest/DoInvestForm";
import ModalLayout from "@/components/modal/ModalLayout";
import CompanyTitle from "@/components/table/companyChoice/CompanyTitle";
import * as S from "./doInvestment.module.css";
import { Companies } from "@/api/mock";

//TODO : mockData 처리
function DoInvestment({ title, setShow, company }) {
  const { id, src, name, category } = company;
  console.log(company)

  return (
    <ModalLayout title={title} setShow={setShow}>
      <div className={S.titleContainer}>
        투자 기업 정보
        <CompanyTitle src={src} name={name} category={category} />
      </div>
      <DoInvestForm setShow={setShow} id={id} />
    </ModalLayout>
  );
}

export default DoInvestment;
