import "./AboutTeam.css";

const AboutTeam = ({ member }) => {
    const { firstName, lastName, title, profilePicture, description, url } = member;
    let name = `${firstName} ${lastName}`;

    return (
        <article className="team-info-container">
            <div className="about-us">
                <h3 className="about-name">{name}</h3>
                <h4 className="about-title">{title}</h4>
                <div>  
                    <img className="about-img" src={profilePicture} width="230px" alt="profile-pic" />
                </div>

                <a className="about-url" href={url}>{name}'s GitHub</a>
            </div>
            <div className="bio">
                <h5 className="about-bio">Bio</h5>
                <p className="about-description">{description}</p>
            </div>  
        </article>
    );
};

export default AboutTeam;