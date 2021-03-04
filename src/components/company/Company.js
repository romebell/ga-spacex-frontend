import './Company.css' // same folder as Company component

const Company = (props) => {
    const { name, greeting, author } = props.company;

    return (
        <div className="company">
            <ul>
                <li>Name: {name}</li>
                <li>Greeting: {greeting}</li>
                <li>Author: {author}</li>
            </ul>
        </div>
    )
}

export default Company;