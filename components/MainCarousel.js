import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

const images = [
	require("../images/image-1.png"),
	require("../images/image-2.jpg"),
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
