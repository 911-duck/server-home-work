import { editData } from "../server-actions/editData.js";
import { API_URL } from "../config.js";


export const checkEndOfOffer = (data,container) => {
    let interval = setInterval(async () => {
        if (data.endTimer > 0){
            if(container.querySelectorAll(`.block-id-${data.id}`).length == 1){
            data.endTimer -= 1
                
                container.querySelectorAll(`.block-id-${data.id}`)[0].innerHTML = `
                <div class="picture-db" style ="background-image: url('${data.picture}');"></div>
                <span>${data.title} ${Math.floor((data.endTimer%3600)/60)}:${data.endTimer%60}</span>
                `
            }else{
            data.endTimer -= 1

            let block = document.createElement("div")
            block.classList.add(`block-id-${data.id}`)
            block.classList.add(`block-db`)
            block.innerHTML = `
                <div class="picture-db" style ="background-image: url('${data.picture}');"></div>
                <span>${data.title} ${Math.floor((data.endTimer%3600)/60)}:${data.endTimer%60}</span>
                `
                console.log(data.picture)
                container.appendChild(block)
            }
        }else{
            data.offer = 0
            let id = data.id
            let newData = JSON.parse(JSON.stringify(data))
            delete newData.id

            editData(`${API_URL}/products`, id, newData)
            clearInterval(interval)
            container.querySelectorAll(`.block-id-${data.id}`)[0].remove()
        }
        
        let id = data.id
        let newData = JSON.parse(JSON.stringify(data))
        delete newData.id

        editData(`${API_URL}/products`, id, newData)
    }, 1000);
}