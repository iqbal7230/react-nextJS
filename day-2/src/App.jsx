import AuthToggle from './ components/AuthToggle';
import Counter from './ components/Counter'
import Parents from './ components/Parents';
import TodoList from './ components/TodoList';
import './App.css'


function App(){
  return(
    <>
      <Counter/>
      <Parents/>
      <TodoList/>
      <AuthToggle/>
    </>
  )
}
export default App;