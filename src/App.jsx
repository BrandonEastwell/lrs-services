import Person from "./Person.jsx";

function ListItem({animal}) {
    return <p key={animal}>{animal}</p>
}

function List(props) {
    if (!props.animals) {
        return <div>Loading...</div>;
    }

    if (props.animals.length === 0) {
        return <p>No animals in list</p>
    }

    return (
        <ul>
            {
                props.animals.map((animal) => {
                    return <ListItem key={animal} animal={animal} />
                })
            }
        </ul>
    )
}

function App() {
    const animals = ["cat", "dog"];
    return (
    <>
        <h2>Animals</h2>
        <List animals={animals} />
        <Person />
    </>
  )
}

export default App
