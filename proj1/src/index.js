import { addOne } from "@c1c-narnia/util";
import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";

function Foo(props) {
    useEffect(() => {
        console.log(addOne(1));
    }, []);

    return React.createElement("h1", { className: "greeting" }, "Hello, world!");
}

const element = React.createElement(Foo, null, null);

const htmlDivElement = document.createElement("div");
document.body.append(htmlDivElement);
const root = createRoot(htmlDivElement);
root.render(element);
