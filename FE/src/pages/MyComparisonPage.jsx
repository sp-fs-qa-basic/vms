import MyCompanyBoard from "@/components/board/myCompany/MyCompanyBoard";
import * as S from "./pages.module.css";
import CompareCompanyBoard from "@/components/board/compareCompany/CompareCompanyBoard";
import { useState } from "react";
import ChoiceCompany from "@/components/modal/choiceCompany/ChoiceCompany";

function MyComparisonPage() {
  const [showMyCompany, setShowMyCompany] = useState(false);
  const [showCompare, setShowCompare] = useState(false);

  return (
    <>
      <div className={S.container}>
        <MyCompanyBoard
          title="나의 기업을 선택해 주세요"
          show={showMyCompany}
          setShow={setShowMyCompany}
        />
        <CompareCompanyBoard
          title="어떤 기업이 궁금하세요?"
          show={showCompare}
          setShow={setShowCompare}
        />
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
