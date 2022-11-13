import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useInput} from "./useInput";
import {TeamMember} from "./TeamMember";

/**
 * The form for, and functionality of, adding a new Team Member to the list.
 *
 * <p> Note that the following is assumed for form validity:
 * The first and last name can only be uppercase or lowercase unicode letter characters,
 * the phone number must be in the US format xxx-xxx-xxxx (where x is a digit [0-9],
 * and the email address must end in "@instawork.com" </p>.
 *
 * @param props the only property passed is the membersList (list of team members)
 * @returns {JSX.Element} the HTML for the form component of the Add screen (essentially,
 *                        everything except the screen's header info).
 */
export function AddMember(props) {
    const [firstName, resetFirstName] = useInput("");
    const [lastName, resetLastName] = useInput("");
    const [role, setRole] = useState("regular");
    const [phoneNumber, resetPhoneNumber] = useInput("");
    const [emailAddress, resetEmailAddress] = useInput("");

    const navigate = useNavigate();

    const formSubmission = e => {
        e.preventDefault();
        const newMember = new TeamMember(props.membersList.length, firstName.value, lastName.value,
                                         role, phoneNumber.value, emailAddress.value);

        props.membersList.push(newMember);
        resetFirstName();
        resetLastName();
        setRole("regular");
        resetPhoneNumber();
        resetEmailAddress();
        navigate("/");
    };
    return (
        <section className="Add-forms">
            <form onSubmit={formSubmission}>
                <section className="Add-info">
                    <h3>Info</h3>
                    <input {...firstName}
                           type="text"
                           placeholder="first name"
                           pattern="^[{\p{L}}]+$"
                           required={true}
                           onInvalid={e => e.target.setCustomValidity("Please enter a name with"
                                                                      + " only letters.")}
                           onInput={e => e.target.setCustomValidity("")}

                    />
                    <input {...lastName}
                           type="text"
                           placeholder="last name"
                           pattern="^[{\p{L}}]+$"
                           required={true}
                           onInvalid={e => e.target.setCustomValidity("Please enter a name with"
                                                                      + " only letters.")}
                           onInput={e => e.target.setCustomValidity("")}
                    />
                    <input {...phoneNumber}
                           type="tel"
                           placeholder="888-888-8888"
                           pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                           required={true}
                           onInvalid={e => e.target.setCustomValidity("Please enter a phone "
                                                                      + "number with the "
                                                                      + "xxx-xxx-xxxx format.")}
                           onInput={e => e.target.setCustomValidity("")}
                    />
                    <input {...emailAddress}
                           type="email"
                           placeholder="name@instawork.com"
                           pattern="^[{\p{L}}0-9_!#$%&'*+/=?`{|}~^.-]+@instawork.com$"
                           required={true}
                           onInvalid={e => e.target.setCustomValidity("Please enter an email "
                                                                      + "address ending in "
                                                                      + "@instawork.com.")}
                           onInput={e => e.target.setCustomValidity("")}
                    />
                </section>
                <section className="Add-role">
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
                <button className="save-button">Save</button>
            </form>
        </section>
    )
}