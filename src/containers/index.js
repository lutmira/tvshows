import { useState, useEffect } from 'react';
//Custom Components
import MoviesList from "../components/moviesList";

const MovieContainerApp = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const getData = () => {
        setLoading(true);
        fetch('http://api.tvmaze.com/schedule?country=US')
        .then(response => response.json())
        .then(results => {
            setData(results);
        })
        .finally(() => {
            setLoading(false);
        });
    };

    useEffect(() => {
        getData();
    }, []);


    return  (
        <div>
        {loading ? (
            <p>Loading...</p>
        ) : (
            <MoviesList movies={data} />
        )}
       </div>
    )
}

export default MovieContainerApp;