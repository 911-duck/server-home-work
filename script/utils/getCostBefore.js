export const getCostBefore = (cost, offer) => {
    if(offer){
        return `<s>${cost}$</s><br> ${Math.floor(cost*(100-offer)/100)}$`
    }else{
        return `${cost}$`
    }
}