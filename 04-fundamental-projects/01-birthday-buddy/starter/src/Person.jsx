
const Person = ({ id, name, age, image }) => {
    return (
        <div>
            <img src={image} alt={name} />
            <h4>{name}</h4>
            <h4>{age}</h4>
        </div>
    )
}

export default Person