export default function Popup({ onClose }: { onClose: () => void }) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
     
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          border: "1px solid black",
          color: "black", 
        }}
      >
        <h2>Dynamic Popup</h2>
        <p>I am a shiny popup component that was dynamically imported.</p>
        <button
          onClick={onClose}
          style={{ padding: "5px 10px", marginTop: "10px" , border: "1px solid green"}}
        >
          Close
        </button>
      </div>
    </div>
  );
}
