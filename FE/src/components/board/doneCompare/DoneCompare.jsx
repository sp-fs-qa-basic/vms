import { useEffect, useState } from "react";
import { MainTitleList } from "@/constants/titleList";
import { sortList } from "@/constants/dropdownList";
import { getCompare, postCompare } from "@/api/compare";
import MainTableLayout from "@/components/layout/mainTable/MainTableLayout";
import MainTable from "@/components/table/mainTable/MainTable";
import * as S from './doneCompare.module.css';

function DoneCompare({ lists, compareCompany, myCompany }) {
  const [data1, setData1] = useState(lists);
  const [data2, setData2] = useState([]);
  const [ranking, setRanking] = useState();
  const [dropdownValue1, setDropdownValue1] = useState(sortList[2].label);
  const [dropdownValue2, setDropdownValue2] = useState(sortList[2].label);

  const compare = async (dropdown) => {
    const ids = compareCompany.map((company) => company.id);
    const res = await postCompare(myCompany.id, ids, dropdown);

    if (res.status === 200) {
      setData1(res.data.companies);
    }
  };

  const rank = async (dropdown) => {
    const res = await getCompare(myCompany.id, dropdown);
    setData2(res.data.companies);
    setRanking(res.data.rank)
  };

  useEffect(() => {
    const view1 = sortList.find((list) => list["label"] === dropdownValue1).view;
    const view2 = sortList.find((list) => list["label"] === dropdownValue2).view;
    compare(view1);
    rank(view2);
  }, [dropdownValue1, dropdownValue2]);

  return (
    <div className={S.container}>
      <MainTableLayout
        title="비교 결과 확인하기"
        list={sortList}
        dropdownValue={dropdownValue1}
        setDropdownValue={setDropdownValue1}
        require={false}
      >
        <MainTable titles={MainTitleList} lists={data1} />
      </MainTableLayout>
      <MainTableLayout
        title="기업 순위 확인하기"
        list={sortList}
        dropdownValue={dropdownValue2}
        setDropdownValue={setDropdownValue2}
        require={false}
      >
        <MainTable titles={MainTitleList} lists={data2} rank={ranking} />
      </MainTableLayout>
    </div>
  );
}

export default DoneCompare;
