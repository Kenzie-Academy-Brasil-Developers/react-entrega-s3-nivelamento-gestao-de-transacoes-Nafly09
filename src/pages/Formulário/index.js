import { Container, StyledTextField } from "./styles";
import * as yup from "yup";
import { Button } from "@material-ui/core";
import { Redirect } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

function Form({ transactions, setTransactions }) {
  const [redirect, setRedirect] = useState(false);
  const schema = yup.object().shape({
    name: yup
      .string()
      .min(1, "Nome não pode estar vazio")
      .required("Campo Obrigatório"),
    quantity: yup
      .number()
      .typeError("O valor precisa ser um número")
      .positive(true, "O Valor não pode ser negativo")
      .required("Campo Obrigatório"),
    price: yup
      .number()
      .typeError("O valor precisa ser um número")
      .positive(true, "O Valor não pode ser negativo")
      .required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitFunction = (data) => {
    const newData = {
      name: data.name,
      quantity: data.quantity,
      price: data.price,
    };
    setTransactions([...transactions, newData]);
    setRedirect(true);
  };

  if (redirect) {
    return <Redirect to="/transactions" />;
  }

  return (
    <Container onSubmit={handleSubmit(onSubmitFunction)}>
      <StyledTextField
        variant="outlined"
        label="Nome do Produto"
        {...register("name")}
        error={!!errors.name}
        helperText={errors.name?.message}
      />

      <StyledTextField
        variant="outlined"
        label="Quantidade"
        {...register("quantity")}
        error={!!errors.quantity}
        helperText={errors.quantity?.message}
      />

      <StyledTextField
        variant="outlined"
        label="Preço"
        {...register("price")}
        error={!!errors.price}
        helperText={errors.price?.message}
      />
      <Button variant="contained" type="submit">
        Enviar
      </Button>
    </Container>
  );
}

export default Form;
