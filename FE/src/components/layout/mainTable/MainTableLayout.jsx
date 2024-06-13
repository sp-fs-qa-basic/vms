import Titlebar from "@/components/titlebar/Titlebar";
import Pagination from "@/components/button/pagination/Pagination";
import * as S from "./mainTableLayout.module.css";

function MainTableLayout({
  title,
  list,
  dropdownValue,
  setDropdownValue,
  children,
  require = true,
  value,
  setValue,
  handleSearch,
}) {
  return (
    <div className={S.container}>
      <Titlebar
        title={title}
        list={list}
        dropdownValue={dropdownValue}
        setDropdownValue={setDropdownValue}
        require={require}
        value={value}
        setValue={setValue}
        handleSearch={handleSearch}
      />
      {children}
      <Pagination />
    </div>
  );
}

export default MainTableLayout;
