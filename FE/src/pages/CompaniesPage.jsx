import { getCompanies } from "@/api/company";
import MainTableLayout from "@/components/layout/mainTable/MainTableLayout";
import MainTable from "@/components/table/mainTable/MainTable";
import { sortList } from "@/constants/dropdownList";
import { MainTitleList } from "@/constants/titleList";
import { useEffect, useState } from "react";

function CompaniesPage() {
  const [companies, setCompanies] = useState([]);
  const [dropdownValue, setDropdownValue] = useState(sortList[2].label);

  
  useEffect(() => {
    const fetchCompanies = async () => {
      const {view} = sortList.find((list) => list['label'] === dropdownValue);
      const res = await getCompanies(null, null, null, null, view); 

      const extract = res.data.companies.map((company) => ({
        id: company.id,
        name: company.name,
        imageUrl: company.imageUrl,
        description: company.description,
        category: company.category,
        actualInvest : company.actualInvest,
        revenue: company.revenue,
        employee: company.employee,
      }))
      setCompanies(extract);
    };
    fetchCompanies();
  }, [dropdownValue]); 

  return (
    <>
      <MainTableLayout
        title="전체 스타트업 목록"
        list={sortList}
        dropdownValue={dropdownValue}
        setDropdownValue={setDropdownValue}
      >
        <MainTable titles={MainTitleList} lists={companies} />
      </MainTableLayout>
    </>
  );
}

export default CompaniesPage;
