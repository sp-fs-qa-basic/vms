import ModalLayout from "@/components/modal/ModalLayout";
import Search from "@/components/search/Search";
import ChoiceTable from "@/components/table/companyChoice/ChoiceTable";
import Pagination from "@/components/button/pagination/Pagination";
import * as S from "./choiceCompany.module.css";
import { useState } from "react";

function ChoiceCompany({
  title,
  setShow,
  setCompany,
  option = "my",
  count = 0,
}) {
  const [data, setData] = useState([]);

  return (
    <ModalLayout title={title} setShow={setShow}>
      <Search setData={setData} />
      {/* <ChoiceTable title="최근 선택한 기업" lists={data} /> */}
      {data?.companies && (
        <>
          <ChoiceTable
            title="검색 결과"
            lists={data.companies}
            setShow={setShow}
            setCompany={setCompany}
            option={option}
            count={count}
          />
          {data.companies.length > 5 && (
            <div className={S.paginationContainer}>
              <Pagination />
            </div>
          )}
        </>
      )}
    </ModalLayout>
  );
}

export default ChoiceCompany;
