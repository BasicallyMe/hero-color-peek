import { useForm, SubmitHandler } from "react-hook-form";
import './ColorInputBar.scss';

interface FormInputs {
  primary: string;
  accent: string;
  primaryBackground: string;
  accentBackground: string;
  accentTextColor: string;
}

export default function ColorInputBar() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInputs>();
  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log("data", data);
  };

  return (
    <div className="color-input-bar-wrapper">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue="" {...register("primary")} placeholder="Primary color" />
        <input defaultValue="" {...register("accent")} placeholder="Accent color" />
        <input
          defaultValue=""
          {...register("primaryBackground")}
          placeholder="Primary background color"
        />
        <input
          defaultValue=""
          {...register("accentBackground")}
          placeholder="Accent background color"
        />
        <input
          defaultValue=""
          {...register("accentTextColor")}
          placeholder="Accent Text Color"
        />
      </form>
    </div>
  );
}
