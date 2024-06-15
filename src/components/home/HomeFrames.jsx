import propTypes from "prop-types";

export const HomeFrames = ({ img, title, content, classColor }) => {
  return (
    <div className={`basis-1/3 flex flex-col items-center justify-center text-center min-h-36  p-4 rounded-lg shadow-xl ${classColor}`}>
      <img className="w-20" src={img} alt="Ícone estudos" />

      <h3 className="font-headline text-xl font-bold my-1">
        {title}
      </h3>

      <p className="font-texts text-sm">
        {content}
      </p>
    </div>
  );
};

HomeFrames.propTypes = {
  img: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  content: propTypes.string.isRequired,
  classColor: propTypes.string.isRequired
}
