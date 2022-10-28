import Head from 'next/head'
import { useState } from 'react';
import { AiOutlinePlusCircle, AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'

import PageTitle from './../components/PageTitle';
import TextInput from '../components/TodoInput';
import TodoListContainer from '../components/TodoListContainer';
import TodoText from '../components/TodoText';

// Change SSR to SSG

export async function getStaticProps(context) {
  const res = [];
  return {
    props: { data: res }, // will be passed to the page component as props
  }
}

const Home = ({ data }) => {
  const [todo, setTodo] = useState("")

  const handleAddTodo = () => {
    console.log(`todo ${todo} added`);
  }

  const handleDelete = () => {
    console.log("todo deleted");
  }

  const handleEdit = () => {
    console.log("todo edited");
  }

  const handleTodoCheck = (e) => {
    let todoClasses = e.currentTarget.className;
    if (todoClasses.includes("checked")) { e.currentTarget.className = todoClasses.replace('checked',''); }
    else { e.currentTarget.className = `${e.currentTarget.className} checked` }
  }

  return (
    <>
      <Head>
        <title>TodoList App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* title */}
      <PageTitle align='center' variant='h4'>
        MyTodoList App
      </PageTitle>

      <TodoListContainer>

        {/* todo input */}
        <TextInput variant="standard" placeholder="add new todo" value={todo}
          onChange={(e) => setTodo(e.target.value)}
          inputIcon={<AiOutlinePlusCircle onClick={handleAddTodo} />} />

        {/* todo list */}
        <TodoText todoText="buy bread"
          onClick={(e) => handleTodoCheck(e)}
          todoIcon={<><AiOutlineDelete onClick={handleDelete} /><AiOutlineEdit onClick={handleEdit} /></>} />
      </TodoListContainer>
    </>
  )
}

export default Home