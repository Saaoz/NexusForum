
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Home from './pages/Home';
import Category from './pages/Category';
import SubCategory from './pages/SubCategory';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Topic from './pages/Topic';
import Forum from './pages/Forum';
import Substitution from './pages/Substitution';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/forum/category' element={<Category/>} />
        <Route path='/forum/:id/subcategory' element={<SubCategory/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/topic' element={<Topic/>} />
        <Route path='/forum' element={<Forum/>} />
        <Route path='/404' element={<Substitution/>} />
      </Routes>
    </Router>
  );
}

export default App;


//je laisse en commentaire un markdwoneditor qui affiche en direct le résultat cela peut-être utile.

// class MarkdownEditor extends React.Component {
//   constructor(props) {
//     super(props);
//     this.md = new Remarkable();
//     this.handleChange = this.handleChange.bind(this);
//     this.state = { value: 'Bonjour, **monde** !' };
//   }

//   handleChange(e) {
//     this.setState({ value: e.target.value });
//   }

//   getRawMarkup() {
//     return { __html: this.md.render(this.state.value) };
//   }

//   render() {
//     return (
//       <div className="MarkdownEditor">
//         <h3>Entrée</h3>
//         <label htmlFor="markdown-content">
//           Saisissez du markdown
//         </label>
//         <textarea
//           id="markdown-content"
//           onChange={this.handleChange}
//           defaultValue={this.state.value}
//         />
//         <h3>Sortie</h3>
//         <div
//           className="content"
//           dangerouslySetInnerHTML={this.getRawMarkup()}
//         />
//       </div>
//     );
//   }
// }

// root.render(<MarkdownEditor />);