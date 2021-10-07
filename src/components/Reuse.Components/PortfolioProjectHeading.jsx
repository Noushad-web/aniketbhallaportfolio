const PortfolioProjectHeadingCommonStyle = 'portfolioProjectHeading';

const PortfolioProjectHeading = props => {
    return (
        <h3 className={(props.class) ? `${PortfolioProjectHeadingCommonStyle} ${props.class}` : `${PortfolioProjectHeadingCommonStyle}`}>
            {props.children}
        </h3>
    )
}
export default PortfolioProjectHeading;
