import { useContext } from "react";
import { ApiProvider } from "../context/Api";

function About() {
  const context = useContext(ApiProvider);

  const { theme } = context;

  return (
    <>
      {theme ? (
        <>
          <div className="about">
            <h1 className="welcome">Welcome</h1>
            <p className="welcome">
              This porject is one of my most proud projects that I ever built, I
              usualy update it every now and then when i learn something new
            </p>
          </div>
        </>
      ) : (
        <>
          <div className="welcomeDark about">
            <h1 className="welcomeDark">Welcome</h1>
            <p className="welcomeDark">
              This porject is one of my most proud projects that I ever built, I
              usualy update it every now and then when i learn something new
            </p>
          </div>
        </>
      )}
    </>
  );
}

export default About;
