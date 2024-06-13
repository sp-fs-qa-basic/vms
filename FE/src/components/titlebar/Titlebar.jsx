import Search from "@/components/search/Search";
import DropDown from "@/components/dropdown/DropDown";
import * as S from "./titlebar.module.css";

function Titlebar({ title, list, dropdownValue, setDropdownValue, require = true }) {
  return (
    <div className={S.container}>
      {title}
      <div className={S.box}>
        {require && <Search /> }
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
