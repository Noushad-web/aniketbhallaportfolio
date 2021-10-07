
const TechTool = ({ iconName, iconPath }) => {
    return (
        <div className="techTool__iconBox ">
            <img class="techTool__icon" src={iconPath} alt={`${iconName}-not-available`} />
        </div>
    )
}

export default TechTool;
