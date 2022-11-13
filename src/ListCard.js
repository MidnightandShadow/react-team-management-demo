import {Link} from "react-router-dom";

/**
 * Represents the contents of a single List screen "card"/entry of a Team Member, and links to
 * the corresponding Edit screen for the entry clicked on.
 *
 * @param teamMember a single Team Member from the list of Team Members
 * @returns {JSX.Element} a link to the correct Edit screen and the Team Member's entry info
 */
export function ListCard(teamMember) {
    const title = <p><strong>{teamMember.firstName + " " + teamMember.lastName}
        {teamMember.role === "admin" ? " (admin)" : ""}</strong></p>;
    const number = <p>{teamMember.phoneNumber}</p>;
    const email = <p>{teamMember.emailAddress}</p>;

    return (
        <Link to={"/edit/" + teamMember.id} style={{textDecoration: "none", color: "initial"}}>
            <section class="List-card">
                {title}
                {number}
                {email}
            </section>
        </Link>
    )
}