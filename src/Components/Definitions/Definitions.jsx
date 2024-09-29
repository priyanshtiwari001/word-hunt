import "./Definitions.css";

const Definitions = ({ word, meanings, catagory }) => {
  return (
    <div id="meaning">
      {word === "" ? (
        <span className="subTitle">Start the typing</span>
      ) : (
        meanings.map((mean) =>
          mean.meanings.map((item) =>
            item.definitions.map((def) => (
              <div
                className="singleMean"
                style={{
                  backgroundColor: "white",
                  color: "black",
                }}
              >
                <b>
                  <i>Definition : </i>
                  {def.definition}
                </b>
                <hr style={{ backgroundColor: "black", width: "100%" }} />
                {def.example && (
                  <span>
                    <b>Example :</b> {def.example}
                  </span>
                )}
                {def.synonyms || (
                  <span>
                    <b>Synonyms :</b> {def.synonyms.map((s) => `${s}, `)}
                  </span>
                )}
              </div>
            ))
          )
        )
      )}
    </div>
  );
};
export default Definitions;
