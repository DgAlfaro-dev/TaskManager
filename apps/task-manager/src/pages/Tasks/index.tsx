import { Box, Stack } from '@mui/material';

import Layout from 'src/components/Layout';
import Navbar from 'src/components/Navbar';
import { CreateNewTask } from 'src/components/CreateNewTask';
import { useAppSelector } from 'src/hook/store';
import { EmptyTaskMessage } from 'src/components/EmptyTaskMessage';
import { TaskList } from 'src/components/TaskList';

const Tasks = () => {
  const tasks = useAppSelector((state) => state.tasks);

  return (
    <Layout>
      <Navbar title={'Tasks'} />

      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Stack
          direction="column"
          justifyContent={'center'}
          sx={{
            width: '100%',
            height: '100%',
            gap: '20px',
            padding: '20px',
          }}
        >
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '60px',
            }}
          >
            {tasks.length === 0 ? <EmptyTaskMessage /> : <TaskList />}
          </Box>

          <CreateNewTask />
        </Stack>
      </Box>
    </Layout>
  );
};

export default Tasks;
