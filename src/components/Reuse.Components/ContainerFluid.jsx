const ContainerFluid = props => {
    return (props.id)

        ? <section className={props.class ? `container-fluid ${props.class}` : 'container-fluid'} id={props.id && props.id}>
            {props.children}
        </section >

        : <section className={props.class ? `container-fluid ${props.class}` : 'container-fluid'}>
            {props.children}
        </section >

}

export default ContainerFluid;
