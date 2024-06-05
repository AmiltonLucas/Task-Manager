import { Container } from "./styles";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <Container>
        <Link to={""}>
          <strong>&copy; Reprograma Jucás</strong>
        </Link>
    </Container>
  );
}
