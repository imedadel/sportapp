import React from 'react';
function Page () {
  const [type, setType] = React.useState ('Tous');
  const [environnement, setEnvironnement] = React.useState ('Tous');
  const environnements = ['Domicile', 'Montagne', 'Martime', 'Cité'];
  const [place, setPlace] = React.useState ('Tous');
  const [Price, setPrice] = React.useState ('Tous');
  const [intensity, setIntensity] = React.useState ('Tous');
  const places = [
    'Paris',
    'Marseille',
    'Lyon',
    'Toulouse',
    'Nice',
    'Nantes',
    'Montpellier',
    'Strasbourg',
    'Bordeaux',
    'Lille',
    'Rennes',
    'Reims',
    'Saint-Etienne',
    'Le Havre',
    'Toulon',
    'Grenole',
    'Dijon',
    'Angers',
    'Nimes',
    'Villeurbanne',
    'Saint-Denis',
    'Aix-en-Provence',
    'Le Mans',
    'Clermont-Ferrand',
    'Brest',
    'Tours',
    'Amiens',
    'Limoges',
    'Annecy',
    'Perpignan',
    'Boulogne-Billancourt',
    'Metz',
    'Besançon',
    'Orléons',
    'Argenteuil',
    'Rouen',
    'Mulhouse',
    'Montreuil',
    'Saint-Paul',
    'Caen',
    'Nancy',
    'Tourcoing',
    'Roubaix',
    'Nanterre',
    'Virty-sur-seine',
    'Avignon',
    'Créteil',
    'Dunkerque',
    'Poitiers',
  ];

  return (
    <div>

      <form action="submit">
        <div>
          <span>type</span>
          {type}
          <select value={type} onChange={() => setType (event.target.value)}>
            <option value="Tous"> </option>
            <option value="activité sportif"> activité sportif </option>
            <option value="évènements"> évènements </option>
          </select>
        </div>
        <div>
          <span> environnement</span>

          <select
            value={environnement}
            onChange={event => {
              setEnvironnement (event.target.value);
            }}
          >
            <option value="Tous"> Tous </option>
            {environnements.map (env => {
              return <option key={env} value={env}> {env}</option>;
            })}
          </select>
        </div>
        <div>
          <span> place</span>

          <select
            value={place}
            onChange={event => {
              setPlace (event.target.value);
            }}
          >
            <option value="Tous"> Tous </option>
            {places.map (placee => {
              return <option key={placee} value={placee}> {placee}</option>;
            })}
          </select>
        </div>
        {type == 'évènements'
          ? <React.Fragment>
              <div>
                <span>Prix</span>
                {Price}
                <select
                  value={Price}
                  onChange={event => {
                    setPrice (event.target.value);
                  }}
                >
                  <option value="Tous"> Tous </option>
                  <option value="Free"> Ouvert</option>
                  <option value="Payant"> Payant </option>
                </select>
              </div>

              <div>
                <span>Intensity</span>

                <select
                  value={intensity}
                  onChange={event => {
                    setIntensity (event.target.value);
                  }}
                >
                  <option value="Tous"> Tous </option>
                  <option value="hight"> Elevée </option>
                  <option value="passable"> Moyenne </option>
                  <option value="low"> Faible </option>
                </select>
              </div>
            </React.Fragment>
          : <div />}
      </form>
    </div>
  );
}
export default Page;
