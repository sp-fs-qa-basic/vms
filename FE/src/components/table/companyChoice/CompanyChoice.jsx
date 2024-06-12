import { useState } from "react";
import CompanyTitle from "@/components/table/companyChoice/CompanyTitle";
import Button from "@/components/button/Button";
import * as S from "./choiceTable.module.css";
import * as B from "@/components/button/button.module.css";
import { postCompareSelect, postMySelect } from "@/api/selection";

function CompanyChoice({
  id,
  src,
  name,
  category,
  recent,
  setShow,
  setCompany,
  option,
  count = 0,
}) {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = async () => {
    if (option === "my") {
      const res = await postMySelect(id);
      if (res.status === 200) {
        setCompany({ id, src, name });
        setShow(false);
        setIsChecked((prev) => !prev);
      }
    } else {
      setIsChecked((prev) => {
        const newCheck = !prev;
        if (newCheck && count <= 5) {
          count++;
          setCompany((prev) => [...prev, { id, src, name, category }]);
        }
        return newCheck;
      });
    }
  };

  const buttonValue = isChecked
    ? recent
      ? "선택해제"
      : "선택완료"
    : "선택하기";
  const buttonClassName = isChecked
    ? recent
      ? `${B.light_circle} ${B.gray_border}`
      : `${B.light_circle} ${B.checked}`
    : `${B.light_circle} ${B.orange_border}`;

  return (
    <div className={S.companyBox}>
      <CompanyTitle src={src} name={name} category={category} />
      <Button
        isChecked={isChecked}
        name={buttonValue}
        className={buttonClassName}
        onClick={handleClick}
        recent={recent}
      />
    </div>
  );
}

export default CompanyChoice;
