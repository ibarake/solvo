# Technical Assessment - Full Stack Web Developer

This repository contains my submission for the Full Stack Web Developer technical assessment. The assessment demonstrates my skills in front-end development, debugging, and understanding of modern web technologies.

## Project Structure

├── index.html
├── global.css
├── index.js
├── debug.js
├── corrected.js
└── README.md

## 🚀 Features

### 1. Landing Page Implementation
The landing page showcases:
- Responsive hero section with parallax effect
- Feature carousel using Swiper.js
- Dark mode toggle
- Smooth scrolling navigation
- Responsive footer with social links
- GSAP animations

### 2. Bug Fix Challenge
The original code in `debug.js` had an issue where the `map` function was returning `undefined` for odd numbers, resulting in an array with undefined values. 

I've provided three different solutions in `corrected.js`:
1. Using `map` with `filter(Boolean)`
2. Using `filter` directly (most efficient)
3. Using `map` with manual array pushing

### 3. Technologies Used
- HTML5
- CSS3 (Custom Properties, Flexbox)
- JavaScript (ES6+)
- GSAP for animations
- Swiper.js for carousel
- Font Awesome for icons
- Custom Web Components

## 🛠️ Setup

1. Clone the repository:
git clone [repository-url]

2. Run the project:
npm install
npm start

## 🎯 Key Implementation Details

### Web Components
The project uses custom Web Components for better code organization:
- `<header-animation>`: Handles header scroll effects
- `<hero-animation>`: Manages hero section animations
- `<features-animation>`: Controls feature carousel
- `<dark-mode-toggle>`: Implements theme switching

### Responsive Design
- Mobile-first approach
- Breakpoints for different screen sizes
- Dynamic viewport height using `dvh`
- Fluid typography

### Performance Considerations
- Optimized animations using GSAP
- Lazy loading for background images
- Efficient event handling
- Component-based architecture

## 📱 Browser Compatibility
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License
MIT

## 👤 Author
Issa Barake Slebi 

## 🤖 AI Integration Strategy (ReAct RAG)

### WordPress Chatbot Implementation

#### Tools & Frameworks
- Python for the AI API, we could use NodeJS as well but Python is more established in the AI space.
- Django or FastAPI for the API server.
- Langchain for AI integration, if we wanted to optimize the functionnality further would do vanilla connections to the models.
- MySQL connection to database to retrieve all content and embed it to the vector database.
- Chat history to keep track of the conversation history.
- Memory to keep track of data for future conversations.
- Redis for chat history and memory.
- JSON responses to handle a predictable output of the AI for taking actions.
- Langgraph to handle the flow of the conversation.
- Langsmith to monitor and track invokes.
- Checkpoints or history to save the state of the conversation and implement human in the loop via API.

#### Implementation Steps
1. **Python API**
    - Create a Python API to handle the AI logic.
    - Create a function that connects to the MySQL database.
    - Create a strategy and a function to split, embed, and index the content of the database to the vector database.
    - Create a function to connect to the vector database to retrieve the content via similarity search.
    - Create a graph to handle the conversation flow.
    - Create a function to handle the chat history and memory.
2. **Plugin Development**
   - Create a WordPress plugin to handle API connections
   - Set up database tables for conversation history
   - Set up custom embeddings options page in the admin panel.
   - Widget settings page to handle the chat widget configuration.
   - Data tables.

3. **Frontend Integration**
   - Build a floating chat widget using React.

4. **Backend Processing**
   - Create middleware for API rate limiting
   - Implement conversation context management
   - Set up fallback responses for API downtime

5. **Testing & Optimization**
   - Use Langsmith to monitor and track invokes.
   - Use Checkpoints or history to save the state of the conversation and implement human in the loop via API.
   - Optimize the API calls and responses to improve performance.
   - IMPORTANT: Implement different testing strategies for models and embeddings to ensure the quality and speed of the responses. Important test would be: 
        - Document grading: How relevant is the retrieved content to the question?
        - Context grading: Is the chat history and memory affecting the response?
        - Accuracy grading: How accurate is the response?
        - Speed grading: How fast is the response time?
        - Hallucination grading: How many hallucinations are in the response?

### Sample Project

My AI projects have confidentiality agreements but I can share this super simple sample:

[Sample 1](https://github.com/ibarake/kymbo-sales)
[Sample 2](https://github.com/ibarake/rag-poc)

## How would you utilize AI tools to enhance the user experience of a WordPress website?

For my previous project I had the same question, we where working a golf client and we wanted to implement AI to increase revenue and convertion of the website.

We saw plenty of roads to take since AI could do plenty of stuff from recommend products, recommend articles, or even advice what to do in the website based on data gathered from the user profile.

But the conclusion we came to is since the client is a very blogs oriented company, the best way to increase revenue would be to increase the post views. to do so we would implement a AI golf trainer chat that would onboard users via a AI generated form based on skills and goals and then would give them a personalized plan to follow and would update it as they progress. All the content the AI would response with would be pulled from the website articles and videos transcripts like this the same response would recommend the user to watch a specific video or read a specific article to help them improve.

This way we would not only increase the post views but also the user engagement and the time spent on the website which would give us more data to personalize the AI responses and make them more relevant which would lead to a better user experience and increase the conversion rate.

Unfortunately this never got a green light from the company before other priorities took place. We may still see this in a near future!