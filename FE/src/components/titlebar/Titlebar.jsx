import Search from '@/components/search/Search'
import * as S from './titlebar.module.css'
import DropDown from '@/components/dropdown/DropDown'

function Titlebar ({title, list}) {
  return (
    <div className={S.container}>
      {title}
      <div className={S.box}>
        <Search />
        <DropDown list={list}/>
      </div>
    </div>
  )
}

export default Titlebar