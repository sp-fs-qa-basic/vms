import DropDown from "@/components/dropdown/DropDown";
import Search from "@/components/search/Search";
import * as S from "./test.module.css";
import Navbar from "@/components/navbar/Navbar";
import Pagination from "@/components/button/pagination/Pagination";
import { sortList } from "@/constants/dropdownList";
import Button from "@/components/button/Button";
import { useState } from "react";
import ChoiceCompany from "@/components/modal/choiceCompany/ChoiceCompany";
import DeleteAuth from "@/components/modal/checkAuth/CheckAuth";
import DoInvestment from "@/components/modal/doInvestment/DoInvestment";

function Test() {
  const [showChoiceCompany, setShowChoiceCompany] = useState(false);
  const [showDeleteAuth, setShowDeleteAuth] = useState(false);
  const [showDoInvest, setShowDoInvest] = useState(false);

  return (
    <>
      <div className={S.gridContainer}>
        <Search />
        <DropDown list={sortList} />
        <Navbar />
        <Pagination />
        <Button name="기업 비교하기" />
        <button onClick={() => setShowChoiceCompany(true)} className={S.modal}>
          choiceCompany 모달열기
        </button>
        <button onClick={() => setShowDeleteAuth(true)} className={S.modal}>
          삭제 인증 모달열기
        </button>
        <button onClick={() => setShowDoInvest(true)} className={S.modal}>
          투자하기 모달 열기
        </button>
      </div>
      {showChoiceCompany && (
        <ChoiceCompany
          setShow={setShowChoiceCompany}
          title="나의 기업 선택하기"
        />
      )}
      {showDeleteAuth && (
        <DeleteAuth setShow={setShowDeleteAuth} title="나의 기업 선택하기" />
      )}
      {showDoInvest && (
        <DoInvestment setShow={setShowDoInvest} title="기업에 투자하기"/>
      )}
    </>
  );
}

export default Test;
