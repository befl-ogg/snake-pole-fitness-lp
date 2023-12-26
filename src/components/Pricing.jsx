
import { useState } from "preact/hooks";
import CustomPricingCard from './CustomPricingCard';

export const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const basicPricing = {
    title: 'BÁSICO',
    subtitle: 'Asiste al estudio de tu elección',
    backgroundColor: 'bg-inherit',
    pricing: '$550.00',
    benefits: ['8 clases mensuales', 'Horario abierto'],
    arrowColor: '#349A8D'
  };

  const completePricing = {
    title: 'COMPLETO',
    subtitle: 'Asiste a cualquiera de nuestros estudios',
    backgroundColor: 'bg-inherit',
    pricing: '$700.00',
    benefits: ['12 clases mensuales', 'Horario abierto', 'Acceso a cualquier estudio SnakePoleFitness'],
    arrowColor: '#349A8D'
  };

  const intensivePricing = {
    title: 'INTENSIVO',
    subtitle: 'Asiste a cualquiera de nuestros estudios',
    backgroundColor: 'bg-[#282936]',
    pricing: '$900.00',
    benefits: ['20 clases mensuales', 'Horario abierto', 'Acceso a cualquier estudio SnakePoleFitness'],
    arrowColor: '#349A8D'
  };

  const fitPricing = {
    title: 'SUPERFIT',
    subtitle: 'Maximiza tu desempeño sin perder tus clases favoritas',
    backgroundColor: 'bg-[#349A8D]',
    pricing: '$1200.00',
    benefits: ['16 clases mensuales', 'Consultas nutricionales', 'Horario abierto', 'Acceso a cualquier estudio SnakePoleFitness'],
    arrowColor: '#8D366F'
  };

  const handleChange = () => {
    setIsMonthly(!isMonthly);
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
              <label className="mx-auto bg-customDarkBg3 relative flex justify-between items-center group text-xl w-44 h-12 rounded-lg pr-36 pl-1 cursor-pointer">
                <input
                  type="checkbox"
                  className="peer appearance-none"
                  checked={!isMonthly}
                  onChange={handleChange}
                />
                <span className="h-8 w-[5.5rem] flex items-center pr-2 bg-customDarkBg3 after:rounded-lg duration-300 ease-in-out  after:w-[30rem] after:h-10  after:bg-customPrimary   after:shadow-md after:duration-300 peer-checked:after:translate-x-[5.5rem] cursor-pointer"></span>
                <div className="flex absolute text-white text-sm font-bold">
                  <div
                    className={
                      isMonthly ? "mr-9 ml-3" : "mr-9 ml-3 text-gray-400"
                    }
                  >
                    Monthly
                  </div>
                  <div className={isMonthly && "text-gray-400"}>Yearly</div>
                </div>
              </label>
            </div>
            <div className="flex flex-row w-full gap-10 max-w-56 min-w-56">
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
