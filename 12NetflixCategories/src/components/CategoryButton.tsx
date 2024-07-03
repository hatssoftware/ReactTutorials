import "./CategoryButton.css";

const CategoryButton = (props : any) => {
    return <button className="category-button" onClick={props.sc}>{props.name}</button>
}

export default CategoryButton;