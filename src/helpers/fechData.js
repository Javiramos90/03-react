export const fetchData = async(url) => {
    try{
        const response = await fetch (`https://jsonplaceholder.typicode.com/${url}`)
        const data =await response.json()
        console.log(data)
        return{
            data,
            loading: false
        }
    }catch(error){
        console.log(error)
    }
}