import Topbar from "../pages/global/Topbar/Topbar.tsx";
import Sidebar from "../pages/global/Sidebar/Sidebar.tsx";
import * as S from "./Layout.styled.ts";
import React, { ReactNode, useEffect, useRef, useState } from "react";

interface LayoutProps {
  children: React.ReactNode;
  topbarTitle: string;
  today: ReactNode;
  active: ReactNode;
  icon?: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  topbarTitle,
  today,
  active,
  icon,
}) => {
  const [LayoutState, setLayoutState] = useState<boolean>(false);
  const setLayoutFunction = (newState: boolean) => {
    setLayoutState(newState);
  };
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo(0, 0);
    }
  }, [children]);
  return (
    <S.LayoutStyled>
      <Sidebar setLayoutState={setLayoutFunction} />
      <S.Content $isSidebarLarge={!LayoutState}>
        <Topbar
          topbarTitle={topbarTitle}
          today={today}
          active={active}
          icon={icon}
        />
        <S.LayoutWrapper ref={scrollRef}>{children}</S.LayoutWrapper>
      </S.Content>
    </S.LayoutStyled>
  );
};

export default Layout;
