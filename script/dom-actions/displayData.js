export const displayData = (data, container) => {
    container.innerHTML = ""
    data.forEach(product => {
        const item = document.createElement('div')
        item.classList.add('product')
        item.innerHTML = `
		<div class="picture" style ="background-image:url(${product.picture});"></div>
		<span class="title">${product.title}</span>
		<span class="quantity">${product.quantity}</span>
		<span class="cost">${product.cost}</span>
        <div class="colors">
            <div class="red"></div>
            <div class="blue"></div>
            <div class="green"></div>
            <div class="black"></div>
            <div class="white"></div>
        </div>
	`
        container.appendChild(item)
    })

}