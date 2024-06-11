import DefaultInput from "@/components/input/DefaultInput";
import * as S from "./doInvestForm.module.css";

function DoInvestForm({ method }) {
  const { control, handleSubmit } = method;

  return (
    <form onSubmit={handleSubmit} className={S.formContainer} >
      <DefaultInput
        placeholder="투자자 이름을 입력해 주세요"
        name="name"
        label="투자자 이름"
        control={control}
      />
      <DefaultInput
        placeholder="투자 금액을 입력해 주세요"
        name="investment"
        label="투자 금액"
        control={control}
      />
      <DefaultInput
        placeholder="코멘트를 입력해 주세요"
        type="textarea"
        name="comment"
        label="투자 코멘트"
        control={control}
      />
      <DefaultInput
        placeholder="비밀번호를 입력해 주세요"
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
      />
    </form>
  );
}

export default DoInvestForm;
