import type { FieldValues, SubmitHandler } from "react-hook-form";
import { FormProvider } from "react-hook-form";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import ColorRadioInputField from "@/components/common/Form/ColorRadioInputField/ColorRadioInputField";
import ContentInputField from "@/components/common/Form/ContentInputField/ContentInputField";
import ImageInputField from "@/components/common/Form/ImageInputField/ImageInputField";
import TitleInputField from "@/components/common/Form/TitleInputField/TitleInputField";

import type * as yup from "yup";

const Form = ({
  children,
  onSubmit,
  defaultValues,
  schema,
}: {
  children: React.ReactNode;
  onSubmit: (data: FieldValues) => void;
  defaultValues: FieldValues;
  schema: yup.ObjectSchema<FieldValues>;
}) => {
  const method = useForm<FieldValues>({
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });
  const submit: SubmitHandler<FieldValues> = (data) => {
    onSubmit(data);
  };
  return (
    <FormProvider {...method}>
      <form onSubmit={method.handleSubmit(submit)}>{children}</form>
    </FormProvider>
  );
};

Form.ColorRadioInputField = ColorRadioInputField;
Form.ImageInputField = ImageInputField;
Form.TitleInputField = TitleInputField;
Form.ContentInputField = ContentInputField;

export default Form;
