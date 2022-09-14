const form = document.getElementById('form')
const input = document.getElementById('input')
const todosUL = document.getElementById('todos')

const todos = JSON.parse(localStorage.getItem('todos'))

if (todos) {
    todos.forEach(todo => addToDo(todo))

}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    addToDo()
})

function addToDo(todo) {
    let todoText = input.value

    if (todo) {
        todoText = todo.text
    }
    if (todoText) {
        const todoEl = document.createElement('li')
        const todoRem = document.createElement('i')
        todoRem.classList.add('fa-solid', 'fa-trash')
        if (todo && todo.completed) {
            todoEl.classList.add('completed')

        }
        todoEl.innerText = todoText
        todosUL.appendChild(todoEl)
        todoEl.appendChild(todoRem)

        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('completed')
            updateLS()
        })
        todoRem.addEventListener('click', () => {

            todoEl.remove()
            updateLS()
        })
        input.value = ''

        updateLS()
    }
}

function updateLS() {
    todosEl = document.querySelectorAll('li')

    const todos = []

    todosEl.forEach(todoEl => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed')
        })
    })

    localStorage.setItem('todos', JSON.stringify(todos))
}

