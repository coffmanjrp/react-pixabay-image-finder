import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ZoomInIcon from '@material-ui/icons/ZoomIn';

const ImageResults = ({ images }) => {
  let imageListContent;

  if (images) {
    imageListContent = (
      <GridList cols={3}>
        {images.map((img) => (
          <GridListTile key={img.id}>
            <img src={img.largeImageURL} alt={img.tags} />
            <GridListTileBar
              title={img.tags}
              subtitle={
                <span>
                  by <strong>{img.user}</strong>
                </span>
              }
              actionIcon={
                <IconButton>
                  <ZoomInIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    );
  } else {
    imageListContent = null;
  }

  return <div>{imageListContent}</div>;
};

export default ImageResults;
