import { useState } from "react";
import ModalLayout from "@/components/modal/ModalLayout";
import Search from "@/components/search/Search";
import ChoiceTable from "@/components/table/companyChoice/ChoiceTable";
import Pagination from "@/components/button/pagination/Pagination";
import * as S from "./choiceCompany.module.css";

function ChoiceCompany({
  title,
  value,
  setValue,
  setShow,
  companies,
  setCompany,
  option = "my",
  count = 0,
  handleSearch,
  pagination,
  onPagination,
}) {
  return (
    <ModalLayout title={title} setShow={setShow}>
      <Search handleSearch={handleSearch} value={value} setValue={setValue} />
      {/* <ChoiceTable title="최근 선택한 기업" lists={data} /> */}
      {companies && (
        <>
          <ChoiceTable
            title="검색 결과"
            lists={companies}
            setShow={setShow}
            setCompany={setCompany}
            option={option}
            count={count}
          />
          {companies.length > 5 && (
            <div className={S.paginationContainer}>
              <Pagination pagination={pagination} onPageChange={onPagination} />
            </div>
          )}
        </>
      )}
    </ModalLayout>
  );
}

export default ChoiceCompany;
