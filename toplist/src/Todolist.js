import React from "react";



class Todolist extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            itens: [],
            text: ''
        }
    }
    handleChange = (e) =>{
        this.setState({text: e.target.value})
    }

    handleSubmit = (e) =>{
        //Interrompe o processo de recarregar a página
        e.preventDefault();
        //Impede que usuário insira itens vazios
        if(!this.state.text.length){
            alert('Digite alguma coisa para ser adicionado')
            return;
        }
        //Cria o item com o conteúdo digitado pelo usuário
        const item ={
            id: Date.now(),
            text: this.state.text
        }
        //Muda o estado do App concatenando o  item com items
        //limpando o text
        this.setState(state=>({
            itens:this.state.itens.concat(item),
            text:''
        }))
    }
    
    render(){
        return(
            <div>
                <h1>Todo List</h1>
                <h2>Tarefas</h2>
                <ul>
                    {this.state.itens.map(
                        item => (<li key={item.id}>{item.text}</li>)
                    )}
                </ul>
                <form onSubmit={this.handleSubmit}>
                    <input id="new-todo" onChange={this.handleChange} value={this.state.text}></input>
                    <br/>
                    <button>Adicionar</button>

                </form>
            </div>
        );
    }
}

export default Todolist;