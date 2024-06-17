import { useEffect, useState } from "react";
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
  const [recentCompanies, setRecentCompanies] = useState([]);

  useEffect(() => {
    const storedCompanies =
      JSON.parse(localStorage.getItem("recentCompanies")) || [];
    setRecentCompanies(storedCompanies);
  }, []);

  const handleSelectCompany = (company) => {
    const updatedCompanies = [
      company,
      ...recentCompanies.filter((item) => item.companyId !== company.companyId),
    ];
    if (updatedCompanies.length > 5) {
      updatedCompanies.pop();
    }
    setRecentCompanies(updatedCompanies);
    localStorage.setItem("recentCompanies", JSON.stringify(updatedCompanies));
    setCompany(company);
    setShow(false);
  };

  return (
    <ModalLayout title={title} setShow={setShow}>
      <Search handleSearch={handleSearch} value={value} setValue={setValue} />
      {recentCompanies.length > 0 && (
        <ChoiceTable
          title="최근 선택한 기업"
          lists={recentCompanies}
          setShow={setShow}
          setCompany={handleSelectCompany}
          option={option}
          count={count}
        />
      )}
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
