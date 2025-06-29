"use client";
import { useState } from "react";

interface TeamMember {
  name: string;
  role: string;
  email?: string;
  linkedin?: string;
  photo?: string;
  organization?: string;
}

interface SemesterMembers {
  semester: string;
  year: number;
  members: string[];
}

export default function Team() {
  const [showMembersModal, setShowMembersModal] = useState(false);

  // Current leadership team with photos and LinkedIn
  const leadership = {
    advisor: {
      name: "Mark Hunt",
      role: "Faculty Advisor",
      organization: "AI@UNCP & HACKUNCP 2025",
      linkedin: "https://www.linkedin.com/in/mark-hunt-m-b-a-3291b317/",
      photo: "/team/mark_hunt.png",
    },
    officers: [
      {
        name: "Najmul Hasan",
        role: "President",
        organization: "AI@UNCP & Lead Organizer, HACKUNCP 2025",
        linkedin: "https://www.linkedin.com/in/najmulhasan-cs-math/",
        photo: "/team/najmul-hasan.jpg",
      },
      {
        name: "Andrew Cart",
        role: "Vice President",
        organization: "AI@UNCP & Organizer, HACKUNCP 2025",
        linkedin: "https://www.linkedin.com/in/andrew-cart-23b816246",
        photo: "/team/andrew_cart.png",
      },
      {
        name: "Muhammad Fardin Islam",
        role: "Secretary",
        organization: "AI@UNCP & Organizer, HACKUNCP 2025",
        linkedin: "https://www.linkedin.com/in/muhammad-fardin-islam",
        photo: "/team/fardin_islam.png",
      },
      {
        name: "Aren M Hall",
        role: "Treasurer",
        organization: "AI@UNCP & Organizer, HACKUNCP 2025",
        linkedin: "",
        photo: "/team/aren_hall.png",
      },
    ],
  };

  // Member history by semester
  const memberHistory: SemesterMembers[] = [
    {
      semester: "Spring",
      year: 2025,
      members: [
        "Adita Haque Raisa",
        "Allyson Taylor",
        "Andrew Cart",
        "Aren Hall",
        "Brandon Swallow",
        "Bryan Ndum",
        "Daniel Karmanov",
        "Ezequiel Delgado Diaz",
        "Fardin Samin",
        "Harry Lamichhane",
        "Jabari Robinson",
        "Jocelyn Spencer",
        "Jonathan Harmon",
        "Jovani Carmen",
        "Manjil Ghimire",
        "Marcus Bland",
        "Mark Hunt",
        "Md Hafizur Rahman Hisbullah Shekh",
        "Md Mushfique Rahman",
        "Md. Rezaul Karim Siyam",
        "Md. Tanzimul Fahim",
        "MD Zahidul Islam",
        "Merdi Vuvu",
        "Mohammad Kawsar",
        "Muhammad Adeniran",
        "Muhammad Fardin Islam",
        "Najmul Hasan",
        "Prabina Shrestha",
        "Rakeib Yinges",
        "Randy Martinez",
        "Sam Moore",
        "Shirsendu Mondal",
        "Summer Scheetz",
        "Tori Belle",
      ],
    },
    {
      semester: "Fall",
      year: 2024,
      members: [
        "Adita Haque Raisa",
        "Allyson Taylor",
        "Andrew Cart",
        "Aren Hall",
        "Brandon Swallow",
        "Bryan Ndum",
        "Daniel Karmanov",
        "Ezequiel Delgado Diaz",
        "Fardin Samin",
        "Harry Lamichhane",
        "Jabari Robinson",
        "Jocelyn Spencer",
        "Jonathan Harmon",
        "Jovani Carmen",
        "Marcus Bland",
        "Mark Hunt",
        "Md Hafizur Rahman Hisbullah Shekh",
        "Md Mushfique Rahman",
        "Md. Rezaul Karim Siyam",
        "Md. Tanzimul Fahim",
        "MD Zahidul Islam",
        "Mohammad Kawsar",
        "Muhammad Adeniran",
        "Muhammad Fardin Islam",
        "Najmul Hasan",
        "Rakeib Yinges",
        "Randy Martinez",
        "Sam Moore",
        "Shirsendu Mondal",
        "Tori Belle",
      ],
    },
    {
      semester: "Spring",
      year: 2024,
      members: [
        "Al Shiam Arju",
        "Allyson Taylor",
        "Andrew Cart",
        "Aren Hall",
        "Brandon Swallow",
        "Daniel Karmanov",
        "Ezequiel Delgado Diaz",
        "Harry Lamichhane",
        "Jabari Robinson",
        "Mark Hunt",
        "Md Hafizur Rahman Hisbullah Shekh",
        "Md Mushfique Rahman",
        "Md. Rezaul Karim Siyam",
        "Md. Tanzimul Fahim",
        "Muhammad Adeniran",
        "Muhammad Fardin Islam",
        "Najmul Hasan",
        "Sam Moore",
        "Shirsendu Mondal",
      ],
    },
    {
      semester: "Fall",
      year: 2023,
      members: [
        "Al Shiam Arju",
        "Andrew Cart",
        "Harry Lamichhane",
        "Mark Hunt",
        "Md Mushfique Rahman",
        "Md. Rezaul Karim Siyam",
        "Md. Tanzimul Fahim",
        "Muhammad Adeniran",
        "Muhammad Fardin Islam",
        "Najmul Hasan",
        "Shirsendu Mondal",
      ],
    },
  ];

  const LeaderCard = ({
    member,
    isAdvisor = false,
  }: {
    member: TeamMember;
    isAdvisor?: boolean;
  }) => {
    return (
      <div
        className={`group relative overflow-hidden rounded-3xl transition-all duration-500 transform hover:scale-105 hover:-rotate-1 ${
          isAdvisor
            ? "bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800"
            : "bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800"
        } shadow-2xl hover:shadow-3xl`}
      >
        {/* Background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>

        {/* Content */}
        <div className="relative z-10 p-8">
          {/* Photo */}
          <div className="mb-6 relative">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white/30 shadow-2xl group-hover:border-white/50 transition-all duration-500">
              {member.photo ? (
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    target.nextElementSibling?.classList.remove("hidden");
                  }}
                />
              ) : null}

              {/* Fallback initials */}
              <div
                className={`w-full h-full bg-white/20 flex items-center justify-center font-bold text-3xl text-white ${
                  member.photo ? "hidden" : ""
                }`}
              >
                {member.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
            </div>

            {/* Status indicator */}
            <div className="absolute top-2 right-2 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
          </div>

          {/* Info */}
          <div className="text-center text-white">
            <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
            <p className="text-lg font-semibold text-white/90 mb-1">
              {member.role}
            </p>
            <p className="text-sm text-white/70 mb-4 leading-relaxed">
              {member.organization}
            </p>

            {/* Contact links */}
            <div className="flex justify-center gap-4 mb-4">
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/icon w-12 h-12 bg-white/20 hover:bg-[#0077B5] rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  title="LinkedIn Profile"
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              )}

              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  className="w-12 h-12 bg-white/20 hover:bg-red-500 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  title="Send Email"
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Hover effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    );
  };

  const MembersModal = () => {
    if (!showMembersModal) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-md"
          onClick={() => setShowMembersModal(false)}
        ></div>

        {/* Modal */}
        <div className="relative bg-white rounded-3xl shadow-2xl max-w-5xl max-h-[85vh] overflow-hidden m-4">
          {/* Header */}
          <div className="p-8 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-3xl font-bold mb-2">AI@UNCP Members</h2>
                <p className="text-blue-100">
                  Our growing community of AI enthusiasts
                </p>
              </div>
              <button
                onClick={() => setShowMembersModal(false)}
                className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-xl flex items-center justify-center transition-colors group"
              >
                <svg
                  className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 overflow-y-auto max-h-[60vh]">
            <div className="space-y-10">
              {memberHistory.map((semester, index) => (
                <div key={index} className="relative">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`w-4 h-4 rounded-full ${
                        index === 0
                          ? "bg-green-500 animate-pulse"
                          : "bg-gray-400"
                      }`}
                    ></div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {semester.semester} {semester.year}
                    </h3>
                    {index === 0 && (
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                        Current
                      </span>
                    )}
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm font-medium rounded-full">
                      {semester.members.length} members
                    </span>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {semester.members.map((member, memberIndex) => (
                      <div
                        key={memberIndex}
                        className="group flex items-center gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-all duration-300 cursor-pointer border border-gray-100 hover:border-blue-200 hover:shadow-md"
                      >
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl flex items-center justify-center text-white font-bold text-sm">
                            {member
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </div>
                        </div>
                        <div className="flex-grow">
                          <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {member}
                          </div>
                          <div className="text-sm text-gray-500">Member</div>
                        </div>
                        <div className="text-gray-400 group-hover:text-blue-400 transition-colors">
                          <span className="text-lg">{memberIndex + 1}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <section
        id="team-section"
        className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden"
      >
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-32 right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-indigo-500/10 rounded-full blur-2xl animate-pulse delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Section header */}
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <span className="text-sm font-medium text-white/80 tracking-wider uppercase">
                  Our Leadership
                </span>
              </div>
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Meet Our Team
              </span>
            </h2>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The passionate individuals driving AI innovation at UNC Pembroke
            </p>
          </div>

          {/* Faculty Advisor */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-white text-center mb-12">
              Advisor
            </h3>
            <div className="max-w-md mx-auto">
              <LeaderCard member={leadership.advisor} isAdvisor={true} />
            </div>
          </div>

          {/* Officers */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-white text-center mb-12">
              Student Officers
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {leadership.officers.map((officer, index) => (
                <LeaderCard key={index} member={officer} />
              ))}
            </div>
          </div>

          {/* Members section */}
          <div className="text-center">
            <button
              onClick={() => setShowMembersModal(true)}
              className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-cyan-500/25"
            >
              <span className="relative z-10 flex items-center gap-4">
                <span>View All Members</span>
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center group-hover:rotate-90 transition-transform duration-300">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
            </button>

            <p className="text-gray-400 text-sm mt-4">
              Discover our growing community organized by semester
            </p>
          </div>
        </div>
      </section>

      {/* Members Modal */}
      <MembersModal />
    </>
  );
}
