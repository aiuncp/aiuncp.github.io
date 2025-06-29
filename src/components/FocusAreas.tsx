"use client";
import { useState } from "react";

export default function FocusAreas() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const areas = [
    {
      title: "Machine Learning",
      description:
        "Training algorithms to recognize patterns, make predictions, and learn from data. From neural networks to deep learning architectures.",
      tech: ["Python", "TensorFlow", "PyTorch", "Scikit-learn"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      accent: "border-blue-200",
      textColor: "text-blue-700",
    },
    {
      title: "Large Language Models",
      description:
        "Building and fine-tuning powerful language models that can understand, generate, and reason with human language at scale.",
      tech: ["GPT", "BERT", "Transformers", "LLaMA", "Fine-tuning"],
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-gradient-to-br from-indigo-50 to-purple-50",
      accent: "border-indigo-200",
      textColor: "text-indigo-700",
    },
    {
      title: "Computer Vision",
      description:
        "Teaching machines to see and interpret visual information. Object detection, image classification, and visual understanding.",
      tech: ["OpenCV", "YOLO", "CNNs", "Image Processing"],
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
      accent: "border-purple-200",
      textColor: "text-purple-700",
    },
    {
      title: "Natural Language Processing",
      description:
        "Traditional NLP techniques for text analysis, sentiment detection, named entity recognition, and language understanding.",
      tech: ["spaCy", "NLTK", "Text Mining", "Sentiment Analysis"],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
      accent: "border-green-200",
      textColor: "text-green-700",
    },
    {
      title: "Cybersecurity",
      description:
        "Protecting systems, networks, and data from digital attacks. AI-powered threat detection, vulnerability assessment, and security analytics.",
      tech: [
        "Penetration Testing",
        "Threat Detection",
        "Network Security",
        "Malware Analysis",
      ],
      color: "from-red-500 to-rose-500",
      bgColor: "bg-gradient-to-br from-red-50 to-rose-50",
      accent: "border-red-200",
      textColor: "text-red-700",
    },
    {
      title: "Cryptography",
      description:
        "Securing information through mathematical algorithms and protocols. From classical encryption to post-quantum cryptographic systems.",
      tech: [
        "RSA",
        "AES",
        "Blockchain",
        "Hash Functions",
        "Digital Signatures",
      ],
      color: "from-slate-500 to-gray-600",
      bgColor: "bg-gradient-to-br from-slate-50 to-gray-50",
      accent: "border-slate-200",
      textColor: "text-slate-700",
    },
    {
      title: "Quantum Computing",
      description:
        "Exploring quantum algorithms and their applications to solve complex computational problems exponentially faster than classical computers.",
      tech: ["Qiskit", "Quantum Algorithms", "Quantum Gates", "NISQ"],
      color: "from-violet-500 to-purple-600",
      bgColor: "bg-gradient-to-br from-violet-50 to-purple-50",
      accent: "border-violet-200",
      textColor: "text-violet-700",
    },
    {
      title: "AI Applications",
      description:
        "Building real-world solutions that make a difference. Bridging the gap between theoretical knowledge and practical implementation.",
      tech: ["Web APIs", "Mobile Apps", "Cloud Computing", "Edge AI"],
      color: "from-orange-500 to-red-500",
      bgColor: "bg-gradient-to-br from-orange-50 to-red-50",
      accent: "border-orange-200",
      textColor: "text-orange-700",
    },
    {
      title: "Software Engineering",
      description:
        "Designing, developing, and maintaining robust software systems. From full-stack development to DevOps and scalable architectures.",
      tech: ["React", "Node.js", "Docker", "Git", "Agile", "CI/CD"],
      color: "from-teal-500 to-cyan-600",
      bgColor: "bg-gradient-to-br from-teal-50 to-cyan-50",
      accent: "border-teal-200",
      textColor: "text-teal-700",
    },
  ];

  return (
    <section
      id="research-section"
      className="py-20 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-200/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-32 right-32 w-48 h-48 bg-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-green-200/20 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <div className="px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm">
              <span className="text-sm font-medium text-gray-600 tracking-wider uppercase">
                Our Expertise
              </span>
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
              Areas of Focus
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nine core domains where we push boundaries and create innovative
            solutions
          </p>
        </div>

        {/* Focus area cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20">
          {areas.map((area, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-3xl ${area.bgColor} border-2 ${area.accent} hover:border-gray-300 transition-all duration-500 cursor-pointer transform hover:scale-[1.02] hover:-translate-y-2 shadow-lg hover:shadow-2xl`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Animated background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${area.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}
              ></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3
                      className={`text-2xl font-bold ${area.textColor} mb-2 group-hover:scale-105 transition-transform duration-300`}
                    >
                      {area.title}
                    </h3>
                    <div
                      className={`w-16 h-1 bg-gradient-to-r ${area.color} rounded-full`}
                    ></div>
                  </div>

                  {/* Animated corner element */}
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${area.color} rounded-2xl opacity-20 group-hover:opacity-40 group-hover:rotate-12 transition-all duration-300`}
                  ></div>
                </div>

                {/* Description */}
                <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                  {area.description}
                </p>

                {/* Tech stack */}
                <div className="space-y-3">
                  <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Technologies & Tools
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {area.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-4 py-2 text-sm font-medium bg-white/80 backdrop-blur-sm rounded-xl border-2 transition-all duration-300 ${
                          hoveredCard === index
                            ? `border-transparent bg-gradient-to-r ${area.color} text-white shadow-lg transform scale-105`
                            : "border-gray-200 text-gray-700 hover:border-gray-300"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating accent elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r ${area.color} rounded-full opacity-60 group-hover:animate-ping"></div>
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-gradient-to-r ${area.color} rounded-full opacity-40 group-hover:animate-pulse"></div>
            </div>
          ))}
        </div>

        {/* Bottom call to action */}
        <div className="text-center">
          <div className="inline-block p-8 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 rounded-3xl transform hover:scale-105 transition-all duration-300 shadow-2xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <h3 className="text-2xl font-bold text-white">
                Ready to Innovate?
              </h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md mx-auto">
              Join us in exploring the fascinating world of artificial
              intelligence and machine learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://uncp.presence.io/organization/artificial-intelligence-at-uncp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105">
                  Get Involved
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
