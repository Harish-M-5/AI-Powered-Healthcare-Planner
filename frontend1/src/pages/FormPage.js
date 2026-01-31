import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function FormPage() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    age: "",
    gender: "",
    height: "",
    weight: "",
    goal: "",
    activity: "",
    food_type: "",
    health_condition: ""
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {

      const data = new FormData();

      data.append("age", Number(form.age));
      data.append("gender", form.gender);
      data.append("height", Number(form.height));
      data.append("weight", Number(form.weight));
      data.append("goal", form.goal);
      data.append("activity", form.activity);
      data.append("food_type", form.food_type);
      data.append("health_condition", form.health_condition);

      
       const res = await axios.post(
   "http://127.0.0.1:8000/generate-plan",
   data,
   { headers: { "Content-Type": "multipart/form-data" } }
    );


      navigate("/result", { state: res.data });

    } catch (err) {
      console.error(err);
      setError("Error generating plan. Please check backend or API key.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h2>Enter Your Health Details</h2>

      <form onSubmit={handleSubmit} className="form">

        <input name="age" placeholder="Age" value={form.age} onChange={handleChange} required />

        <select name="gender" value={form.gender} onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <input name="height" placeholder="Height (cm)" value={form.height} onChange={handleChange} required />

        <input name="weight" placeholder="Weight (kg)" value={form.weight} onChange={handleChange} required />

        <input name="goal" placeholder="Goal (weight loss / muscle gain / stamina / glow skin)" value={form.goal} onChange={handleChange} required />

        <select name="activity" value={form.activity} onChange={handleChange} required>
          <option value="">Activity Level</option>
          <option value="low">Low</option>
          <option value="moderate">Moderate</option>
          <option value="high">High</option>
        </select>

        <select name="food_type" value={form.food_type} onChange={handleChange} required>
          <option value="">Food Type</option>
          <option value="veg">Veg</option>
          <option value="non-veg">Non-Veg</option>
        </select>

        <input name="health_condition" placeholder="Health Condition (optional)" value={form.health_condition} onChange={handleChange} />

        <button type="submit" disabled={loading}>
          {loading ? "Generating..." : "Generate Plan"}
        </button>

        {error && <p style={{color:"red"}}>{error}</p>}

      </form>
    </div>
  );
}

export default FormPage;
