import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {TeamMember} from "./TeamMember";
import {useInput} from "./useInput";


/**
 * The form for, and functionality of, editing a currently listed Team Member.
 * Also supports deleting a Team Member. If a Team Member is deleted and there are Team Members
 * after it, the IDs of those future team members shifts appropriately (imperatively, as opposed
 * to with mutation).
 *
 * <p> Note that the same form validation rules from AddMember apply. </p>
 *
 * @param props the two properties passed are the membersList (list of Team Members) and the
 *              memberID (the ID/index in the list of the Team Member to edit).
 * @returns {JSX.Element} the HTML for the form component of the Edit screen (essentially,
 *                        everything except the screen's header info).
 */
export function EditMember(props) {
    const oldMember = props.membersList.at(props.memberId);

    const [firstName, resetFirstName] = useInput(oldMember.firstName);
    const [lastName, resetLastName] = useInput(oldMember.lastName);
    const [role, setRole] = useState(oldMember.role);
    const [phoneNumber, resetPhoneNumber] = useInput(oldMember.phoneNumber);
    const [emailAddress, resetEmailAddress] = useInput(oldMember.emailAddress);

    const editedMember = new TeamMember(props.memberId, firstName.value, lastName.value,
                                        role, phoneNumber.value, emailAddress.value);

    const navigate = useNavigate();

    const deleteMember = e => {
        props.membersList.splice(props.memberId, 1);

        // Ensures that if a member with an order/ID before other members is deleted and the
        // later members shift back, IDs change appropriately (they become the new corresponding
        // list index).
        for (let i = 0; i < props.membersList.length; i++) {
            if (props.membersList[i].id !== i) {
                const original = props.membersList[i];
                const adjustedId = new TeamMember(i, original.firstName, original.lastName,
                                                  original.role, original.phoneNumber,
                                                  original.emailAddress);
                props.membersList[i] = adjustedId;
            }
        }
        navigate("/");
    };

    const formSubmission = e => {
        e.preventDefault();
        props.membersList.splice(props.memberId, 1, editedMember);
        navigate("/");
    };
    return (
        <section className="Edit-forms">
            <form onSubmit={formSubmission}>
                <section className="Edit-info">
                    <h3>Info</h3>
                    <input {...firstName}
                           type="text"
                        // value={oldMember.firstName}
                           placeholder={oldMember.firstName}
                           pattern="^[{\p{L}}]+$"
                           required={true}
                           onInvalid={e => e.target.setCustomValidity("Please enter a name with"
                                                                      + " only letters.")}
                           onInput={e => e.target.setCustomValidity("")}

                    />
                    <input {...lastName}
                           type="text"
                        // value={oldMember.lastName}
                           placeholder={oldMember.lastName}
                           pattern="^[{\p{L}}]+$"
                           required={true}
                           onInvalid={e => e.target.setCustomValidity("Please enter a name with"
                                                                      + " only letters.")}
                           onInput={e => e.target.setCustomValidity("")}
                    />
                    <input {...phoneNumber}
                           type="tel"
                        // value={oldMember.phoneNumber}
                           placeholder={oldMember.phoneNumber}
                           pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                           required={true}
                           onInvalid={e => e.target.setCustomValidity("Please enter a phone "
                                                                      + "number with the "
                                                                      + "xxx-xxx-xxxx format.")}
                           onInput={e => e.target.setCustomValidity("")}
                    />
                    <input {...emailAddress}
                           type="email"
                        // value={oldMember.emailAddress}
                           placeholder={oldMember.emailAddress}
                           pattern="^[{\p{L}}0-9_!#$%&'*+/=?`{|}~^.-]+@instawork.com$"
                           required={true}
                           onInvalid={e => e.target.setCustomValidity("Please enter an email "
                                                                      + "address ending in "
                                                                      + "@instawork.com.")}
                           onInput={e => e.target.setCustomValidity("")}
                    />
                </section>
                <section className="Edit-role">
                    <h3>Role</h3>
                    <label>
                        <h4>Regular - Can't delete members</h4>
                        <input value={"regular"}
                               checked={role.toLowerCase() === "regular"}
                               onChange={e => setRole(e.target.value)}
                               type="radio"
                               className="userType"/>
                    </label>
                    <label>
                        <h4>Admin - Can delete members</h4>
                        <input value={"admin"}
                               checked={role.toLowerCase() === "admin"}
                               onChange={e => setRole(e.target.value)}
                               type="radio"
                               className="userType"/>
                    </label>
                </section>
                <div className="delete-and-save-buttons">
                    <button className="delete-button"
                            type="button" onClick={deleteMember}>Delete
                    </button>
                    <button className="save-button" type="submit">Save</button>
                </div>
            </form>
        </section>
    )
}
