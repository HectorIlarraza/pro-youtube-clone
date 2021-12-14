import { Component } from "react";
import AboutTeam from "./AboutTeam";
import { team } from "../../data/team.js";
import "./AboutPage.css";

class AboutPage extends Component {
    render() {
        const teamList = team.map((member) => (
            <AboutTeam key={member.id} member={member} />
        ))
        return(
            <section className="about-team">
             <h1>About Us</h1>
             <div className="teams-info">{teamList}</div>
            </section>
        )
    }
}

export default AboutPage;