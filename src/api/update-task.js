export default function updateTask(task) {
	return fetch(`localhost:1337/tasks/${task.id}`, {
		method: "PUT",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(task)
	})
		.then(res => res.json());
}
