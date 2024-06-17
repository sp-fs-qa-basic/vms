import { useRef } from "react";
import { ReactComponent as KebabImg } from "@/assets/icons/kebab.svg";
import TableList from "@/components/table/TableList";
import useShowDropDown from "@/hooks/useShowDropDown";
import * as S from "./kebab.module.css";

function Kebab({ lists, company, id }) {
  const ref = useRef();
  const [showOptions, setShowOptions] = useShowDropDown(ref, false);

  return (
    <div className={S.container} ref={ref}>
      <KebabImg
        className={S.img}
        onClick={() => setShowOptions(!showOptions)}
      />
      {showOptions && (
        <div className={S.list}>
          <TableList lists={lists} company={company} investorId={id}/>
        </div>
      )}
    </div>
  );
}

export default Kebab;
