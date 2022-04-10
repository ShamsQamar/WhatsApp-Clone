import { Box, makeStyles } from '@material-ui/core';
import Chat  from './chat/Chat';

import Menu from './menu/Menu.jsx'

const useStyles = makeStyles({
  component: {
   display: 'flex'
  },
  leftComponent: {
   // width: '55%',
   width: '35.5%',
   minWidth: 300
  },
  rightComponent: {
   borderLeft: '1px solid rgba(0, 0, 0, 0.1)',
   width: '64.5%',
   minWidth: 300,
   height: '100%'
  }
})

const ChatBox = () => {
  const classes = useStyles();

  return (
    <Box className={classes.component}>
      <Box className={classes.leftComponent}>
      <Menu/>
      </Box> 
      <Box className={classes.rightComponent}>
       <Chat/>
      </Box>
    </Box>
  )
}

export default ChatBox;