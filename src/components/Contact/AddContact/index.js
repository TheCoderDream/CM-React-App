import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextInputGroup from '../../UI/TextInputGroup';
import { addContact } from "../../../actions/contactActions";

class AddContact extends Component {

    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    };

    onChange = e => {
        this.setState({[e.target.name]: e.target.value});
    };

    onSubmit = e => {
        e.preventDefault();
        const {name, email, phone} = this.state;

        if(name === '') {
            this.setState({errors: {name: 'Name is required'}});
            return;
        }

        if(email === '') {
            this.setState({errors: {email: 'Email is required'}});
            return;
        }

        if(phone === '') {
            this.setState({errors: {phone: ''}});
            return;
        }

        const newContact = {
            name,
            email,
            phone
        };

        this.props.addContact(newContact);

        this.setState({
            name: '',
            phone: '',
            email: '',
            errors: {}
        });

        this.props.history.push('/');

    };

    render() {

        const { name, phone, email, errors} = this.state;

        return (
            <div className={'card mb-3'}>
                <div className={'card-header'}>Add new Contact</div>
                <div className={'card-body'}>
                    <form onSubmit={this.onSubmit}>
                        <TextInputGroup
                            label={'Name'}
                            onChange={this.onChange}
                            placeholder={'Enter name'}
                            value={name}
                            name={'name'}
                            error={errors.name}
                            type={'text'}/>
                        <TextInputGroup
                            label={'Phone'}
                            onChange={this.onChange}
                            value={phone}
                            placeholder={'Enter Phone'}
                            name={'phone'}
                            error={errors.phone}
                            type={'text'}/>
                        <TextInputGroup
                            label={'Email'}
                            onChange={this.onChange}
                            value={email}
                            placeholder={'Enter Email'}
                            name={'email'}
                            error={errors.email}
                            type={'text'}/>
                        <button
                            className={'btn btn-block btn-light'}
                            type={'submit'}>Add Contact</button>
                    </form>
                </div>
                
            </div>
        );
    }
}

AddContact.propTypes = {
    addContact: PropTypes.func.isRequired
};

export default connect(null, {addContact})(AddContact);