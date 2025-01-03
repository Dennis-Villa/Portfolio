
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="main-header" style={{ paddingBottom: "20px" }}>
        Days I <strong className="important-text">Code</strong>
      </h1>
      <GitHubCalendar
        username="Dennis-Villa"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
