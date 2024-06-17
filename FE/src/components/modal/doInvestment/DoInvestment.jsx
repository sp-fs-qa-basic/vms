import DoInvestForm from "@/components/form/doInvest/DoInvestForm";
import ModalLayout from "@/components/modal/ModalLayout";
import CompanyTitle from "@/components/table/companyChoice/CompanyTitle";
import * as S from "./doInvestment.module.css";

function DoInvestment({ title, setShow, company, investor = null }) {
  const { companyId, src, name, category } = company;

  return (
    <ModalLayout title={title} setShow={setShow}>
      <div className={S.titleContainer}>
        투자 기업 정보
        <CompanyTitle src={src} name={name} category={category} />
      </div>
      <DoInvestForm setShow={setShow} id={companyId} investor={investor} />
    </ModalLayout>
  );
}

export default DoInvestment;
