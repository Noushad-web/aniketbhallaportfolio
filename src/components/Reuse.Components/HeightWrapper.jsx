
const HeightWrapper = props => {// mh : min-height
    return (
        <div
            className={props.class ?? ""}
            style={{
                minHeight: `${props.mh}`,
            }}>
            {props.children}
        </div>
    )
}

export default HeightWrapper;
