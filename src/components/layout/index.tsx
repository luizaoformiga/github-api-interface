import { NextPage } from "next";
import { Header } from "../header";
import * as S from "./styled";

export const Layout: NextPage = ({ children }) => {
  return (
    <S.WrapperLayout>
      <Header />
      {children}
    </S.WrapperLayout>
  );
};
