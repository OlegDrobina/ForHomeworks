import { NavLink } from "react-router-dom";

const Link = (props) => {
    const {href, children} = props;
    return (
        <NavLink to={href}>{children}</NavLink>
    )
}

export default Link;