import { useRef, useState } from "react";
import { ReactComponent as ToggleImg } from "@/assets/icons/toggle.svg";
import TableList from "@/components/table/TableList";
import useShowDropDown from "@/hooks/useShowDropDown";
import * as S from "./dropdown.module.css";

function DropDown({ list, dropdownValue, setValue }) {
  const ref = useRef();
  const [showOptions, setShowOptions] = useShowDropDown(ref, false);

  return (
    <div className={S.container}>
      <div className={S.dropdownContainer} ref={ref}>
        {dropdownValue}
        <ToggleImg onClick={() => setShowOptions(!showOptions)} />
      </div>
      {showOptions && <TableList lists={list} setValue={setValue} />}
    </div>
  );
}

export default DropDown;
