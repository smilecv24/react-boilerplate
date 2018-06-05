import React from 'react';
import {Table} from 'reactstrap';

export default class UsersTable extends React.Component {
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
                {this.props.users.map(user =>
                    <tr key={user.id}>
                        <th scope="row">{user.id}</th>
                        <td>{user.username}</td>
                        <td>{user.first_name}</td>
                        <td>{user.last_name}</td>
                        <td>{user.email}</td>
                    </tr>)
                }
                </tbody>
            </Table>
        );
    }
}