const FormInput = ({ label, name, type, defaultValue, size = "input-md" }) => {
  return (
    <div className="form-control w-full">
      <label htmlFor={name} className="mb-1">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        className={`input input-bordered w-full ${size}`}
      />
    </div>
  );
};
export default FormInput;
