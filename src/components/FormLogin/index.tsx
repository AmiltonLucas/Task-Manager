import { useNavigate } from "react-router-dom";
import { Container } from "./styles";
import { Button } from "../Button";
import { SubmitHandler, useForm } from "react-hook-form";

export function FormLogin() {
  const navigate = useNavigate();

  type InputTypes = {
    email: string;
    Senha: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<InputTypes>();

  const onSubmit: SubmitHandler<InputTypes> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <Container>
      <h2>Log in</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <section>
          <label>
            Email:
            <input
              type="email"
              placeholder="example@email.com"
              {...register("email", {
                required: "Campo obrigatório!",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "endereço de email inválido!",
                },
              })}
            />
          </label>
          <span className="inputError">{errors.email?.message}</span>
        </section>

        <section>
          <label>
            Senha:
            <input
              type="password"
              placeholder="Mínimo 7 caracteres"
              {...register("Senha", {
                required: "Campo obrigatório!",
                minLength: {
                  value: 7,
                  message: "A senha deve ter no mínimo 7 caracteres!"
                },
              })}
            />
          </label>
          <span className="inputError">{errors.Senha?.message}</span>
        </section>

        <Button title="Login" loading={false} />
      </form>

      <span className="messageChangePage">Não tem uma conta? </span>
      <button className="buttonChangePage" onClick={() => navigate("/signup")}>
        Registre-se
      </button>
    </Container>
  );
}
