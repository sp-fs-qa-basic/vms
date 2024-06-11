import MainTable from "@/components/table/mainTable/MainTable";
import MainTableLayout from "@/components/layout/mainTable/MainTableLayout";
import { sortList } from "@/constants/dropdownList";
import { MainTitleList } from "@/constants/titleList";

function InvestmentsPage() {
  return (
    <>
      <MainTableLayout title="투자 현황" list={sortList}>
        <MainTable titles={MainTitleList} />
      </MainTableLayout>
    </>
  );
}

export default InvestmentsPage;
