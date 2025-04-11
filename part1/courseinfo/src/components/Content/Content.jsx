import Part from "./Part"

const Content = ({course}) => {
	return (
		<>
		{course.parts.map((part, index) => <Part key={index} name={part.name} exercises={part.exercises} />)}
		</>
	)
}

export default Content
