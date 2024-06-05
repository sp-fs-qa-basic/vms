import DropDown from "@/components/dropdown/DropDown";
import Search from "@/components/search/Search";
import * as S from "./test.module.css";
import Navbar from "@/components/navbar/Navbar";

function Test() {
  return (
    <div className={S.gridContainer}>
      <Search />
      <DropDown />
      <Navbar />
    </div>
  );
}

export default Test;
