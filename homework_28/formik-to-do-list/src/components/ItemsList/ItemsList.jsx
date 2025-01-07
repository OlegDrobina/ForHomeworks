import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import DeleteIcon from "@mui/icons-material/Delete"
import IconButton from '@mui/material/IconButton';
import { TasksContext } from '../../tasksContext';
import { useContext } from 'react';

const ItemsList = (props) => {
    const { items } = props;
    const [task, setTask] = useContext(TasksContext);

    const handleDeleteButtonClick = (id) => {
      removeTaskFromStorage(id);
      setTask(prevState => prevState.filter(item => item.id !== id));
    }

    const removeTaskFromStorage = (id) => {
      const localStorageTasks = JSON.parse(localStorage.getItem("todos"));
      const localStorageTasksWithoutRemoved = localStorageTasks.filter(
        (task) => task.id !== id
      );
      localStorage.setItem(
        "todos",
        JSON.stringify(localStorageTasksWithoutRemoved)
      );
    }
  
    return (
      <Box sx={{ width: '50%', bgcolor: 'background.paper', mt: '15px' }}>
        <List>
          {items[0].map((item, index) => (
            <div key={index}>
              <Divider />
              <ListItem>
                <ListItemText primary={item.caption} />
                <IconButton aria-label="delete" id={item.id} onClick={()=>handleDeleteButtonClick(item.id)}>
                  <DeleteIcon />
              </IconButton>
              </ListItem>
            </div>
          ))}
        </List>
      </Box>
    );
  };
  
  export default ItemsList;