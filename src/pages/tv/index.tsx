import { Grid, Header, Loader, Segment, Image, List, Label, Accordion } from "semantic-ui-react";
import { fetchTvShowDetails } from "./query";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { ReactNode } from "react";

export const TvShow = () => {
  const { id } = useParams<{ id?: string }>();

  const { data, isLoading } = useQuery({
    queryKey: ["tvShow"],
    queryFn: () => {
      if (!id) {
        throw new Error("TV Show ID is undefined");
      }
      return fetchTvShowDetails(id);
    },
  });

  if (!id) {
    return <div>Invalid movie id</div>;
  }

  if (isLoading) {
    return <Loader active />;
  }

  const seasonsPanels = data.seasons.map(
    (season: { season_number: ReactNode; overview: ReactNode; name: string; id: string; episode_count: number }) => ({
      key: season.id,
      title: season.name,
      content: {
        content: (
          <List>
            <List.Item>
              <List.Header>{season.episode_count} Episodes</List.Header>
            </List.Item>
          </List>
        ),
      },
    })
  );

  return (
    <div style={{ marginTop: 50 }}>
      <Segment>
        <Header> {data.name} </Header>
        <Grid columns={2} divided textAlign="left" style={{ marginTop: 20 }}>
          <Grid.Row>
            <Grid.Column width={6}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
                <Image src={`https://image.tmdb.org/t/p/original${data.poster_path}`} size="medium" centered />
              </div>
            </Grid.Column>
            <Grid.Column width={10}>
              <List>
                <List.Item>
                  <List.Header>Networks</List.Header>
                  {data.networks.map((network: { name: string; id: string; local_path: string }) => (
                    <Label key={network.id}> {network.name} </Label>
                  ))}
                </List.Item>
                <List.Item>
                  <List.Header>Overview</List.Header>
                  {data.overview}
                </List.Item>
                <List.Item>
                  <List.Header>Created By</List.Header>
                  {data.created_by.map((creator: { name: string; id: string }) => (
                    <List.Item key={creator.id}> {creator.name} </List.Item>
                  ))}
                </List.Item>
                <List.Item>
                  <List.Header>Genres</List.Header>
                  {data.genres.map((genre: { name: string; id: string }) => (
                    <Label key={genre.id}> {genre.name} </Label>
                  ))}
                </List.Item>
                <List.Item>
                  <List.Header>First Air Date</List.Header>
                  {data.first_air_date}
                </List.Item>
                <List.Item>
                  <List.Header>Rating</List.Header>
                  {data.vote_average}
                </List.Item>
                <List.Item>
                  <List.Header>Seasons</List.Header>
                  <List.Description style={{ height: "200px", overflowY: "scroll" }}>
                    <Accordion defaultActiveIndex={0} panels={seasonsPanels} styled />
                  </List.Description>
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  );
};
