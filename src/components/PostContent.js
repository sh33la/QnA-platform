import { CardContent, Typography } from "@mui/material"

function PostContent(props) {
    return (
        <CardContent style={{ textAlign: "left" }}>
          <Typography
            variant="body1"
            style={{ fontWeight: "bold", paddingBottom: "10px" }}
            color="GrayText.secondary"
          >
            {props.question}
          </Typography>
          <Typography variant="body2" color="GrayText.secondary">
            {props.answer}
          </Typography>
        </CardContent>
        
    )
}

export default PostContent
