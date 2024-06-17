import { useRef } from "react";
import TableList from "@/components/table/TableList";
import useShowDropDown from "@/hooks/useShowDropDown";
import { ReactComponent as ToggleImg } from "@/assets/icons/toggle.svg";
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
      {showOptions && (
        <div className={S.options}>
          <TableList lists={list} setValue={setValue} />
        </div>
      )}
    </div>
  );
}

export default DropDown;
