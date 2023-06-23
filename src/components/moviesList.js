import React from "react";
import MovieDetails from "./moviesDetails";
import {Col, Row} from "antd";

const MoviesList = (props) => {
    const { movies } = props;

    return (
        <>
            <h2 className="tv-shows-title">TV SHOWS</h2>
            <Row gutter={[16, 16]}>
                {movies.map((record) => (
                    <Col key={record.show.id} xs={6}>
                        <MovieDetails record={record} />
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default MoviesList;