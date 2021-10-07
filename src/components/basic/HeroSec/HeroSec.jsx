import { Container, PortfolioText, PortfolioButton } from "components/Reuse.Components";


const HeroSec = () => {
    return (
        <section id="heroSec">
            <Container>
                <h5 className="heroSec__greetText mb-0 text-uppercase">i'm aniket bhalla</h5>
                <h1 className="heroSec__heading text-capitalize">front-end developer</h1>
                <PortfolioText class='heroSec__subheading'>
                    I’m on my never ending journey of learning new web technologies
                    and empowering the World Wide Web with high performance and interactive websites.
                    I’m proficient in HTML, CSS & JavaScript. Skilled at writing reusable and clean
                    code using current best practices of Web development.
                </PortfolioText>
                <PortfolioButton class='heroSec__ctaBtn' link='#'>hire me</PortfolioButton>
            </Container>
        </section>
    )
}

export default HeroSec;
