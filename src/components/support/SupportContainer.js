import React from "react";
import * as yup from "yup";
import CustomForm from "../commons/CustomForm";

const SupportContainer = () => {
  const fields = ["nombre", "email", "telefono", "mensaje"];

  const urlFetch = "https://jsonplaceholder.typicode.com/posts";
  const urlNavigate = "/";

  const validationSchema = yup.object({
    nombre: yup.string("Ingrese su nombre").required("Su nombre es requerido"),
    email: yup
      .string("Ingrese su email")
      .email("Ingrese un mail valido")
      .required("Su email es requerido"),
    telefono: yup
      .number("Tiene que ser un numero")
      .typeError("Eso no parece un numero de telefono")
      .positive("No se pueden numeros negativos")
      .integer("No se pueden decimales")
      .required("Su numero de telefono es requerido"),
    mensaje: yup
      .string("Ingrese su mensaje")
      .required("Su mensaje es requerido"),
  });

  return (
    <div>
      <CustomForm
        fields={fields}
        validationSchema={validationSchema}
        urlFetch={urlFetch}
        urlNavigate={urlNavigate}
      />
    </div>
  );
};

export default SupportContainer;
