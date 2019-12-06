const stories = [
	{
		title: "Title",
		description: "Long description",
		link: "https://youtube.com",
		image: "https://picsum.photos/id/227/500/500",
	},
	{
		title: "Title",
		description: "Long description",
		link: "https://youtube.com",
		image: "https://picsum.photos/id/225/500/500",
	},
	{
		title: "Title",
		description: "Long description",
		link: "https://youtube.com",
		image: "https://picsum.photos/id/228/500/500",
	},
]

function MainStories() {
	return (
		<div className="flex flex-wrap w-full justify-between">
			{stories.map(story => (
				<div className="max-w-sm rounded overflow-hidden shadow-lg w-1/4 mx-2">
					<img className="w-full" src={story.image} />
					<div className="px-6 py-4">
						<div className="font-bold text-xl mb-2">{story.title}</div>
						<p className="text-gray-700 text-base">{story.description}</p>
					</div>
					<div className="px-6 py-4">
						<a href={story.link}>
							<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
								En savoir plus
							</span>
						</a>
					</div>
				</div>
			))}
		</div>
	)
}

export default MainStories
