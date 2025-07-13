import { Download } from "lucide-react";

const DownloadCV = () => {
  return (
    <section id="cv" className="py-24 px-4 bg-white text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Download My CV</h2>
      <div className="h-1 w-24 bg-blue-600 mx-auto mb-6 rounded-full"></div>

      <p className="text-gray-600 max-w-xl mx-auto mb-8">
        Interested in learning more about my experience and qualifications?
        Download my comprehensive CV to see my full professional background.
      </p>

      <a
        href="/Toma-Ilcic-CV.pdf"
        download
        className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-700 transition"
      >
        <Download size={16} />
        Download CV
      </a>
    </section>
  );
};

export default DownloadCV;
