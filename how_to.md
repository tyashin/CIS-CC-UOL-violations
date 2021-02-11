# How to contribute

## Contents
- [What kind of contribution we need](#what-kind-of-contribution-we-need)
- [Contribution workflow](#contribution-workflow) 


## What kind of contribution we need
*Last updated: February 11, 2021*

Your possible contribution to this project is very much appreciated. 
There are at least few areas you can contribute to:

- Facts of violations. If you are current/former student/alumni of Goldsmiths, UOL CIS/CC programs, please, consider to report facts of rules/policies infringement or an unfair treatment from the program administration. We are interested in objective facts that have some documentary evidence to back them up. Please, keep in mind that we may want to see this evidence (document copies, screenshots and e-mails) before we can post your information on our pages. We can assure you that none of these private pieces of information will be publicly disclosed without your written permission.

- Fact checking. There's a chance of incorrect information present on our pages. It can be harmful both to university reputation and to project maintainers' academic well-being. Please, feel free to correct us at any time by commenting on [web-page](https://uolviolationstracker.web.app), by starting a discussion on [GitHub project page](https://github.com/tyashin/CIS-CC-UOL-violations/discussions), by sending us [emails](mailto:uolviolationstracker@protonmail.com), or by making pull requests to this project repository.

- Help with resolving reported violations. You can [send formal complaints](https://london.ac.uk/current-students/complaints-and-appeals-procedure) to the university administration. You can write and sign public petitions, or maybe, you can come up with some other method of making things better. Please, inform us about your steps, so that we can update our [Kanban board](https://uolviolationstracker.web.app/#/board).

- Help us with grammar, punctuation and style. This project is maintained by non-native English speakers. We will do our best to avoid written mistakes but, unfortunately, this may not be enough. So, please help us with fixing these issues.

- Spread the information about this project and our study program state of affairs.


## Contribution workflow

File README.md in the root directory of the project contains the information about violations and the steps taken to resolve them. This file is then used by [project front-end](https://uolviolationstracker.web.app) to present the information in a more user friendly way. 

We use [markup language](https://www.markdownguide.org/) (GitHub flavor) for project .md files. For editing .md files you may wish to use one of online markdown editors, e.g. [Dillinger](https://dillinger.io/) or a standalone program such as [GhostWriter](https://wereturtle.github.io/ghostwriter/)

Preferable way of adding a new violation info (or updating an existing one) is by creating a pull request. If you are an IT-student you are, probably, familiar with Git and GitHub although, you may wish to refresh your knowledge of [pull request workflow](https://github.com/susam/gitpr). 

To contribute you will need to: 

1. Fork [this repository](https://github.com/tyashin/CIS-CC-UOL-violations)
2. Edit README.MD file inside the root directory
3. Create pull request
4. If later you wish to contribute again, you should first update your forked repo before going to the editing step. 

We have a unified format for writing down violation info (i.e. violation card) that could be used on project's Kanban board:

	### <Short description> (one or two sentences)
	
	**Date**: <Date in a DD MMMM YYYY format> 
	(e.g. 20 December 2020. Exact or approximate date of a violation)
	
	**Severity**: <Low/Medium/High> 
	(severity level is based on your subjective opinion).
	
	**Number of students affected**: <Exact number or rough estimate>
	
	**Description**: <Detailed description> 
	(please, provide proof links wherever possible)
	
	**Kanban status**: <Backlog/Analysis/Official complaint/Online petition/Resolved> 
	(refers to life cycle of a violation and also positions it on Kanban board)
	
	**Status change date**: <Date in a DD MMMM YYYY format> 
	(e.g. 21 December 2020. Date of the last status update) 
	
	---


Each new violation card should be added at the end of [List of cases](https://github.com/tyashin/CIS-CC-UOL-violations#list-of-cases) section of README.md file. Please, thoroughly copy the markdown formatting, as it will be automatically parsed by the front-end code.

If, for some reason, pull request workflow is not suitable for you, please, consider sending your information via [email](mailto:uolviolationstracker@protonmail.com).


