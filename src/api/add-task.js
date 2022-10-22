export default function addTask(task) {
	return fetch(`localhost:1337/tasks`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(task)
	})
		.then(res => res.json());
}
