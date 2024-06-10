import MainTable from "@/components/table/mainTable/MainTable";
import { sortList } from "@/constants/dropdownList";
import { MainTitleList } from "@/constants/titleList";
import * as S from "./pages.module.css";
import MainTableLayout from "@/components/layout/mainTable/MainTableLayout";

function CompaniesPage() {
  return (
    <div className={S.container} >
      <MainTableLayout title="전체 스타트업 목록" list={sortList}>
        <MainTable titles={MainTitleList} />
      </MainTableLayout>
    </div>
  );
}

export default CompaniesPage;
