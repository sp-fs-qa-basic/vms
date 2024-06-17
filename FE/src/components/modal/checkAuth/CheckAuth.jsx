import Button from "@/components/button/Button";
import ModalLayout from "@/components/modal/ModalLayout";
import * as S from "./checkAuth.module.css";
import * as B from "@/components/button/button.module.css";
import DefaultInput from "@/components/input/DefaultInput";
import { useForm } from "react-hook-form";
import { postCheckAuth } from "@/api/auth";
import { useState } from "react";
import AlertModal from "@/components/modal/alert/AlertModal";

function CheckAuth({ setShow, setCheck, title, id }) {
  const { control, handleSubmit, getValues } = useForm();
  const [showAlert, setShowAlert] = useState(false);

  const onSubmit = async () => {
    const res = await postCheckAuth(id, getValues("password"));
    if (res.status === 200) {
      setCheck(true);
    } else {
    }
  };

  return (
    <>
      <ModalLayout title={`${title.slice(0,2)}권한 인증`} setShow={setShow}>
        <form onSubmit={handleSubmit(onSubmit)} className={S.formContainer} >
          <DefaultInput
            placeholder="비밀번호를 입력해 주세요"
            type="password"
            name="password"
            label="비밀번호"
            control={control}
          />
          <div className={S.buttonBox}>
            <Button
              type="submit"
              name={title}
              className={`${B.half_circle} ${B.orange_background}`}
            />
          </div>
        </form>
      </ModalLayout>
      {showAlert && (
        <AlertModal
          title="잘못된 비밀번호로 삭제에 실패하셨습니다."
          setShow={setShowAlert}
        />
      )}
    </>
  );
}

export default CheckAuth;
