const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const items = [
  {
    title: "Dev.to",
    labels: ["beginner", "frontend", "backend", "js"],
    description:
      "Lorem ipsum dolor sit amet, case dissentiet ut has, eam tempor laboramus voluptatibus et, pri quando quodsi in. Est ea assentior forensibus disputationi. Ea vis malis albucius dissentiunt, cu tractatos vulputate definitiones sit. Erant movet semper no vel.",
    thumbnail: "https://picsum.photos/400/300",
    url: "http://dev.to/"
  },
  {
    title: "Skillio",
    labels: ["beginner", "frontend", "js"],
    description:
      "Lorem ipsum dolor sit amet, case dissentiet ut has, eam tempor laboramus voluptatibus et, pri quando quodsi in. Est ea assentior forensibus disputationi. Ea vis malis albucius dissentiunt, cu tractatos vulputate definitiones sit. Erant movet semper no vel.",
    thumbnail: "https://picsum.photos/400/300",
    url: "http://skillio.net"
  },
  {
    title: "Reddit programming",
    labels: ["beginner", "programming"],
    description:
      "Lorem ipsum dolor sit amet, case dissentiet ut has, eam tempor laboramus voluptatibus et, pri quando quodsi in. Est ea assentior forensibus disputationi. Ea vis malis albucius dissentiunt, cu tractatos vulputate definitiones sit. Erant movet semper no vel.",
    thumbnail: "https://picsum.photos/400/300",
    url: "https://www.reddit.com/r/programming/"
  },
  {
    title: "Vue documentation",
    labels: ["beginner", "frontend", "js"],
    description:
      "Lorem ipsum dolor sit amet, case dissentiet ut has, eam tempor laboramus voluptatibus et, pri quando quodsi in. Est ea assentior forensibus disputationi. Ea vis malis albucius dissentiunt, cu tractatos vulputate definitiones sit. Erant movet semper no vel.",
    thumbnail: "https://picsum.photos/400/300",
    url: "https://vuejs.org/v2/guide/"
  },
  {
    title: "Apollo Graphql",
    labels: ["beginner", "frontend", "backend", "graphql", "js"],
    description:
      "Lorem ipsum dolor sit amet, case dissentiet ut has, eam tempor laboramus voluptatibus et, pri quando quodsi in. Est ea assentior forensibus disputationi. Ea vis malis albucius dissentiunt, cu tractatos vulputate definitiones sit. Erant movet semper no vel.",
    thumbnail: "https://picsum.photos/400/300",
    url: "https://www.apollographql.com/"
  }
];

app.get("/", (_, res) => res.send("OK"));
app.get("/items", (_, res) => {
  res.send(items);
});

app.listen(3000, () =>
  console.log("Test backend is listening on http://localhost:3000/")
);
