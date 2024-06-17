import Button from "@/components/button/Button";
import ModalLayout from "@/components/modal/ModalLayout";
import * as S from './alertModal.module.css';
import * as B from '@/components/button/button.module.css'

function AlertModal({ title, setShow }) {
  return (
    <ModalLayout title="" setShow={setShow}>
      <div className={S.container}>
        <span className={S.title} >{title}</span>
        <Button className={`${B.button} ${B.half_circle} ${B.orange_background}`} name="확인" onClick={() => setShow(false)} />
      </div>
    </ModalLayout>
  );
}

export default AlertModal;
