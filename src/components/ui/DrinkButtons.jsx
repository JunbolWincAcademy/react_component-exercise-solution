export const DrinkButtons= () => {
    const Choose = 'Hello!, would like coffee or thee?';
    const tea = 'Tea';
    const coffee = 'Coffee';
   
    return (
    <>
      <div className="DrinkButtons">
        <h2>{Choose}</h2>
      </div>
      <div className="button-group">
        <button className="btn_thee"><p className= "btn_color">{tea}</p></button>
        <button className="btn_coffee"><p className= "btn_color">{coffee}</p></button>
      </div>
    </>
    );
  };
  