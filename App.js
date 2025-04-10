// const heading = React.createElement("h1", {
//     id: "head"
// }, "Hello world fom ReactJS"); //here heading is not a HTML h1 tage , instead it is a JS object or just a react element.
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading); //internally creates the tree like structure of the DOM by taking the object , converting it into a HTML tag and put it on the DOM.

/* <div id = "parent">
    <div id = "child">
        <h1></h1>
    </div>
</div> */


// const parent = React.createElement("div", {
//     id: "parent"
// }, React.createElement("div", {
//     id: "child"
// }, React.createElement("h1", {}, "h1 created by react")));

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);


/* <div id = "parent">
    <div id = "child">
        <h1></h1>
        <h2></h2>
    </div>
</div> */

//if a tage has multiple children , then wwe should pass in the array and then use React.createElement("" , {},"...")
const parent = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, [React.createElement("h1", {}, "h1 created by react"), React.createElement("h1", {}, "h2 created by react")]));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);