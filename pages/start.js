import React from "react"
import useForm from "react-hook-form"
import "../styles/index.css"
import Router from "next/router"

const options = [
	{
		name: "in mountains",
		tag: "mountain",
	},
	{
		name: "indoor",
		tag: "indoor",
	},
	{
		name: "in water",
		tag: "swim",
	},
	{
		name: "in cities",
		tag: "city",
	},
]

function Page() {
	const { register, handleSubmit, errors } = useForm()
	const onSubmit = data => {
		Router.push(`/sports?env=${data.sl[0]}`)
	}

	return (
		<main className="mx-auto container">
			{typeof window !== "undefined" && window.localStorage.getItem("name") && (
				<h1>Welcome back {window.localStorage.getItem("name")}</h1>
			)}
			<div className="max-w-xl mx-auto text-lg mt-12">
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="w-full flex flex-col"
				>
					<p>
						I'm looking for a sport...{" "}
						{/* <input
							className="border rounded mb-4 text-lg px-2 py-4"
							name="firstname"
							ref={register}
						/> */}
					</p>{" "}
					<select
						name="sl"
						multiple
						className="min-h-xl w-full flex flex-wrap justify between border-none p-2"
						ref={register}
					>
						{options.map(op => (
							<option
								value={op.tag}
								className="w-full mb-2 mr-8 p-4 border rounded"
							>
								{op.name}
							</option>
						))}
					</select>
					<input
						className="mt-12 bg-blue-500 rounded text-white px-2 py-4 font-semibold"
						type="submit"
					/>
				</form>
			</div>
		</main>
	)
}

export default Page
