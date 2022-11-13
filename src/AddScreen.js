import {Link} from "react-router-dom";
import XLogo from "./xmark-solid.svg";
import {AddMember} from "./AddMember";

/**
 * Renders the Add screen.
 *
 * @param props the list of Team Members
 * @returns {JSX.Element} the Add screen: the header exit button and info, as well as the form
 */
export function AddScreen(props) {
    return (
        <div className="Add">
            <header className="Add-header">
                <Link to={"/"} style={{textDecoration: "none", color: "initial"}}>
                    <button>
                        <img className="button-logo" src={XLogo}
                             alt="cross logo for x button, which returns you to the team member
                              list screen"></img>
                    </button>
                </Link>
                <h1>Add a team member</h1>
                <p>Set email, location, and role.</p>
            </header>
            <AddMember membersList={props.membersList}/>
        </div>
    );
}