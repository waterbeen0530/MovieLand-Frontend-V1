import React, { useEffect, useState } from "react";
import styled from "styled-components";
import IntroPage from "./IntroPage";
import MoviePage from "./MoviePage";

export default function MainPage() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();

    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  return (
    <>
      <IntroPage />
      <Container>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <Wrapper>
            {movies.map((movie) => (
              <MoviePage
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
              />
            ))}
          </Wrapper>
        )}
      </Container>
    </>
  );
}

const Container = styled.div`
  padding: 30px 0 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1d282e;
`;

const Wrapper = styled.div`
  width: 1130px;
  display: grid;
  grid-template-columns: repeat(4, auto);
`;
