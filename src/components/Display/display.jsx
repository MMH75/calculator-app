import "./Display.css";

function Display({ value }) {
    return (
        <div className="display-container">
            <input
                type="text"
                className="display-screen"
                value={value}
                readOnly
            />
        </div>
    );
}

export default Display;