import { IconButton } from "@mui/material";

function IconButtonUI(props) {
  const Icon = props.icon;
  return (
    <IconButton aria-label="" {...props.iconButtonProps}>
      <Icon fontSize="small" {...props.iconProps} />
      {props.caption !== undefined && (
        <span style={{ fontSize: "55%" }}>
          {props.caption ? props.caption : ""}
        </span>
      )}
    </IconButton>
  );
}

export default IconButtonUI;
