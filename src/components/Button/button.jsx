import "./Button.css";

function Button({ value, className, onClick }) {
    return (
        <button
            className={`calc-button ${className}`}
            onClick={() => onClick(value)}
        >
            {value}
        </button>
    );
}

export default Button;