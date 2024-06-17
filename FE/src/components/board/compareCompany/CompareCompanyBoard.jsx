import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import SelectCompareCompany from "@/components/board/selectCompareCompany/SelectCompareCompany";
import CompareBoardLayout from "@/components/layout/compareBoard/CompareBoardLayout";
import ChoiceCompany from "@/components/modal/choiceCompany/ChoiceCompany";
import Button from "@/components/button/Button";
import useDebounce from "@/hooks/useDebounce";
import { getCompanies } from "@/api/company";
import * as S from "./compareCompanyBoard.module.css";
import * as B from "@/components/button/button.module.css";

function CompareCompanyBoard({ title, compareCompany, setCompareCompany }) {
  const [show, setShow] = useState(false);
  const [companies, setCompanies] = useState([]);
  const [pagination, setPagination] = useState({});
  const [value, setValue] = useState("");
  const searchValue = useDebounce(value, 500);
  const [searchParams, setSearchParams] = useSearchParams({
    offset: 0,
    limit: 5,
  });

  const handleSearch = async () => {
    const offset = parseInt(searchParams.get("offset"), 10) || 0;
    const limit = parseInt(searchParams.get("limit"), 10) || 5;
    const search = searchParams.get("search");

    const res = await getCompanies(null, search ?? null, offset, limit, null);
    setCompanies(res.data.companies);
    setPagination(res.data.pagination);
  };

  useEffect(() => {
    setSearchParams((prevParams) => {
      const params = new URLSearchParams(prevParams);
      if (searchValue) {
        params.set("search", searchValue);
      }
      return params;
    });
  }, [searchValue]);

  return (
    <>
      <CompareBoardLayout title={title}>
        <div className={S.button}>
          <Button
            name="기업 추가하기"
            className={`${B.light_half_circle} ${
              compareCompany.length ? B.gray_background : B.orange_background
            }`}
            onClick={() => setShow(!show)}
          />
        </div>
        {!compareCompany.length ? (
          <div className={S.span}>
            아직 추가된 기업이 없어요. <br />
            버튼을 눌러 기업을 추가해보세요!
          </div>
        ) : (
          <div className={S.selectContainer}>
            {compareCompany.map((company, index) => (
              <SelectCompareCompany
                key={index}
                src={company.imageUrl}
                name={company.name}
                category={company.category}
                onClick={() =>
                  setCompareCompany((prev) =>
                    prev.filter((_, i) => i !== index)
                  )
                }
              />
            ))}
          </div>
        )}
      </CompareBoardLayout>
      {show && (
        <ChoiceCompany
          title="비교할 기업 선택하기"
          value={value}
          setValue={setValue}
          setShow={setShow}
          option="compare"
          companies={companies}
          compareCompany={compareCompany}
          setCompany={setCompareCompany}
          handleSearch={handleSearch}
          pagination={pagination}
          onPageChange={setPagination}
        />
      )}
    </>
  );
}

export default CompareCompanyBoard;
