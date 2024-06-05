import { useRef, useState } from "react";
import { ReactComponent as ToggleImg } from "@/assets/icons/ic_toggle.svg";
import TableList from "@/components/table/TableList";
import useShowDropDown from "@/hooks/useShowDropDown";
import * as S from "./dropdown.module.css";

function DropDown({ list }) {
  const ref = useRef();
  const [showOptions, setShowOptions] = useShowDropDown(ref, false);
  const [value, setValue] = useState(list[2]);

  return (
    <div className={S.container}>
      <div className={S.dropdownContainer} ref={ref}>
        {value}
        <ToggleImg onClick={() => setShowOptions(!showOptions)} />
      </div>
      {showOptions && <TableList lists={list} setValue={setValue} />}
    </div>
  );
}

export default DropDown;
