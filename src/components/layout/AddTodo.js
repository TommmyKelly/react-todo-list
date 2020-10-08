import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title: ''
    }

    onSubmit = (e) =>{
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: ''})
    }

    onChange = (e) => this.setState( {title: e.target.value} );

    

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex',margin:'10px 0'}}>
                <input style={{ flex: '10', padding: '5px' }} type="text" name="title" placeholder="Add Todo" value={this.state.title} onChange={this.onChange}/>
                <input type="submit" value="+" className="btn" style={{ flex: '1',fontWeight:'bold',fontSize:'1.5rem' }}/>
            </form>
            
        )
    }
    
}

export default AddTodo
