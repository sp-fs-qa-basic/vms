import Button from "@/components/button/Button";

const { default: ModalLayout } = require("@/components/modal/ModalLayout");

function AlertModal({title, setShow}) {
  return (
    <ModalLayout title='' setShow={setShow} >
      <div>
        <span>{title}</span>
        <Button name='확인' onClick={setShow} />
      </div>
    </ModalLayout>
  )
}

export default AlertModal