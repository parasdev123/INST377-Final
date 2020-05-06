// code from lab 9 needs to be readjusted to get data for our specific APIs'
//
//
//
//
//
//
// ----------------------------------------------------------------------------

// These are our required libraries to make the server work.
// We're including a server-side version of Fetch to build on your client-side work
const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");
const path = require("path");

// Here we instantiate the server we're going to turn on
const app = express();
app.use(cors());

app.get("/products/:id", function (req, res, next) {
  res.json({ msg: "This is CORS-enabled for all origins!" });
});

app.listen(80, function () {
  console.log("CORS-enabled web server listening on port 80");
});
// Servers are often subject to the whims of their environment.
// Here, if our server has a PORT defined in its environment, it will use that.
// Otherwise, it will default to port 5500
const port = process.env.PORT || 5500;

// Our server needs certain features - like the ability to send and read JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// And the ability to serve some files publicly, like our HTML.
app.use(express.static("public"));

function processDataForFrontEnd(req, res) {
  const baseURL =
    "https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json";

  // Your Fetch API call starts here
  // Note that at no point do you "return" anything from this function -
  // it instead handles returning data to your front end at line 34.
  fetch(baseURL)
    .then((results) => results.json())
    .then((data) => {
      console.log(data);
      const clearEmptyData = data.filter((f) => f.geocoded_column_1);
      const refined = clearEmptyData.map((m) => ({
        category: m.category,
        name: m.name,
        latLong: m.geocoded_column_1.coordinates,
      }));
      // return data; // <- this will pass the data to the next "then" statement when I'm ready.
      return refined;
    })
    .then((data) =>
      data.reduce((c, current) => {
        if (!c[current.category]) {
          c[current.category] = [];
        }
        c[current.category].push(current);
        return c;
      }, {})
    )
    .then((data) => {
      // here I'm going to change the data into a format expected by the chart
      console.log("new data", data);

      const reformattedData = Object.entries(data).map((m, i) => {
        console.log(m);
        return {
          y: m[1].length,
          label: m[0], // this is a value from the chart example
        };
      });

      return reformattedData;
    })
    .then((data) => {
      console.log(data);
      res.send({ data: data }); // here's where we return data to the front end
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/error");
    });
}

// This is our first route on our server.
// To access it, we can use a "GET" request on the front end
// by typing in: localhost:3000/api or 127.0.0.1:3000/api
app.get("/api", (req, res) => {
  processDataForFrontEnd(req, res);
});

// dont delete, serve static assets if in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// new api fetch for police stations

function processDataForFrontEndPoliceStations(req, res) {
  const baseURL =
    "https://data.princegeorgescountymd.gov/resource/qkn8-5mhu.json";

  // Your Fetch API call starts here
  fetch(baseURL)
    .then((data) => data.json())
    .then((data) => {
      const refined = data.map((m) => ({
        name: m.station_name,
        lat: m.station_address.latitude,
        long: m.station_address.longitude,
      }));
      // console.log(refined);
      return refined;
    })
    .then((data) => {
      console.log(data);
      res.send({ data: data }); // here's where we return data to the front end
    });
}

// This is our first route on our server.
// To access it, we can use a "GET" request on the front end
// by typing in: localhost:5500/api or 127.0.0.1:5500/api
app.get("/policeStations", (req, res) => {
  processDataForFrontEndPoliceStations(req, res);
});

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// new api fetch for fire stations

function processDataForFrontEndFireStations(req, res) {
  const baseURL =
    "https://data.princegeorgescountymd.gov/resource/bzf2-94qx.json";

  // Your Fetch API call starts here
  fetch(baseURL)
    .then((data) => data.json())
    .then((data) => {
      const refined = data.map((m) => ({
        name: m.station_name,
        lat: m.location_1.latitude,
        long: m.location_1.longitude,
      }));
      // console.log(refined);
      return refined;
    })
    .then((data) => {
      console.log(data);
      res.send({ data: data }); // here's where we return data to the front end
    });
}

// This is our first route on our server.
// To access it, we can use a "GET" request on the front end
// by typing in: localhost:5500/fireStations or 127.0.0.1:5500/fireStations
app.get("/fireStations", (req, res) => {
  processDataForFrontEndFireStations(req, res);
});

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// new api fetch for libraries

function processDataForFrontEndLibraries(req, res) {
  const baseURL =
    "https://data.princegeorgescountymd.gov/resource/7k64-tdwr.json";

  // Your Fetch API call starts here
  fetch(baseURL)
    .then((data) => data.json())
    .then((data) => {
      const refined = data.map((m) => ({
        name: m.branch_name,
        lat: m.location_1.latitude,
        long: m.location_1.longitude,
      }));
      // console.log(refined);
      return refined;
    })
    .then((data) => {
      console.log(data);
      res.send({ data: data }); // here's where we return data to the front end
    });
}

// This is our first route on our server.
// To access it, we can use a "GET" request on the front end
// by typing in: localhost:5500/libraries or 127.0.0.1:5500/libraries
app.get("/libraries", (req, res) => {
  processDataForFrontEndLibraries(req, res);
});

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// new api fetch for rec centers

function processDataForFrontEndRecreation(req, res) {
  const baseURL =
    "https://data.princegeorgescountymd.gov/resource/gwq4-iu9d.json";

  // Your Fetch API call starts here
  fetch(baseURL)
    .then((data) => data.json())
    .then((data) => {
      const refined = data.map((m) => ({
        name: m.name,
        lat: m.address.latitude,
        long: m.address.longitude,
      }));
      // console.log(refined);
      return refined;
    })
    .then((data) => {
      console.log(data);
      res.send({ data: data }); // here's where we return data to the front end
    });
}

// This is our first route on our server.
// To access it, we can use a "GET" request on the front end
// by typing in: localhost:5500/recreation or 127.0.0.1:5500/recreation
app.get("/recreation", (req, res) => {
  processDataForFrontEndRecreation(req, res);
});
