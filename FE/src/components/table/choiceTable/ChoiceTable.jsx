import { Companies } from "@/api/mock";
import Button from "@/components/button/Button";
import * as S from "./choiceTable.module.css";

function ChoiceTable({ title }) {
  return (
    <div className={S.container}>
      {title}
      <div>
        {Companies.map((company, index) => (
          <div key={index}>
            <div>
              <img src={`${company.src}`} />
              {company.name}
              {company.category}
            </div>
            <Button name="선택하기" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChoiceTable;
