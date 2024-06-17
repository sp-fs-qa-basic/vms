import { useState } from "react";
import { useForm } from "react-hook-form";
import AlertModal from "@/components/modal/alert/AlertModal";
import Button from "@/components/button/Button";
import DefaultInput from "@/components/input/DefaultInput";
import ModalLayout from "@/components/modal/ModalLayout";
import { postCheckAuth } from "@/api/auth";
import * as S from "./checkAuth.module.css";
import * as B from "@/components/button/button.module.css";
import { deleteInvestment } from "@/api/investment";

function CheckAuth({ setShow, setCheck, title, id, setShowAlert }) {
  const { control, handleSubmit, getValues } = useForm();

  const onSubmit = async () => {
    const res = await postCheckAuth(id, getValues());
    setCheck(false)
    if (res.status === 200) {
      if(title === '수정하기') {
        setShow(true);
      } else {
        await deleteInvestment(id);
      }
    } else {
      setShowAlert(true);
    }
  };

  return (
    <ModalLayout title={`${title.slice(0, 2)}권한 인증`} setShow={setCheck}>
      <form onSubmit={handleSubmit(onSubmit)} className={S.formContainer}>
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
  );
}

export default CheckAuth;
