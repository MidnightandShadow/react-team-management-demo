import {AddScreen} from "./AddScreen";

/**
 * Returns the Add screen with the list of Team Members.
 *
 * @param props the given list of Team Members
 * @returns {JSX.Element} the Add screen
 */
export function Add(props) {
    return (
        <AddScreen membersList={props.membersList}/>
    );
}