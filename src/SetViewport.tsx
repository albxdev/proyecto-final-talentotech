import { useEffect } from "react";

const SetViewport = () => {
  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "viewport";
    meta.content = "width=device-width, initial-scale=1";
    document.head.appendChild(meta);
  }, []);

  return null;
};

export default SetViewport;