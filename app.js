// TODO
// let Cucumber = () => (
//   <div>Cucumbers</div>
// );

// let  Kale = () => (
//   <div>Kale</div>
// );

// let GroceryList = () => (
//   <div>
//     <h2>My Grocery List</h2>
//     <ul>
//       <Cucumber/>
//       <Kale/>
//     </ul>
//   </div>
// );

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    };
  }
  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }
  render() {
    let style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    };
    return (
      <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.item}</li>
    );
  }
}

let GroceryList = (props) => (

  <ul>
    {props.items.map(item =>
      <GroceryListItem item={'Cucumbers', 'Kale'} />
    )}
  </ul>
)

// let GroceryListItem = () => (

// );

let App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList items={['Cucumbers', 'Kale']}/>
  </div>
);

ReactDOM.render(<App/>, document.getElementById("app"));