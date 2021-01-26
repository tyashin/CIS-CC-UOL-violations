# How to contribute

## Contents
- [What do we need](#what-do-we-need)
- [Main contribution workflow](#main-contribution-workflow) 


## What do we need

Your possible contributions to this project are very much appreciated. 
There are at least few areas you contribute to:

- Facts of violations. If you are current/former student or alumni of Goldsmiths, UOL CIS/CC programs, please, consider to report facts of rules/policies infringement or an unfair treatment from the program administration. We are asking for objective information which can be proven. Please, keep in mind that we may need some proofs - document copies, screenshots and e-mails before we can post your facts on our pages. We can assure you that none of this private information will be publically disclosed without your written permission.

- Fact checking. There's a possibility of incorrect information on our pages. It can be harmful both to university reputation and to project maintainers' academic well being. Please, feel free to correct us at any time by commenting on [web-page](https://uolviolationstracker.web.app), starting a discussion on [GitHub project page](https://github.com/tyashin/CIS-CC-UOL-violations/discussions), by sending us [e-mails](mailto:uolviolationstracker@protonmail.com). or by making pull requests to the [project repository](https://github.com/tyashin/CIS-CC-UOL-violations). 

- Help with resolving reported violations. You can send formal complaints to the university administration. You can write and sign public petitions, or maybe, you could come up with some other method of making things better. Please, inform us about your steps, so that we can update our [Kanban board](https://uolviolationstracker.web.app/#/board).

- Help us with grammar, punctuation and style. This project is maintained by non-native English speakers. We will do our best to avoid written mistakes but, unfortunately, this may not be enough. So, please help with fixing these.

- Spreading of information about this project.


## Main contribution workflow

File README.md in the root directory of the project contains the information about violations and the steps taken to resolve them. This file is then used by [project front-end](https://uolviolationstracker.web.app) to present the information in a more user friendly way. 

We use [markdown language](https://www.markdownguide.org/) (GitHub flavor) for project .md files. For editing .md files you may wish to use one of the online markdown editors, e.g. [Dillinger](https://dillinger.io/) or a standalone program such as [GhostWriter](https://wereturtle.github.io/ghostwriter/)

Preferred way of adding a new violation info (or tracing the existing one) is by creating a pull request. If you are an IT-student you, probably, familiar with Git and GitHub but you may wish to refresh your knowledge of [pull request workflow](https://github.com/susam/gitpr). 
To contribute you need to:
1. Fork this repo
2. Edit README.MD file inside the root directory
3. Create pull request
4. If later you wish to contribute again, you should first update your forked repo before going to the editing step.

We have a unified format for writing down violation info (i.e. violation card) that could be used on project's Kanban board:

1. ### <Short description> (one or two sentences)
**Date**: <Date in a DD MMMM YYYY format> (e.g. 20 December 2020. Exact or approximate date of a violation)
**Severity**: <Low\Medium\High> (severity level is based on your subjective opinion).
**Number of students affected**: <Exact number or rough estimate>
**Description**: <Detailed description> (please, provide proof links wherever possible)
**Kanban status**: <Backlog\Analysis\Official complaint\Online petition\Resolved> (refers to life cycle of a violation and also positions it on Kanban board)
**Status change date**: <Date in a DD MMMM YYYY format> (e.g. 21 December 2020. Date of the last status update) 
---

*Each new violation card should be added at the end of [List of cases](https://github.com/tyashin/CIS-CC-UOL-violations#list-of-cases) section of README.md file.*

*Please, thoroughly copy the markdown formatting, as it will be automatically parsed by the front-end code.*

*If, for some reason, pull request workflow is not suitable for you, please, consider sending your information via [e-mail](mailto:uolviolationstracker@protonmail.com).*


