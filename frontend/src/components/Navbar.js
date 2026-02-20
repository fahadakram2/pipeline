import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2>Task Manager</h2>
      <div>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/tasks" style={styles.link}>Tasks</Link>
        <Link to="/add" style={styles.link}>Add Task</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 40px",
    background: "#282c34",
    color: "white"
  },
  link: {
    marginLeft: "20px",
    color: "white",
    textDecoration: "none"
  }
};

export default Navbar;