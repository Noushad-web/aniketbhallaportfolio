
const ProjectSubDescriptionCard = ({ data }) => {
    return (
        <div className='projectSubDescriptionCard'>
            {data.requirements && <p className="d-flex nowrap"><div className='projectSubDescriptionCard__subHeading'>requirements</div><div className='projectSubDescriptionCard__subText'>{data.requirements}</div></p>}
            {data.tools && <p className="d-flex nowrap"><div className='projectSubDescriptionCard__subHeading'>tools</div><div className='projectSubDescriptionCard__subText'>{data.tools}</div></p>}
            {data.skills && <p className="d-flex nowrap"><div className='projectSubDescriptionCard__subHeading'>skills</div><div className='projectSubDescriptionCard__subText'>{data.skills}</div></p>}
            {data.projectAim && <p className="d-flex nowrap mb-0"><div className='d-inline projectSubDescriptionCard__subHeading lastHeading'>project's aim</div><div className='col projectSubDescriptionCard__subText'>{data.skills}</div></p>}
        </div>
    )
}
export default ProjectSubDescriptionCard;
