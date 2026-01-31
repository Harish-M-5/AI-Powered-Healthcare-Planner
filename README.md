# AI-Powered-Healthcare-Planner
AI Healthcare Planner is a Full Stack AI-powered web application that generates personalized diet plans, calorie calculations, workout routines, hydration advice, sleep recommendations, and lifestyle suggestions based on user input. using React,FastAPI and Gemini

---

# 🏥 AI Healthcare Planner (Full Stack AI SaaS)

## 📌 Description

AI Healthcare Planner is a full stack AI-powered web application that generates personalized diet plans, hydration plans, workout routines, sleep suggestions, and lifestyle guidance based on user health inputs.  

It uses React for frontend, FastAPI for backend, and Google Gemini AI for intelligent health plan generation. The application also auto-generates a downloadable PDF report for users.

---

# 🚀 Overview

This project allows users to enter:

- Age  
- Gender  
- Height  
- Weight  
- Goal (weight loss / muscle gain / stamina / glow skin)  
- Activity level  
- Food type (veg / non-veg)  
- Health condition (optional)  

Based on these inputs, the AI generates:

- Daily calorie requirement  
- Diet plan (Breakfast / Lunch / Dinner)  
- Hydration plan  
- Weekly workout routine  
- Sleep suggestion  
- Lifestyle improvement tips  

The system ensures a structured and visually organized output UI.

---

# 🔮 Future Scope

- User authentication (Login/Register)
- User profile history tracking
- Save previous health plans
- Advanced calorie calculation engine
- BMI & body fat analysis
- AI chatbot integration
- Mobile app version
- Doctor appointment integration
- Deployment on cloud (AWS / Azure / GCP)

---

# ⚙️ Installation and Setup

## 🔹 Backend Setup (FastAPI)

```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install fastapi uvicorn google-genai reportlab python-multipart
uvicorn main:app --reload
```

Backend runs at:
```
http://127.0.0.1:8000
```

---

## 🔹 Frontend Setup (React)

```bash
cd frontend
npm install
npm start
```

Frontend runs at:
```
http://localhost:3000
```

---

# 📂 Project Folder Structure

```
AI-Healthcare/
│
├── backend/
│   ├── main.py
│   ├── health_plan.pdf
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   │   ├── Home.js
│   │   ├── FormPage.js
│   │   ├── ResultPage.js
│   │   └── App.js
│   └── package.json
│
└── README.md
```

---

# 🛠 Technology and Tools Used

| Category        | Technology Used |
|---------------|-----------------|
| Frontend       | React JS |
| Backend        | FastAPI |
| AI Model       | Google Gemini API |
| PDF Generator  | ReportLab |
| API Handling   | Axios |
| Routing        | React Router |
| Server         | Uvicorn |
| Language       | Python & JavaScript |

---

#_professional_architecture

## 🏗 Modern Architecture

React Frontend  
⬇  
Axios API Call  
⬇  
FastAPI Backend  
⬇  
Gemini AI Model  
⬇  
Structured JSON Response  
⬇  
PDF Generation  
⬇  
Frontend UI Display  

This follows a modern client-server AI microservice architecture.

---

# 🧠 Use Case & Problem Solved

Many users do not have access to personalized diet and workout planning.  
This project solves:

- Lack of structured health guidance  
- No personalized AI health recommendation system  
- Manual calorie calculation complexity  
- No downloadable structured health report  

The system automates personalized planning using AI.

---

# 🎨 React UI Explanation

The frontend includes:

- Home Page (Healthcare landing UI)
- Form Page (User health input form)
- Result Page (Colorful card-based UI display)
- PDF download button

React Router is used for page navigation.  
Axios is used for backend communication.  
The UI is designed with clean sections and responsive layout.

---

# 🐍 FastAPI Backend Explanation

The backend handles:

- Receiving user input via POST request
- Sending prompt to Gemini AI
- Parsing structured JSON output
- Generating professional PDF report
- Serving downloadable PDF endpoint

FastAPI ensures:

- High performance
- Async support
- Clean API architecture

---

# 🤖 Gemini API Explanation

Google Gemini API is used to:

- Generate structured health plan
- Return JSON formatted output
- Create intelligent diet and workout suggestions

Model used:
```
gemini-1.5-flash / gemini-3-flash-preview
```

API authentication is handled securely using API key.

---

# 🔐 Security

- CORS configured for frontend communication
- API key stored securely (recommended via environment variable)
- No database used (stateless architecture)
- Input validation via FastAPI Form fields

Future enhancement:
- Environment variable configuration
- Authentication layer
- HTTPS deployment

---

# 🔄 Project Process Explained

1. User enters health details
2. React sends POST request to FastAPI
3. FastAPI generates AI prompt
4. Gemini AI processes the request
5. JSON response is returned
6. Backend generates PDF
7. Frontend displays structured result
8. User downloads PDF

---

# 📘 Learning Outcome

From this project, you will learn:

- Full stack AI application development
- API integration with Gemini
- Prompt engineering
- JSON response parsing
- PDF generation using Python
- Frontend-backend communication
- Modern SaaS architecture
- Error debugging and API handling

---

# ▶️ How Project Runs (Execution Flow)

1. Backend runs using Uvicorn
2. Frontend runs using npm start
3. User fills form
4. Backend processes request
5. AI generates output
6. PDF auto-generated
7. Result shown in structured UI

---

# 🔑 Key Concepts Covered

- REST API
- Async programming
- Prompt Engineering
- JSON validation
- CORS configuration
- AI integration in Full Stack
- Stateless API architecture
- Microservice AI flow

---

# 🎯 Ideal For

- AI Developers
- Full Stack Developers
- Health Tech Startups
- AI SaaS Product Builders
- Students building AI projects
- Portfolio demonstration project

---

# 🔮 Future Enhancements

- Add authentication
- Add BMI calculator
- Add AI chatbot
- Store user history
- Cloud deployment
- Docker containerization
- Admin dashboard
- Subscription-based AI SaaS model

---

# ⚙️ Configuration

Environment Variable Recommended:

```
set GEMINI_API_KEY=your_api_key_here
```

Then in Python:

```python
client = genai.Client()
```

---


© 2026 Harish – Full Stack AI Developer


##Output<img width="1920" height="1080" alt="Screenshot 2026-01-31 112543" src="https://github.com/user-attachments/assets/f2cde588-2e21-4005-b426-9e486845a89c" />
<img width="1920" height="1080" alt="Screenshot 2026-01-31 112601" src="https://github.com/user-attachments/assets/a8f4eb95-3cf2-48cb-b1ab-9ef8b7e695ed" />
<img width="1920" height="1080" alt="Screenshot 2026-01-31 112613" src="https://github.com/user-attachments/assets/d5dfd469-7021-40e8-9414-4d9f91be85c9" />
<img width="1920" height="1080" alt="Screenshot 2026-01-31 112847" src="https://github.com/user-attachments/assets/e763993f-059d-49c2-ba3b-2029364c10af" />
<img width="1920" height="1080" alt="S<img width="1920" height="1080" alt="Screenshot 2026-01-31 112826" src="https://github.com/user-attachments/assets/0122919c-eb0a-4948-b36f-3cdb86f801d3" />
<img width="1920" height="1080" alt="Screenshot 2026-01-31 112826" src="https://github.com/user-attachments/assets/d5193f0e-e5d8-43ee-b610-da4267f0894b" />


---
### Demo video:



---
# 🙏 Acknowledgments

- Google Gemini AI
- FastAPI Documentation
- React Documentation
- ReportLab Library
- Open Source Community

---

# ✅ Conclusion

AI Healthcare Planner is a modern AI-powered full stack application designed to demonstrate real-world AI integration in web development.  

It combines React frontend, FastAPI backend, Gemini AI intelligence, and automated PDF generation into a complete SaaS-style application.  

This project represents practical implementation of AI in healthcare planning and showcases strong full stack AI development capability.

---
