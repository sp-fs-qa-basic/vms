import MainTable from "@/components/table/mainTable/MainTable";
import MainTableLayout from "@/components/layout/mainTable/MainTableLayout";
import { investSortList } from "@/constants/dropdownList";
import { InvestTitleList } from "@/constants/titleList";
import { useEffect, useState } from "react";
import { getInvestment } from "@/api/investment";

function InvestmentsPage() {
  const [companies, setCompanies] = useState([]);
  const [dropdownValue, setDropdownValue] = useState(investSortList[0].label);

  useEffect(() => {
    const fetchCompanies = async () => {
      const { view } = investSortList.find(
        (list) => list["label"] === dropdownValue
      );
      const res = await getInvestment(null, view);
      setCompanies(res.data.companies);
    };
    fetchCompanies();
  }, [dropdownValue]);
  return (
    <>
      <MainTableLayout
        title="투자 현황"
        list={investSortList}
        dropdownValue={dropdownValue}
        setDropdownValue={setDropdownValue}
        handleRequest={getInvestment}
      >
        <MainTable titles={InvestTitleList} lists={companies} />
      </MainTableLayout>
    </>
  );
}

export default InvestmentsPage;
