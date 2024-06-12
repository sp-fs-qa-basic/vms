import { getSelect } from "@/api/selection";
import MainTableLayout from "@/components/layout/mainTable/MainTableLayout";
import MainTable from "@/components/table/mainTable/MainTable";
import { compareSortList } from "@/constants/dropdownList";
import { CompareTitleList } from "@/constants/titleList";
import { useEffect, useState } from "react";

function ComparisonPage() {
  const [companies, setCompanies] = useState([]);
  const [dropdownValue, setDropdownValue] = useState(compareSortList[0].label);

  useEffect(() => {
    const fetchCompanies = async () => {
      const { view } = compareSortList.find((list) => list["label"] === dropdownValue);
      const res = await getSelect(view, null, null);
      setCompanies(res.data.companies);
    };
    fetchCompanies();
  }, [dropdownValue]);

  return (
    <>
      <MainTableLayout
        title="비교 현황"
        list={compareSortList}
        dropdownValue={dropdownValue}
        setDropdownValue={setDropdownValue}
      >
        <MainTable titles={CompareTitleList} lists={companies} />
      </MainTableLayout>
    </>
  );
}

export default ComparisonPage;
