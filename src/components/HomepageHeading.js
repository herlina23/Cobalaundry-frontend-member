import PropTypes from "prop-types";
import React, { Component } from "react";
import { Button, Container, Header, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

// E3QOSmMbn;

const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as="h1"
      color="teal"
      content="QLaundry"
      inverted
      style={{
        fontSize: mobile ? "2em" : "4em",
        fontWeight: "normal",
        marginBottom: 0,
        marginTop: mobile ? "1.5em" : "3em"
      }}
    />
    <Header
      as="h2"
      content="Cuci Mudah, Banyak Diskon!"
      inverted
      style={{
        fontSize: mobile ? "1.5em" : "1.7em",
        fontWeight: "normal",
        marginTop: mobile ? "0.5em" : "1.5em"
      }}
    />
    <Header
      as="h5"
      color="olive"
      content="Yuk Gabung jadi member QLaundry untuk dapatkan diskon yang ga ada habis-habisnya!"
      inverted
      style={{
        fontSize: mobile ? "1em" : "1.2em",
        fontWeight: "normal",
        marginTop: mobile ? "0.2em" : "1em"
      }}
    />

    <Link to={`/layanan`}>
      <Button
        primary
        size="huge"
        // href={"/layanan"}
        target="_blank"
        color="teal"
        inverted
      >
        Cek Penawaran Kami
        <Icon name="right arrow" />
      </Button>
    </Link>

    <Link to={`/proses`}>
      <Button
        primary
        size="huge"
        href={"/proses"}
        target="_blank"
        color="olive"
        inverted
      >
        <Icon name="left arrow" /> Cek Proses Laundry
      </Button>
    </Link>
  </Container>
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool
};

export default HomepageHeading;
