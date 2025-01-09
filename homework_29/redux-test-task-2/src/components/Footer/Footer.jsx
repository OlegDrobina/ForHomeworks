import { useSelector } from "react-redux";
import selectors from "../../redux/slices/selectors";

const Footer = () => {
    const items = useSelector(selectors.items);
    return (
        <div>
            <p>Items count: {items.length}</p>
        </div>
    )
}

export default Footer;