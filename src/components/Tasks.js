import Task from './Task'


const Tasks = ({tasklist, onDelete, onToggle}) => {
    return (
        //tasks.push this will not work
       // setTask([...tasklist, {}])
        <>
            {/* {tasklist.map((tasklist) => (<Task key={tasklist.id} tasklist={tasklist} onDelete={onDelete} onToggle={onToggle}/>))} */}
            {tasklist.map((tasklist, index) => (<Task key={index} tasklist={tasklist} onDelete={onDelete} onToggle={onToggle}/>))}
        </>
    )
}

export default Tasks


/*
const tasklist = [
    {
        id: 1,
        text: 'Watch movie',
        day: 'April 3, 2023',
        reminder: true
    },
    {
        id: 2,
        text: 'Play video games',
        day: 'April 4, 2023',
        reminder: true
    },
    {
        id: 3,
        text: 'Buy groceries',
        day: 'April 5, 2023',
        reminder: false
    },
    {
        id: 4,
        text: 'Study exercise for webdev',
        day: 'April 6, 2023',
        reminder: false
    }
];

const Tasks = () => {
    return (
        // <div>LIST OF TASKS</div>
        <>
        {
            tasklist.map((tasklist)=>(<h3 key={tasklist.id}>{tasklist.day}</h3>))
        }
        </>
    )
}

export default Tasks
*/