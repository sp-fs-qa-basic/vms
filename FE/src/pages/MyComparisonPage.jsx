import { useState } from "react";
import MyCompanyBoard from "@/components/board/myCompany/MyCompanyBoard";
import CompareCompanyBoard from "@/components/board/compareCompany/CompareCompanyBoard";
import Button from "@/components/button/Button";
import DoneCompare from "@/components/board/doneCompare/DoneCompare";
import DoInvestment from "@/components/modal/doInvestment/DoInvestment";
import { postCompare } from "@/api/compare";
import * as S from "./pages.module.css";
import * as B from "@/components/button/button.module.css";

function MyComparisonPage() {
  const [showDoInvestment, setShowDoInvestment] = useState(false);
  const [myCompany, setMyCompany] = useState(null);
  const [compareCompany, setCompareCompany] = useState([]);
  const [compare, setCompare] = useState([]);

  const handleCompare = async () => {
    const ids = compareCompany.map((company) => company.id);
    const res = await postCompare(myCompany.id, ids, null);

    if (res.status === 200) {
      setCompare(res.data.companies);
    }
  };

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
              compareCompany={compareCompany}
              setCompareCompany={setCompareCompany}
            />
            {compare.length ? (
              <>
                <DoneCompare
                  lists={compare}
                  compareCompany={compareCompany}
                  myCompany={myCompany}
                />
                <Button
                  name="나의 기업에 투자하기"
                  className={`${B.half_circle} ${B.orange_background}`}
                  onClick={() => setShowDoInvestment(true)}
                />
              </>
            ) : (
              <Button
                name="기업 비교하기"
                className={`${B.half_circle} ${
                  compareCompany.length
                    ? B.orange_background
                    : B.gray_background
                }`}
                onClick={handleCompare}
              />
            )}
          </>
        )}
      </div>
      {showDoInvestment && (
        <DoInvestment
          title="기업에 투자하기"
          setShow={setShowDoInvestment}
          company={myCompany}
        />
      )}
    </>
  );
}

export default MyComparisonPage;
