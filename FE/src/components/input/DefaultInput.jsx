import { useController } from "react-hook-form";
import { useState, useEffect } from "react";
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
  rules
}) {
  const [eye, setEye] = useState(false);
  const [shake, setShake] = useState(false);
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    defaultValue: '',
    rules: {
      ...rules,
      ...(isRequired && { required: { value: true} }),
    }
  });

  useEffect(() => {
    if (error) {
      setShake(true);
      const timer = setTimeout(() => setShake(false), 500);
      return () => clearTimeout(timer);
    }
  }, [error]);

  return (
    <div className={S.container} >
      <label className={S.label} >{label}</label>
      <div className={`${S.inputContainer} ${shake ? S.shake : ''}`}>
        <input
          className={`${S.input} ${error ? S.errorBorder : ''}`}
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
