import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MainTableLayout from "@/components/layout/mainTable/MainTableLayout";
import MainTable from "@/components/table/mainTable/MainTable";
import { getCompanies } from "@/api/company";
import { sortList } from "@/constants/dropdownList";
import { MainTitleList } from "@/constants/titleList";
import useDebounce from "@/hooks/useDebounce";

function CompaniesPage() {
  const [companies, setCompanies] = useState([]);
  const [pagination, setPagination] = useState({});
  const [value, setValue] = useState("");
  const searchValue = useDebounce(value, 200);
  const [dropdownValue, setDropdownValue] = useState(sortList[2].label);
  const [searchParams, setSearchParams] = useSearchParams({
    offset: 0,
    limit: 10,
    view: "revenueDesc",
  });

  
  const fetchCompanies = async () => {
    const search = searchParams.get("search");
    const offset = parseInt(searchParams.get("offset"), 10) || 0;
    const limit = parseInt(searchParams.get("limit"), 10) || 10;
    const view = searchParams.get("view") || "revenueDesc";

    const res = await getCompanies(null, search ?? null, offset, limit, view);

    const extract = res.data.companies.map((company) => ({
      id: company.companyId,
      name: company.name,
      imageUrl: company.imageUrl,
      description: company.description,
      category: company.category,
      actualInvest: company.actualInvest,
      revenue: company.revenue,
      employee: company.employee,
    }));
    setCompanies(extract);
    setPagination(res.data.pagination);
  };

  useEffect(() => {
    const { view } = sortList.find((list) => list["label"] === dropdownValue);

    setSearchParams((prevParams) => {
      const params = new URLSearchParams(prevParams);

      if (searchValue) {
        params.set("search", searchValue);
      }
      params.set("view", view);
      params.set("limit", 10);
      return params;
    });
    fetchCompanies();
  }, [dropdownValue, searchValue, setSearchParams]);

  return (
    <>
      <MainTableLayout
        title="전체 스타트업 목록"
        list={sortList}
        dropdownValue={dropdownValue}
        setDropdownValue={setDropdownValue}
        value={value}
        setValue={setValue}
        handleSearch={fetchCompanies}
        data={companies}
        pagination={pagination}
        onPageChange={setPagination}
      >
        <MainTable titles={MainTitleList} lists={companies} />
      </MainTableLayout>
    </>
  );
}

export default CompaniesPage;
