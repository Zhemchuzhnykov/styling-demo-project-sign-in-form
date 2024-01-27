import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "2rem",
        marginBottom: window.innerWidth >= 768 ? "4rem" : "2rem",
      }}
    >
      <img
        src={logo}
        alt="A canvas"
        style={{
          objectFit: "contain",
          marginBottom: "2rem",
          width: "11rem",
          height: "11rem",
        }}
      />
      <h1
        style={{
          fontSize: window.innerWidth >= 768 ? "2.25rem" : "1.5rem",
          fontWeight: "600",
          letterSpacing: "0.4em",
          textAlign: "center",
          textTransform: "uppercase",
          color: "#9a3412",
          fontFamily: "Pacifico, cursive",
          margin: "0",
        }}
      >
        ReactArt
      </h1>
      <p
        style={{
          textAlign: "center",
          color: "#a39191",
          margin: "0",
        }}
      >
        A community of artists and art-lovers.
      </p>
    </header>
  );
}
