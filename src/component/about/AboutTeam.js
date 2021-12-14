import "./AboutTeam.css";

const AboutTeam = ({ member }) => {
    const { firstName, lastName, title, profilePicture, description, url } = member;
    let name = `${firstName} ${lastName}`;

    return (
        <article className="team-info">
            <h3>{name}</h3>
            <h4>{title}</h4>
            <img src={profilePicture} width="200px" alt="profile-pic" />
            <h5>Bio</h5>
            <p>{description}</p>
            <a href={url}>{name}'s GitHub</a>
        </article>
    );
};

export default AboutTeam;