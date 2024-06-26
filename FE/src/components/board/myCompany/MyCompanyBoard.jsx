import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CompareBoardLayout from "@/components/layout/compareBoard/CompareBoardLayout";
import ChoiceCompany from "@/components/modal/choiceCompany/ChoiceCompany";
import { getCompanies } from "@/api/company";
import { postMySelectCancel } from "@/api/selection";
import useDebounce from "@/hooks/useDebounce";
import { ReactComponent as AddImg } from "@/assets/icons/circle_plus.svg";
import * as S from "./MyCompanyBoard.module.css";

function MyCompanyBoard({ title, myCompany, setMyCompany }) {
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

  const handleSelectDelete = async () => {
    if (myCompany.id) {
      const res = await postMySelectCancel(myCompany.id);
      if (res.status === 200) {
        setMyCompany(null);
      }
    }
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
        {!myCompany ? (
          <>
            <AddImg onClick={() => setShow(!show)} className={S.img} />
            <p>기업 추가</p>
          </>
        ) : (
          <>
            <span className={S.cancel} onClick={handleSelectDelete}>
              선택 취소
            </span>
            <img className={S.logoImg} src={myCompany.src} />
            <p>{myCompany.name}</p>
            <p>{myCompany.category}</p>
          </>
        )}
      </CompareBoardLayout>
      {show && (
        <ChoiceCompany
          title="나의 기업 선택하기"
          value={value}
          setValue={setValue}
          setShow={setShow}
          companies={companies}
          setCompany={setMyCompany}
          handleSearch={handleSearch}
          pagination={pagination}
          onPageChange={setPagination}
        />
      )}
    </>
  );
}

export default MyCompanyBoard;
