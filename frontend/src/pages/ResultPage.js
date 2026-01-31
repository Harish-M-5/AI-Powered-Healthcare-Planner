import { useLocation } from "react-router-dom";

function ResultPage() {
  const { state } = useLocation();

  if (!state) {
    return <h2 style={{ textAlign: "center" }}>No Data Found</h2>;
  }

  const cardStyle = {
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    marginBottom: "20px"
  };

  const titleStyle = {
    color: "#2c3e50",
    marginBottom: "10px"
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #74ebd5, #9face6)",
        padding: "40px"
      }}
    >
      <h1 style={{ textAlign: "center", color: "white", marginBottom: "30px" }}>
        🏥 Your Personalized Health Plan
      </h1>

      {/* Calories */}
      <div style={cardStyle}>
        <h2 style={titleStyle}>🔥 Daily Calorie Requirement</h2>
        <p>{state.calories}</p>
      </div>

      {/* Diet Plan */}
      <div style={cardStyle}>
        <h2 style={titleStyle}>🥗 Diet Plan</h2>
        <p>{state.diet_plan}</p>
      </div>

      {/* Hydration */}
      <div style={cardStyle}>
        <h2 style={titleStyle}>💧 Hydration Plan</h2>
        <p>{state.hydration}</p>
      </div>

      {/* Workout */}
      <div style={cardStyle}>
        <h2 style={titleStyle}>🏋️ Weekly Workout Routine</h2>
        <p>{state.workout}</p>
      </div>

      {/* Sleep */}
      <div style={cardStyle}>
        <h2 style={titleStyle}>😴 Sleep Suggestion</h2>
        <p>{state.sleep}</p>
      </div>

      {/* Lifestyle */}
      <div style={cardStyle}>
        <h2 style={titleStyle}>🌿 Lifestyle Tips</h2>
        <p>{state.lifestyle}</p>
      </div>

      {/* Download PDF Button */}
      {state.pdf_url && (
        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <a
            href={state.pdf_url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#2ecc71",
              padding: "12px 25px",
              color: "white",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold"
            }}
          >
            📄 Download RoadMap PDF
          </a>
        </div>
      )}
    </div>
  );
}

export default ResultPage;
