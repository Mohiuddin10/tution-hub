export const checkLocalStorage = () => {
    const isFound = JSON.parse(localStorage.getItem("liked"))
   return isFound ? isFound : [];
}
export const storeLocalStorage = (id) => {
    const isFound = checkLocalStorage();
    if (isFound.includes(id)) {
        const updatedLiked = isFound.filter((likedId) => likedId !== id);
        localStorage.setItem("liked", JSON.stringify(updatedLiked))
    } else {
        isFound.push(id);
        localStorage.setItem("liked", JSON.stringify(isFound))
    }
}


