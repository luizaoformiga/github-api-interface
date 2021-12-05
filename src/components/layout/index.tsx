import { NextPage } from "next";
import Header from "../header";
import * as S from "./styled";

const Layout: NextPage = ({ children }) => {
  return (
    <S.WrapperLayout>
      <Header />
      {children}
    </S.WrapperLayout>
  );
};

export default Layout;
