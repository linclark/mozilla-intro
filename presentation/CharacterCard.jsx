import React from "react/addons";
import Base from "./../src/base";
import Radium from "radium";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "./../src/spectacle";

@Radium
class CharacterCard extends Base {
  render() {
    let style = {
      backgroundImage: "url(" + this.props.image + ")",
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
      height: "700px"
    };
    return (
      <div className="card" style={style}>
        <div className="details" style={{float: "right", paddingRight: "20px", width: "450px"}}>
          <Heading size={3}>{this.props.title}</Heading>
          <List>
            {React.Children.map(this.props.children, item => {
              return (
                <Appear>{item}</Appear>
              )
            })
          }
          </List>
      </div>
      </div>
    );
  }
}

export default CharacterCard;
