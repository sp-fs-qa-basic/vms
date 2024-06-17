import MainTable from "@/components/table/mainTable/MainTable";
import MainTableLayout from "@/components/layout/mainTable/MainTableLayout";
import { investSortList } from "@/constants/dropdownList";
import { InvestTitleList } from "@/constants/titleList";
import { useEffect, useState } from "react";
import { getInvestment } from "@/api/investment";
import { useSearchParams } from "react-router-dom";

function InvestmentsPage() {
  const [companies, setCompanies] = useState([]);
  const [pagination, setPagination] = useState({});
  const [dropdownValue, setDropdownValue] = useState(investSortList[0].label);
  const [searchParams, setSearchParams] = useSearchParams({
    offset: 0,
    limit: 10,
    view: "simInvestDesc",
  });

  const fetchCompanies = async () => {
    const offset = parseInt(searchParams.get("offset"), 10) || 0;
    const limit = parseInt(searchParams.get("limit"), 10) || 10;
    const view = searchParams.get("view") || "revenueDesc";

    const res = await getInvestment(null, view, offset, limit);
    console.log(res)
    const extract = res.data.companies.map((company) => ({
      id: company.companyId,
      name: company.name,
      imageUrl: company.imageUrl,
      description: company.description,
      category: company.category,
      actualInvest: company.actualInvest / 10000000,
      simInvest: company.simInvest / 10000000,
    }));
    setCompanies(extract);
    setPagination(res.data.pagination);
  };

  useEffect(() => {
    const { view } = investSortList.find(
      (list) => list["label"] === dropdownValue
    );

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
        title="투자 현황"
        list={investSortList}
        dropdownValue={dropdownValue}
        setDropdownValue={setDropdownValue}
        handleRequest={getInvestment}
        require={false}
        data={companies}
        pagination={pagination}
        onPageChange={setPagination}
      >
        <MainTable titles={InvestTitleList} lists={companies} />
      </MainTableLayout>
    </>
  );
}

export default InvestmentsPage;
