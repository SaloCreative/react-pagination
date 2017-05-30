# react-pagination

Simple React pagination component

## Usage

Install

```
yarn add @salocreative/react-pagination
```

Include the component at the top of the component it's required in.

```
import Accordion from '@salocreative/react-pagination';
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

  changePage() {
    return (e) => {
      let page = parseInt(e.target.getAttribute('data-page'));
      this.setState({page});
    };
  }

  render() {
    return (
      <Pagination
          total={ this.state.total }
          page={ this.state.page }
          perPage={ this.state.perPage }
          changePage={ (e) => this.changePage(e) } />
    );
  }

}

render(<Demo />, document.getElementById('demo'));

```

You can also set some style overrides for the core colours in the component

```
const styles = {
  titleBackground: '#F7F8F9',
  titleColor: '#000',
  titleBackgroundActive: '#000',
  titleColorActive: '#fff',
  contentBackground: '#fff',
  contentColor: '#000'
};

<Accordion { ...this.props } data={ data } styles={ styles } />

```

## LICENSE

MIT
