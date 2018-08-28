import React from "react";
import format from "date-fns/format";

export default class PostPreview extends React.Component {
  render() {
    const {entry, widgetFor, getAsset} = this.props;
    let image = getAsset(entry.getIn(["data", "image"]));

    return <article class="post">
    <h2 class="post-header">{ entry.getIn(["data", "title"])}</h2>
    <p class="post-meta">{ format(entry.getIn(["data", "date"]), "YYYY-MM-DD") }</p>
    { widgetFor("body") }
  </article>;

  }
}
