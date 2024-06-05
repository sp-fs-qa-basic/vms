import DropDown from "@/components/dropdown/DropDown";
import Search from "@/components/search/Search";
import * as S from "./test.module.css";

function Test() {
  return (
    <div className={S.gridContainer}>
      <Search />
      <DropDown />
    </div>
  );
}

export default Test;
