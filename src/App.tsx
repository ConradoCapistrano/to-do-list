import { useState } from "react";
import * as C from "./App.styled";
import { Item } from "./types/items";
import { ListItem } from "./components/ListItem";
import { AddArea } from "./components/AddArea";
import { Footer } from "./components/Footer";

const App = () => {

  {/*foi preciso criar uma lista para simplificar o projeto*/}
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Banho', done: false},
    { id: 2, name: 'Estudar', done: true},
  ]);

  {/*clonar a lista, add um novo item e setar*/}
  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    setList(newList);
  };

  const handleDeleteTask = (itemId: number) => {
    let newList = list.filter(item => item.id !== itemId);
    setList(newList);
};

const handleToggleTask = (itemId: number) => {
  let newList = list.map(item => {
    if (item.id === itemId) {
      return { ...item, done: !item.done };
    }
    return item;
  });
  setList(newList);
};

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        <AddArea onEnter={handleAddTask}/>

        {list.map((item, index)=>(
          <ListItem 
            key={index} 
            item={item}
            onDelete={ ()=> handleDeleteTask(item.id)}
            onToggle={() => handleToggleTask(item.id)}
          />
        ))}

      </C.Area>
      <Footer />
    </C.Container>

  );
};

export default App;