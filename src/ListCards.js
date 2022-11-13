import {ListCard} from "./ListCard";

/**
 * Renders a mapping of each Team Member in the given list of Team Members to a ListCard component
 * in an <li> of a <ul> for the List screen's member cards/entries.
 *
 * @param props the list of Team Members.
 * @returns {JSX.Element} a <ul> of each Team Member's entry.
 */
export function ListCards(props) {
    return (
        <ul className="List-cards">
            {props.teamMembers.map(teamMember => (<li>
                {ListCard(teamMember)}
            </li>))}
        </ul>
    );
}