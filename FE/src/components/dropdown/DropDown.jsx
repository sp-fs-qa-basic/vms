import DropDownList from "@/components/dropdown/DropDownList"
import { sortList } from "@/constants/dropdownList"

//TODO: 사용하는곳에서 sortList를 사용하고 list로 변경해주기
function DropDown () {
  return (
    <div>
      <DropDownList lists={sortList}/> 
    </div>
  )
}

export default DropDown