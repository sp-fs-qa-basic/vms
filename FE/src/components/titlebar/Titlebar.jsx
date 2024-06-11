import Search from "@/components/search/Search";
import * as S from "./titlebar.module.css";
import DropDown from "@/components/dropdown/DropDown";

function Titlebar({ title, list, dropdownValue, setDropdownValue }) {
  return (
    <div className={S.container}>
      {title}
      <div className={S.box}>
        <Search />
        <DropDown
          list={list}
          dropdownValue={dropdownValue}
          setValue={setDropdownValue}
        />
      </div>
    </div>
  );
}

export default Titlebar;
