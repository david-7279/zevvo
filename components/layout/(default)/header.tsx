import NavWrapper from "@/components/layout/(default)/nav-wrapper";
import Logo from "@/components/layout/(default)/logo";
import Menu from "@/components/layout/(default)/menu";
import Account from "@/components/layout/(default)/account";
import ResponsiveMenu from "@/components/layout/(default)/menu-responsive";

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