import { Container, ContainerFluid, PortfolioMainHeading, PortfolioText } from "components/Reuse.Components"

const Contact = props => {
    return (
        <ContainerFluid id="contact">
            <Container>
                <PortfolioMainHeading class='contact__meainHeading text-capitalize'>get in touch</PortfolioMainHeading>
                <PortfolioText class='contact_subHeading'>
                    Want to start conversation regarding a project or have an inquiry?
                    Just fill out the form below to send me message.
                </PortfolioText>

                {/* contact us form */}
            </Container>
        </ContainerFluid>
    )
}

export default Contact;
