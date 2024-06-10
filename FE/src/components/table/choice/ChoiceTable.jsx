import { Companies } from "@/api/mock";
import Button from "@/components/button/Button";
import * as S from "./choiceTable.module.css";
import CompanyTitle from "@/components/table/company/CompanyTitle";

function ChoiceTable({ title }) {
  return (
    <div className={S.container}>
      {title}
      <div className={S.tableContainer}>
        {Companies.map((company, index) => (
          <div key={index} className={S.companyBox}>
            <CompanyTitle src={company.src} name={company.name} category={company.category} />
            <Button name="선택하기" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChoiceTable;
