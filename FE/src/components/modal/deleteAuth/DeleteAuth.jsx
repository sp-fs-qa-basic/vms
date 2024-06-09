import Button from "@/components/button/Button";
import ModalLayout from "@/components/modal/ModalLayout";
import * as S from "./deleteAuth.module.css";

function DeleteAuth({ setShow, title }) {
  return (
    <ModalLayout title={title} setShow={setShow}>
      <div className={S.passwordBox}>비밀번호</div>
      <div className={S.buttonBox}>
        <Button name="삭제하기" />
      </div>
    </ModalLayout>
  );
}

export default DeleteAuth;
