import { useController } from "react-hook-form";

function DefaultInput(placeholder, type = "text", name, control, isRequired = true, size) {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: isRequired
      ? {
          required: { value: true, message: "값을 입력해주세요" },
        }
      : {},
  });
  return (
    <div>
      <input
        className={`${S.input} ${error ? S.errorInput : ""} ${S[size]}`}
        placeholder={placeholder}
        type={type}
        id={field.name}
        name={field.name}
        value={field.value}
        onChange={field.onChange}
      />
      {error && <div className={S.errorMessage}>{error.message}</div>}
    </div>
  );
}

export default DefaultInput;
