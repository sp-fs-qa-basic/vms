import { useRef } from "react";
import { ReactComponent as KebabImg } from "@/assets/icons/kebab.svg";
import TableList from "@/components/table/TableList";
import useShowDropDown from "@/hooks/useShowDropDown";
import * as S from "./kebab.module.css";

function Kebab({ lists }) {
  const ref = useRef();
  const [showOptions, setShowOptions] = useShowDropDown(ref, false);

  return (
    <>
      <KebabImg
        className={S.img}
        ref={ref}
        onClick={() => setShowOptions(!showOptions)}
      />
      {showOptions && (
        <div className={S.list}>
          <TableList lists={lists} setValue={null} />
        </div>
      )}
    </>
  );
}

export default Kebab;
