import { useForm } from "react-hook-form";
import DefaultInput from "@/components/input/DefaultInput";
import Button from "@/components/button/Button";
import { postInvestment, updateInvestment } from "@/api/investment";
import * as S from "./doInvestForm.module.css";
import * as B from "@/components/button/button.module.css";

function DoInvestForm({ setShow, id, investor }) {
  const {
    control,
    handleSubmit,
    getValues,
  } = useForm();

  const onSubmit = async () => {
    const {passwordCheck, ...formData} = getValues();
    let res;
    if(investor) {
      res = await updateInvestment(investor.id, formData);
    } else {
      res = await postInvestment(id, formData);
    }

    if(res.status === 200) {
      setShow(false);
    } 
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={S.formContainer}>
      <DefaultInput
        placeholder="투자자 이름을 입력해 주세요"
        name="name"
        label="투자자 이름"
        value={investor.name}
        control={control}
      />
      <DefaultInput
        placeholder="투자 금액을 입력해 주세요"
        name="amount"
        label="투자 금액"
        value={investor.amount}
        control={control}
      />
      <DefaultInput
        placeholder="코멘트를 입력해 주세요"
        type="textarea"
        name="comment"
        label="투자 코멘트"
        value={investor.comment}
        control={control}
      />
      <DefaultInput
        placeholder={investor ? "비밀번호 변경을 원하실 경우 새로운 비밀번호를 입력해주세요" : "비밀번호를 입력해 주세요"}
        type="password"
        name="password"
        label="비밀번호"
        control={control}
      />
      <DefaultInput
        placeholder="비밀번호를 다시 한 번 입력해 주세요"
        type="password"
        name="passwordCheck"
        label="비밀번호 확인"
        control={control}
        rules={{
          validate: (value) => value === getValues("password") || "비밀번호가 일치하지 않습니다."
        }}
      />
      <div className={S.buttonBox}>
        <Button
          name="취소"
          className={`${B.half_circle} ${B.orange_border}`}
          onClick={() => setShow(false)}
        />
        <Button
          type="submit"
          name="투자하기"
          className={`${B.half_circle} ${B.orange_background}`}
        />
      </div>
    </form>
  );
}

export default DoInvestForm;
