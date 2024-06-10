import Button from "@/components/button/Button";
import DoInvestForm from "@/components/form/doInvest/DoInvestForm";
import ModalLayout from "@/components/modal/ModalLayout";
import CompanyTitle from "@/components/table/company/CompanyTitle";
import { useForm } from "react-hook-form";
import * as S from './doInvestment.module.css';
import { Companies } from "@/api/mock";

//TODO : mockData 처리
function DoInvestment({ title, setShow }) {
  const method = useForm();
  const { src, name, category } = Companies[1];

  return (
    <ModalLayout title={title} setShow={setShow}>
      <div className={S.titleContainer} >
        투자 기업 정보
        <CompanyTitle src={src} name={name} category={category} />
      </div>
      <DoInvestForm method={method} />
      <div className={S.buttonBox} >
        <Button name="취소" className={`${S.half_circle} ${S.orange_border}`} />
        <Button name="투자하기" className={`${S.half_circle} ${S.orange_background}`} />
      </div>
    </ModalLayout>
  );
}

export default DoInvestment;
