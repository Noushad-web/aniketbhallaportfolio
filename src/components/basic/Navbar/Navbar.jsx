import { Container, ContainerFluid } from "components/Reuse.Components";
import navItemsData from "./Navbar.items-data";
import NavItem from "./NavItem";
import logo from "assets/portfolio-logo.svg";

const Navbar = () => {
    return (
        <ContainerFluid class="navbar__container-fluid p-0" id="portfolioTop">
            <Container class="navbar__container">

                <img src={logo} alt="portfolio-logo-not-available" id="logo" />

                <nav className="navbar__items-container p-0">
                    {navItemsData.map(itemData => <NavItem {...itemData} />)}
                </nav>

            </Container>
        </ContainerFluid>
    )
}

export default Navbar;
