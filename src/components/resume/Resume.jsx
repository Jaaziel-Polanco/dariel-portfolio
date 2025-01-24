import React from "react";

const Resume = () => {
  return (
    <div id="resume" className="container m-auto mt-16">
      {/* Heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className="text-3xl font-black text-gray-400 sm:text-2xl">
          Resume
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className="text-gray-700 font-medium w-[100%]">
          Here are my experiences and qualifications.
        </p>
      </div>
      {/* Card Wrapper */}
      <div className="card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto">
        {/* Experience Section */}
        <div className="left flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className="w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className="w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Experience
            </legend>
            {/* Experience 1 */}
            <div className="flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg mb-4">
              <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                Técnico de facilidades y configuraciones
              </h1>
              <span className="text-[.9rem] font-semibold text-gray-500 sm:text-base">
                Claro RD
              </span>
              <span className="text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                Feb. 2024 - Actualidad
              </span>
              <p className="text-[.9rem] text-justify text-gray-500">
                - Ayudar con las métricas y creación de informes en Excel y Power BI.<br />
                - Diagnosticar y resolver fallas en servicios de telefonía e internet.<br />
                - Configurar y modificar terminales y equipos de red DSLAM.<br />
              </p>
            </div>
            {/* Experience 2 */}
            <div className="flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg mb-4">
              <h1 className="text-[1.4rem] font-semibold sm:text-xl">Líder de equipo</h1>
              <span className="text-[.9rem] font-semibold text-gray-500 sm:text-base">
                Farma Extra (Farmatrix, SAS)
              </span>
              <span className="text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                Ago. 2023 - Feb. 2024
              </span>
              <p className="text-[.9rem] text-justify text-gray-500">
                - Analizar datos y crear dashboards.<br />
                - Llevar métricas del centro con Excel.<br />
                - Liderar equipo y planificar estrategias.<br />
              </p>
            </div>
            {/* Experience 3 */}
            <div className="flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg mb-4">
              <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                Analista de datos, Centro de Operaciones
              </h1>
              <span className="text-[.9rem] font-semibold text-gray-500 sm:text-base">
                Ministerio de Defensa de República Dominicana
              </span>
              <span className="text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                Oct. 2022 - Sept. 2023
              </span>
              <p className="text-[.9rem] text-justify text-gray-500">
                - Crear y presentar reportes y dashboards para instituciones gubernamentales.<br />
                - Gestionar horarios del equipo y coordinar cumplimiento de objetivos.<br />
                - Presentar reportes diarios a los superiores.<br />
              </p>
            </div>
          </fieldset>
        </div>
        {/* Education Section */}
        <div className="right flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className="w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className="w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Education
            </legend>
            {/* Education 1 */}
            <div className="flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg mb-4">
              <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                Ingeniero de Sistemas y Computación
              </h1>
              <span className="text-[.9rem] font-semibold text-gray-500 sm:text-base">
                Universidad Dominicana O&M
              </span>
              <span className="text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                Ene. 2019 - Jul. 2023
              </span>
              <p className="text-[.9rem] text-justify text-gray-500">
                Aptitudes: Microsoft Power BI, Excel avanzado, Desarrollo de software, SQL básico.
              </p>
            </div>
            {/* Education 2 */}
            <div className="flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg mb-4">
              <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                Diplomado en Ciencias de Datos
              </h1>
              <span className="text-[.9rem] font-semibold text-gray-500 sm:text-base">
                ITLA
              </span>
              <span className="text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                Abr. 2024 - Ago. 2024
              </span>
              <p className="text-[.9rem] text-justify text-gray-500">
                Aptitudes: Python, SQL, Análisis de datos, Power BI, Big Data.
              </p>
            </div>
            {/* Education 3 */}
            <div className="flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
              <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                Curso de Fundamentos de Programación con Python
              </h1>
              <span className="text-[.9rem] font-semibold text-gray-500 sm:text-base">
                ITLA
              </span>
              <span className="text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                Ene. 2025
              </span>
              <p className="text-[.9rem] text-justify text-gray-500">
                Aptitudes: Algoritmos, Programación, Gestión de proyectos, SQL básico.
              </p>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Resume;