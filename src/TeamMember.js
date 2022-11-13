/**
 * The class for the internal representation of a Team Member: each Team Member has an id
 * (representing where they are in the members/list of Team Members), a first name, a last name,
 * a role (in practice, either an "admin" or a "regular" member), a phone number, and an email
 * address.
 */
export class TeamMember {
    constructor(id, firstName, lastName, role, phoneNumber, emailAddress) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.role = role;
        this.phoneNumber = phoneNumber;
        this.emailAddress = emailAddress;
    }
}