import { useEffect, useState } from "react";
import MainTableLayout from "@/components/layout/mainTable/MainTableLayout";
import MainTable from "@/components/table/mainTable/MainTable";
import { getCompanies } from "@/api/company";
import { sortList } from "@/constants/dropdownList";
import { MainTitleList } from "@/constants/titleList";
import useDebounce from "@/hooks/useDebounce";

function CompaniesPage() {
  const [companies, setCompanies] = useState([]);
  const [value, setValue] = useState("");
  const searchValue = useDebounce(value, 200);
  const [dropdownValue, setDropdownValue] = useState(sortList[2].label);

  const fetchCompanies = async () => {
    const { view } = sortList.find((list) => list["label"] === dropdownValue);
    const res = await getCompanies(null, searchValue, null, null, view);

    const extract = res.data.companies.map((company) => ({
      id: company.id,
      name: company.name,
      imageUrl: company.imageUrl,
      description: company.description,
      category: company.category,
      actualInvest: company.actualInvest,
      revenue: company.revenue,
      employee: company.employee,
    }));
    setCompanies(extract);
  };

  useEffect(() => {
    fetchCompanies();
  }, [dropdownValue]);

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
      >
        <MainTable titles={MainTitleList} lists={companies} />
      </MainTableLayout>
    </>
  );
}

export default CompaniesPage;
