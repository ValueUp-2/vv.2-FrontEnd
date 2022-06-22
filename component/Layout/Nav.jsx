import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

const NavWrapper = styled.div`
  width: 100%;
  border: none;
  background-color: gray;
  text-align: center;
  display: -ms-inline-grid;
  grid-auto-columns: 7;
  padding: 1em 0.25em;
`;

const NavLinkStyle = styled.a`
  font-size: 24px;
  font-weight: bold;
  border: none;
  background-color: inherit;
  margin: 0.25em 1em;
  cursor: pointer;
`;

const ShowNavList = ({ data }) => {
  const href = `/${data}`;
  return (
    <Link href={href}>
      <NavLinkStyle>{data}</NavLinkStyle>
    </Link>
  );
};

const NavFavLink = () => {
  return (
    <Link href="/">
      <NavImage src="/logo.png" alt="logo" width={100} height={30} />
    </Link>
  );
};

const NavImage = styled(Image)`
  cursor: pointer;
  grid-column-start: 1;
  grid-column-end: 3;
`;

const NavList = ["동아리", "대외활동", "공모전", "인턴", "커뮤니티"];

export default function Navbar() {
  return (
    <nav>
      <NavWrapper>
        <NavFavLink />
        {NavList.map((data, index) => (
          <ShowNavList data={data} key={index} />
        ))}
      </NavWrapper>
    </nav>
  );
}
