const NavItem = props => {
    return <a href={props.link} className="navbar__nav-item">{props.name}</a>
}

export default NavItem;