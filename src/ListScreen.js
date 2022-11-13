import {Link} from "react-router-dom";
import PlusLogo from "./plus_solid.svg";
import {ListCards} from "./ListCards";

/**
 * Represents the List screen for the list of Team Members.
 * NOTE: The assumption was NOT made that entries must be unique in any or all values (besides the
 * ID value, which is taken care of "behind-the-scenes"). This could be incorporated in the
 * AddMember and EditMember functions/elements if desired.
 *
 * @param props the list of Team Members
 * @returns {JSX.Element} the List screen, including the header button to add, the header info,
 *                        and the "cards"/entries for each Team Member (which also function as
 *                        "buttons"/links to their Edit screen).
 */
export function ListScreen(props) {
    return (
        <div className="List">
            <header className="List-header">
                <Link to={"/add"} style={{textDecoration: "none", color: "initial"}}>
                    <button>
                        <img className="button-logo" src={PlusLogo}
                             alt="plus logo for add button, which leads to the 'add a team member'
                             screen"></img>
                    </button>
                </Link>
                <h1>Team members</h1>
                <p>You have {props.membersList.length} team member{(props.membersList.length > 1
                                                                   || props.membersList.length
                                                                    === 0) ? "s" : ""}.</p>
            </header>

            <ListCards teamMembers={props.membersList}/>

        </div>
    );
}