export const ContactTextArea = ({
  value,
  setValue,
  label,
  idInput,
  inputType,
}) => {
  return (
    <div className="w-full flex flex-col gap-2 sm:w-2/3">
      <label
        className="pl-2 text-left font-headline font-semibold"
        htmlFor={idInput}
      >
        {label}
      </label>
      <textarea
        className="w-full border border-black bg-gray-100 shadow-xl py-3 px-3 rounded-2xl capi_vsm:flex-1"
        id={idInput}
        value={value}
        onChange={(ev) => setValue(ev.target.value)}
        rows={6}
        required
      ></textarea>
    </div>
  );
};
