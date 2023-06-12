import { Card, CardMedia } from "@mui/material";

const VideoCard = () => {

    return (
        <Card sx={{ bgcolor: 'error.main' }}>
            <CardMedia>
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/zTCEJVA3Av8" title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
            </CardMedia>
        </Card>
    );
}

export default VideoCard;