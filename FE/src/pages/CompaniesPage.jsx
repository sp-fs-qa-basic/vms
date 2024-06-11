import MainTableLayout from "@/components/layout/mainTable/MainTableLayout";
import MainTable from "@/components/table/mainTable/MainTable";
import { sortList } from "@/constants/dropdownList";
import { MainTitleList } from "@/constants/titleList";

function CompaniesPage() {
  return (
    <>
      <MainTableLayout title="전체 스타트업 목록" list={sortList}>
        <MainTable titles={MainTitleList} />
      </MainTableLayout>
    </>
  );
}

export default CompaniesPage;
