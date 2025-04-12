import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CardComponent } from '../card/card.component';
import { Card } from '../_models/card';
import { Tag } from '../_models/tags';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  providers: []
})
export class PortfolioComponent {

  projects: Card[] = [
    {
      id: 1,
      name: 'Project Name 1',
      summary: "A command-line weather application providing real-time forecasts and 6-day predictions. Built with Go backend integrating WeatherAPI and ipinfo.io services, featuring location detection and custom city lookup.",
      description: "Forecast CLI delivers instant weather information directly to your terminal. The tool automatically detects your location via IP address or accepts custom locations through command-line flags. It displays comprehensive current conditions including temperature, humidity, and 'feels-like' temperature, along with a detailed 6-day forecast featuring sunrise/sunset times and precipitation probability.The system integrates WeatherAPI for meteorological data and ipinfo.io for geolocation services, packaged as an efficient lightweight Go application. Key features include: custom location lookup via the --location flag; temporary API key override using --apiKey (takes precedence over .env file configuration). This project is simple but efficient, it's terminal-native operation without browser dependencies.",
      projectLink: 'https://github.com/skxnsen/',
      tags: [Tag.GOLANG],
      pictures: ["../../assets/forecast_01.png", "../../assets/forecast_02.png"]
    },
    {
      id: 2,
      name: 'Project Name 2',
      summary: "A simulation platform for equipment metrics in oil & gas environments. Includes a Python-Golang backend integrated with RabbitMQ, PostgreSQL storage, and an Angular frontend. Developed and deployed using Docker and Docker Compose.",
      description: "The Oil & Gas Panel System is a real-time equipment monitoring solution. It simulates sensor data from oil pumps, processes it using RabbitMQ, and stores it in a PostgreSQL database. A Python-based data producer generates metrics like pressure, temperature, and speed, while a Go-based consumer handles data ingestion and provides API endpoints. The frontend, built with Angular and Chart.js, visualizes the metrics using charts and tables. Docker and Docker Compose are used for containerization and deployment, enabling comprehensive, real-time insights into equipment performance.",
      projectLink: 'https://github.com/skxnsen/',
      tags: [Tag.HTML5, Tag.CSS3, Tag.TYPESCRIPT, Tag.BOOTSTRAP, Tag.POSTGRESQL, Tag.DOCKER, Tag.DOCKERCOMPOSE, Tag.GOLANG, Tag.ANGULAR, Tag.RABBITMQ, Tag.PYTHON],
      pictures: ["../../assets/oil_01.png", "../../assets/oil_02.png", "../../assets/oil_03.png", "../../assets/oil_04.png", "../../assets/oil_05.png"]
    },
    {
      id: 3,
      name: 'Project Name 3',
      summary: 'This is a Python-based REST API using FastAPI and PostgreSQL for managing casino transactions and player operations. The project uses Pydantic, SQLAlchemy, Psycopg2. It also has e2e, integration and unit tests - all developed with Pytest. The deployment utilizes Dockerfiles and Docker Compose.',
      description: 'This project is a REST API designed to simulate services for casino users. The main goal was to create a backend system that manages player information, balances, and transactions in a virtual casino environment. The API provides various endpoints to manage players, balances, and transactions. These include creating, retrieving, updating, and deleting players; retrieving player balances; creating new bets; registering wins; rolling back transactions; and retrieving the transaction history of specific players. Additional endpoints are available for managing individual transactions. The API was developed using Python and the FastAPI framework, chosen for its speed and modern features. PostgreSQL was used as the relational database to ensure data integrity and reliability. The project includes end-to-end (e2e), integration, and unit tests to ensure the robustness and quality of the code. Pytest was the testing framework used for this purpose. Docker Compose was utilized to orchestrate two containerized services: the casino API (localhost:3001) and the PostgreSQL database (localhost:5433). This setup ensures easy deployment and consistency across different environments. The API is documented using Swagger, available at localhost:3001/docs. The project is organized into models, schemas, routes, services, repositories, and exceptions to ensure clean, modular, and maintainable code. It includes commit patterns, dependency management with Poetry, and follows best practices for API development and testing.',
      projectLink: 'https://github.com/skxnsen/',
      tags: [Tag.PYTHON, Tag.PYTEST, Tag.FASTAPI, Tag.PYDANTIC, Tag.POSTGRESQL, Tag.SQLITE, Tag.SQLALCHEMY, Tag.DOCKER, Tag.DOCKERCOMPOSE],
      pictures: ["../../assets/casino01.png", "../../assets/casino02.png"]
    },
    {
      id: 4,
      name: 'Project Name 4',
      summary: 'The Pokédex project is a comprehensive system developed to manage and provide detailed information about Pokémon. It consists of a backend API built with FastAPI and a frontend interface developed using Angular. Docker is used for deploy and Pytest for unit tests.',
      description: 'In this project, I aimed to build a comprehensive Pokédex API and a user-friendly frontend interface to enhance the Pokémon experience. My primary objective here was to showcase knowledge in a variety of tools and development services. These included the creation of an API with FastAPI (Python), handling robust data size and asynchronous requests; showcasing alphabetical order for the Pokémon list and data; designing a dark-theme interface for improved user experience; developing an intuitive frontend interface that allows for easy browsing and access to Pokémon information; exporting Pokémon data to an XML file; using Gitflow for version control and collaborative development; Pytest for unit testing to maintain code quality and reliability; and Docker and Docker-Compose for building and deploying the application efficiently. With these tools and objectives in place, the Pokédex Project was created and is ready for testing, use, and deployment.',
      projectLink: 'https://github.com/skxnsen/',
      tags: [Tag.PYTHON, Tag.PYTEST, Tag.FASTAPI, Tag.ANGULAR, Tag.BOOTSTRAP, Tag.CSS3, Tag.HTML5, Tag.DOCKER, Tag.DOCKERCOMPOSE, Tag.SQLITE],
      pictures: ["../../assets/pokedex_01.png", "../../assets/pokedex_02.png", "../../assets/pokedex_03.png", "../../assets/pokedex_04.png", "../../assets/pokedex_05.png", "../../assets/pokedex_06.png", "../../assets/pokedex_07.png"]
    },
    {
      id: 5,
      name: 'Project Name 5',
      summary: 'TeamTrack is an application for visualizing projects with "open" status to keep track of your customers and activities.',
      description: 'TeamTrack was developed by me with the aim of facilitating project, customer, and task management, offering an intuitive interface and requested functionalities, similar to a watchdog. The combination of Spring Boot on the backend and Vue.js on the frontend provides an efficient application that is easy to maintain. We hope this system meets your needs and facilitates tracking your daily activities.',
      projectLink: 'https://github.com/skxnsen/',
      tags: [Tag.VUEJS, Tag.TYPESCRIPT, Tag.HTML5, Tag.CSS3, Tag.BOOTSTRAP, Tag.JAVA, Tag.JPA, Tag.JDBC, Tag.JUNIT, Tag.MOCKITO, Tag.HIBERNATE, Tag.LOMBOK, Tag.SPRINGBOOT, Tag.SPRINGWEB],
      pictures: ["../../assets/teamtrack_06.png", "../../assets/teamtrack_07.png", "../../assets/teamtrack_08.png", "../../assets/teamtrack_09.png", "../../assets/teamtrack_10.png"]
    },
    {
      id: 6,
      name: 'Angular Web App',
      summary: 'A responsive and dynamic portfolio website built with Angular.',
      description: 'This portfolio is a dynamic and responsive web application built using Angular, showcasing my skills and projects as a software developer. The design and development of this portfolio aimed to provide a seamless user experience across different devices while highlighting various aspects of my professional journey. The potfolio has sections of home, about, education, portfolio projects and contact information. Key features are its dynamic content, the responsive design and modern aesthetics.',
      projectLink: 'https://github.com/skxnsen/',
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.HTML5, Tag.CSS3, Tag.BOOTSTRAP],
      pictures: ["../../assets/portfolio_01.png", "../../assets/portfolio_02.png", "../../assets/portfolio_03.png", "../../assets/portfolio_04.png", "../../assets/portfolio_05.png"]
    },

  ]


  constructor(private titleService: Title) {
    this.titleService.setTitle('MS Portfolio | Projects 📁')
  }

  trackById(index: number, project: Card): number {
    return project.id;
  }

}
