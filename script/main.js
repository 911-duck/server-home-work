import { API_URL } from "./config.js";
import { displayData } from "./dom-actions/displayData.js";
import { getData } from "./server-actions/getData.js";

const CONTAINER = document.querySelector(".items__block")
const POST = document.querySelector(".post")

const ADD = document.querySelector(".main__add")

document.addEventListener("DOMContentLoaded", async e=>{
    const data = await getData(`${API_URL}/products`)
    displayData(data,CONTAINER)
    setInterval(async ()=>{
        const data = await getData(`${API_URL}/products`)
        displayData(data,CONTAINER)
    },1000)

    ADD.addEventListener("click",e=>{
        POST.classList.toggle("post-down")
    })
})