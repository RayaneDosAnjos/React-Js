const root = document.querySelector('#root')

const element = React.createElement('h1',{id: "Título Principal"}, "Hello World")
ReactDOM.render(element, root)