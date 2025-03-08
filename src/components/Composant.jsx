export default function Composant() {
    const click = () => {
      console.log("Le bouton a été cliqué");
    };
  
  
    const submitForm = (event) => {
        event.preventDefault();
      console.log("Le formulaire  a été soumis");
    };
  
  
    return (
      <>
        <h1>Les évènements</h1>
        <div>
          <input
            type="text"
            placeholder="Champs"
            onChange={(e) => console.log(e.target.value)}
          />
        </div>
        <br />
        <div>
          <button onClick={click}>Clique sur moi</button>
        </div>
        <br />
        <form onSubmit={submitForm}>
          <h3>Formulaire</h3>
          <input
            type="text"
            placeholder="Texte"
            onChange={(e) => console.log(e.target.value)}
          />
          <button type="submit">Soumettre</button>
        </form>
      </>
    );
}