export const AboutContents = ({img01, img02, text}) => {
  return (
    <div className="w-full bg-capi_seaGreen_about py-6 px-8 shadow-gray-300 shadow-lg rounded-xl mb-5 md:w-4/6">
      <div className="flex items-center justify-around gap-5 bg-capi_seaGreen_about_light p-5 rounded-lg shadow-lg mb-5">
        <img className="w-20" src={img01} alt="" />
        <img className="w-20" src={img02} alt="" />
      </div>
      <p className="text-justify font-texts text-lg">
        {text}
      </p>
    </div>
  );
};
