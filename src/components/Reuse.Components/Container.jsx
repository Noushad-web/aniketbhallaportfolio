
const commonContainerStyle = 'container p-0';

const Container = props => {
    return (
        <div className={props.class ? `${commonContainerStyle} ${props.class}` : `${commonContainerStyle}`}>
            {props.children}
        </div>
    )
}

export default Container;
