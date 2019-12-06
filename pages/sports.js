import React from "react"
import "../styles/index.css"
import { useRouter } from "next/router"
import fetch from "isomorphic-unfetch"
import Link from "next/link"

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
		<main className="mx-auto container">
			<div>
				<h1 className="mt-12 mb-8 text-4xl sm:text-5xl font-bold leading-none sm:leading-tighter tracking-tighter sm:text-center">
					Sports tagged "{env}"
				</h1>
			</div>
			<div className="flex flex-wrap justify-between">
				{filteredSports.length > 0 &&
					filteredSports.map((sport, key) => (
						<Link href={`/sports/${sport.attributes.name}`}>
							<div
								key={key}
								className="w-64 rounded overflow-hidden shadow-lg mr-2 mb-4"
							>
								<img
									className="w-full h-40"
									src={
										!!sport.relationships.images &&
										sport.relationships.images.data &&
										sport.relationships.images.data.length > 0
											? sport.relationships.images.data[0].url
											: `https://source.unsplash.com/500x250/?${sport.attributes.name}`
									}
									alt={sport.attributes.name}
								/>
								<div className="px-6 py-4">
									<div className="font-bold text-xl mb-2">
										{sport.attributes.name}
									</div>
									<p className="text-gray-700 text-base">
										{sport.attributes.description}
									</p>
								</div>
								{/* <div className="px-6 py-4">
								<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
									#photography
								</span>
								<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
									#travel
								</span>
								<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
									#winter
								</span>
							</div> */}
							</div>
						</Link>
					))}
			</div>
		</main>
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
