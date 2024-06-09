import DropDown from "@/components/dropdown/DropDown";
import Search from "@/components/search/Search";
import * as S from "./test.module.css";
import Navbar from "@/components/navbar/Navbar";
import Pagination from "@/components/button/pagination/Pagination";
import { sortList } from "@/constants/dropdownList";
import Button from "@/components/button/Button";
import { useState } from "react";
import ChoiceCompany from "@/components/modal/choiceCompany/ChoiceCompany";

function Test() {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className={S.gridContainer}>
        <Search />
        <DropDown list={sortList} />
        <Navbar />
        <Pagination />
        <Button name="기업 비교하기" />
        <button onClick={() => setShow(true)} className={S.modal}>
          모달열기
        </button>
      </div>
      {show && <ChoiceCompany setShow={setShow} title="나의 기업 선택하기"/>}
    </>
  );
}

export default Test;
