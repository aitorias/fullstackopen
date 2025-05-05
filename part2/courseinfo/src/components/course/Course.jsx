import Header from './Header'
import Content from './content/Content'

const Course = ({ course }) => {
  return (
    <>
      <Header name={course.name} />
      <Content course={course.parts} />
    </>
  )
}

export default Course
