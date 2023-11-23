import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import ToDoItem from './ToDoItem';


export default function ToDoList({
    todos,
}) {

    return (
        <div style={{ width: '30%', margin: '15px auto' }}>
            <h1 style={{ textAlign: 'center' }}>TODO list</h1>
            <ListGroup>
                {todos.map(x => <ToDoItem key={x._id} {...x} />)}
            </ListGroup>
            <Button variant="outline-primary">Add</Button>
        </div>
    );
}
