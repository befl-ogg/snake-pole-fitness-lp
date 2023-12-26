
import { useState } from "preact/hooks";
import CustomPricingCard from './CustomPricingCard';

export const Pricing = () => {

  const [selectedDuration, setSelectedDuration] = useState('Mensual'); 
  const durations = ['Mensual', 'Trimestral', 'Semestral', 'Anual'];
  const discounts = [0, 10, 15, 20]; 
  
  const basicPricing = {
    title: 'BÁSICO',
    subtitle: 'Tu viaje en el pole dance comienza aquí.',
    backgroundColor: 'bg-inherit',
    pricing: `$${(650.00 * (1 - discounts[durations.indexOf(selectedDuration)] / 100)).toFixed(2)}`,
    benefits: ['8 clases mensuales', 'Horario por cita', 'Derecho a 1 reposición por mes'],
    arrowColor: '#349A8D',
    discount: `${discounts[durations.indexOf(selectedDuration)]}`
  };
    
  const completePricing = {
    title: 'COMPLETO',
    subtitle: 'Descubre la versión completa de ti misma.',
    backgroundColor: 'bg-inherit',
    pricing: `$${(800.00 * (1 - discounts[durations.indexOf(selectedDuration)] / 100)).toFixed(2)}`,
    benefits: ['12 clases mensuales', 'Horario por cita', 'Derecho a 2 reposición por mes'],
    arrowColor: '#349A8D',
    discount: `${discounts[durations.indexOf(selectedDuration)]}`
  };

  const intensivePricing = {
    title: 'ILIMITADO',
    subtitle: 'Explora tu pasión en cualquier estudio SnakePoleFitness.',
    backgroundColor: 'bg-[#282936]',
    pricing: `$${(1400.00 * (1 - discounts[durations.indexOf(selectedDuration)] / 100)).toFixed(2)}`,
    benefits: ['Clases ilimitadas', 'Horario abierto', 'Acceso a cualquier estudio SnakePoleFitness'],
    arrowColor: '#349A8D',
    discount: `${discounts[durations.indexOf(selectedDuration)]}`
  };

  const fitPricing = {
    title: 'SUPERFIT',
    subtitle: 'Eleva tu rendimiento y nutre tu cuerpo.',
    backgroundColor: 'bg-[#349A8D]',
    pricing: `$${(1200.00 * (1 - discounts[durations.indexOf(selectedDuration)] / 100)).toFixed(2)}`,
    benefits: ['16 clases mensuales', 'Consultas nutricionales', 'Horario abierto', 'Acceso a cualquier estudio SnakePoleFitness'],
    arrowColor: '#8D366F',
    discount: `${discounts[durations.indexOf(selectedDuration)]}`
  };

  const handleDurationChange = (durationIndex) => {
    setSelectedDuration(durations[durationIndex]);
  };
  

  return (
    <section className="w-screen flex justify-center bg-customDarkBg2 relative">
      <div className="absolute -top-16" id="pricing" />
      <div className="pb-20 pt-12 bg-customDarkBg2  2xl:w-[1150px] lg:w-[1050px]  md:w-4/5 ">
        <div>
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <span className="custom-block-subtitle text-white">
              Nuestros precios se adaptan a tu presupuesto y necesidades
              </span>
              <h2 className="mt-6 mb-6 text-4xl lg:text-5xl font-bold font-heading text-white">
              ¡Elije tu plan perfecto!
              </h2>
              <p className="mb-6 text-white">
              El plan es la duración de tu membresía.
              </p>
              <label className="text-center justify-center bg-[#282936] relative flex justify-between items-center group text-xl rounded-full cursor-pointer py-3 px-5">
              {durations.map((duration, index) => (
                <div
                  key={duration}
                  className={`flex items-center mr-3 cursor-pointer ${selectedDuration === duration ? "text-white font-bold bg-[#8D366F] rounded-full p-3" : "text-gray-400"}`}
                  onClick={() => handleDurationChange(index)}
                >
                  {duration}
                </div>
              ))}
              </label>

            </div>
            <div className="flex flex-row w-full gap-10 min-w-56 flex flex-col sm:flex-row items-center">
              <CustomPricingCard {...basicPricing} />
              <CustomPricingCard {...completePricing} />
              <CustomPricingCard {...intensivePricing} />
              <CustomPricingCard {...fitPricing} />
            </div>
            
          </div>
        </div>
      </div>

    </section>
  );
};
