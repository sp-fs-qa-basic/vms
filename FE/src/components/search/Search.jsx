import { useState } from "react";
import { getCompanies } from "@/api/company";
import useDebounce from "@/hooks/useDebounce";
import { ReactComponent as SearchImg } from "@/assets/icons/search.svg";
import { ReactComponent as DeleteImg } from "@/assets/icons/delete_circle.svg";
import * as S from "./search.module.css";

function Search() {
  const [value, setValue] = useState("");
  const searchValue = useDebounce(value, 500);

  const handleSearch = async () => {
    const res = await getCompanies(null, searchValue, null, 5, null);
    console.log(res);
  };

  const PressEnter = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className={S.container}>
      <div className={S.inputContainer}>
        <SearchImg onClick={handleSearch} />
        <input
          className={S.input}
          placeholder="검색어를 입력해주세요"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={PressEnter}
        />
        <DeleteImg onClick={() => setValue("")} />
      </div>
    </div>
  );
}

export default Search;
