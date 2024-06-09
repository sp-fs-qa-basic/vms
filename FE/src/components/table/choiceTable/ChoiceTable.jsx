import { Companies } from "@/api/mock";
import Button from "@/components/button/Button";
import * as S from "./choiceTable.module.css";

function ChoiceTable({ title }) {
  return (
    <div className={S.container}>
      {title}
      <div className={S.tableContainer}>
        {Companies.map((company, index) => (
          <div key={index} className={S.companyBox}>
            <div className={S.company}>
              <img src={`${company.src}`} className={S.img} />
              <div className={S.companyTitle}>
                <span className={S.name}>{company.name}</span>
                <span className={S.category}>{company.category}</span>
              </div>
            </div>
            <Button name="선택하기" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChoiceTable;
