import NavWrapper from "@/components/layout/(default)/nav-wrapper";
import Logo from "@/components/layout/(default)/logo";
import Menu from "@/components/layout/(default)/menu";
import Account from "@/components/layout/(default)/account";

const Header = () => {

  return (
    <header>
      <NavWrapper>
        <Logo />
        <Menu />
        <Account />
      </NavWrapper>
    </header>
  );
};
export default Header;