import propTypes from "prop-types"

export const HomeContents = ({img, title, content, flexRowReverse, bgColor}) => {

  return (
    <div className={`flex flex-col gap-5 w-full min-h-64 ${bgColor} p-3 rounded-lg shadow-xl ${flexRowReverse ? "md:flex-row-reverse" : "md:flex-row"}`}>
      <div className="basis-2/6 flex items-center justify-center">
        <img src={img} className="w-full capi_vsm:w-3/4 md:w-full" alt="" />
      </div>
      <div className="basis-4/6 flex flex-col justify-center">
        <h2 className="font-headline font-semibold text-2xl text-center mb-5 md:text-left">{title}</h2>
        <p className="font-texts text-md text-center md:text-sm md:text-left">
          {content}
        </p>
      </div>
    </div>
  );
};

HomeContents.propTypes = {
  img: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  content: propTypes.string.isRequired,
  flexRowReverse: propTypes.bool,
  bgColor: propTypes.string
}