import { useState } from "react";
import CompareBoardLayout from "@/components/layout/compareBoard/CompareBoardLayout";
import ChoiceCompany from "@/components/modal/choiceCompany/ChoiceCompany";
import { postMySelectCancel } from "@/api/selection";
import { ReactComponent as AddImg } from "@/assets/icons/circle_plus.svg";
import * as S from "./MyCompanyBoard.module.css";

function MyCompanyBoard({ title, myCompany, setMyCompany }) {
  const [show, setShow] = useState(false);

  const handleSelectDelete = async () => {
    if (myCompany.id) {
      const res = await postMySelectCancel(myCompany.id);
      if (res.status === 200) {
        setMyCompany(null);
      }
    }
  };

  return (
    <>
      <CompareBoardLayout title={title}>
        {!myCompany ? (
          <>
            <AddImg onClick={() => setShow(!show)} className={S.img} />
            <p>기업 추가</p>
          </>
        ) : (
          <>
            <span className={S.cancel} onClick={handleSelectDelete}>
              선택 취소
            </span>
            <img src={myCompany.src} />
            <p>{myCompany.name}</p>
          </>
        )}
      </CompareBoardLayout>
      {show && (
        <ChoiceCompany
          title="나의 기업 선택하기"
          setShow={setShow}
          setCompany={setMyCompany}
        />
      )}
    </>
  );
}

export default MyCompanyBoard;
