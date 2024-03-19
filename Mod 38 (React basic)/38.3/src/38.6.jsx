// export default function Todo({task, isDone}){
//     return(
//         <li>Task: {task}</li>
//     )
// }

// conditional rendering
// export default function Todo({task, isDone}){
//     if(isDone===true){
//         return <li>Finished: {task}</li>
//     }
//     else{
//         return <li>Work on: {task}</li>
//     }
// }

// conditional rendering
// export default function Todo({task, isDone}){
//     if(isDone){
//         return <li>Finished: {task}</li>
//     }
//     return <li>Work on: {task}</li>
// }

// conditional rendering
// export default function Todo({task, isDone}){
//     return(
//         <li> {isDone ? 'Finished' : 'Work On'} : {task}</li>
//     )
// }

// conditional rendering
// export default function Todo({task, isDone}){
//     return(
//         <li>{task} {isDone && 'Done'}</li>
//     )
// }

// conditional rendering
// export default function Todo({task, isDone}){
//     return(
//         <li>{task} {isDone || 'Not finished'}</li>
//     )
// }

// conditional rendering using variable
export default function Todo({task, isDone}){
    let listItem;
    if(isDone){
        listItem = <li>Finished: {task}</li>
    }
    else{
        listItem = <li>Work on: {task}</li>
    }
    return listItem;
}