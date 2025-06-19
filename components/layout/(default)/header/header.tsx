import NavWrapper from "@/components/layout/(default)/header/nav-wrapper";
import Logo from "@/components/layout/(default)/header/logo";
import Menu from "@/components/layout/(default)/header/menu";
import Account from "@/components/layout/(default)/header/account";
import ResponsiveMenu from "@/components/layout/(default)/header/menu-responsive";

const Header = () => {

  return (
    <header>
      <NavWrapper>
        <Logo />
        <Menu />
        <Account />

        <div className="lg:hidden block">
          <ResponsiveMenu />
        </div>
      </NavWrapper>
    </header>
  );
};
export default Header;