import styled from "styled-components";

const Container = styled.div`
  display: grid;
  height: 100vh;
  color: white;
  grid-template-rows: 0.2fr 1fr 0.5fr 0.5fr;
  grid-template-areas:
    "nav nav nav nav"
    "sidebar main main main"
    "sidebar content content content"
    "footer footer footer footer";
  text-align: center;
  grid-gap: 0.25rem;
  transition: all 0.25s ease-in-out;
  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    grid-template-rows: 0.4fr 0.4fr 2.2fr 1fr;
    grid-template-areas:
      "nav"
      "sidebar"
      "main"
      "content"
      "footer";
  }
`;

const NavBar = styled.nav`
  background-color: #3a3a55;
  grid-area: nav;
  padding: 0.25em;
`;

const Main = styled.main`
  background: #1f2128;
  color: white;
  grid-area: main;
  padding: 0.25em;
`;

const SideBar = styled.div`
  background: #9aaab7;
  grid-area: sidebar;
  padding: 0.25rem;
`;

const ContentBox = styled.div`
  display: flex;
  gap: 0.25em;
  padding: 0.25rem;
  align-items: center;
  grid-area: content;
  justify-content: center;
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;

const Content1 = styled.div`
  background: #a6b8b9;
  padding: 0.25rem;
  width: 100%;
  height: 100%;
`;

const Content2 = styled(Content1)``;
const Content3 = styled(Content1)``;

const Footer = styled.footer`
  background: #ff9637;
  grid-area: footer;
  padding: 0.25rem;
`;

// const Navbar2 = ({ children }) => {
//   return (
//     <Container>
//       <NavBar>NavBar</NavBar>
//       {children}
//       {/* <Main>Main</Main>
//       <SideBar>SideBar</SideBar>
//       <ContentBox>
//         <Content1>Content1</Content1>
//         <Content2>Content2</Content2>
//         <Content3>Content3</Content3>
//       </ContentBox> */}
//       <Footer>Footer</Footer>
//     </Container>
//   );
// };

// export default Navbar2;

export {
  Container,
  NavBar,
  Footer,
  ContentBox,
  Content1,
  Content2,
  Content3,
  SideBar,
  Main,
};
