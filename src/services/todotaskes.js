function gettask(){
    return{
        task1:"reading",
        task2:"sports",
        task3:"coding"
    
    }
}
function creattask(){
    console.log("task created")
}
function puttask(){
    console.log("task updated")
}
function deletetask(){
    console.log("task deleted")
}
module.exports = {gettask,creattask,puttask,deletetask}
