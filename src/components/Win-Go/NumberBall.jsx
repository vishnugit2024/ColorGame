const NumberBall = ({ number, colors, size = "large", clickable = false }) => {
  const getGradient = (colors) => {
    if (colors.includes("red") && colors.includes("violet")) {
      return "linear-gradient(135deg, #ff4757 0%, #ff4757 50%, #8e44ad 50%, #8e44ad 100%)";
    }
    if (colors.includes("green") && colors.includes("violet")) {
      return "linear-gradient(135deg, #2ed573 0%, #2ed573 50%, #8e44ad 50%, #8e44ad 100%)";
    }
    if (colors.includes("green")) {
      return "linear-gradient(135deg, #2ed573 0%, #27ae60 100%)";
    }
    if (colors.includes("red")) {
      return "linear-gradient(135deg, #ff4757 0%, #e74c3c 100%)";
    }
    if (colors.includes("violet")) {
      return "linear-gradient(135deg, #8e44ad 0%, #9b59b6 100%)";
    }
    return "linear-gradient(135deg, #95a5a6 0%, #7f8c8d 100%)";
  };

  return (
    <div
      className={`number-ball ${size} ${clickable ? "clickable" : ""}`}
      style={{
        background: getGradient(colors),
      }}
    >
      <span className="number">{number}</span>
    </div>
  );
};

export default NumberBall;
