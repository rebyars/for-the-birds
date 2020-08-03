import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';

class ChirpForm extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            subject: props.chirp ? props.chirp.subject : '',
            content: props.chirp ? props.chirp.content : '',
            createdAt : props.chirp ? moment(props.chirp.createdAt) : moment(),
            errorMessage: undefined,
            uid: props.chirp ? props.chirp.uid : props.uid
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
                createdAt: this.state.createdAt.valueOf(),
                uid: this.state.uid
            });
        }
    };

    render() {
        return (            
            <form className="form" onSubmit={this.onSubmit}>
            {this.state.errorMessage && <p className="form__error">{this.state.errorMessage}</p>}
                <input 
                    type="text"
                    placeholder="Subject"
                    autoFocus
                    className={"text-input"}
                    value={this.state.subject}
                    onChange={this.onSubjectChange}
                />
                <textarea 
                    placeholder={"Chirp whatever your heart desires."}
                    className={"textarea"}
                    value={this.state.content}
                    onChange={this.onContentChange}
                ></textarea>
                <div>
                    <button className="button">Chirp It</button>
                </div>
            </form>
    )}
}

const mapStateToProps = (state) => ({
    uid: state.auth.uid
});

export default connect(mapStateToProps)(ChirpForm);