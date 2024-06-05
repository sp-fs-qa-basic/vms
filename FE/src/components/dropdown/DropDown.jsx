import { useRef, useState } from "react";
import { ReactComponent as ToggleImg } from "@/assets/icons/ic_toggle.svg";
import TableList from "@/components/table/TableList";
import { sortList } from "@/constants/dropdownList";
import useShowDropDown from "@/hooks/useShowDropDown";
import * as S from "./dropdown.module.css";

//TODO: 사용하는곳에서 sortList를 사용하고 list로 변경해주기
function DropDown() {
  const ref = useRef();
  const [showOptions, setShowOptions] = useShowDropDown(ref, false);
  const [value, setValue] = useState(sortList[2]);

  return (
    <div className={S.container}>
      <div className={S.dropdownContainer} ref={ref} >
        {value}
        <ToggleImg onClick={() => setShowOptions(!showOptions)}/>
      </div>
      {showOptions && <TableList lists={sortList} setValue={setValue}/>}
    </div>
  );
}

export default DropDown;
