import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AlbumCard from "./Album";

const Home = (props) => {
  const [rock, setRock] = useState([]);
  const [pop, setPop] = useState([]);
  const [hiphop, setHiphop] = useState([]);

  const fetchArtist = async (artist, genere) => {
    try {
      let res = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artist,
        {
          method: "GET",
        }
      );
      if (res.ok) {
        let data = await res.json();
        let sonoMain = data.data;
        switch (genere) {
          case "rock":
            setRock((prevState) => {
              return [...prevState, sonoMain[0]];
            });
            break;
          case "pop":
            setPop((prevState) => {
              return [...prevState, sonoMain[0]];
            });
            break;
          case "hiphop":
            setHiphop((prevState) => {
              return [...prevState, sonoMain[0]];
            });
            break;
          default:
            console.log("switcherror");
        }
      } else {
        console.log("error");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const albumCard = async () => {
    let rockArtists = [
      "queen",
      "u2",
      "thepolice",
      "eagles",
      "thedoors",
      "oasis",
      "thewho",
      "bonjovi",
    ];

    let popArtists = [
      "maroon5",
      "coldplay",
      "onerepublic",
      "adele",
      "katyperry",
      "arianagrande",
    ];

    let hipHopArtists = [
      "eminem",
      "snoopdogg",
      "lilwayne",
      "drake",
      "kanyewest",
    ];

    let rockRandomArtists = [];
    let popRandomArtists = [];
    let hipHopRandomArtists = [];

    while (rockRandomArtists.length < 4) {
      let artist = rockArtists[Math.floor(Math.random() * rockArtists.length)];
      if (!rockRandomArtists.includes(artist)) {
        rockRandomArtists.push(artist);
      }
    }

    while (popRandomArtists.length < 4) {
      let artist = popArtists[Math.floor(Math.random() * popArtists.length)];
      if (!popRandomArtists.includes(artist)) {
        popRandomArtists.push(artist);
      }
    }

    while (hipHopRandomArtists.length < 4) {
      let artist =
        hipHopArtists[Math.floor(Math.random() * hipHopArtists.length)];
      if (!hipHopRandomArtists.includes(artist)) {
        hipHopRandomArtists.push(artist);
      }
    }

    for (let i = 0; i < rockRandomArtists.length; i++) {
      fetchArtist(rockRandomArtists[i], "rock");
    }
    for (let i = 0; i < popRandomArtists.length; i++) {
      fetchArtist(popRandomArtists[i], "pop");
    }
    for (let i = 0; i < hipHopRandomArtists.length; i++) {
      fetchArtist(hipHopRandomArtists[i], "hiphop");
    }
  };

  useEffect(() => {
    albumCard();
  }, []);

  return (
    <Container>
      <Col xs={12} md={9} className="offset-md-3 mainPage">
        <Row className="row">
          <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
            <a href="alt">TRENDING</a>
            <a href="alt">PODCAST</a>
            <a href="alt">MOODS AND GENRES</a>
            <a href="alt">NEW RELEASES</a>
            <a href="alt">DISCOVER</a>
          </div>
        </Row>
        <Row className="row">
          <Col md={10}>
            <div id="searchResults" style={{ display: "none" }}>
              <h2>Search Results</h2>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"></div>
            </div>
          </Col>
        </Row>
        <Row className="row">
          <Col xs={10} className="col-10">
            <div id="rock">
              <h2>Rock Classics</h2>
              <div
                className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                id="rockSection"
              >
                {rock?.map((el, i) => {
                  return (
                    <AlbumCard
                      key={i}
                      obj={el}
                      cover={el.album.cover_medium}
                      artist={el.artist.name}
                      album={el.album.title}
                      idAlbum={el.album.id}
                    />
                  );
                })}
              </div>
            </div>
          </Col>
        </Row>
        <Row className="row">
          <Col xs={10} className="col-10">
            <div id="pop">
              <h2>Pop Culture</h2>
              <div
                className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                id="popSection"
              >
                {pop?.map((el, i) => {
                  return (
                    <AlbumCard
                      key={i}
                      obj={el}
                      cover={el.album.cover_medium}
                      artist={el.artist.name}
                      album={el.album.title}
                    />
                  );
                })}
              </div>
            </div>
          </Col>
        </Row>
        <Row className="row">
          <Col xs={10} className="col-10">
            <div id="hiphop">
              <h2>HipHop</h2>
              <div
                className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                id="hipHopSection"
              >
                {hiphop?.map((el, i) => {
                  return (
                    <AlbumCard
                      key={i}
                      obj={el}
                      cover={el.album.cover_medium}
                      artist={el.artist.name}
                      album={el.album.title}
                    />
                  );
                })}
              </div>
            </div>
          </Col>
        </Row>
      </Col>
    </Container>
  );
};

export default Home;
