"use client";

import React, { useState, useEffect } from "react";
import {
  FaExternalLinkAlt,
  FaAward,
  FaCalendarAlt,
  FaUsers,
  // FaEye,
  FaDownload,
  FaFileAlt,
} from "react-icons/fa";

type Certificate = {
  id: number;
  title: string;
  issuer: string;
  date: string;
  driveUrl: string;
  skills: string[];
  credentialId: string;
  thumbnail?: string | null;
  description: string;
};

const certificatesData: Certificate[] = [
  {
    id: 1,
    title: "Full Stack Web Development",
    issuer: "Meta",
    date: "December 2023",
    driveUrl:
      "https://drive.google.com/file/d/1ZUX7rEeSjVUEr8Am8EayxbdZloGYyTD1/view",
    skills: ["React", "Node.js", "MongoDB"],
    credentialId: "ABC123XYZ",
    thumbnail: null,
    description:
      "Comprehensive program covering modern web development technologies and best practices.",
  },
  {
    id: 2,
    title: "Machine Learning Specialization",
    issuer: "Stanford University",
    date: "October 2023",
    driveUrl:
      "https://drive.google.com/file/d/1ZUX7rEeSjVUEr8Am8EayxbdZloGYyTD1/view",
    skills: ["Python", "TensorFlow", "Deep Learning"],
    credentialId: "ML456DEF",
    thumbnail: null,
    description:
      "Advanced machine learning concepts including neural networks and deep learning algorithms.",
  },
  {
    id: 3,
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "September 2023",
    driveUrl:
      "https://drive.google.com/file/d/1ZUX7rEeSjVUEr8Am8EayxbdZloGYyTD1/view",
    skills: ["AWS", "Cloud Computing", "DevOps"],
    credentialId: "AWS789GHI",
    thumbnail: null,
    description:
      "Foundational understanding of AWS cloud services and architecture principles.",
  },
];

const extractDriveFileId = (url: string): string | null => {
  const match = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  return match ? match[1] : null;
};

const getViewUrl = (fileId: string) =>
  `https://drive.google.com/file/d/${fileId}/view?usp=sharing`;

const getDownloadUrl = (fileId: string) =>
  `https://drive.google.com/uc?export=download&id=${fileId}`;

export default function CertificatesSection() {
  const [errorStates, setErrorStates] = useState<Record<number, boolean>>({});

  // reset errors if data changes
  useEffect(() => {
    setErrorStates({});
  }, []);

  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl mb-6 shadow-lg">
            <FaAward className="text-white text-2xl" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Professional Certifications
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Validated expertise and continuous learning in cutting-edge
            technologies
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {certificatesData.map((cert) => {
            const fileId = extractDriveFileId(cert.driveUrl);
            const canPreview = Boolean(fileId && !errorStates[cert.id]);

            return (
              <div
                key={cert.id}
                className="group bg-white rounded-3xl shadow-md hover:shadow-lg overflow-hidden border border-gray-200 transition-all duration-300"
              >
                {/* Preview */}
                <div
                  id="frame"
                  className="relative aspect-[4/3] bg-gray-100 overflow-hidden"
                >
                  {canPreview && fileId ? (
                    <iframe
                      src={`https://drive.google.com/file/d/${fileId}/preview`}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="autoplay"
                      onError={() =>
                        setErrorStates((s) => ({ ...s, [cert.id]: true }))
                      }
                    />
                  ) : (
                    <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
                      <div className="text-center">
                        <FaAward className="text-blue-400 text-4xl mb-2 mx-auto" />
                        <p className="text-gray-500 text-sm">
                          Preview not available
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Hover overlay button */}
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                    <div className="w-full p-4">
                      <button
                        onClick={() =>
                          fileId && window.open(getViewUrl(fileId), "_blank")
                        }
                        className="w-full bg-white bg-opacity-90 hover:bg-opacity-100 text-gray-800 py-2 rounded-lg flex items-center justify-center gap-2 font-medium"
                      >
                        <FaEye /> View Certificate
                      </button>
                    </div>
                  </div> */}
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {cert.title}
                  </h3>
                  <div className="flex items-center text-gray-600 mb-1 text-sm gap-2">
                    <FaUsers /> {cert.issuer}
                  </div>
                  <div className="flex items-center text-gray-500 mb-3 text-sm gap-2">
                    <FaCalendarAlt /> {cert.date}
                  </div>
                  <p className="text-gray-700 text-sm mb-4">
                    {cert.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Credential ID */}
                  <div className="text-xs text-gray-500 bg-gray-50 p-3 rounded mb-4 flex items-center gap-2">
                    <FaFileAlt />
                    <span>
                      Credential ID:&nbsp;
                      <span className="font-mono">{cert.credentialId}</span>
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <a
                      href={fileId ? getViewUrl(fileId) : "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition"
                    >
                      View <FaExternalLinkAlt className="text-sm" />
                    </a>
                    <a
                      href={fileId ? getDownloadUrl(fileId) : "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl flex items-center justify-center"
                    >
                      <FaDownload />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
