export const fetchMovies = async () => {
    const res = await fetch(
        'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
        {
            headers: {
                Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxY2YyYzFlNmI1NjQwNmUwYzg3MWI3NjM1NjY1ZGEzNyIsInN1YiI6IjY2MzdiYTFmY2FhNTA4MDEyNmY1MWNhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1-g5rFKMQplNSzwlpfXnDCpowWgNImAITfjX4sen5yE"
            },
        }
    );
    const data = await res.json();
    console.log(data);
    return data;
};

export const fetchTvShows = async () => {
    const res = await fetch(
        'https://api.themoviedb.org/3/tv/popular?language=en-US&page=1',
        {
            headers: {
                Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxY2YyYzFlNmI1NjQwNmUwYzg3MWI3NjM1NjY1ZGEzNyIsInN1YiI6IjY2MzdiYTFmY2FhNTA4MDEyNmY1MWNhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1-g5rFKMQplNSzwlpfXnDCpowWgNImAITfjX4sen5yE"
            },
        }
    );
    const data = await res.json();
    console.log(data);
    return data;
};


export const fetchPeople = async () => {
    const res = await fetch(
        'https://api.themoviedb.org/3/person/popular?language=en-US&page=1',
        {
            headers: {
                Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxY2YyYzFlNmI1NjQwNmUwYzg3MWI3NjM1NjY1ZGEzNyIsInN1YiI6IjY2MzdiYTFmY2FhNTA4MDEyNmY1MWNhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1-g5rFKMQplNSzwlpfXnDCpowWgNImAITfjX4sen5yE"
            },
        }
    );
    const data = await res.json();
    console.log(data);
    return data;
};
