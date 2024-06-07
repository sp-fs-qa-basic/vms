import DropDown from "@/components/dropdown/DropDown";
import Search from "@/components/search/Search";
import * as S from "./test.module.css";
import Navbar from "@/components/navbar/Navbar";
import Pagination from "@/components/button/pagination/Pagination";
import { sortList } from "@/constants/dropdownList";

function Test() {
  return (
    <div className={S.gridContainer}>
      <Search />
      <DropDown list={sortList}/>
      <Navbar />
      <Pagination />
    </div>
  );
}

export default Test;
