import Button from "@/components/button/Button";
import ModalLayout from "@/components/modal/ModalLayout";
import * as S from "./deleteAuth.module.css";
import * as B from "@/components/button/button.module.css";
import DefaultInput from "@/components/input/DefaultInput";
import { useForm } from "react-hook-form";

function DeleteAuth({ setShow, title }) {
  const { control } = useForm();
  return (
    <ModalLayout title={title} setShow={setShow}>
      <DefaultInput
        placeholder="비밀번호를 입력해 주세요"
        type="password"
        name="password"
        label="비밀번호"
        control={control}
      />
      <div className={S.buttonBox}>
        <Button
          name="삭제하기"
          className={`${B.half_circle} ${B.orange_background}`}
        />
      </div>
    </ModalLayout>
  );
}

export default DeleteAuth;
