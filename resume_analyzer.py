from flask import Flask, request, jsonify
import google.generativeai as genai
import os
import PyPDF2 as pdf
from dotenv import load_dotenv
import json

# Load environment variables
load_dotenv()
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

app = Flask(__name__)

# Prompt Template
input_prompt = """
Act as an expert ATS with deep knowledge in tech fields like software engineering, data science, data analysis, and big data engineering. Evaluate the resume based on the job description, considering the competitive job market. Provide the best assistance for improving resumes. Assign a matching percentage and list missing keywords accurately.

Resume: {text}
Job Description: {jd}

Response structure:
{{"JD Match": "%", "MissingKeywords": [], "Profile Summary": ""}}
"""

def get_gemini_response(prompt):
    model = genai.GenerativeModel('gemini-pro')
    response = model.generate_content(prompt)
    return response.text

def extract_pdf_text(file_stream):
    reader = pdf.PdfReader(file_stream)
    text = ""
    for page in reader.pages:
        text += page.extract_text()
    return text

@app.route('/analyze', methods=['POST'])
def analyze_resume():
    if 'resume' not in request.files or 'job_description' not in request.form:
        return jsonify({'error': 'Missing resume file or job description'}), 400

    resume_file = request.files['resume']
    job_description = request.form['job_description']

    try:
        resume_text = extract_pdf_text(resume_file)
        prompt = input_prompt.format(text=resume_text, jd=job_description)
        response = get_gemini_response(prompt)
        result_json = json.loads(response)
        return jsonify(result_json)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/')
def home():
    return 'Resume Analyzer Flask API is running.'

if __name__ == '__main__':
    app.run(debug=True)
