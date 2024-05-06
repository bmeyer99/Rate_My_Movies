import { Container, Header, Menu, Segment } from "semantic-ui-react";
import { DisplayType } from "../home/DisplayType";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchRatedMovies, fetchRatedTvShows } from "./query";
import { ColumnDisplay } from "../home/column-display";

export const Rated = () => {
  const [activeTabs, setActiveTabs] = useState<string>(DisplayType.MOVIES);

  const { data: ratedMovies, isLoading: isLoadingRatedMovies } = useQuery({
    queryKey: ["ratedMovies"],
    queryFn: () => fetchRatedMovies(),
  });

  const { data: ratedTvShows, isLoading: isLoadingRatedTvShows } = useQuery({
    queryKey: ["ratedTvShows"],
    queryFn: fetchRatedTvShows,
  });

  return (
    <Container style={{ marginTop: 50 }}>
      {" "}
      <Menu pointing secondary>
        <Menu.Item
          name="Movies"
          active={activeTabs === DisplayType.MOVIES}
          onClick={() => setActiveTabs(DisplayType.MOVIES)}
        />
        <Menu.Item
          name="TV Shows"
          active={activeTabs === DisplayType.TV}
          onClick={() => setActiveTabs(DisplayType.TV)}
        />
        <Menu.Item
          name="People"
          active={activeTabs === DisplayType.PEOPLE}
          onClick={() => setActiveTabs(DisplayType.PEOPLE)}
        />
      </Menu>
      <Segment>
        {(() => {
          switch (activeTabs) {
            case DisplayType.MOVIES:
              if (isLoadingRatedMovies) return <div>Loading...</div>;
              console.log("Rated Movies");
              console.log(ratedMovies);
              return (
                <div>
                  <Header as={"h2"}>Rated Movies</Header>
                  <ColumnDisplay data={ratedMovies.results} displayType={DisplayType.MOVIES} isRated />
                </div>
              );
            case DisplayType.TV:
              if (isLoadingRatedTvShows) return <div>Loading...</div>;
              return (
                <div>
                  <Header as={"h2"}>Rated TV Shows</Header>
                  <ColumnDisplay data={ratedTvShows.results} displayType={DisplayType.TV} isRated />
                </div>
              );
            case DisplayType.PEOPLE:
              return <div>People</div>;
            default:
              return null;
          }
        })()}
      </Segment>
    </Container>
  );
};
