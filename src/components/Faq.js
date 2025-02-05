import React, { useState } from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "What is a census?",
      answer:
        "Census refers to the act of counting all persons usually residing in the country within a specified period of time and collecting data related to personal and family details, and the term also refers to the overall process of processing, publishing and distributing the data thus collected.",
    },
    {
      question: "What kind of residence does the term 'habitation' often refer to?",
      answer:
        "Usually reside means the place where a person lives most or almost of the time. A person's usual residence may be the place where he or she has his or her own permanent home, a place where he or she temporarily resides, or the home of another person. ",
    },
    {
      question: "What data is available from the census?",
      answer:
        "The census provides information on many demographic, social and economic activities, such as how many people live in which areas and territories of Nepal, how many women, men, other genders, children, working age group and elderly people are there, what are their housing and facilities like, what are the occupations people do, what is the employment situation, what are the numbers of different castes, languages ​​and religions scattered in different places, what is their education and literacy status, what is the migration status, what is the birth and death status, how many people are physically or mentally disabled, how many people have gone abroad.",
    },
    {
      question: "Why is a census conducted?",
      answer:
        "The census provides basic data required for development work such as education, health, roads and other physical infrastructure, as well as for preparing programs related to old age allowance, disability allowance, widow and helpless allowance, special arrangements, and social services and security. ",
    },
    {
      question: "What is the main purpose of the census?",
      answer:
        "The main objective of the census is to provide information about the trends and characteristics of the population and to periodically provide demographic data and indicators to formulate plans, policies, and programs for public welfare.",
    },
    {
      question: "What is the importance of the census?",
      answer:
        "The census provides the most up-to-date data on the size, structure, distribution and growth of the country's population. Since it provides gender and inclusive data down to the smallest administrative unit, the ward level, it provides very useful information required to formulate and operate development work and targeted programs. Therefore, it is of great importance as it also provides data required to operate roads, bridges, schools, industries, health services, drinking water, electricity, irrigation, food supply, housing arrangements.",
    }, 
    {
      question: "Who is conducting census?",
      answer:
        "The Central Statistical Department, an official body under the National Planning Commission, Government of Nepal, is conducting the National Census 2078 in accordance with the National Census Operation and Management Order, 2076, published in the Government of Nepal's Gazette dated Shrawan 6, 2076.",
    }, 
    {
      question: "Who are the users of the data obtained from the census?",
      answer:
        "In a federal structure, the data obtained from the census serves as a source of basic data for the federal, provincial, and local governments and provides continuous feedback to the state. General users such as intellectuals, politicians, social workers, media workers, industrialists, businessmen, academics, population experts, researchers, sociologists, planners, economists, teachers, students, and general citizens use the data obtained from the census. In addition, the international community also uses census data.",
    },
    {
      question: "How people are counted in the census?",
      answer:
        "Since the census needs to collect data in a way that no one is left out and no one is repeated, the family is considered the unit of enumeration, and the person in the family in which he usually lives is counted from that family. Generally, for census purposes, a family is understood as a group of people who live under the same financial management, live under the same roof, and eat in a common kitchen. Both related and unrelated people who often live in the same family are counted from the same family.",
    },
    {
      question: "How to participate in the census?",
      answer:
        "The slogan of this census is “My Census, My Participation”. Therefore, we all have to voluntarily take responsibility for ensuring that we include the correct details of our household and family members in the census and cooperate in the census by answering the questions asked in the census correctly. In addition, we can encourage our neighbors, relatives, and friends to participate in the census by asking them whether the supervisors and enumerators have visited their homes.",
    },
    {
      question: "What is my calculation,my participation?",
      answer:
        "Although the National Census will be conducted under the leadership of the Government of Nepal and the Central Bureau of Statistics, it is not possible to complete it successfully without the full participation of all individuals, communities and organizations. The main aim of this slogan is to create a sense that the census is my census and to ensure that we are counted. Therefore, it is said that we can all participate by voluntarily recording our details and inviting our neighbors, friends and relatives to participate in the census and provide accurate details.",
    },
    {
      question: "Do I hane to answer all the question on the census?",
      answer:
        "According to the Statistics Act, 2015 and the National Census Operation and Management Order, 2076, it is stated that it is the responsibility and duty of all respondents to answer all the questions asked in the census. Therefore, one must answer each and every question asked in the census.",
    },
    
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", background: "#f5f5f5", padding: "50px 0" }}>
      {/* Curved Header with New Color */}
      <div style={{ position: "relative", background: "rgb(100, 159, 208)", color: "#fff", padding: "80px 20px 120px", textAlign: "center" }}>
        <h1 style={{ fontSize: "32px", fontWeight: "bold", textShadow: "2px 2px 8px rgba(0, 0, 0, 0.3)" }}>
          नेपालको जनगणना सम्बन्धित सामान्य प्रश्नहरू
        </h1>
        <p style={{ fontSize: "18px", marginTop: "10px", opacity: "0.9" }}>
          Get accurate population and demographic information from the Nepali Census.
        </p>

        <h2 style={{ fontSize: "22px", fontWeight: "bold", color: "#fff", marginTop: "15px" }}>
           FAQs
        </h2>

        <svg
          viewBox="0 0 1440 320"
          style={{ position: "absolute", bottom: "-1px", left: "0", width: "100%", height: "120px" }}
        >
          <path fill="#f5f5f5" d="M0,256L60,245.3C120,235,240,213,360,208C480,203,600,213,720,218.7C840,224,960,224,1080,218.7C1200,213,1320,203,1380,197.3L1440,192V0H0Z"></path>
        </svg>
      </div>

      {/* FAQ Section */}
      <div style={{ maxWidth: "800px", margin: "0 auto", marginTop: "-50px" }}>
        {faqs.map((faq, index) => (
          <div
            key={index}
            style={{
              marginBottom: "20px",
              borderRadius: "10px",
              boxShadow: "0 6px 10px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease",
              overflow: "hidden",
              background: "#fff",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            <div
              onClick={() => toggleFAQ(index)}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "#fff",
                color: "#333",
                padding: "20px 25px",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "20px",
                borderBottom: activeIndex === index ? "2px solid rgb(100, 159, 208)" : "none",
                transition: "background 0.3s ease",
              }}
            >
              {faq.question}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  width: "30px",
                  height: "30px",
                  color: activeIndex === index ? "rgb(100, 159, 208)" : "#333",
                  transition: "color 0.3s ease",
                }}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </div>
            {activeIndex === index && (
              <div
                style={{
                  background: "#f5f5f5",
                  color: "#333",
                  padding: "20px 25px",
                  fontSize: "18px",
                  borderTop: "1px solid #ddd",
                  transition: "max-height 0.5s ease",
                }}
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;