import styles from './Person.module.css'

function Person(props) {
    return (
        <div className={styles.card_container}>
            <img src={props.photo} alt={props.name} />
            <h2>Nome: {props.name}</h2>
            <p>Curso: {props.course}</p>
        </div>
    ) 
}

export default Person