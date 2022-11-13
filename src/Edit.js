import {EditScreen} from "./EditScreen";

/**
 * Returns the Edit screen with the list of Team Members.
 *
 * @param props the given list of Team Members
 * @returns {JSX.Element} the Edit screen
 */
export function Edit(props) {
    return (
        <EditScreen membersList={props.membersList}/>
    );
}