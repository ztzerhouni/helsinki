import Part from "./Part"

const Content = ({course}) => {
    let partlist = course.parts.map((item) => {
        return ( <Part  key={item.id} 
                        name={item.name} 
                        exercises={item.exercises}></Part>
        )})
    return (
        <>
        {partlist}
        </>
    )
}

export default Content