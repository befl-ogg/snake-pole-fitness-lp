

const CustomPricingCard = ({ title, subtitle, backgroundColor, pricing, benefits, discount, arrowColor }) => {
  return (
    <div class="flex flex-wrap flex-col lg:flex-row items-center max-w-56 min-w-56">
      <div class=" max-w-56 min-w-fit">
        <div class={`p-0 rounded-3xl ${backgroundColor}`}>
        <br> </br>
          <h4 class="mb-2 text-3xl font-bold font-heading text-white text-center ">
            {title}
          </h4>
          <p class="mt-4 mb-6 2xl:mb-10 text-white leading-loose text-center">
            {subtitle}
          </p>
          <div class="flex flex-col justify-start text-center">
          {discount !== undefined && discount !== null && discount !== false && discount != 0 && (
            <div class="text-[#8D366F] font-bold">-{discount}%</div>
          )}
            <div class="text-4xl sm:text-4xl font-bold text-white mt-4 mr-2">{pricing}</div>
          </div>
          <br> </br>
          <ul class="mb-2 2xl:mb-6 text-white">
            {benefits.map((text) => (
              <li class="mb-4 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-check"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  style={{ stroke: arrowColor }}
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                <span>{text}</span>
              </li>
            ))}
          </ul>
          <div
            class="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl custom-button-colored font-bold leading-loose mt-5 "
          >

          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomPricingCard;
