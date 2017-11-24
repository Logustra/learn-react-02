import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import moment from 'moment';

import { addReminder, deleteReminder, clearReminder } from "../actions";

import '../style.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '',
            dueDate: ''
        };
    }

    addReminder(text, dueDate) {
        this.props.addReminder(text, dueDate);
    }

    deleteReminder(id) {
        this.props.deleteReminder(id);
    }

    renderReminder() {
        const { reminders } = this.props;
        return (
            <ul className="list-group">
                {
                    reminders.map( reminder => {
                        return (
                            <li className="list-group-item" key={reminder.id}>
                                <div className="list-item">
                                    <div>{reminder.text}</div>
                                    <div><em>{moment( new Date(reminder.dueDate)).fromNow()}</em></div>
                                </div>
                                <div 
                                    className="list-item delete-button"
                                    onClick={() => this.deleteReminder(reminder.id)}>
                                        &#x2715;
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

    render() {
        return (
            <div className="App">
                <div className="title">The Reminder</div>
                <div className="form-inline">
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control"
                            placeholder="I have to..."
                            onChange={event => this.setState({text: event.target.value})}
                        />
                        <input 
                            type="datetime-local" 
                            className="form-control"
                            onChange={event => this.setState({dueDate: event.target.value})}/>
                        <button 
                            className="btn btn-success"
                            onClick={() => this.addReminder(this.state.text, this.state.dueDate)}>
                                Add Reminder
                        </button>
                        <button 
                            className="btn btn-danger"
                            onClick={() => this.props.clearReminder()}>
                                Clear Reminder
                        </button>
                        {this.renderReminder()}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        reminders: state
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addReminder, deleteReminder, clearReminder }, dispatch);
}

export default connect( mapStateToProps, mapDispatchToProps)(App);