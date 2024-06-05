import Titlebar from '@/components/titlebar/Titlebar';
import { sortList } from "@/constants/dropdownList";
import * as S from './companiesPage.module.css';

function CompaniesPage() {
  return (
    <div className={S.container}>
      <Titlebar title='전체 스타트업 목록' list={sortList} />
    </div>
  );
}

export default CompaniesPage; 
