import Titlebar from "@/components/titlebar/Titlebar";
import MainTable from "@/components/table/mainTable/MainTable";
import { sortList } from "@/constants/dropdownList";
import { MainTitleList } from "@/constants/titleList";
import * as S from "./companiesPage.module.css";

function CompaniesPage() {
  return (
    <div className={S.container}>
      <Titlebar title="전체 스타트업 목록" list={sortList} />
      <MainTable titles={MainTitleList} />
    </div>
  );
}

export default CompaniesPage;
