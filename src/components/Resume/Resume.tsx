import React from 'react'
// Styles
import './resume.scss'

export default function Resume() {
	// const downloadResume = () => {
	// 	console.log('download')
	// 	const a: HTMLAnchorElement = document.createElement('a')
	// 	a.download = 'Freddy Silber\'s Resume';
	// 	a.href = resumeUrl.toDataURL(`image/jpeg`, 1);
	// 	a.click();
	// }

	return (
		<div className="container">
			{/* <button className="button is-primary is-light" onClick={downloadResume}>Download</button> */}
			<div className="resumeContainer">
				<h1 className="bold">Freddy Silber</h1>
				<p>970-531-0297 | freddy.silber@gmail.com</p>
				<p>LinkedIn | Github | Blog | Portfolio | YouTube</p>
				<h1 className="centerText marginTop bold">Software Engineer</h1>
				<hr />
				<p>
					Experienced in Ruby on Rails, Java, Apex and JavaScript based programming.
					Comfortable with large companies and enterprise level data as well as a fast paced startup environment.
					Possess strong skills in team-building, solutioning, collaboration and communication, B2B/E2E solutions,
					and project management skills to help high tech and software companies meet their business goals on an efficient timeline.
					Work well with peers and clients to gather information in a friendly manner to meet deadlines. Avid snowboarder who loves being outdoors in the mountains.
				</p>
				<h1 className="centerText marginTop bold">Technical Skills</h1>
				<hr />
				<p>
					Angular, Salesforce, Ruby, Ruby on Rails, SQL, Javascript, React, Redux, Redux Thunk, HTML5, CSS, Rake, Apex, Database Triggers,
					Automation/ Process Automation, Java, Lightning Components, Visualforce Pages, Git, Github, reCharts, D3.js, MatLab,
					Project Management, B2B Solutions, Salesforce, Adobe Illustrator, Microsoft Excel, Final Cut Pro, Bootstrap
				</p>
				<h1 className="centerText marginTop bold">Technical Projects</h1>
				<hr />
				<p>
					<span>React Redux Portfolio Project / Portfolio Site - Github | Demo</span>
					<br />
					Portfolio website/ web application to learn about my background and projects
					<ol>
						<li>Utilized React components and React router to create a multi-tab single page application to teach viewers about me</li>
						<li>Implemented a Rails API backend to persist data in a database from user input and information gathering</li>
						<li>Amplified the UI with React-bootstrap to brand with consistent styling and create a friendly user experience</li>
					</ol>
				</p>
				<p>
					<span>Rails Address Book - Github | Demo</span>
					<br />
					Web application for account and project management using an an address book with personal contacts for clients
					<ol>
						<li>Programmed a 3rd party login system using OAuth in Ruby to allow users to login via Github</li>
						<li>Produced a UI from scratch where users can manage personal or professional contacts and accounts</li>
						<li>Incorporated the ability to relate multiple records using Active Record associations so user data can be organized</li>
						<li>Designed a Sqlite3 database schema and coded all the database logic for multiple models and relationships</li>
						<li>Interacted with my Rails API taking advantage of all CRUD requirements across all models in my database</li>
					</ol>
				</p>
				<p>
					<span>Rails Address Book - Github | Demo</span>
					<br />
					Web application for account and project management using an an address book with personal contacts for clients
					<ol>
						<li>Programmed a 3rd party login system using OAuth in Ruby to allow users to login via Github</li>
						<li>Produced a UI from scratch where users can manage personal or professional contacts and accounts</li>
						<li>Incorporated the ability to relate multiple records using Active Record associations so user data can be organized</li>
						<li>Designed a Sqlite3 database schema and coded all the database logic for multiple models and relationships</li>
						<li>Interacted with my Rails API taking advantage of all CRUD requirements across all models in my database</li>
					</ol>
				</p>
				<h1 className="centerText marginTop bold">Experience</h1>
				<hr />
				<p>
					<span>Cloud Coach | Fort Collins, Colorado</span>
					<br />
					Product Specialist | Solutions Specialist | Developer 04/2018 - Present
					<br />
					<ol>
						<li>Maintain a Lightning Component and Apex library to shorten component build times from 2 weeks to 4 days</li>
						<li>Listen to client needs to create and maintain a code base for custom implementations of business processes</li>
						<li>Refactor database triggers to reduce time complexity from O(n^2) to O(n), removing errors at runtime and enabling clients to process large batches of records safely within Salesforce processing limits</li>
						<li>Prioritize peer code reviews and unit testing to reduce deployment and integration errors by 90%</li>
					</ol>
				</p>
				<p>
					<span>The Foundry Cinema and Bowl | Winter Park, Colorado</span>
					<br />
					Sales, Chef, Front of the house, Back of the house 01/2013 - 01/2018
					<br />
					<ol>
						<li>Assisted in front of house and back of the house operations prioritizing areas that needed the most help</li>
						<li>Onboarded over 10 new employees to build an efficient work process and achieve greater numbers in sales</li>
						<li>Fulfilled inventories in weekly order lists to keep the kitchen and concessions well stocked</li>
						<li>Enforced positive work environment 5 nights a week to keep staff and returning customers pleased with our service</li>
					</ol>
				</p>
				<h1 className="centerText marginTop bold">Education</h1>
				<hr />
				<p>
					<span>Flatiron School - Online</span>
					<br />
					Full Stack Web Development, Software Engineering, Ruby on Rails and JavaScript program         05/2019 - 05/2020
				</p>
			</div>
		</div>
	)
}