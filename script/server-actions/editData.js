export const editData = (url, id, updatedData) => {
	return new Promise((resolve, reject) =>
		fetch(`${url}/${id}`, {
			method: 'PATCH',
			body: JSON.stringify(updatedData),
			headers: { 'Content-type': 'application/json; charset=UTF-8' }
		})
			.then(res => res.json())
			.then(json => resolve(json))
			.catch(err => reject(err))
	)
}