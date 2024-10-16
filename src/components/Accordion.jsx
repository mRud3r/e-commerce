import { useState } from "react";

export default function Accordion({ title, description }) {
const [isOpen, setIsOpen] = useState(false);

const handleToggle = () => {
    setIsOpen(!isOpen);
}

    return (
        <div className="border-b border-gray-300">
      <div 
        className="flex justify-between items-center cursor-pointer py-4"
        onClick={handleToggle}
      >
        <p className="text-lg font-medium">{title}</p>
        <div className="relative size-4">
          <span 
            className={`absolute bg-black block h-0.5 w-full transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}
          ></span>
          <span 
            className={`absolute bg-black block h-0.5 w-full transition-transform duration-300 ${isOpen ? '-rotate-45' : 'rotate-90'}`}
          ></span>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
      >
        <p className="text-gray-600 py-4">{description}</p>
      </div>
    </div>
    );
}