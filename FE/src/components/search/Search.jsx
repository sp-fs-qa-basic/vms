import { useState } from "react";
import * as S from "./search.module.css";
import {ReactComponent as SearchImg} from '@/assets/icons/search.svg';

function Search() {
  return (
    <div className={S.container}>
      <div className={S.inputContainer}>
        <SearchImg />
        <input className={S.input} placeholder="검색어를 입력해주세요" />
      </div>
    </div>
  );
}

export default Search;
