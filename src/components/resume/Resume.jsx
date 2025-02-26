import React, { useState } from "react";
import { certificates } from "../../data/data";
import CertificateModal from "../certimodal/CertificateModal";

const Resume = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const education = [
    {
      title: "Ingeniería de Sistemas y Computación",
      institution: "Universidad Dominicana O&M",
      date: "2019 - 2023",
    },
  ];

  const visibleCertificates = showAll ? certificates : certificates.slice(0, 5);

  const handleCertificateClick = (cert) => {
    setSelectedCertificate(cert); // Abre el modal pasando la certificación
  };

  return (
    <div id="resume" className="container m-auto mt-16">
      {/* Heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className="text-3xl font-black text-gray-400 sm:text-2xl">
          Educación y Certificaciones
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>

      {/* Education Section */}
      <div className="flex flex-col items-center">
        <fieldset data-aos="zoom-in" className="w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2">
          <legend className="w-auto mx-auto border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
            Educación
          </legend>
          {education.map((edu, index) => (
            <div key={index} className="flex flex-col gap-1 border-2 border-yellow-400 shadow-lg p-3 rounded-lg mb-4">
              <h1 className="text-[1.4rem] font-semibold sm:text-xl">{edu.title}</h1>
              <span className="text-[.9rem] font-semibold text-gray-500 sm:text-base">{edu.institution}</span>
              <span className="text-[.9rem] font-semibold text-yellow-500 sm:text-base">{edu.date}</span>
            </div>
          ))}
        </fieldset>
      </div>

      {/* Certifications Section */}
      <div className="flex flex-col items-center mt-10">
        <fieldset data-aos="zoom-in" className="flex justify-center p-5 py-12 sm:py-8 sm:w-full sm:p-2">
          <legend className="w-auto mx-auto border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
            Certificaciones
          </legend>
          <div className=" w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-5">
            {visibleCertificates.map((cert, index) => (
              <div
                key={index}
                className="border-2 flex justify-center flex-col items-center border-yellow-400 shadow-lg rounded-lg p-3 cursor-pointer"
                onClick={() => handleCertificateClick(cert)} // Al hacer clic, abre el modal
              >
                <div className="flex justify-center">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className=" w-96 h-60 object-cover rounded-lg hover:scale-105 transition-transform"
                  /></div>
                <div>
                  <h1 className="text-[1.2rem] font-semibold mt-2">{cert.title}</h1>
                  <span className="text-[.9rem] font-semibold text-gray-500">{cert.institution}</span>
                  <span className="text-[.9rem] font-semibold text-yellow-500 block">{cert.date}</span>
                </div>
              </div>
            ))}
          </div>
        </fieldset>
        {certificates.length > 5 && (
          <button
            className="mt-5 px-6 py-2 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Ver menos" : "Ver más"}
          </button>
        )}
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <CertificateModal
          certificate={selectedCertificate}
          isOpen={!!selectedCertificate} // Esta es la clave, pasa isOpen como verdadero si hay un certificado seleccionado
          onClose={() => setSelectedCertificate(null)} // Al cerrar el modal, se pone null
        />
      )}
    </div>
  );
};

export default Resume;
