import React, {Component} from 'react'
import {Button, Jumbotron, Form} from 'reactstrap';
import TextInput from './TextInput'

class CreateUserForm extends Component {
    state = {
        email: '',
        username: '',
        password: ''
    }

    handleInputChange = (event) => {
        const target = event.target,
            value = target.value,
            name = target.name
        this.setState({
            [name]: value
        });
    }
    onSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.email, this.state.username, this.state.password);
        this.props.createUser(this.props.token, {
            email: this.state.email,
            username: this.state.username,
            password: this.state.password
        }).then(() => {
            this.props.history.push("/");
        });
    }

    render() {
        return (
            <Jumbotron className="col-4">
                <Form onSubmit={this.onSubmit}>
                    <h1 className='text-center'>Add User</h1>
                    <TextInput name="email" label="Email"
                               onChange={this.handleInputChange}/>
                    <TextInput name="username" label="Username"
                               onChange={this.handleInputChange}/>
                    <TextInput name="password" label="Password"
                               type="password"
                               onChange={this.handleInputChange}/>
                    <div className='text-center mt-5'>
                        <Button type="submit" color="primary" size="lg">
                            Add
                        </Button>
                    </div>
                </Form>
            </Jumbotron>
        )
    }
}

export default CreateUserForm;