export default function deleteTask(task) {
	return fetch("http://localhost:1337/tasks", {
		method: "DELETE",
		headers: { "Content-Type": "application/json" }
	})
		.then(res => res.json());
}
