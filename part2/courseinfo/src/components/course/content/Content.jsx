import Part from './Part'

const Content = ({ course }) => {
  return (
    <div>
      {course.map((course) => {
        return (
          <Part
            key={course.id}
            name={course.name}
            exercises={course.exercises}
          />
        )
      })}
    </div>
  )
}

export default Content
