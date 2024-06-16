import MainTableLayout from "@/components/layout/mainTable/MainTableLayout";
import MainTable from "@/components/table/mainTable/MainTable";
import { MainTitleList } from "@/constants/titleList";
import { sortList } from "@/constants/dropdownList";
import { useEffect } from "react";

function DoneCompare({ lists }) {
  const [dropdownValue, setDropdownValue] = useState(sortList[2].label);

  useEffect(() => {
    
  }, [dropdownValue]);

  return (
    <div>
      <MainTableLayout
        title="비교 결과 확인하기"
        list={sortList}
        dropdownValue={dropdownValue}
        setDropdownValue={setDropdownValue}
      >
        <MainTable titles={MainTitleList} lists={lists} />
      </MainTableLayout>
      <MainTableLayout
        title="기업 순위 확인하기"
        list={sortList}
        dropdownValue={dropdownValue}
        setDropdownValue={setDropdownValue}
      >
        <MainTable titles={MainTitleList} lists={lists} />
      </MainTableLayout>
    </div>
  );
}

export default DoneCompare;
