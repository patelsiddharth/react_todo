import ToDo from './components/Todo';
import Header from './components/Header';
import './App.css';

export default function App() {
    return (
        <div className='todocontainer'>
            <Header />
            <ToDo />
        </div>
    )
}