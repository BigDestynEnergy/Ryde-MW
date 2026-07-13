// Popup.jsx
import "../styles/popup.css";

export function Popup({ isOpen, title, message, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="popup">
      <div className="card">
        <div className="line"></div>

        {title && <h2>{title}</h2>}

        <div className="content">
          {message}
        </div>

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}