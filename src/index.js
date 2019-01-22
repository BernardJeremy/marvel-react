import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Hero(props) {
  return (
    <tr>
      <td>{props.heroData.name}</td>
    </tr>
  );
}

class HeroesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heroesArray: [{ name: 'Iron Man' }, { name: 'Captain Marvel' }],
    };
  }
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Marvel's greatest heroes</th>
          </tr>
        </thead>
        <tbody className="heroes-list">
          {
            this.state.heroesArray.map((heroData, i) => {
              return <Hero heroData={ heroData }/>
            })
          }
        </tbody>
      </table>
    );
  }
}

// ========================================

ReactDOM.render(
  <HeroesList />,
  document.getElementById('root')
);
