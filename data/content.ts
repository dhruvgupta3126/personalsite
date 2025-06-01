export const contentData = [
  {
    title: "Work Experience",
    items: [
      {
        title: "Stegra / H2 Green Steel",
        subTitle: "Digital Intern",
        date: "June 2024 – August 2024",
        description:
          "Built a Mendix dashboard to track factory IoT data, applying time series analytics and anomaly detection. Integrated SCADA and PLC data via OPC UA and REST APIs, using InfluxDB and PostgreSQL.",
        link: "https://stegra.com/",
        skills: ["Mendix", "InfluxDB", "PostgreSQL", "OPC UA", "REST APIs"]
      },
      {
        title: "Wyzbo",
        subTitle: "Software Engineer Intern",
        date: "June 2023 – August 2023",
        description:
          "Created an NLP chatbot for traders using Python and Java microservices with OAuth. Deployed on Kubernetes with secure network policies and 70% test coverage via Mockito and unittest.",
        link: "https://wyzbo.com/",
        skills: ["Python", "Java", "OAuth", "Kubernetes", "Mockito", "unittest"]
      },
      {
        title: "Wyzbo",
        subTitle: "Software Engineer Intern",
        date: "June 2022 – August 2022",
        description:
          "Built a sandbox data pipeline on a wealth management platform with Python, Spark, and SQL. Generated synthetic trade data from 4 custodians and 30+ configurations. Frontend built using Java (Quarkus) and Amazon API Gateway.",
        link: "https://wyzbo.com/",
        skills: ["Python", "Spark", "SQL", "Quarkus", "Amazon API Gateway"]
      }
    ]
  },
  {
    title: "Leadership & Extracurricular",
    items: [
      {
        title: "Edinburgh University Indian Society",
        subTitle: "President (Re-elected, 2 years)",
        date: "Sep 2023 – Present",
        description:
          "Led 500-member society, organised Edinburgh’s largest Diwali event with 1,000+ attendees, raised over £15,000. Directed 15+ events including club nights, debates, screenings, and guest talks.",
      },
      {
        title: "Edinburgh University Indian Society",
        subTitle: "Direcrtor of Events",
        date: "2022 – 2024",
        description:
          "Received Saltire Awards (50 & 100 hours volunteering). Gold Medalist in Scottish Student Handball Tournament (2022)."
      }
    ]
  },
  {
    title: "Education",
    items: [
      {
        title: "University of Edinburgh",
        subTitle: "B.Sc. (Hons) Artificial Intelligence & Computer Science",
        date: "2021 – 2025",
        description: "Predicted 2:1. Coursework includes ML, NLP, Security, and Extreme Computing."
      }
    ]
  }
];


export type Content = {
  title: string;
  items: {
    title: string;
    subTitle: string;
    date: string;
    description?: string;
    link?: string;
    skills?: string[];
  }[];
};

export type ContentData = Content[];
