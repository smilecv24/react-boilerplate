import React from 'react';
import {Table, Button, Input} from 'reactstrap';
import {accessToken} from "../reducers";
import {connect} from "react-redux";
import {updateUser, deleteUser} from "../actions/data";

class UsersTable extends React.Component {

    state = {
        user: undefined,
        edit: false
    };

    handleEditClick = (user) => {
        this.setState({
            user: user,
            edit: true
        })
    };

    handleSaveClick = () => {
        this.props.updateUser(this.props.token, {
            id: this.state.user.id,
            username: this.state.user.username,
            first_name: this.state.user.first_name,
            last_name: this.state.user.last_name,
            email: this.state.user.email
        });

        this.setState({
            user: undefined,
            edit: false
        });
    };

    onChangeHandler = (event, option) => {
        event.preventDefault();

        let user = this.state.user;
        user[option] = event.target.value;

        this.setState({
            user: user
        })
    };

    handleDeleteClick = (user) => {
        console.log('delete', user.id);
        this.props.deleteUser(this.props.token, user.id);
    };

    render() {
        return (
            <Table striped responsive className='mt-3'>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Username</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                {this.props.users.map(user => {
                        return this.state.user === user && this.state.edit ? (
                            <tr key={user.id}>
                                <th scope="row">{user.id}</th>
                                <td>
                                    <Input name="username" placeholder="Username"
                                           onChange={(event) => this.onChangeHandler(event, 'username')}
                                           value={this.state.user.username}/></td>
                                <td><Input name="first_name" placeholder="First Name"
                                           onChange={(event) => this.onChangeHandler(event, 'first_name')}
                                           value={this.state.user.first_name}/>
                                </td>
                                <td><Input name="last_name" placeholder="Last Name"
                                           onChange={(event) => this.onChangeHandler(event, 'last_name')}
                                           value={this.state.user.last_name}/></td>
                                <td>
                                    <Input type="email" className="d-inline col-8" name="email" placeholder="Email"
                                           onChange={(event) => this.onChangeHandler(event, 'email')}
                                           value={this.state.user.email}/>
                                    <Button color="success" className="float-right"
                                            onClick={() => this.handleSaveClick()}>Save</Button>
                                </td>
                            </tr>) : (
                            <tr key={user.id}>
                                <th scope="row">{user.id}</th>
                                <td>{user.username}</td>
                                <td>{user.first_name}</td>
                                <td>{user.last_name}</td>
                                <td>{user.email}
                                    <span className="float-right">
                                    <Button color="info"
                                            onClick={() => this.handleEditClick(user)}>Edit</Button>
                                    <Button color="danger" className="ml-1"
                                            onClick={() => this.handleDeleteClick(user)}>Delete</Button>
                                </span>
                                </td>
                            </tr>
                        )
                    }
                )
                }
                </tbody>
            </Table>
        );
    }
}

const mapStateToProps = (state) => {
    return ({
        token: accessToken(state)
    })
};

const mapDispatchToProps = (dispatch) => ({
    updateUser: ((token, user) => dispatch(updateUser(token, user))),
    deleteUser: ((token, pk) => dispatch(deleteUser(token, pk))),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersTable);