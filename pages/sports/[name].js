import { useRouter } from "next/router"
import fetch from "isomorphic-unfetch"

function Page(data) {
	const router = useRouter()
	const { name } = router.query
	const [title, setTitle] = React.useState(name)
	const [description, setDescription] = React.useState("")
	const [defis, setDefis] = React.useState([])
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
			<div>
				<h1 className="mt-12 mb-8 text-4xl sm:text-5xl font-bold leading-none sm:leading-tighter tracking-tighter sm:text-center">
					{title}
				</h1>
				<p>{description}</p>
			</div>
			<div>
				{defis.length > 0 && defis.map((def, key) => <div>{def.title}</div>)}
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
