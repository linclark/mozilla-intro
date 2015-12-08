import React, { Component } from "react";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../src/spectacle";

import preloader from "../src/utils/preloader";

import Interactive from "./interactive";

import CharacterCard from "./CharacterCard";

function prepImage(name) {
  return require(`./images/${name}.png`).replace("/", "");
}

let images = {};
[
  "me",
  "intro1",
  "intro2",
  "intro3",
  "intro4",
  "intro5",
  "intro6",
  "intro7",
  "intro8",
  "intro9",
  "intro10",
  "intro11",
  "redux"
].forEach((name) => images[name] = prepImage(name))

export default class extends Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={800}>
        <Slide transition={["fade"]} notes="Hi, I'm Lin Clark<p>Walk you through the wilds</p>" bgImage={images.me}>
          <Heading size="2" padding="0 320px 0 0">
            Hi, I'm <Link href="https://twitter.com/linclark">@linclark</Link>
          </Heading>
        </Slide>
        <Slide transition={["fade"]} notes="">
          <Image src={images.intro1} style={{maxHeight: "700px"}} />
        </Slide>
        <Slide transition={["fade"]} notes="">
          <Image src={images.intro2} style={{maxHeight: "700px"}} />
        </Slide>
        <Slide transition={["fade"]} notes="">
          <Image src={images.intro3} style={{maxHeight: "700px"}} />
        </Slide>
        <Slide transition={["fade"]} notes="">
          <Image src={images.intro4} style={{maxHeight: "700px"}} />
        </Slide>
        <Slide transition={["fade"]} notes="">
          <Image src={images.intro5} style={{maxHeight: "700px"}} />
        </Slide>
        <Slide transition={["fade"]} notes="">
          <Image src={images.intro6} style={{maxHeight: "700px"}} />
        </Slide>
        <Slide transition={["fade"]} notes="">
          <Image src={images.intro7} style={{maxHeight: "700px"}} />
        </Slide>
        <Slide transition={["fade"]} notes="">
          <Image src={images.intro8} style={{maxHeight: "700px"}} />
        </Slide>
        <Slide transition={["fade"]} notes="">
          <Image src={images.intro9} style={{maxHeight: "700px"}} />
        </Slide>
        <Slide transition={["fade"]} notes="">
          <Image src={images.redux} style={{maxWidth: "1100px"}} />
        </Slide>
        <Slide transition={["fade"]} notes="">
          <Image src={images.intro9} style={{maxHeight: "700px"}} />
        </Slide>
        <Slide transition={["fade"]} notes="">
          <Image src={images.intro10} style={{maxHeight: "700px"}} />
        </Slide>
        <Slide transition={["fade"]} notes="">
          <Image src={images.intro11} style={{maxHeight: "700px"}} />
        </Slide>
      </Deck>
    );
  }
}
