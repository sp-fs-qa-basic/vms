import DropDown from "@/components/dropdown/DropDown";
import Search from "@/components/search/Search";
import * as S from "./test.module.css";
import Navbar from "@/components/navbar/Navbar";
import Pagination from "@/components/button/pagination/Pagination";
import { sortList } from "@/constants/dropdownList";
import Button from "@/components/button/Button";
import { useState } from "react";
import ChoiceCompany from "@/components/modal/choiceCompany/ChoiceCompany";
import DeleteAuth from "@/components/modal/deleteAuth/DeleteAuth";
import DefaultInput from "@/components/input/DefaultInput";

function Test() {
  const [showChoiceCompany, setShowChoiceCompany] = useState(false);
  const [showDeleteAuth, setShowDeleteAuth] = useState(false);

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
        <DefaultInput placeholder='비밀번호를 입력하세요' name='비밀번호' control />
      </div>
      {showChoiceCompany && <ChoiceCompany setShow={setShowChoiceCompany} title="나의 기업 선택하기"/>}
      {showDeleteAuth && <DeleteAuth setShow={setShowDeleteAuth} title="나의 기업 선택하기"/>}
    </>
  );
}

export default Test;
