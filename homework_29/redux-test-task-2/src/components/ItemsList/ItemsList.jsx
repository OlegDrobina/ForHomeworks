import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { useSelector } from "react-redux";
import selectors from '../../redux/slices/selectors';

const ItemsList = () => {
    const items = useSelector(selectors.items);
  
    return (
      <Box sx={{ width: '50%', bgcolor: 'background.paper', mt: '15px' }}>
        <List>
          {items.map((item, index) => (
            <div key={index}>
              <Divider />
              <ListItem>
                <ListItemText primary={item.text} />
              </ListItem>
            </div>
          ))}
        </List>
      </Box>
    );
  };
  
  export default ItemsList;