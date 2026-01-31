from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from google import genai
import json
import os
import re

from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer
from reportlab.lib.styles import getSampleStyleSheet
from reportlab.lib.units import inch

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

client = genai.Client(api_key="AIzaSyB-NpvA67DDWNL9X42Cx3b42fzS_9gNosw")
PDF_PATH = "health_plan.pdf"

@app.post("/generate-plan")
async def generate_plan(
    age: int = Form(...),
    gender: str = Form(...),
    height: float = Form(...),
    weight: float = Form(...),
    goal: str = Form(...),
    activity: str = Form(...),
    food_type: str = Form(...),
    health_condition: str = Form("")
):
    prompt = f"""
Return STRICT JSON only. Structure MUST be:

{{
  "calories": number,
  "diet_plan": "breakfast, lunch, dinner plan",
  "hydration": "hydration plan",
  "workout": "weekly workout routine",
  "sleep": "sleep suggestion",
  "lifestyle": "lifestyle tips"
}}

User: Age: {age}, Gender: {gender}, Height: {height}, Weight: {weight}, Goal: {goal}, Activity: {activity}, Food Type: {food_type}, Health Condition: {health_condition}
"""

    try:
        response = client.models.generate_content(
            model="gemini-3-flash-preview",
            contents=prompt
        )
        raw_text = response.text or ""
        cleaned = re.sub(r"```json|```", "", raw_text).strip()
        match = re.search(r"\{.*\}", cleaned, re.DOTALL)
        if match:
            plan_data = json.loads(match.group())
        else:
            return {"error": "AI did not return valid JSON", "raw": raw_text}

    except Exception as e:
        return {"error": str(e), "raw": raw_text}

    # PDF
    doc = SimpleDocTemplate(PDF_PATH)
    elements = []
    styles = getSampleStyleSheet()
    elements.append(Paragraph("<b>Personalized Health Plan</b>", styles["Title"]))
    elements.append(Spacer(1, 0.5 * inch))
    for key, value in plan_data.items():
        elements.append(Paragraph(f"<b>{key.upper()}</b>", styles["Heading2"]))
        elements.append(Spacer(1, 0.2 * inch))
        elements.append(Paragraph(str(value), styles["Normal"]))
        elements.append(Spacer(1, 0.4 * inch))
    doc.build(elements)

    plan_data["pdf_url"] = "http://127.0.0.1:8000/download-pdf"
    return plan_data

@app.get("/download-pdf")
async def download_pdf():
    if os.path.exists(PDF_PATH):
        return FileResponse(PDF_PATH, media_type="application/pdf", filename="health_plan.pdf")
    return {"error": "PDF not found"}
