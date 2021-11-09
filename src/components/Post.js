import { Card } from "@mui/material";
import PostActions from "./PostActions";
import PostContent from "./PostContent";
import PostHeader from "./PostHeader";

function Post(props) {
  return (
    <Card raised={false}>
      <PostHeader
        name={props.header["name"]}
        subheader={props.header["answered_by"] || props.header["about_user"]}
      />
      <PostContent question={props.question} answer={props.answer} />
      <PostActions
        shares={props.shares}
        upvotes={props.upvotes}
        downvotes={props.downvotes}
        comments={props.comments}
      />
    </Card>
  );
}

export default Post;
