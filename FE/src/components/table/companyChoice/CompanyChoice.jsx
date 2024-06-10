import { useState } from "react";
import CompanyTitle from "@/components/table/companyChoice/CompanyTitle";
import Button from "@/components/button/Button";
import * as S from './choiceTable.module.css';
import * as B from "@/components/button/button.module.css";

function CompanyChoice({src, name, category}) {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    setIsChecked((prev) => !prev);
  };
  console.log(isChecked)

  const buttonValue = isChecked ? "선택완료" : "선택하기";
  const buttonClassName = isChecked ? `${B.light_circle} ${B.checked}` : `${B.light_circle} ${B.orange_border}`;

  return (
    <div className={S.companyBox}>
      <CompanyTitle
        src={src}
        name={name}
        category={category}
      />
      <Button isChecked={isChecked} name={buttonValue} className={buttonClassName} onClick={handleClick} />
    </div>
  );
}

export default CompanyChoice;
