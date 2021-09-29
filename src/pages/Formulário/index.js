import { Container, StyledTextField } from "./styles";
import * as yup from "yup";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

function Form({ setTransactions }) {
  const [saidas, setSaidas] = useState([]);
  const [entradas, setEntradas] = useState([]);
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

  const history = useHistory();

  const onSubmitFunction = (data) => {
    data.quantity > 0
      ? setEntradas(...entradas, data)
      : setSaidas(...saidas, data);
    setTransactions(entradas);
    setTransactions(saidas);
    history.push("/transactions");
  };

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
