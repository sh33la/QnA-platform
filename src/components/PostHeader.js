import CloseIcon from "@mui/icons-material/Close";
import { Avatar, CardHeader } from "@mui/material";
import IconButtonUI from "./UI/IconButtonUI";

function PostHeader(props) {
  return (
    <CardHeader
      style={{ textAlign: "left" }}
      avatar={
        <Avatar
          sx={{
            bgcolor: "#" + Math.floor(Math.random() * 16777215).toString(16),
          }}
          aria-label="posts"
        >
          {props.name.charAt(0).toUpperCase()}
        </Avatar>
      }
      action={<IconButtonUI icon={CloseIcon} />}
      title={props.name}
      subheader={props.subheader}
    />
  );
}

export default PostHeader;
