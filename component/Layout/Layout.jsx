import Link from "next/link";
import styled from "styled-components";

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const LayoutContentWrapper = styled.div`
  flex: 1;
`;

const NavBar = styled.nav`
  background-color: #3a3a55;
  color: white;
  font: bold;
  font-size: 2em;
  padding: 0.25em;
  display: -ms-inline-grid;
`;

const NavContentBox = styled.div`
  display: inline-flex;
  gap: 0.25em;
  padding: 0.25rem;
  align-items: center;
  grid-area: content;
  justify-content: center;
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;

const NavContent = styled.div`
  background: inherit;
  padding: 0.25rem;
  width: max-content;
  height: 100%;
  margin-left: 1em;
  box-sizing: content-box;
`;

const Footer = styled.footer`
  background: #ff9637;
  padding: 0.25em;
`;

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <LayoutContentWrapper>
        <NavBar>
          <NavContentBox>
            <NavContent>
              <Link href="/">ValueUp</Link>
            </NavContent>
            <NavContent>
              <Link href="/activation">대외활동</Link>
            </NavContent>
            <NavContent>
              <Link href="/club">동아리</Link>
            </NavContent>
            <NavContent>
              <Link href="/intern">인턴</Link>
            </NavContent>
            <NavContent>
              <Link href="/community">커뮤니티</Link>
            </NavContent>
          </NavContentBox>
        </NavBar>
        {children}
      </LayoutContentWrapper>
      <Footer>This is Footer</Footer>
    </LayoutWrapper>
  );
};

export default Layout;
