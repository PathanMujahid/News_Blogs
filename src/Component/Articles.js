import React from "react";
// import MCard from "./Common/MCard";
import { useSelector } from "react-redux";
import {
  Box,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { experimentalStyled as styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const Articles = () => {
  const { Articles, loadingArticles } = useSelector(
    (state) => state.ArticleReducer
  );
  console.log(Articles, loadingArticles);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 6, md: 0.5 }}
          columns={{ xs: 4, sm: 5, md: 12 }}
        >
          {loadingArticles
            ? "Loading"
            : Articles.map((article, index) => {
                // return <MCard article={article} />;
                return (
                  <Grid xs={2} sm={4} md={4} key={index}>
                    <Item>
                      <CardMedia
                        component="img"
                        alt="img"
                        height="450"
                        image={article.jetpack_featured_media_url}
                      />
                      <CardContent>
                        <Link to={"/article"}>
                          <Typography gutterBottom variant="h5" component="div">
                            {article.title.rendered}
                          </Typography>
                        </Link>

                        <Typography variant="body2" color="text.secondary">
                          {article.excerpt.rendered}
                        </Typography>
                      </CardContent>
                    </Item>
                  </Grid>
                );
              })}
        </Grid>
      </Box>
    </>
  );
};

export default Articles;
