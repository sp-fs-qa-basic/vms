import Button from "@/components/button/Button";
import ModalLayout from "@/components/modal/ModalLayout";

function AlertModal({title, setShow}) {
  return (
    <ModalLayout title='' setShow={setShow} >
      <span>{title}</span>
      <Button name='확인' onClick={setShow} />
    </ModalLayout>
  )
}

export default AlertModal