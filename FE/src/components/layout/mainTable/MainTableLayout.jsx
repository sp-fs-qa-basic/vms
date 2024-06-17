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
  data,
  pagination = null,
  onPageChange = null,
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
      {pagination && (
        <div className={S.paginationContainer}>
          <Pagination
            data={data}
            pagination={pagination}
            onPageChange={onPageChange}
          />
        </div>
      )}
    </div>
  );
}

export default MainTableLayout;
