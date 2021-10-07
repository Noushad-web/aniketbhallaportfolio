
const commonPortfolioButtonClasses = `d-inline-block text-capitalize`;
const PortfolioBtnStyle = {
    backgroundColor: '#ce3461',
    color: '#ffffff',
}

const PortfolioButton = (props) => {

    console.log(props.externaLink);
    return (props.externalLink)
        ? <a
            className={(props.class) ? `${props.class} ${commonPortfolioButtonClasses}` : `${commonPortfolioButtonClasses}`}
            rel="noopener noreferrer"
            target="_blank"
            style={PortfolioBtnStyle}
            href={props.link}>
            {props.children}
        </a>
        : <a
            className={(props.class) ? `${props.class} ${commonPortfolioButtonClasses}` : `${commonPortfolioButtonClasses}`}
            style={PortfolioBtnStyle}
            href={props.link}>
            {props.children}
        </a>
}

export default PortfolioButton;
