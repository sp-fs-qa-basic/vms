import Button from "@/components/button/Button";
import DoInvestForm from "@/components/form/doInvest/DoInvestForm";
import ModalLayout from "@/components/modal/ModalLayout";
import CompanyTitle from "@/components/table/company/CompanyTitle";
import { useForm } from "react-hook-form";

function DoInvestment({ title, setShow }) {
  const method = useForm();

  return (
    <ModalLayout title={title} setShow={setShow}>
      <div>
        투자 기업 정보
        <CompanyTitle />
      </div>
      <DoInvestForm method={method} />
      <div>
        <Button name="취소" />
        <Button name="투자하기" />
      </div>
    </ModalLayout>
  );
}

export default DoInvestment;
