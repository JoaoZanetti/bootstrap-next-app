import { Queue } from "quirrel/next"

export default Queue("api/queues/email",
	async job => {
		console.log('rodou', job)
	}
)