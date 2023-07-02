import { Box, Typography, Divider, Button } from '@mui/material';

const featuresData = [
  'Perfect for long joy rides',
  'Up to 55km in one charge',
  'Subsidy up to INR 7500 available only for Delhiites',
];

const ShadedText = ({ faint, dark, fontSize }) => (
  <Box display="flex">
    <Typography fontSize={fontSize} fontWeight={500}>
      {faint}
    </Typography>
    <Typography marginLeft={2} fontSize={fontSize} fontWeight={600}>
      {dark}
    </Typography>
  </Box>
);

const Text = ({ data, divider }) => (
  <Box maxWidth={100} display="flex" gap={2}>
    <Typography fontSize={16} fontWeight={500}>
      {data}
    </Typography>

    {divider && <Divider orientation="vertical" />}
  </Box>
);

const ItemInformation = () => {
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <ShadedText faint="Hero Lectro" dark="F6i" fontSize={48} />

      <Typography fontSize={30} fontWeight={100} color="gray">
        Change the way you ride forever!
      </Typography>

      <ShadedText faint="Top" dark="Features" fontSize={28} />

      <Box display="flex" gap={3}>
        {featuresData.map((val, idx) => (
          <Text data={val} divider={idx !== featuresData.length - 1} />
        ))}
      </Box>

      <Typography fontSize={24} fontWeight={600}>
        Price
      </Typography>

      <Typography fontSize={24} fontWeight={600}>
        ₹ 57,999
      </Typography>

      <Box display="flex" gap={2}>
        <Button variant="outlined">Book a test ride</Button>
        <Button variant="contained">Buy Now</Button>
      </Box>

      <Divider orientation="horizontal" />
    </Box>
  );
};

export default ItemInformation;
