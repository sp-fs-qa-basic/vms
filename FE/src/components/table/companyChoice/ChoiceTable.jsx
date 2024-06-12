import CompanyChoice from "@/components/table/companyChoice/CompanyChoice";
import * as S from "./choiceTable.module.css";

function ChoiceTable({ title, lists, setShow, setMyCompany }) {
  return (
    <div className={S.container}>
      {title}
      <div className={S.tableContainer}>
        {lists.map((company, index) => (
          <CompanyChoice
            key={index}
            id={company.companyId}
            src={company.imageUrl}
            name={company.name}
            category={company.category}
            recent={title.includes('최근') ? true : false}
            setShow={setShow}
            setMyCompany={setMyCompany}
          />
        ))}
      </div>
    </div>
  );
}

export default ChoiceTable;
