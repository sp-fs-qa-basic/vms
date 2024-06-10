import { useController } from "react-hook-form";
import { useState } from "react";
import EyeOpenImg from "@/assets/icons/openEye.svg";
import EyeCloseImg from "@/assets/icons/closeEye.svg";
import * as S from "./defaultInput.module.css";

function DefaultInput({
  placeholder,
  type = "text",
  name,
  label,
  control,
  isRequired = true,
}) {
  const [eye, setEye] = useState(false);
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
      <label>{label}</label>
      <div
        // className={
        //   error[name]?.message
        //     ? `${S.inputContainer} ${S.errorBorder}`
        //     : `${S.inputContainer}`
        // }
      >
        <input
          className={S.input}
          placeholder={placeholder}
          type={type.includes("password") ? (eye ? "text" : "password") : type}
          id={field.name}
          name={field.name}
          value={field.value}
          onChange={field.onChange}
        />
        <img
          className={
            type.includes("password") ? `${S.img}` : `${S.img} ${S.show}`
          }
          src={eye ? EyeOpenImg : EyeCloseImg}
          onClick={() => setEye(!eye)}
          alt="비밀번호 보기"
        />
      </div>
      {error && <div className={S.errorMessage}>{error.message}</div>}
    </div>
  );
}

export default DefaultInput;
