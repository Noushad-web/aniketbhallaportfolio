import { Container, PortfolioMainHeading } from "components/Reuse.Components";
import TechTool from "./TechTool";
import techToolsData from "./techTools.data";


const TechTools = props => {
    return (
        <section id='techToolsSec'>
            <Container class="techToolsSec__conatainer">
                <PortfolioMainHeading class='techToolsSec__heading text-uppercase'>{`tech & tools i use`}</PortfolioMainHeading>
                <div className="techToolsSec__outerBorderedBox">
                    <div className="techToolsSec__innerBorderedBox">
                    </div>
                    <div className="techToolsSec__contentBox">
                        <ul className="techToolsSec__iconsGridBox p-0 m-0">
                            {techToolsData.map(dataObj => <TechTool {...dataObj} />)}
                        </ul>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default TechTools;
