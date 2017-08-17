# react-pagination

Simple React pagination component

## Usage

Install

```
yarn add @salocreative/react-pagination
```

Include the component at the top of the component it's required in.

```
import Pagination from '@salocreative/react-pagination';
```

Basic implementation requirement

```
<Pagination
    total={ this.state.total }
    page={ this.state.page }
    changePage={ (e) => this.changePage(e) } />
```

Example implementation as follows

```
class Demo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      total: 52,
      page: 1,
      perPage: 25
    }
  }

  changePage(page) {
    return () => {
        this.setState({page: parseInt(page)});
    };
  }

  render() {
    return (
      <Pagination
          total={ this.state.total }
          page={ this.state.page }
          perPage={ this.state.perPage }
          changePage={ (page) => this.changePage(page) } />
    );
  }

}

render(<Demo />, document.getElementById('demo'));

```

You can also set some style overrides for the core colours in the component

```
const styles = {
  colour: '#000',
  activeColour: '#FFF',
  background: '#FFF',
  highlightBackground: '#CECECE',
  activeBackground: '#000'
};

<Pagination { ...this.props }
          total={ this.state.total }
          page={ this.state.page }
          perPage={ this.state.perPage }
          changePage={ (e) => this.changePage(e) }
          styles={ styles } />

```

## LICENSE

MIT
