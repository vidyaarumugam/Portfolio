function Card(props) {
    return (<>
        <div className="bg-gray-900 w-6/12 p-10 rounded-lg shadow-2xl shadow-gray-900/95">
            {props.children}
        </div>
    </>)
}

export default Card;