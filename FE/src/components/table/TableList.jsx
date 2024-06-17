import { useState } from "react";
import CheckAuth from "@/components/modal/checkAuth/CheckAuth";
import DoInvestment from "@/components/modal/doInvestment/DoInvestment";
import * as S from "./tableList.module.css";

function TableList({ lists, company, investorId, setValue = null }) {
  const [show, setShow] = useState(false);
  const [check, setCheck] = useState(false);
  const [list, setList] = useState({});

  const handleSetValue = async (label, fu) => {
    if (setValue) {
      setValue(label);
    }
    setShow(true);
    setList({ label, fu });
  };

  return (
    <>
      <table className={S.tableContainer}>
        <tbody>
          {lists.map((list, index) => (
            <tr
              key={index}
              className={S.trContainer}
              onClick={() => handleSetValue(list.label, list.fu)}
            >
              <td className={S.td}>{list.label}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {show && <CheckAuth setShow={setShow} setCheck={setCheck} title={list.label} id={investorId}/>}
      {check && <DoInvestment title='기업에 투자하기(수정)' setShow={setCheck} company={company} />}
    </>
  );
}

export default TableList;
