import "./Toast.css";

const Toast = (props : any) => {
    return <div className={props.show ? "toast show" : "toast hide" } >
        Film byl přidán
    </div>;
};

export default Toast;
