import React, { useEffect, useState } from "react";
import styled from "styled-components";
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
      <Container id="movieList">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <h3>Movie List</h3>
            <Wrapper>
              {movies.map((movie) => (
                <MoviePage
                  key={movie.id}
                  id={movie.id}
                  coverImg={movie.medium_cover_image}
                  title={movie.title}
                  genres={movie.genres}
                />
              ))}
            </Wrapper>
          </>
        )}
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #1d282e;

  h1 {
    color: #fff;
  }

  h3 {
    font-size: 50px;
    font-weight: 500;
    color: #fff;
  }
`;

const Wrapper = styled.div`
  width: 1133px;
  gap: 30px;
  display: grid;
  grid-template-columns: repeat(4, auto);
`;
