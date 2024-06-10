import * as S from "./mainTableLayout.module.css";
import Titlebar from "@/components/titlebar/Titlebar";
import Pagination from "@/components/button/pagination/Pagination";

function MainTableLayout({ title, list, children }) {
  return (
    <div className={S.container}>
      <Titlebar title={title} list={list} />
      {children}
      <Pagination />
    </div>
  );
}

export default MainTableLayout;
