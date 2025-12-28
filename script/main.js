import { API_URL } from "./config.js";
import { displayData } from "./dom-actions/displayData.js";
import { deleteData } from "./server-actions/deleteData.js";
import { editData } from "./server-actions/editData.js";
import { getData } from "./server-actions/getData.js";
import { postData } from "./server-actions/postData.js";
import { checkEndOfOffer } from "./utils/checkEndOfOffer.js";
import { checkLastID } from "./utils/checkLastID.js";

const POST_TITLE = document.querySelector(".post__title")
const POST_PICTURE = document.querySelector(".post__picture")
const POST_QUANTITY = document.querySelector(".post__quantity")
const POST_COST = document.querySelector(".post__cost")
const EDIT_ID = document.querySelector(".edit__id")
const EDIT_TITLE = document.querySelector(".edit__title")
const EDIT_PICTURE = document.querySelector(".edit__picture")
const EDIT_QUANTITY = document.querySelector(".edit__quantity")
const EDIT_COST = document.querySelector(".edit__cost")
const DELETE_ID = document.querySelector(".delete__id")

const CONTAINER = document.querySelector(".items__block")
const OFFERS = document.querySelector(".menu__offer-block")
const POST = document.querySelector(".post")
const DELETE = document.querySelector(".delete")
const EDIT = document.querySelector(".edit")

const OPEN_POST_SETTINGS = document.querySelector(".main__add")
const OPEN_OFFERS = document.querySelector(".menu__offers")
const UPDATE = document.querySelector(".search__button")
const OPEN_EDIT_SETTINGS = document.querySelector(".main__edit")
const OPEN_DELETE_SETTINGS = document.querySelector(".main__delete")
const ADD_POST = document.querySelector(".post__post")
const EDIT_POST = document.querySelector(".edit__edit")
const DELETE_POST = document.querySelector(".delete__delete")

document.addEventListener("DOMContentLoaded", async e=>{
    let data = await getData(`${API_URL}/products`)
    displayData(data,CONTAINER)
    
    data.forEach(async element => {
        checkEndOfOffer(element,OFFERS)
    });
    
    OPEN_POST_SETTINGS.addEventListener("click",async e=>{
        POST.classList.toggle("post-down")
    })

    ADD_POST.addEventListener("click",async e=>{
        const obj = {
            "id": `${checkLastID(data)}`,
            "title": POST_TITLE.value,
            "picture": POST_PICTURE.value,
            "quantity": POST_QUANTITY.value,
            "cost": POST_COST.value,
            "offer": 25,
            "endTimer": 60
        }

        await postData(`${API_URL}/products`,obj,OFFERS)
        data = await getData(`${API_URL}/products`)
        displayData(data,CONTAINER)
    })

    OPEN_DELETE_SETTINGS.addEventListener("click",async e=>{
        DELETE.classList.toggle("delete-down")
    })

    DELETE_POST.addEventListener("click",async e=>{
        await deleteData(`${API_URL}/products`,DELETE_ID.value)
         data = await getData(`${API_URL}/products`)
        displayData(data,CONTAINER)
    })

    OPEN_EDIT_SETTINGS.addEventListener("click",async e=>{
        EDIT.classList.toggle("edit-down")
    })

    EDIT_POST.addEventListener("click",async e=>{
        const obj = {
            "title": EDIT_TITLE.value,
            "picture": EDIT_PICTURE.value,
            "quantity": EDIT_QUANTITY.value,
            "cost": EDIT_COST.value,
            "offer": 25,
            "endTimer": 60
        }

        await editData(`${API_URL}/products`,EDIT_ID.value,obj)
        data = await getData(`${API_URL}/products`)
        displayData(data,CONTAINER)
    })

    OPEN_OFFERS.addEventListener('click',e=>{
        OFFERS.classList.toggle("flex-ob")
    })

    UPDATE.addEventListener('click', async e=>{
        data = await getData(`${API_URL}/products`)
        displayData(data,CONTAINER)
    })
})