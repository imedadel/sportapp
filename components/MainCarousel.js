import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

const images = [
	"https://picsum.photos/id/237/500/250",
	"https://picsum.photos/id/227/500/250",
]

function MainCarousel() {
	return (
		<Carousel
			className="my-16"
			showIndicators={false}
			dynamicHeight={false}
			showIndicators={false}
			showStatus={false}
			showThumbs={false}
		>
			{images.map(img => (
				<div>
					<img src={img} />
				</div>
			))}
		</Carousel>
	)
}

export default MainCarousel
