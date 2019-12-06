import React from "react"
import { useRouter } from "next/router"
import fetch from "isomorphic-unfetch"

function Page({ sports }) {
	const router = useRouter()
	const { type, env, place, free, intensity } = router.query
	const [filteredSports, setFilteredSports] = React.useState([])

	function filterData(sport) {
		return (
			sport.relationships.tags.data.some(tag => tag.includes(env)) ||
			sport.attributes.name.includes(env)
		)
	}

	React.useEffect(() => {
		setFilteredSports(sports.filter(filterData))
	}, [sports])

	return (
		<div>
			{filteredSports.length > 0 &&
				filteredSports.map(sport => (
					<div>
						<h2>{sport.attributes.name}</h2>
						<p>{sport.attributes.description}</p>
					</div>
				))}
		</div>
	)
}

Page.getInitialProps = async function() {
	const res = await fetch("https://sports.api.decathlon.com/sports")
	const data = await res.json()

	return {
		sports: data.data,
	}
}

export default Page
