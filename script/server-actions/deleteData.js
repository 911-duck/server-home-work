export const deleteData = (url, id) => {
	return new Promise((resolve, reject) =>
		fetch(`${url}/${id}`, {
			method: 'DELETE'
		})
			.then(res => {
				if (res.ok) resolve('Данные успешно удалены')
				else reject('Ошибка удаления данных')
			})
			.catch(err => reject(err))
	)
}