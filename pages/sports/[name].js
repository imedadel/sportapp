import { useRouter } from "next/router"
import fetch from "isomorphic-unfetch"
import "../../styles/index.css"

function Page(data) {
	const router = useRouter()
	const { name } = router.query
	const [title, setTitle] = React.useState(name)
	const [description, setDescription] = React.useState("")
	const [defis, setDefis] = React.useState([
		{
			name: "7-Day Streak",
			description: "Maintain a 7-day streak doing this activity.",
			prize: "$10 Coupon",
		},
		{
			name: "14-Day Streak",
			description: "Maintain a 14-day streak doing this activity.",
			prize: "$20 Coupon",
		},
	])
	const [events, setEvents] = React.useState([])
	const [equip, setEquip] = React.useState([])

	React.useEffect(() => {
		const filteredData = data.sports.find(
			d => d.attributes.name.toLowerCase() === name.toLowerCase()
		)
		setDescription(filteredData.attributes.description)
	}, [data])

	return (
		<main className="mx-auto container">
			<div className="max-w-2xl mx-auto">
				<h1 className="mt-12 mb-8 text-4xl sm:text-5xl font-bold leading-none sm:leading-tighter tracking-tighter sm:text-center">
					{title}
				</h1>
				<p>{description}</p>
			</div>
			<div className="mt-8 max-w-2xl mx-auto">
				{defis.length > 0 &&
					defis.map((def, key) => (
						<div key={key} className="mb-4">
							<h2 className="font-semibold">{def.name}</h2>
							<p>{def.description}</p>
							<p>Prize: {def.prize}</p>
							<button
								className="bg-500-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
								onClick={() => {
									window.localStorage.setItem("currentMilestone", def.name)
								}}
							>
								Register!
							</button>
						</div>
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
