import MainTableLayout from "@/components/layout/mainTable/MainTableLayout";
import MainTable from "@/components/table/mainTable/MainTable";
import { MainTitleList } from "@/constants/titleList";
import { sortList } from "@/constants/dropdownList";

function DoneCompare({lists}) {
  return (
    <div>
      <MainTableLayout title="비교 결과 확인하기" list={sortList}>
        <MainTable titles={MainTitleList} lists={lists} />
      </MainTableLayout>
      <MainTableLayout title="기업 순위 확인하기" list={sortList}>
        <MainTable titles={MainTitleList} lists={lists} />
      </MainTableLayout>
    </div>
  );
}

export default DoneCompare;
