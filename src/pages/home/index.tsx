import { useState } from 'react'
import { Button } from 'semantic-ui-react'
import { ColumnDisplay } from './column-display';
import { fetchMovies, fetchPeople, fetchTvShows } from './query'
import { useQuery } from '@tanstack/react-query';
import { DisplayType } from './DisplayType';

export const Home = () => {
    const [displayType, setDisplayType] = useState<DisplayType>(
        DisplayType.MOVIES
    );

    const { data: movieData, isLoading: isLoadingMovies } = useQuery({ queryKey: ["movies"], queryFn: fetchMovies })
    const { data: tvData, isLoading: isLoadingTv } = useQuery({ queryKey: ["tv"], queryFn: fetchTvShows })
    const { data: peopleData, isLoading: isLoadingPeople } = useQuery({ queryKey: ["people"], queryFn: fetchPeople })

    return (
        <div style={{ marginTop: 50, height: "auto" }}>
            {" "}
            <Button.Group>
                <Button
                    color={displayType === DisplayType.MOVIES ? "blue" : undefined}
                    onClick={() => setDisplayType(DisplayType.MOVIES)}
                >
                    Movies
                </Button>
                <Button
                    color={displayType === DisplayType.TV ? "purple" : undefined}
                    onClick={() => setDisplayType(DisplayType.TV)}
                >
                    TV Shows
                </Button>
                <Button
                    color={displayType === DisplayType.PEOPLE ? "orange" : undefined}
                    onClick={() => setDisplayType(DisplayType.PEOPLE)}
                >
                    People
                </Button>
            </Button.Group>

            {isLoadingMovies || isLoadingTv || isLoadingPeople ? (
                <div>Loading...</div>
            ) : (
                <div style={{ marginTop: 20 }}>
                    {(() => {
                        switch (displayType) {
                            case DisplayType.MOVIES:
                                return <ColumnDisplay data={movieData.results} displayType={DisplayType.MOVIES} />;
                            case DisplayType.TV:
                                return <ColumnDisplay data={tvData.results} displayType={DisplayType.TV} />;
                            case DisplayType.PEOPLE:
                                return <ColumnDisplay data={peopleData.results} displayType={DisplayType.PEOPLE} />;
                            default:
                                return null;
                        }
                    })()}
                </div>
            )}
        </div>
    );
};