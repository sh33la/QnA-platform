// import { Card } from "@mui/material";
// import PostActions from "./PostActions";
// import PostContent from "./PostContent";
// import PostHeader from "./PostHeader";

// function Post(props) {
//   return (
//     <Card raised={false}>
//       <PostHeader
//         name={props.header["name"]}
//         subheader={props.header["answered_by"] || props.header["about_user"]}
//       />
//       <PostContent question={props.question} answer={props.answer} />
//       <PostActions
//         shares={props.shares}
//         upvotes={props.upvotes}
//         downvotes={props.downvotes}
//         comments={props.comments}
//       />
//     </Card>
//   );
// }

// export default Post;
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Link from '@mui/material/Link';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Tooltip from '@mui/material/Tooltip';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import IosShareIcon from '@mui/icons-material/IosShare';
import ShareIcon from '@mui/icons-material/Share';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

function Post(props) {
  return(
    <>
    <Card>
      <CardHeader
        avatar={
          <Avatar alt="Cindy Baker" src={props.data.image} />
        }
        action={
          <IconButton aria-label="settings">
            <CloseIcon />
          </IconButton>
        }
        title={props.data.name}
        subheader={props.data.answer}
      />
      <CardContent>
        <Link href="#" color="#000000">
         <Typography gutterBottom variant="h5" component="div">
          {props.data.body}
         </Typography>
        </Link>
      </CardContent>
      <CardMedia
        component="img"
        alt="green iguana"
        height="450"
        image={props.data.image}
      />
     <br/>
      <span>111.2k views</span> . <Link href="#" underline="hover" color="#000000">View {props.data.votes} Votes</Link> . <Link href="#" underline="hover" color="#000000">View {props.data.votes} Votes</Link>
      <br/><br/>
      <CardActions>
      <ButtonGroup variant="outlined" aria-label="outlined button group">
      <Tooltip title="like">
       <Button variant="outlined" color="success" startIcon={<ArrowUpwardIcon />}>
        {props.data.votes}
       </Button>
       </Tooltip>
       <Tooltip title="dislike">
       <Button variant="outlined" color="warning" endIcon={<ArrowDownwardIcon />}>
        {props.data.downvotes}
       </Button>
       </Tooltip>
      </ButtonGroup>
      
        <Tooltip title="share">
           <IconButton>
          <IosShareIcon  />
         </IconButton>
        </Tooltip>
        <Tooltip title="comment ">
         <IconButton>
          <ChatBubbleOutlineIcon  />
         </IconButton>
        </Tooltip>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <Tooltip title="more sharing options ">
         <IconButton>
          <ShareIcon  />
         </IconButton>
        </Tooltip>

        <Tooltip title="more ">
         <IconButton>
          <MoreHorizIcon  />
         </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
    </>
  )
}
export default Post;