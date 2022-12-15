const { screen, render } = require("@testing-library/react");
const { createElement, useEffect, useState } = require("react");

jest.useRealTimers();

it("loads", async () => {
  function App() {
    const [data, setData] = useState(null);
    useEffect(() => {
      const t = setTimeout(() => {
        setData("data");
      }, 100);
      return () => clearTimeout(t);
    }, []);
    return createElement("div", {}, data || "loading");
  }

  render(createElement(App));

  await screen.findByText("data");
});
