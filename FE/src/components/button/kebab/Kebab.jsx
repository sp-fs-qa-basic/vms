import { useRef, useState } from "react";
import TableList from "@/components/table/TableList";
import { ReactComponent as KebabImg } from "@/assets/icons/kebab.svg";
import useShowDropDown from "@/hooks/useShowDropDown";
import CheckAuth from "@/components/modal/checkAuth/CheckAuth";
import DoInvestment from "@/components/modal/doInvestment/DoInvestment";
import * as S from "./kebab.module.css";
import AlertModal from "@/components/modal/alert/AlertModal";

function Kebab({ lists, company, investor }) {
  const ref = useRef();
  const [showOptions, setShowOptions] = useShowDropDown(ref, false);
  const [showAuth, setShowAuth] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [show, setShow] = useState(false);
  const [list, setList] = useState({});

  return (
    <>
      <div className={S.container} ref={ref}>
        <KebabImg
          className={S.img}
          onClick={() => setShowOptions(!showOptions)}
        />
        {showOptions && (
          <div className={S.list}>
            <TableList
              lists={lists}
              setShowOptions={setShowOptions}
              setShowAuth={setShowAuth}
              setList={setList}
            />
          </div>
        )}
      </div>
      {showAuth && (
        <CheckAuth
          setShow={setShow}
          setCheck={setShowAuth}
          setShowAlert={setShowAlert}
          title={list.label}
          id={investor.id}
        />
      )}
      {showAlert && <AlertModal title="잘못된 비밀번호로 삭제에 실패하셨습니다." setShow={setShowAlert} />}
      {show && (
        <DoInvestment
          title="기업에 투자하기(수정)"
          setShow={setShow}
          company={company}
          investor={investor}
        />
      )}
    </>
  );
}

export default Kebab;
