import { useEffect, useState } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import ImageResults from '../image-results/ImageResults';

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const [amount, setAmount] = useState(15);
  const [apiUrl, setApiUrl] = useState('https://pixabay.com/api');
  const [apiKey, setApiKey] = useState(process.env.REACT_APP_API_KEY);
  const [images, setImages] = useState([]);

  const selectOptions = [5, 10, 15, 30, 50];

  const onTextChange = (e) => {
    setSearchText(e.target.value);
  };

  const onAmountChange = (e) => {
    setAmount(e.target.value);
  };

  useEffect(() => {
    if (searchText === '') {
      setImages([]);
    } else {
      const fetchData = async () => {
        const res = await axios.get(
          `${apiUrl}/?key=${apiKey}&q=${searchText}&image_type=photo&per_page=${amount}&safesearch=true`
        );
        const data = await res.data.hits;

        setImages(data);
      };

      try {
        fetchData();
      } catch (error) {
        console.log(error);
      }
    }
    // eslint-disable-next-line
  }, [searchText, amount]);

  return (
    <>
      <div style={{ margin: '1.5rem 1rem' }}>
        <TextField
          name="searchText"
          label="Search For Images"
          value={searchText}
          onChange={onTextChange}
          style={{ marginBottom: '1rem', width: '100%' }}
        />
        <br />
        <TextField
          name="amount"
          select
          label="Amount"
          value={amount}
          onChange={onAmountChange}
          style={{ width: '33.3%' }}
        >
          {selectOptions.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </div>
      {images.length > 0 && <ImageResults images={images} />}
    </>
  );
};

export default Search;
