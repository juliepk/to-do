// Oppgave 3 - Bruk den kommenterte ut koden til å hente ut alle tasker

// export default function getTasks() {
// 	return fetch("http://localhost:1337/tasks", {
// 		method: "GET",
// 		headers: { "Content-Type": "application/json" }
// 	})
// 		.then(res => res.json());
// }

export default function getTasks() {
	return Promise.resolve([{ id: "abc123", title: "Bedriftsbesøk!", completed: false }]);
}
