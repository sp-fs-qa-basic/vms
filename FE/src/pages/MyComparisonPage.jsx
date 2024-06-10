import { useState } from "react";
import MyCompanyBoard from "@/components/board/myCompany/MyCompanyBoard";
import CompareCompanyBoard from "@/components/board/compareCompany/CompareCompanyBoard";
import ChoiceCompany from "@/components/modal/choiceCompany/ChoiceCompany";
import Button from "@/components/button/Button";
import * as S from "./pages.module.css";
import * as B from "@/components/button/button.module.css";
import DoneCompare from "@/components/board/doneCompare/DoneCompare";

function MyComparisonPage() {
  const [showMyCompany, setShowMyCompany] = useState(false);
  const [showCompare, setShowCompare] = useState(false);
  const [showTable, setShowTable] = useState(false);

  return (
    <>
      <div className={S.container}>
        <MyCompanyBoard
          title="나의 기업을 선택해 주세요"
          show={showMyCompany}
          setShow={setShowMyCompany}
        />
        {!showTable ? (
          <>
            <CompareCompanyBoard
              title="어떤 기업이 궁금하세요?"
              show={showCompare}
              setShow={setShowCompare}
            />
            <Button
              name="기업 비교하기"
              className={`${B.half_circle} ${B.gray_background}`}
              onClick={() => setShowTable(true)}
            />
          </>
        ) : (
          <DoneCompare />
        )}
      </div>
      {showMyCompany && (
        <ChoiceCompany title="나의 기업 선택하기" setShow={setShowMyCompany} />
      )}
      {showCompare && (
        <ChoiceCompany title="나의 기업 선택하기" setShow={setShowCompare} />
      )}
    </>
  );
}

export default MyComparisonPage;
