import Button from "@/components/button/Button";
import CompareBoardLayout from "@/components/layout/compareBoard/CompareBoardLayout";
import * as S from "./compareCompanyBoard.module.css";
import * as B from "@/components/button/button.module.css";

function CompareCompanyBoard({ title, show, setShow }) {
  return (
    <CompareBoardLayout title={title}>
      <div className={S.button}>
        <Button
          name="기업 추가하기"
          className={`${B.half_circle} ${B.orange_background}`}
          onClick={() => setShow(!show)}
        />
      </div>
      <div className={S.span}>
        아직 추가된 기업이 없어요. <br />
        버튼을 눌러 기업을 추가해보세요!
      </div>
    </CompareBoardLayout>
  );
}

export default CompareCompanyBoard;
