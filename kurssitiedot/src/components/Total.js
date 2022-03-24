const Total = ({parts}) => {
    return(
        <strong>total of {parts.reduce((a,b) => a+b.exercises,0)} exercises</strong>
    )
}

export default Total