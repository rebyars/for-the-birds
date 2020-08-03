import React from 'react';
import moment from 'moment';

export default class ChirpForm extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            subject: props.chirp ? props.chirp.subject : '',
            content: props.chirp ? props.chirp.content : '',
            createdAt : props.chirp ? moment(props.chirp.createdAt) : moment(),
            errorMessage: undefined
        };
    };

    onSubjectChange = (e) => {
        const subject = e.target.value;
        this.setState(() => ({ subject }));
    };

    onContentChange = (e) => {
        const content = e.target.value;
        this.setState(() => ({ content }));
    };

    onSubmit = (e) => {
        e.preventDefault();

        if(!this.state.subject || !this.state.content){
            this.setState(() => ({errorMessage: 'Please provide neccesary fields for the chirp'}));
        }else{
            this.setState(() => ({errorMessage: undefined}));
            this.props.onSubmit({
                subject: this.state.subject,
                content: this.state.content,
                createdAt: this.state.createdAt.valueOf()
            });
        }
    };

    render() {
        return (
        <div>
            {this.state.errorMessage && <p>{this.state.errorMessage}</p>}
            <form onSubmit={this.onSubmit}>
                <input 
                    type="text"
                    placeholder="Subject"
                    autoFocus
                    value={this.state.subject}
                    onChange={this.onSubjectChange}
                />
                <textarea 
                    placeholder={"Chirp whatever your heart desires."}
                    value={this.state.content}
                    onChange={this.onContentChange}
                ></textarea>
                <button>Chirp It</button>
            </form>
        </div>
    )}
}