
##  🏥 AI Powered Healthcare Planner

AI Healthcare Planner is a Full Stack AI-powered web application that generates personalized diet plans, calorie calculations, workout routines, hydration advice, sleep recommendations, and lifestyle suggestions based on user input. using React,FastAPI and Gemini

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


# ⚙️ Installation and Setup

## 🔹 Backend:


## FastAPI Setup:


**Documentation**: <a href="https://fastapi.tiangolo.com" target="_blank">https://fastapi.tiangolo.com</a>

**Source Code**: <a href="https://github.com/fastapi/fastapi" target="_blank">https://github.com/fastapi/fastapi</a>

---

FastAPI is a modern, fast (high-performance), web framework for building APIs with Python based on standard Python type hints.

The key features are:

* **Fast**: Very high performance, on par with **NodeJS** and **Go** (thanks to Starlette and Pydantic). [One of the fastest Python frameworks available](#performance).
* **Fast to code**: Increase the speed to develop features by about 200% to 300%. *
* **Fewer bugs**: Reduce about 40% of human (developer) induced errors. *
* **Intuitive**: Great editor support. <abbr title="also known as auto-complete, autocompletion, IntelliSense">Completion</abbr> everywhere. Less time debugging.
* **Easy**: Designed to be easy to use and learn. Less time reading docs.
* **Short**: Minimize code duplication. Multiple features from each parameter declaration. Fewer bugs.
* **Robust**: Get production-ready code. With automatic interactive documentation.
* **Standards-based**: Based on (and fully compatible with) the open standards for APIs: <a href="https://github.com/OAI/OpenAPI-Specification" class="external-link" target="_blank">OpenAPI</a> (previously known as Swagger) and <a href="https://json-schema.org/" class="external-link" target="_blank">JSON Schema</a>.

<small>* estimation based on tests conducted by an internal development team, building production applications.</small>


### Alternative API docs upgrade

And now, go to <a href="http://127.0.0.1:8000/redoc" class="external-link" target="_blank">http://127.0.0.1:8000/redoc</a>.

* The alternative documentation will also reflect the new query parameter and body:

### Recap

In summary, you declare **once** the types of parameters, body, etc. as function parameters.

You do that with standard modern Python types.

You don't have to learn a new syntax, the methods or classes of a specific library, etc.

Just standard **Python**.

For example, for an `int`:

```Python
item_id: int
```

or for a more complex `Item` model:

```Python
item: Item
```

...and with that single declaration you get:

* Editor support, including:
    * Completion.
    * Type checks.
* Validation of data:
    * Automatic and clear errors when the data is invalid.
    * Validation even for deeply nested JSON objects.
* <abbr title="also known as: serialization, parsing, marshalling">Conversion</abbr> of input data: coming from the network to Python data and types. Reading from:
    * JSON.
    * Path parameters.
    * Query parameters.
    * Cookies.
    * Headers.
    * Forms.
    * Files.
* <abbr title="also known as: serialization, parsing, marshalling">Conversion</abbr> of output data: converting from Python data and types to network data (as JSON):
    * Convert Python types (`str`, `int`, `float`, `bool`, `list`, etc).
    * `datetime` objects.
    * `UUID` objects.
    * Database models.
    * ...and many more.
* Automatic interactive API documentation, including 2 alternative user interfaces:
    * Swagger UI.
    * ReDoc.

---



## Gemini API Key setup:
To use the Gemini API, you need an API key. This page outlines how to create and
manage your keys in Google AI Studio as well as how to set up your environment
to use them in your code.

[Create or view a Gemini API Key](https://aistudio.google.com/app/apikey)

## API Keys

You can create and manage all your Gemini API Keys from the
[Google AI Studio](https://aistudio.google.com/app/apikey) **API Keys** page.

Once you have an API key, you have the following options to connect to the
Gemini API:

- [Setting your API key as an environment variable](https://ai.google.dev/gemini-api/docs/api-key#set-api-env-var)
- [Providing your API key explicitly](https://ai.google.dev/gemini-api/docs/api-key#provide-api-key-explicitly)

For initial testing, you can hard code an API key, but this should only be
temporary since it's not secure. You can find examples for hard coding the API
key in [Providing API key explicitly](https://ai.google.dev/gemini-api/docs/api-key#provide-api-key-explicitly) section.

## Google Cloud projects

[Google Cloud projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects)
are fundamental to using Google Cloud services (such as the Gemini API),
managing billing, and controlling collaborators and permissions. Google AI
Studio provides a lightweight interface to your Google Cloud projects.

If you don't have
any projects created yet, you must either create a new project or import one
from Google Cloud into Google AI Studio. The **Projects** page in Google AI
Studio will display all keys that have sufficient permission to use the Gemini
API. Refer to the [import projects](https://ai.google.dev/gemini-api/docs/api-key#import-projects) section for instructions.

### Default project

For new users, after accepting Terms of Service, Google AI Studio creates a
default Google Cloud Project and API Key, for ease of use. You can rename this
project in Google AI Studio by navigating to **Projects** view in the
**Dashboard** , clicking the 3 dots settings button next to a project and
choosing **Rename project**. Existing users, or users who already have Google
Cloud Accounts won't have a default project created.


## Setting the API key as an environment variable

If you set the environment variable `GEMINI_API_KEY` or `GOOGLE_API_KEY`, the
API key will automatically be picked up by the client when using one of the
[Gemini API libraries](https://ai.google.dev/gemini-api/docs/libraries). It's recommended that you
set only one of those variables, but if both are set, `GOOGLE_API_KEY` takes
precedence.

If you're using the REST API, or JavaScript on the browser, you will need to
provide the API key explicitly.

Here is how you can set your API key locally as the environment variable
`GEMINI_API_KEY` with different operating systems.  


### Windows

1. Search for "Environment Variables" in the search bar.
2. Choose to modify **System Settings**. You may have to confirm you want to do this.
3. In the system settings dialog, click the button labeled **Environment
   Variables**.
4. Under either **User variables** (for the current user) or **System
   variables** (applies to all users who use the machine), click **New...**
5. Specify the variable name as `GEMINI_API_KEY`. Specify your Gemini API Key as the variable value.
6. Click **OK** to apply the changes.
7. Open a new terminal session (cmd or Powershell) to get the new variable.

## Providing the API key explicitly

In some cases, you may want to explicitly provide an API key. For example:

- You're doing a simple API call and prefer hard coding the API key.
- You want explicit control without having to rely on automatic discovery of environment variables by the Gemini API libraries
- You're using an environment where environment variables are not supported (e.g web) or you are making REST calls.

Below are examples for how you can provide an API key explicitly:  

### Python

    from google import genai

    client = genai.Client(api_key="<var translate="no">YOUR_API_KEY</var>")

    response = client.models.generate_content(
        model="gemini-3-flash-preview", contents="Explain how AI works in a few words"
    )
    print(response.text)

### JavaScript

    import { GoogleGenAI } from "@google/genai";

    const ai = new GoogleGenAI({ apiKey: "<var translate="no">YOUR_API_KEY</var>" });

    async function main() {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: "Explain how AI works in a few words",
      });
      console.log(response.text);
    }

    main();

### REST

    curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent" \
      -H 'Content-Type: application/json' \
      -H "x-goog-api-key: <var translate="no">YOUR_API_KEY</var>" \
      -X POST \
      -d '{
        "contents": [
          {
            "parts": [
              {
                "text": "Explain how AI works in a few words"
              }
            ]
          }
        ]
      }'

## Keep your API key secure

Treat your Gemini API key like a password. If compromised, others can use your
project's quota, incur charges (if billing is enabled), and access your
private data, such as files.

### Critical security rules

- **Keep keys confidential**: API keys for Gemini may access sensitive data your
  application depends upon.

  - **Never commit API keys to source control.** Do not check your API key into version control systems like Git.

  - **Never expose API keys on the client-side.** Do not use your API key directly
    in web or mobile apps in production. Keys in client-side code
    (including our JavaScript/TypeScript libraries and REST calls) can be
    extracted.

- **Restrict access**: Restrict API key usage to specific IP addresses, HTTP
  referrers, or Android/iOS apps where possible.

- **Restrict usage**: Enable only the necessary APIs for each key.

- **Perform regular audits**: Regularly audit your API keys and rotate them
  periodically.

### Best practices

- **Use server-side calls with API keys** The most secure way to use your API
  key is to call the Gemini API from a server-side application where the key
  can be kept confidential.

- **Use ephemeral tokens for client-side access (Live API only):** For direct
  client-side access to the Live API, you can use ephemeral tokens. They come with
  lower security risks and can be suitable for production use. Review
  [ephemeral tokens](https://ai.google.dev/gemini-api/docs/ephemeral-tokens) guide for more information.

- **Consider adding restrictions to your key:** You can limit a key's permissions
  by adding [API key restrictions](https://cloud.google.com/api-keys/docs/add-restrictions-api-keys#add-api-restrictions).
  This minimizes the potential damage if the key is ever leaked.

For some general best practices, you can also review this
[support article](https://support.google.com/googleapi/answer/6310037).


## My API key:

AIzaSyB-NpvA67DDWNL9X42Cx3b42fzS_9gNosw

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/b20ca2c3-f799-4c98-96a9-b49910f3dc24" />


## My setup

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

## React setup

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


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
set GEMINI_API_KEY=AIzaSyB-NpvA67DDWNL9X42Cx3b42fzS_9gNosw
```

Then in Python:

```python
client = genai.Client()
```

---


##Output<img width="1920" height="1080" alt="Screenshot 2026-01-31 112543" src="https://github.com/user-attachments/assets/f2cde588-2e21-4005-b426-9e486845a89c" />
<img width="1920" height="1080" alt="Screenshot 2026-01-31 112601" src="https://github.com/user-attachments/assets/a8f4eb95-3cf2-48cb-b1ab-9ef8b7e695ed" />
<img width="1920" height="1080" alt="Screenshot 2026-01-31 112613" src="https://github.com/user-attachments/assets/d5dfd469-7021-40e8-9414-4d9f91be85c9" />
<img width="1920" height="1080" alt="Screenshot 2026-01-31 112847" src="https://github.com/user-attachments/assets/e763993f-059d-49c2-ba3b-2029364c10af" />
<img width="1920" height="1080" alt="Screenshot 2026-01-31 112826" src="https://github.com/user-attachments/assets/0122919c-eb0a-4948-b36f-3cdb86f801d3" />

---
### Demo video:


https://github.com/user-attachments/assets/4caa8237-dd2f-43aa-aa86-ee5f7eb237a1


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
