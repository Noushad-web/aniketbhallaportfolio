
const PortfolioMainHeadingCommonStyle = 'portfolioMainHeading';

const PortfolioMainHeading = props => {
    return (
        <h2 className={props.class ? `${props.class} ${PortfolioMainHeadingCommonStyle}` : `${PortfolioMainHeadingCommonStyle}`}>
            {props.children}
        </h2>
    )
}

export default PortfolioMainHeading;
