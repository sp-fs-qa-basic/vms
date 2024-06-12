import { useState } from "react";
import MyCompanyBoard from "@/components/board/myCompany/MyCompanyBoard";
import CompareCompanyBoard from "@/components/board/compareCompany/CompareCompanyBoard";
import ChoiceCompany from "@/components/modal/choiceCompany/ChoiceCompany";
import Button from "@/components/button/Button";
import * as S from "./pages.module.css";
import * as B from "@/components/button/button.module.css";
import DoneCompare from "@/components/board/doneCompare/DoneCompare";
import DoInvestment from "@/components/modal/doInvestment/DoInvestment";

function MyComparisonPage() {
  const [showCompare, setShowCompare] = useState(false);
  const [showTable, setShowTable] = useState(false);
  const [showDoInvestment, setShowDoInvestment] = useState(false);
  const [myCompany, setMyCompany] = useState(null);

  return (
    <>
      <div className={S.container}>
        <MyCompanyBoard
          title="나의 기업을 선택해 주세요"
          myCompany={myCompany}
          setMyCompany={setMyCompany}
        />
        {myCompany && (
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
            {showTable && (
              <>
                {/* <DoneCompare /> */}
                <Button
                  name="나의 기업에 투자하기"
                  className={`${B.half_circle} ${B.gray_background}`}
                  onClick={() => setShowDoInvestment(true)}
                />
              </>
            )}
          </>
        )}
      </div>
      {showCompare && (
        <ChoiceCompany title="나의 기업 선택하기" setShow={setShowCompare} />
      )}
      {showDoInvestment && (
        <DoInvestment title="기업에 투자하기" setShow={setShowDoInvestment} />
      )}
    </>
  );
}

export default MyComparisonPage;
