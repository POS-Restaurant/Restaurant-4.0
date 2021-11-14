import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

const labels = {
  0.5: 'Quá tệ',
  1: 'Tệ',
  1.5: 'Kém',
  2: 'Tạm được',
  2.5: 'Bình thường',
  3: 'Vừa miệng',
  3.5: 'Ngon',
  4: 'Quá ngon',
  4.5: 'Tuyệt vời',
  5: 'Xuất sắc',
};

export default function HoverRating() {
  const [value, setValue] = React.useState(0.5);
  const [hover, setHover] = React.useState(-1);

  return (
    <Box
      sx={{
        width: 200,
        alignItems: 'center',
      }}
    >
      <Rating
        name="size-large"
        size="large"
        value={value}
        precision={0.5}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
  );
}
