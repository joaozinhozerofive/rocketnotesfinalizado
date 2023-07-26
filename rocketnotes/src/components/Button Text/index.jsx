import { Container } from "./style";


export function ButtonText( { title, isActive , ...rest } ) {
    return(
        <Container
        type="Button"
        isActive = {isActive}
        {...rest}
        >
            {title}
        </Container>
    );
}