const db=require('better-sqlite3')("task.db");


function gettask(){
  const query="SELECT * FROM task";
  const result=db.prepare(query).all();
  return result
}
function creattask(task){
    const query="insert into task(task1,task2,task3) values(?,?,?)";
    const result=db.prepare(query).run(task.task1,task.task2,task.task3);
       if(result.changes==0){
          throw new error("task not created")
}
}
function puttask(){
    console.log("task updated")
}
function deletetask(){
    console.log("task deleted")
}
module.exports = {
    gettask,
    creattask,
    puttask,
    deletetask
}

