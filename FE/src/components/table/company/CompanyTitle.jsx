import * as S from './companyTitle.module.css';

function CompanyTitle({src, name, category}) {
  return (
    <div className={S.company}>
      <img src={src} className={S.img} />
      <div className={S.companyTitle}>
        <span className={S.name}>{name}</span>
        <span className={S.category}>{category}</span>
      </div>
    </div>
  );
}

export default CompanyTitle;
