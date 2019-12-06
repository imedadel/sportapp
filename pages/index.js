import "../styles/index.css"
import { NextSeo } from "next-seo"
import Link from "next/link"
import MainCarousel from "../components/MainCarousel"
import MainStories from "../components/MainStories"

function Index() {
	return (
		<div>
			<NextSeo title="SportApp" />
			<main>
				<div className="mx-auto container pt-16 sm:pt-16 pb-10 sm:pb-10">
					<div className="px-6 mx-auto max-w-5xl">
						<h1 className="pb-6 text-5xl sm:text-6xl font-bold leading-none sm:leading-tighter tracking-tighter sm:text-center">
							Sport App
						</h1>
						<div className="max-w-xl mx-auto pb-8 text-xl sm:text-2xl text-gray-700 sm:text-center leading-snug sm:tracking-snug">
							<p className="pb-1">The next best sport app.</p>
						</div>
						<div className="text-center">
							<Link
								className="bg-teal-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded text-3xl"
								to={"/commencer"}
							>
								Commencer
							</Link>
						</div>
						<div className="mx-auto max-w-4xl">
							<MainCarousel />
							<MainStories />
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}

export default Index
