import * as S from "./mainTableLayout.module.css";
import Titlebar from "@/components/titlebar/Titlebar";
import Pagination from "@/components/button/pagination/Pagination";

function  MainTableLayout({
  title,
  list,
  dropdownValue,
  setDropdownValue,
  children,
  require = true,
}) {
  return (
    <div className={S.container}>
      <Titlebar
        title={title}
        list={list}
        dropdownValue={dropdownValue}
        setDropdownValue={setDropdownValue}
        require={require}
      />
      {children}
      <Pagination />
    </div>
  );
}

export default MainTableLayout;
