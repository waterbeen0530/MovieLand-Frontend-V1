import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function MoviePage({ id, coverImg, title, genres }) {
  return (
    <>
      <Container>
        <img src={coverImg} alt={title} />
        <Link to={`/movie/${id}`}>
          <h2>{title}</h2>
        </Link>
        <ul>
          {genres.map((g) => (
            <li key={g}>#{g}</li>
          ))}
        </ul>
      </Container>
    </>
  );
}

const Container = styled.div`
  margin: 0 10px 60px 10px;
  padding: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  box-sizing: border-box;
  background: #fff;

  img {
    width: 60%;
    height: 60%;
    border-radius: 10px;
    object-fit: cover;
  }

  h2 {
    text-align: center;
  }

  a {
    text-decoration: none;
    color: #1d282e;
    transition: all 0.5s;
  }

  a:hover {
    color: #3281b9;
  }

  ul {
    width: auto;
    gap: 3px;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(2, 110px);
    list-style: none;

    li {
      width: auto;
      padding: 5px;
      font-size: 14px;
      text-align: center;
      border-radius: 5px;
      color: #bce1fb;
      background: #1d282e;
    }
  }
`;

MoviePage.PropType = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
