const parents = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am a h1 Tag"),
    React.createElement("h2", {}, "I am a h2 Tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am a child 2 -h1 Tag"),
    React.createElement("h2", {}, "I am a h2 Tag"),
  ]),
]);

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World By React!"
// );

console.log(parents);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parents);
