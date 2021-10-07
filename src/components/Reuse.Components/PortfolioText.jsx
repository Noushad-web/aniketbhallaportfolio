const portfolioTextCommonStyle = 'portfolioText';

const PortfolioText = props => {
    return (
        <p className={(props.class) ? `${props.class} ${portfolioTextCommonStyle}` : `${portfolioTextCommonStyle}`}>
            {props.children}
        </p>
    )
}
export default PortfolioText;
