import Nav from "@/Layouts/Nav";
import { Category, PageProps } from "@/types";
import Container from "react-bootstrap/Container";

export default function ({
    auth,
    category,
}: PageProps<{ category: Category }>): JSX.Element {
    return (
        <>
            <Nav />
            <Container>
                <h1>Category</h1>
                <p>{JSON.stringify(category)}</p>
                <p>TODO: implementare qui la pagina filtro</p>
            </Container>
        </>
    );
}
