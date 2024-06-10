import { useState } from "react";
import { ReactComponent as AddImg } from "@/assets/icons/circle_plus.svg";
import * as S from "./MyCompanyBoard.module.css";
import CompareBoardLayout from "@/components/layout/compareBoard/CompareBoardLayout";

function MyCompanyBoard({ title, show, setShow }) {
  return (
    <CompareBoardLayout title={title}>
      <span className={S.cancel}>선택 취소</span>
      <AddImg onClick={() => setShow(!show)} className={S.img} />
      기업 추가
    </CompareBoardLayout>
  );
}

export default MyCompanyBoard;
