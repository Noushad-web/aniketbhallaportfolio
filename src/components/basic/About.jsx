import { Container, PortfolioMainHeading, PortfolioText } from "components/Reuse.Components";
import heroSecPic from 'assets/about-sec-pic.png';
const About = () => {
    return (
        <section id="about">
            <Container>
                <PortfolioMainHeading class='aboutSec__mainHeading text-uppercase'>about</PortfolioMainHeading>
                <div className="row g-0">
                    <div className="col-6 aboutSec__textBox">
                        <PortfolioText class='mb-0'>
                            I'm a passionate front-end developer who loves to write code, based in Montreal,
                            Canada. I enjoy learning and mastering new web technologies which always motivates
                            me to go in depth of these technologies.
                            <br /><br />
                            The one thing which I love the most about web development is JavaScript, as I’m
                            always curious to learn and explore new concepts and ways of writing short syntaxes
                            of JavaScript which makes the code more readable and logical. I like declarative
                            style of coding with es6 syntax of JavaScript.
                            <br /><br />
                            More hooks of my web development are HTML5, CSS3, JS (Loved the most), RWD
                            (Responsive Web Design), SASS, React. I like to be in touch with backend technologies
                            like Node.js, MongoDb. GitHub is my favourite platform where I like to organize and
                            upload my projects.
                            <br /><br />
                            In my leisure time, I love to explore new REST APIs by testing out them in one of my
                            favourite tools, which is Postman, and reading popular and trending articles on Medium.
                        </PortfolioText>
                    </div>
                    <div className="col-6 aboutSec__imgBox border-dark">
                        <img src={heroSecPic} className='aboutSec__img' alt="about sec pic not available" />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default About;
