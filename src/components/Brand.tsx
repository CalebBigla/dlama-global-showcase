import logo1 from "@/assets/Logo-1.png";
import logo2 from "@/assets/Logo-2.png";

// Logo variation 1 - For use on dark/transparent backgrounds (like hero)
export function SkylineMark({ className = "" }: { className?: string }) {
  return (
    <img 
      src={logo1} 
      alt="Dlama Global Homes" 
      className={`h-8 w-auto object-contain ${className}`}
    />
  );
}

// Logo variation 2 - Full wordmark with inverted option
// inverted=true uses Logo-1 (for dark/transparent backgrounds like hero)
// inverted=false uses Logo-2 (for light/solid backgrounds when scrolled)
export function Wordmark({ inverted = false }: { inverted?: boolean }) {
  return (
    <img 
      src={inverted ? logo1 : logo2} 
      alt="Dlama Global Homes" 
      className="h-8 w-auto object-contain md:h-10"
    />
  );
}
