import spinner from "../../assets/spinner.gif";

const FormAlert = ({ alert }: any) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: alert.isError ? "orange" : "#50C878",
        padding: "10px",
        width: "95%",
        color: "black",
      }}
      role="alert"
    >
      <p id="alert">{alert.msg}</p>
      {!alert.isError && <img height={50} src={spinner} alt="loading" />}
    </div>
  );
};

export default FormAlert;
