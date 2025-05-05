import Header from './Header'
import Sum from './Sum'
import Content from './content/Content'

const Course = ({ course }) => {
  return (
    <>
      <Header name={course.name} />
      <Content course={course.parts} />
      <Sum parts={course.parts} />
    </>
  )
}

export default Course
