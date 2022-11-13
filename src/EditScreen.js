import {Link, useLocation} from "react-router-dom";
import XLogo from "./xmark-solid.svg";
import {EditMember} from "./EditMember";

/**
 * Renders the Edit screen.
 *
 * @param props the list of Team Members
 * @returns {JSX.Element} the Edit screen: the header exit button and info, as well as the form
 */
export function EditScreen(props) {
    return (
        <div className="Edit">
            <header className="Edit-header">
                <Link to={"/"} style={{textDecoration: "none", color: "initial"}}>
                    <button>
                        <img className="button-logo" src={XLogo}
                             alt="cross logo for x button, which returns you to the team member
                              list screen"></img>
                    </button>
                </Link>
                <h1>Edit team member</h1>
                <p>Edit contact info, location, and role.</p>
            </header>
            <EditMember membersList={props.membersList}
                        memberId={useLocation().pathname.split("edit/").pop()}/>
        </div>
    );
}