import { useState } from "react";
import SelectCompareCompany from "@/components/board/selectCompareCompany/SelectCompareCompany";
import CompareBoardLayout from "@/components/layout/compareBoard/CompareBoardLayout";
import ChoiceCompany from "@/components/modal/choiceCompany/ChoiceCompany";
import Button from "@/components/button/Button";
import * as S from "./compareCompanyBoard.module.css";
import * as B from "@/components/button/button.module.css";

function CompareCompanyBoard({ title, compareCompany, setCompareCompany }) {
  const [show, setShow] = useState(false);

  return (
    <>
      <CompareBoardLayout title={title}>
        <div className={S.button}>
          <Button
            name="기업 추가하기"
            className={`${B.light_half_circle} ${
              compareCompany.length ? B.gray_background : B.orange_background
            }`}
            onClick={() => setShow(!show)}
          />
        </div>
        {!compareCompany.length ? (
          <div className={S.span}>
            아직 추가된 기업이 없어요. <br />
            버튼을 눌러 기업을 추가해보세요!
          </div>
        ) : (
          <div className={S.selectContainer}>
            {compareCompany.map((company, index) => (
              <SelectCompareCompany
                key={index}
                src={company.imageUrl}
                name={company.name}
                category={company.category}
              />
            ))}
          </div>
        )}
      </CompareBoardLayout>
      {show && (
        <ChoiceCompany
          title="비교할 기업 선택하기"
          setShow={setShow}
          option="compare"
          setCompany={setCompareCompany}
          count={compareCompany ? compareCompany.length : ""}
        />
      )}
    </>
  );
}

export default CompareCompanyBoard;
