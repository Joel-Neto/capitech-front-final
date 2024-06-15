export const FormGroups = ({ value, setValue, label, idInput, inputType }) => {
  return (
    <div className="flex flex-col items-center gap-2 w-full capi_vsm:flex-row">
      <label className="font-headline font-semibold" htmlFor={idInput}>
        {label}
      </label>
      <input
        className="w-full border-none bg-capi_gray_login font-semibold shadow-xl py-2 px-3 rounded-lg capi_vsm:flex-1"
        type={inputType}
        id={idInput}
        value={value}
        onChange={(ev) => setValue(ev.target.value)}
        required
      />
    </div>
  );
};
