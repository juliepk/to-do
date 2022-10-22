export default function deleteTask(task) {
	return fetch(`localhost:1337/tasks/${task.id}`, {
		method: "DELETE",
		headers: { "Content-Type": "application/json" }
	})
		.then(res => res.json());
}
