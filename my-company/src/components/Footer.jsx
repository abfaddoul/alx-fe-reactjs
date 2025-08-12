function Footer() {
  return (
    <footer
      style={{
        background: "#222",
        color: "white",
        textAlign: "center",
        padding: "10px",
        marginTop: "20px",
      }}
    >
      © {new Date().getFullYear()} My Company. All rights reserved.
    </footer>
  );
}

export default Footer;
