import "../styles/index.css"
import { NextSeo } from "next-seo"

function Index() {
	return (
		<div>
			<NextSeo
				title="SportApp"
				description="Professional React templates built with Gatsby, Next.js, Headless WordPress, Ghost, and Shopify."
			/>
			<main>
				<div className="mx-auto container pt-16 sm:pt-32 pb-10 sm:pb-24">
					<div className="px-6 mx-auto max-w-5xl">
						<h1 className="pb-6 text-5xl sm:text-6xl font-bold leading-none sm:leading-tighter tracking-tighter sm:text-center">
							Sport App
						</h1>
						<div className="max-w-xl mx-auto pb-16 text-xl sm:text-2xl text-gray-700 sm:text-center leading-snug sm:tracking-snug">
							<p className="pb-4">
								The next sport app.
								<br className="hidden sm:block" />
							</p>
						</div>
						<div className="mx-auto max-w-4xl"></div>
					</div>
				</div>
			</main>
		</div>
	)
}

export default Index
