export default function Projects() {
    return (
      <section id="projects" className="p-10">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <ul className="space-y-6 max-w-3xl">
          
          <li>
            <strong>IoT Monkey Deterrent System</strong><br />
            <span className="text-gray-600">
              LoRa-based multi-hop communication system for monkey detection and deterrence in agriculture.
            </span>
          </li>
  
          <li>
            <strong>FitFusion</strong><br />
            <span className="text-gray-600">
              A fitness management application allowing users to create and manage meal plans, workout routines, and schedules. 
              Developed the Workout Plan module with full CRUD operations using Spring Boot (backend) and React (frontend).
            </span>
          </li>
  
          <li>
            <strong>Lingo Translator</strong><br />
            <span className="text-gray-600">
              A group project built with the MERN stack, providing Sinhala-English translation with unique features:
              1) Emoji-based translation and 2) Cultural language adaptation for better context understanding.
            </span>
          </li>
  
          <li>
            <strong>Online Vaccine Portal</strong><br />
            <span className="text-gray-600">
              A group project developed using PHP, HTML, and CSS. The platform enables users to register for vaccinations,
              access vaccine information, and manage appointments online.
            </span>
          </li>
  
          <li>
            <strong>Portfolio Website</strong><br />
            <span className="text-gray-600">
              Personal portfolio website built using Next.js and Tailwind CSS to showcase my skills, projects, and experiences.
            </span>
          </li>
  
        </ul>
      </section>
    );
  }
  