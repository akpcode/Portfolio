
import { SiReact, SiTypescript, SiTailwindcss, SiJavascript } from "react-icons/si";
function About () {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">Sanya's Biography</h2>
        <p className="text-lg text-gray-900 font-serif">I specialize in web development with expertise in REACT, TYPESCRIPT AND TAILWIND CSS.
        I have certifications in web development and experience in frontend frameworks.
        </p>
        <ul className="mt-6 space-y-2">
            <li className="flex items-center font-extrabold"> <SiReact  className="text-red-400 w-10 h-10 mr-4"/>React</li>
            <li className="flex items-center font-extrabold"><SiTypescript  className="text-green-700 w-10 h-10 mr-4"/>TypeScript</li>
            <li className="flex items-center font-extrabold"><SiTailwindcss  className="text-blue-400 w-10 h-10 mr-4"/>Tailwind CSS</li>
            <li className="flex items-center font-extrabold"><SiJavascript  className="text-purple-700 w-10 h-10 mr-4"/>JavaScript</li>
        </ul>
    </div>
  );
}

export default About;
