
async function localData() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts') //  url de una página web 
        const data = await res.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
} 
localData()