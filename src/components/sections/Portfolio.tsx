
import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/ui/Section";
import Introduction from "./Introduction";
import { features } from "process";

const projects = [
  {
    id: "project-one",
    title: "AKKANTO AI",
    description: "Automate routine tasks fast. A corporate automation tool that leverages AI to streamline daily workflows and boost productivity.",
    image: "lovable-uploads/akkanto.png",
    tags: ["Django", "Celery", "PostgreSQL", "Docker", "React"],
    link: "#",
    introduction: 'AKKANTO AI is a powerful corporate automation tool designed to simplify and accelerate routine tasks, helping businesses optimize daily workflows and enhance productivity.',
    overview: 'It leverages AI techniques like fine-tuning and RAG (Retrieval-Augmented Generation) to gain insights and generate corresponding documents. AKKANTO AI offers a seamless, scalable solution to automate and streamline business operations.',
    features: ['document generation', 'document embedding', 'document chunking', 'document retrieval', 'fine-tuning', 'RAG', 'data security', 'data privacy'],
    tldr: ['Created the whole pipeline to solve the problem of document generation and retrieval.', 'Fine-tuned the model on the company\'s data.', 'Created a web app to generate documents and retrieve them.', 'Created a pipeline to automate the whole process.', 'Created a pipeline to generate embeddings and chunk documents.', 'Created a pipeline to create documents for company\'s use.'],
    extra_images: ['lovable-uploads/akkanto_main.png', 'lovable-uploads/akkanto_db.png', 'lovable-uploads/akkanto_chat.png'],
    image_status: 'not-hidden',
  },
  {
    id: "project-two",
    title: "Licence Plates Vision",
    description: "Real-time license detection. A computer vision system that identifies and extracts license plate numbers from surveillance feeds with high accuracy.",
    image: "lovable-uploads/license_plate.png",
    tags: ["YOLO", "PyTorch", "Docker", "Computer Vision"],
    link: "#",
    introduction: 'Licence Plates Vision is a real-time computer vision system designed to detect and extract license plate numbers from surveillance feeds with high accuracy, enabling automated recognition for security and management.',
    overview: 'It utilizes YOLO for real-time detection and PyTorch for training the model, allowing seamless license plate extraction. The system offers a scalable solution with an automated pipeline for processing and generating documents based on detected plates.',
    features: ['real-time detection', 'license plate recognition', 'computer vision', 'deep learning', 'YOLO'],
    tldr: ['Created a computer vision system to detect license plates in real-time.', 'Used YOLO to detect license plates.', 'Used PyTorch to train the model.', 'Created a web app to display the results.', 'Created a pipeline to automate the whole process.', 'Created a pipeline to create documents for company\'s use.'],
    extra_images: ['lovable-uploads/licences_main.png', 'lovable-uploads/licences_upload.png', 'lovable-uploads/licences_excel.png'],
    image_status: 'not-hidden',
  },
  {
    id: "project-three",
    title: "AI Chatbot for Customer Support",
    description: "Built an AI-powered chatbot for a business to handle customer inquiries and support, reducing response time by 40%.",
    image: "lovable-uploads/aichatbot.png",
    tags: ["React", "FastAPI", "spaCy", "Redis", "PostgreSQL", "Python"],
    link: "#",
    introduction: 'AI Chatbot for Customer Support is an intelligent chatbot designed to automate customer inquiries and support, significantly reducing response times and improving user satisfaction.',
    overview: 'The chatbot leverages spaCy for natural language processing and integrates Redis for caching and PostgreSQL for data storage. Built with FastAPI and React, the system provides a seamless web app for real-time customer support, streamlining workflows and enhancing efficiency.',
    features: ['AI-powered chatbot', 'customer support', 'natural language processing'],
    tldr: ['Created an AI-powered chatbot to handle customer inquiries and support.', 'Used spaCy for natural language processing.', 'Used Redis for caching.', 'Used PostgreSQL for storing data.', 'Created a web app to display the results.', 'Created a pipeline to automate the whole process.'],
    extra_images: [],
    image_status: 'hidden',
  },
  {
    id: "project-four",
    title: "DocIntel Hub",
    description: "Simplify document processing. A one-stop platform for text extraction, embedding, and chunking—making document intelligence effortless.",
    image: "lovable-uploads/docintel.png",
    tags: ["FastAPI", "Celery", "Gemini", "asyncio", "OpenAI"],
    link: "#",
    features: ['text extraction', 'embedding', 'chunking', 'document intelligence'],
    introduction: 'DocIntel Hub is an all-in-one platform designed to simplify document processing by providing tools for text extraction, embedding, and chunking, making document intelligence more efficient and accessible.',
    overview: 'Using FastAPI and Celery, DocIntel Hub streamlines the document processing workflow. It leverages Gemini for enhanced text understanding, asyncio for asynchronous tasks, and OpenAI for advanced natural language processing, allowing businesses to effortlessly manage and extract valuable insights from their documents.',
    tldr: ['Created a one-stop platform for text extraction, embedding, and chunking.', 'Used FastAPI for the backend.', 'Used Celery for task management.', 'Used asyncio for asynchronous processing.'],
    extra_images: [],
    image_status: 'hidden',
  },
  {
    id: "project-five",
    title: "MultiRAG advanced",
    description: "Dynamic multi-agent context capture. An advanced RAG system designed to deliver optimal contextual data retrieval for dynamic applications.",
    image: "lovable-uploads/multirag.png",
    tags: ["late chunking", "multi-agent", "LightRAG", "Docker", "Python", "FastAPI", "Celery", "Function calling", "RLHF", "Qdrant"],
    link: "#",
    features: ['dynamic context capture', 'multi-agent system', 'contextual data retrieval', 'LightRAG'],
    tldr: ['Created an advanced RAG system to deliver optimal contextual data retrieval.', 'Used late chunking for efficient processing.', 'Implemented a multi-agent system for dynamic context capture.', 'Utilized LightRAG for enhanced performance.', 'Created a pipeline to automate the whole process.'],
    introduction: 'MultiRAG Advanced is a cutting-edge system designed to optimize dynamic data retrieval using multi-agent context capture, providing high-quality context for complex, evolving applications.',
    overview: 'Built with FastAPI and Celery, MultiRAG Advanced uses LightRAG for efficient retrieval-augmented generation (RAG). The system integrates late chunking, function calling, and RLHF to dynamically adapt to new contexts, while Qdrant enhances vector search capabilities. Packaged in Docker, it offers scalability and flexibility for complex, data-driven applications.',
    extra_images: [],
    image_status: 'hidden',
  },
  {
    id: "project-six",
    title: "AgriConnect",
    description: "An app for Indian farmers to share knowledge, and access farming insights in real time with a voice assistant.",
    image: "lovable-uploads/syngenta.png",
    tags: ["Speech to Speech", "React Native", "Python", "FastAPI", "Celery"],
    link: "#",
    introduction: 'AgriConnect is an innovative mobile app designed to help Indian farmers share knowledge and access real-time farming insights, featuring a voice assistant for easy interaction.',
    overview: 'Built with React Native, Python, and FastAPI, AgriConnect enables farmers to engage in voice-driven discussions, share tips, and get personalized farming advice. The app uses Celery for task management and real-time processing, making agricultural knowledge more accessible and actionable for farmers.',
    features: ['voice assistant', 'real-time insights', 'knowledge sharing', 'agricultural APIs'],
    tldr: ['Created an app for Indian farmers to share knowledge and access farming insights.', 'Used React Native for the frontend.', 'Used Python and FastAPI for the backend.', 'Used Celery for task management.', 'Created a voice assistant for easy interaction.'],
    extra_images: ['lovable-uploads/vallimain.png','lovable-uploads/vallimain2.png','lovable-uploads/valliprojects.png', 'lovable-uploads/valliprojects2.png', 'lovable-uploads/valliprojects3.png', 'lovable-uploads/valliprojects4.png', 'lovable-uploads/valliprojects5.png'],
    image_status: "not-hidden",
  },
];

const Portfolio = () => {
  return (
    <Section id="portfolio" title="Portfolio" className="bg-secondary">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </Section>
  );
};

export default Portfolio;

export { projects };
