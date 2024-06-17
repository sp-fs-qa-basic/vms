import { getSelect } from "@/api/selection";
import MainTableLayout from "@/components/layout/mainTable/MainTableLayout";
import MainTable from "@/components/table/mainTable/MainTable";
import { compareSortList } from "@/constants/dropdownList";
import { CompareTitleList } from "@/constants/titleList";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function ComparisonPage() {
  const [companies, setCompanies] = useState([]);
  const [pagination, setPagination] = useState({});
  const [dropdownValue, setDropdownValue] = useState(compareSortList[0].label);
  const [searchParams, setSearchParams] = useSearchParams({
    offset: 0,
    limit: 10,
    view: "mySelectionDesc",
  });

  const fetchCompanies = async () => {
    const offset = parseInt(searchParams.get("offset"), 10) || 0;
    const limit = parseInt(searchParams.get("limit"), 10) || 10;
    const view = searchParams.get("view") || "revenueDesc";

    const res = await getSelect(view, offset, limit);

    const extract = res.data.companies.map((company) => ({
      id: company.companyId,
      name: company.name,
      imageUrl: company.imageUrl,
      description: company.description,
      category: company.category,
      mySelectionCount: company.mySelectionCount,
      comparedSelectionCount: company.comparedSelectionCount
    }));
    setCompanies(extract);
    setPagination(res.data.pagination);
  };

  useEffect(() => {
    const { view } = compareSortList.find((list) => list["label"] === dropdownValue);

    setSearchParams((prevParams) => {
      const params = new URLSearchParams(prevParams);

      params.set("view", view);
      params.set("limit", 10);
      return params;
    });
    fetchCompanies();
  }, [dropdownValue, setSearchParams]);

  return (
    <>
      <MainTableLayout
        title="비교 현황"
        list={compareSortList}
        dropdownValue={dropdownValue}
        setDropdownValue={setDropdownValue}
        handleRequest={getSelect}
        data={companies}
        require={false}
        pagination={pagination}
        onPageChange={setPagination}
      >
        <MainTable titles={CompareTitleList} lists={companies} />
      </MainTableLayout>
    </>
  );
}

export default ComparisonPage;
