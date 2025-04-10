import React from "react";
import ReactDOM from "react-dom/client";

const title = < h1 > Hello from title < /h1>;

const Footer = () => {
    return ( <
        div >
        <
        h2 > this is the footer < /h2> < /
        div >
    )
}

const Header = () => {
    return ( <
        div > {
            title
        } <
        Footer / >
        <
        h2 > h2 heading inside the Header component hey < /h2> < /
        div >
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( < Header / > );