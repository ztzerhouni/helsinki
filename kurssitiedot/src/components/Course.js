import Header from "./Header"
import Content from "./Content"
import Total from "./Total"

const Course = ({course}) => {
    return (
        <div>
            <Header header={course.name}></Header>
            <Content course={course}></Content>
            <Total parts={course.parts}></Total>
        </div>
        
    )
}

export default Course