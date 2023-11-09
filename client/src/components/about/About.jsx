import { Box, styled, Typography, Link } from "@mui/material";
import { GitHub, Instagram, Email } from "@mui/icons-material";

const Banner = styled(Box)`
  background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
  width: 100%;
  height: 50vh;
  background-position: left 0px bottom 0px;
  background-size: cover;
`;

const Wrapper = styled(Box)`
  padding: 20px;
  & > h3,
  & > h5 {
    margin-top: 50px;
  }
`;

const Text = styled(Typography)`
  color: #878787;
`;

const About = () => {
  return (
    <Box>
      <Banner />
      <Wrapper>
        <Typography variant="h3">Code for Interview</Typography>
        <Text variant="h5">
          My upcoming goal is to develop myself and learn more knowledge at
          work.   <br /> I hope to accompany and develop with the company in the near
          future.
        </Text>
        <Text variant="h5">
        I hope to receive a positive response from the company.
        </Text>
      </Wrapper>
    </Box>
  );
};

export default About;
