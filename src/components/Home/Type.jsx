import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Developer",
          "Data Scientist",
          "Cybersecurity Specialist",
        ],
        autoStart: true,
        loop: true,
        delay: 20,
        deleteSpeed: 20,
      }}
    />
  );
}

export default Type;
