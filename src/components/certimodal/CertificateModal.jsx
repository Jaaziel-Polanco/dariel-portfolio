import { useState } from "react";

const CertificateModal = ({ certificate, isOpen, onClose }) => {
    if (!certificate) return null;

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg max-w-lg w-full">
                        <h2 className="text-xl font-bold">{certificate.title}</h2>
                        <p className="text-sm text-gray-500 mb-2">{certificate.institution}</p>
                        <p className="text-sm text-gray-500 mb-2">{certificate.date}</p>
                        <p className="mt-2 text-gray-700">{certificate.description}</p>
                        <p className="mt-2 font-semibold">Duración: {certificate.duration}</p>
                        <div className="mt-3">
                            <p className="font-semibold">Habilidades adquiridas:</p>
                            <ul className="list-disc list-inside text-gray-600">
                                {certificate.skills.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                        <button
                            className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none"
                            onClick={onClose}
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default CertificateModal;
