"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { FadeIn, FadeInStagger, ZoomIn } from "@/components/ui/ScrollAnimation";
import { Button } from "@/components/ui/button";

type ProjectImage = {
  src: string;
  alt: string;
};

type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  images: ProjectImage[];
  link?: string;
};

export function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects: Project[] = [
    {
      id: "web-dev-1",
      title: "Sports Club Management System",
      category: "Website Development",
      description: "Designed the UI for this system, and programmed it using PHP andMySQL DB. Designed and Developed the Dashboard in HTML,CSSand Bootstrap for Responsive website where the user experienceare improve. Developed the backend of this system in MySQL Database, which will take the data from user input over the web forms. Deployed the entire architecture over Localhost using Xampp Server ",
      technologies: ["PHP", "HTML", "CSS", "MySQL", "Bootstrap"],
      images: [
        {
          src: "/images/S_Banner.jpg",
          alt: "Sports Club Dashboard"
        },
        {
          src: "/images/Login.jpg", 
          alt: "Login Page"
        },
        {
          src: "/images/team.jpg",
          alt: "Team Management"
        }
      ],
      link: ""
    },
    {
      id: "Web Development",
      title: "Waste Management System",
      category: "Website Development",
      description: "The goal is to develop a centralized platform that enables users to request waste pickup and allows staff to manage these requests efficiently. By automating key processes such as request handling, scheduling, and status tracking, the system aims to minimize manual work, reduce errors, and eliminate delays. This initiative supports a cleaner, greener environment through timely waste collection and proper record keeping, while also enhancing transparency and accountability via digital records and user feedback. ",
      technologies: ["Python 3", "Django", "MySQL", "Bootstrap"],
      images: [
        {
          src: "/images/Home.jpg",
          alt: "Security Control Room"
        },
        {
          src: "/images/Dashboard.jpg",
          alt: "Camera Installation"
        },
        {
          src: "/images/Admin.jpg",
          alt: "Admin Page"
        },
        {
          src: "/images/manage.jpg",
          alt: "user manage"
        },
        {
          src: "/images/static.jpg",
          alt: "Statistics Page"
        }
      ]
    },
    {
      id: "IoT Based",
      title: "Solar Live Monitoring System",
      category: "IoT Based",
      description: "The project aimed to demonstrate that the IoT-based monitoring system could effectively track solar energy production and provide valuable insights to users. The results indicated that the system met its objectives by successfully monitoring energy production and providing real-time data, which aligns with the expected outcomes of enhancing solar energy management.",
      technologies: ["IoT", "ReactJS", "NextJS", "Supabase"],
      images: [
        {
          src: "/images/Home2.jpg",
          alt: "Home Page"
        },
        {
          src: "/images/Dashboard2.jpg",
          alt: "Project Dashboard"
        },
        {
          src: "/images/monitor.jpg",
          alt: "Live Monitoring"
        }
      ]
    },
    {
      id: "UI/UX Design",
      title: "Website Designing",
      category: "UI/UX Design",
      description: " portfolio website using HTML5, Tailwind CSS, and JavaScript to showcase my projects and skills. Implemented modern UI/UX practices, leveraging Bootstrap for additional layout flexibility and compatibility across devices. Focused on clean code, optimized performance, and a seamless user experience, ensuring fast load times and cross-browser functionality. The website serves as a platform to demonstrate my expertise in web development, design, and problem-solving skills. ",
      technologies: ["Html5", "Tailwind CSS", "JavaScript", "Bootstrap"],
      images: [
        {
          src: "/images/p1.jpg",
          alt: "Website Homepage Design"
        },
        {
          src: "/images/p2.jpg",
          alt: "Mobile Responsive Design"
        },
        {
          src: "/images/p3.jpg",
          alt: "Portfolio Section"
        },
        {
          src: "/images/p4.jpg",
          alt: "skill section"
        }
      ],
      link: "https://ajaymaru.vercel.app/"
    }
  ];
  
  const openProjectDetails = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === selectedProject.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? selectedProject.images.length - 1 : prevIndex - 1
      );
    }
  };

  // Filter projects by category if needed
  const [filter, setFilter] = useState<string | null>(null);
  const categories = Array.from(new Set(projects.map(p => p.category)));
  
  const filteredProjects = filter 
    ? projects.filter(p => p.category === filter) 
    : projects;

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Portfolio
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our completed projects and see how we've helped businesses with their IT needs
            </p>
          </div>
        </FadeIn>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button 
            onClick={() => setFilter(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === null 
                ? 'bg-purple-600 text-white' 
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            All Projects
          </button>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === category
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <FadeInStagger>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <FadeIn key={project.id}>
                <div 
                  onClick={() => openProjectDetails(project)}
                  className="bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer group hover:shadow-xl transition-all duration-300 h-full flex flex-col"
                >
                  {/* Project Preview Image */}
                  <div className="h-64 overflow-hidden relative">
                    <img 
                      src={project.images[0].src}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                    <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  
                  {/* Project Info */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-3 mb-4 flex-grow">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                    <button className="text-purple-600 font-medium text-sm flex items-center justify-center">
                      View Project Details
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeInStagger>

        {/* Project Details Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" onClick={closeProjectDetails}>
            <div 
              className="bg-white rounded-xl overflow-hidden max-w-5xl w-full max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex justify-between items-center p-4 border-b">
                <h3 className="text-xl font-bold text-gray-900">{selectedProject.title}</h3>
                <button 
                  onClick={closeProjectDetails}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="overflow-y-auto flex-grow">
                {/* Project Images Carousel */}
                <div className="relative h-96">
                  {selectedProject.images.map((image, index) => (
                    <div
                      key={image.src}
                      className={`absolute inset-0 transition-opacity duration-300 ${
                        index === currentImageIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
                      }`}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ))}
                  
                  {/* Image Navigation */}
                  {selectedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                      
                      {/* Image Counter */}
                      <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                        {currentImageIndex + 1} / {selectedProject.images.length}
                      </div>
                    </>
                  )}
                </div>
                
                {/* Project Details */}
                <div className="p-6">
                  <div className="mb-6">
                    <span className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">
                      {selectedProject.category}
                    </span>
                  </div>
                  
                  <h4 className="text-lg font-semibold mb-2">Project Description</h4>
                  <p className="text-gray-700 mb-6">
                    {selectedProject.description}
                  </p>
                  
                  <h4 className="text-lg font-semibold mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.technologies.map((tech) => (
                      <span key={tech} className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {selectedProject.link && (
                    <div className="mt-8">
                      <Button
                        onClick={() => window.open(selectedProject.link, '_blank')}
                        className="bg-purple-600 hover:bg-purple-700 text-white"
                      >
                        Visit Project
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
} 