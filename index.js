const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const items = [
  {
    title: "Very interesting article",
    labels: ["beginner", "frontend", "js"],
    description:
      "Lorem ipsum dolor sit amet, case dissentiet ut has, eam tempor laboramus voluptatibus et, pri quando quodsi in. Est ea assentior forensibus disputationi. Ea vis malis albucius dissentiunt, cu tractatos vulputate definitiones sit. Erant movet semper no vel.",
    thumbnail: "https://fakeimg.pl/400/",
    url: "http://getskilled.io/"
  },
  {
    title: "Very interesting article",
    labels: ["beginner", "frontend", "js"],
    description:
      "Lorem ipsum dolor sit amet, case dissentiet ut has, eam tempor laboramus voluptatibus et, pri quando quodsi in. Est ea assentior forensibus disputationi. Ea vis malis albucius dissentiunt, cu tractatos vulputate definitiones sit. Erant movet semper no vel.",
    thumbnail: "https://fakeimg.pl/400/",
    url: "http://getskilled.io/"
  },
  {
    title: "Very interesting article",
    labels: ["beginner", "frontend", "js"],
    description:
      "Lorem ipsum dolor sit amet, case dissentiet ut has, eam tempor laboramus voluptatibus et, pri quando quodsi in. Est ea assentior forensibus disputationi. Ea vis malis albucius dissentiunt, cu tractatos vulputate definitiones sit. Erant movet semper no vel.",
    thumbnail: "https://fakeimg.pl/400/",
    url: "http://getskilled.io/"
  },
  {
    title: "Very interesting article",
    labels: ["beginner", "frontend", "js"],
    description:
      "Lorem ipsum dolor sit amet, case dissentiet ut has, eam tempor laboramus voluptatibus et, pri quando quodsi in. Est ea assentior forensibus disputationi. Ea vis malis albucius dissentiunt, cu tractatos vulputate definitiones sit. Erant movet semper no vel.",
    thumbnail: "https://fakeimg.pl/400/",
    url: "http://getskilled.io/"
  },
  {
    title: "Very interesting article",
    labels: ["beginner", "frontend", "js"],
    description:
      "Lorem ipsum dolor sit amet, case dissentiet ut has, eam tempor laboramus voluptatibus et, pri quando quodsi in. Est ea assentior forensibus disputationi. Ea vis malis albucius dissentiunt, cu tractatos vulputate definitiones sit. Erant movet semper no vel.",
    thumbnail: "https://fakeimg.pl/400/",
    url: "http://getskilled.io/"
  }
];

app.get("/", (_, res) => res.send("OK"));
app.get("/items", (_, res) => {
  res.send(items);
});

app.listen(3000, () =>
  console.log("Test backend is listening on http://localhost:3000/")
);
