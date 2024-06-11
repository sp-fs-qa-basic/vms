import MainTableLayout from "@/components/layout/mainTable/MainTableLayout";
import MainTable from "@/components/table/mainTable/MainTable";
import { sortList } from "@/constants/dropdownList";
import { MainTitleList } from "@/constants/titleList";

function ComparisonPage() {
  return (
    <>
      <MainTableLayout title="비교 현황" list={sortList}>
        <MainTable titles={MainTitleList} />
      </MainTableLayout>
    </>
  );
}

export default ComparisonPage;
