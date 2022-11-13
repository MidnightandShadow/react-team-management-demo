import './App.css';
import {ListScreen} from "./ListScreen";

/**
 * Returns the List screen with the given list of Team Members. The List screen serves as the
 * default "home screen".
 *
 * @param props the list of Team Members
 * @returns {JSX.Element} the List screen
 */
export function App(props) {

    return (
        <ListScreen membersList={props.membersList}/>
    );
}

