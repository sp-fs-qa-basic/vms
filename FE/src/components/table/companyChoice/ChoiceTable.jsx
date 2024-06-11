import CompanyChoice from "@/components/table/companyChoice/CompanyChoice";
import * as S from "./choiceTable.module.css";
import { Companies } from "@/api/mock";

function ChoiceTable({ title }) {
  return (
    <div className={S.container}>
      {title}
      <div className={S.tableContainer}>
        {Companies.map((company, index) => (
          <CompanyChoice
            key={index}
            src={company.src}
            name={company.name}
            category={company.category}
            recent={title.includes('최근') ? true : false}
          />
        ))}
      </div>
    </div>
  );
}

export default ChoiceTable;
