import DefaultInput from "@/components/input/DefaultInput"
import ModalLayout from "@/components/modal/ModalLayout"

function DoInvestment ({setShow}) {
  return (
    <ModalLayout title="기업에 투자하기" setShow={setShow}>
      <div>
        투자 기업 정보
        <div>
          이미지, 회사이름, 카테고리 컴포넌트 만들어서 넣기
        </div>
      </div>
      <DefaultInput placeholder='투자자 이름을 입력해 주세요' type = "text" name='name' control='' />
      <DefaultInput placeholder='투자 금액을 입력해 주세요' type = "text" name='name' control='' />
      <DefaultInput placeholder='코멘트를 입력해 주세요' type = "text" name='name' control='' />
      <DefaultInput placeholder='비밀번호를 입력해 주세요' type = "text" name='name' control='' />
      <DefaultInput placeholder='비밀번호를 다시 한 번 입력해 주세요' type = "text" name='name' control='' />
    </ModalLayout>
  )
}

export default DoInvestment