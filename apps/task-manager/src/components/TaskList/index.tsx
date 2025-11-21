import { List, ListItem, ListItemText } from '@mui/material';
import React from 'react';
import { useAppSelector } from 'src/hook/store';
import { TaskWithId } from 'src/store/tasks/slice';
import { DeleteTask } from '../DeleteTask';

export const TaskList = () => {
  const tasks = useAppSelector((state) => state.tasks);
  
  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
      }}
    >
      {tasks.map((value: TaskWithId) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem
            key={value.id}
            disablePadding
            sx={{
              paddingX: '20px',
              paddingY: '10px',
            }}
          >
            <ListItemText id={labelId} primary={`${value.name}`} />

            <DeleteTask id={value.id}    />
          </ListItem>
        );
      })}
    </List>
  );
};
