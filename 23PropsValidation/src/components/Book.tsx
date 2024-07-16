import PropTypes from "prop-types";
import placeholder from "../images/placeholder.png";

interface BookProps {
    id: number,
    image: string,
    title: string,
    price: number
}
 
const Book = ({ image = placeholder, title = "Defaultní název", price = 1000 }: BookProps) => {
    return (
        <div className="book">
            <h3>{title}</h3>
            <img src={image} alt={title} />
            <b>{price} Kč</b>
        </div>
    )
}

// od Reactu 19 ignorováno
Book.propTypes = {
    image:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    price:PropTypes.number.isRequired,
}

// Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.
// od Reactu 19 jako default parametry v React.FC Book = ()
Book.defaultProps = {
    title:"Defaultní název",
    price:1000,
    image:placeholder
}

export default Book;
