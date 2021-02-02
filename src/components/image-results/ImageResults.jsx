import { useState } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ZoomInIcon from '@material-ui/icons/ZoomIn';

const ImageResults = ({ images }) => {
  const [open, setOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState('');

  const handleOpen = (img) => {
    setOpen(true);
    setCurrentImg(img);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
                <IconButton onClick={() => handleOpen(img.largeImageURL)}>
                  <ZoomInIcon style={{ color: '#fff' }} />
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

  const actions = [
    <Button color="primary" onClick={handleClose}>
      Close
    </Button>,
  ];

  return (
    <>
      {imageListContent}
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <img src={currentImg} alt="" style={{ width: '100%' }} />
        </DialogContent>
        <DialogActions>{actions}</DialogActions>
      </Dialog>
    </>
  );
};

export default ImageResults;
