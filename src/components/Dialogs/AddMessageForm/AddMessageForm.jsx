import { Field, reduxForm } from "redux-form"
import { Textarea } from "../../common/FormsControls/FormsControls"
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}  name='newMessageText' placeholder='Enter your message' />
            </div>
            <div>
                <button>Send message</button>
            </div>
        </form>
    )
}

export default reduxForm({form: 'dialogAddMessageForm'}) (AddMessageForm);