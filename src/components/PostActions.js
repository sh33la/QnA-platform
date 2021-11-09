import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import { CardActions } from "@mui/material";
import IconButtonUI from "./UI/IconButtonUI";

function PostActions(props) {
  return (
    <div>
      <CardActions>
        <IconButtonUI icon={ThumbUpOutlinedIcon} caption={props.upvotes} />
        <IconButtonUI icon={ThumbDownOutlinedIcon} caption={props.downvotes} />
        <IconButtonUI icon={ShareOutlinedIcon} caption={props.shares} />
        <IconButtonUI
          icon={CommentOutlinedIcon}
          caption={props.comments.length}
        />
      </CardActions>
    </div>
  );
}

export default PostActions;
