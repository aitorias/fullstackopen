const Total = ({parts}) => {
	const total = parts.reduce((sum, part) => {
		return sum + part.exercises
	}, 0)

	return (
		<>
			<p>Number of exercises {total}</p>
		</>
	);
}

export default Total
