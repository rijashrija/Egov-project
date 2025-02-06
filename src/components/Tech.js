import React, { useState } from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "Introduction to Census",
      answer: [
        "1. When did the process of conducting the census begin in Nepal?", 
        "Answer: The census process in Nepal started in B.S. 1968 (A.D. 1911).",
        <br />,
        "2. At what intervals is the census conducted in Nepal?", 
        "Answer: The census is conducted in Nepal every 10 years.",
        <br />,
        "3. When is the modern census considered to have started in Nepal?", 
        "Answer: The censuses conducted since B.S. 2018 (A.D. 1961/62) are considered modern (scientific) censuses in Nepal.",
        <br />,
        "4. What does a census mean?", 
        "Answer: A census is the systematic process of counting all individuals residing in a country at a specific time, including demographic, social, and economic data collection.",
        <br />,
        "5. Why is the census regarded as an important national campaign?", 
        "Answer: It is crucial for planning and allocating resources for economic and social development."
      ]
    },
    {
      question: "Legal Basis for Conducting the Census",
      answer:[
        "1. What are the main legal bases for conducting the National Census 2021?",
        "Answer: The main legal bases for conducting the National Census 2021 are as follows:",<br/>,
        "1.Statistics Act, 2015",<br/>,
        "2.National Census Conduct and Management Order, 2019",<br/>,
        "3.Administrative Management and Economic Facilitation Guidelines, 2019",<br/>,
      ]
    },
       
    {
        question: "Definitions and Concepts of the Terms Used in the Census",
        answer: [
          "1. What is meant by a census area?",
          "Answer: For the purpose of the National Census 2078, a census area refers to a geographic unit or area that a census enumerator needs to count during the census period. The census area is determined based on the estimated number of households or population to be counted. A census area can be a whole ward or a division of larger wards into multiple census areas.",
          <br />,
          "2. What is meant by house?",
          "Answer: For the purpose of the National Census 2078, a house is generally understood as a structure built for residential or other uses, consisting of one or more rooms or floors with walls and a roof. The house can vary in size, type, or kind, but it must have a basic structure. If there is a single foundation, walls, and roof with a single door and staircase, it is considered one house. For example, in an apartment building where multiple families own separate flats, it is still considered one house.",
          <br />,
          " Houses are categorized as follows:", <br />,
          "1.Residential",
          "2.Commercial",
        "3.Government",
        "4.Educational",
        "5.Health-related",
        "6.Industry and factories",
        "7.Banks and financial institutions",
       "8. Institutional",
             "9.Hotels and inns",
       "10.Cattle sheds/stables/warehouses",
       "11.Other uses",
         "12.Vacant houses",
          <br />,
          "3.What is meant by a census house?", 
          "Answer:For the purpose of the National Census 2078, a census house is any house, regardless of its use, in which at least one family resides. Even if a house is used for business purposes, if a family lives there, it is considered a census house.",
          <br />,
          "4.What is meant by frequent residence?", 
          "Answer:Frequent residence refers to the place where a person mostly or usually resides. This can be their permanent home or a temporary residence. If it is unclear where a person frequently resides, the place where they have lived for six months or more in the last year, or where they plan to live in the future, is considered their residence.",
          <br/>,

          "5. What is meant by family?",
      
        "Answer: For the purpose of the National Census 2078, a family generally refers to a group of individuals living together who manage their household with a common income and expenditure, and eat together in the same kitchen. The concept of a family is based on income-expenditure and the kitchen arrangement. Even if individuals sleep in separate rooms or eat separately (e.g., in a hotel, office canteen, etc.), if they manage the household together with a shared income and expenditure, they are considered one family.",
        <br />,
        "6.What is meant by family head?", 
        "Answer: For the purpose of the National Census 2078, the family head refers to the person who manages the daily tasks, expenses, and household activities, i.e., the person who takes care of the household chores. The family head must be at least 10 years old.",
        <br />,
        "7. Who should be the respondent?", 
        "Answer:For the purpose of the National Census 2078, the respondent is the person who provides the information about the family, such as the head of the family, the family head, or the person responsible for keeping the household records. Children or individuals with little information about the family should not be considered as respondents." ,
        <br />,
        "8.How are institutional families counted in the census?", 
        "Answer:For institutional families, the individual details of people living in groups are filled by the enumerator with the help of the institution. However, for larger institutional families, a reliable person from the institution will be included in the training to assist in the census process.",
        <br />,
        "9.How are homeless and nomadic people counted in the census?", 
        "Answer:Homeless and nomadic people are counted on the last day of the census, i.e., the 9th of Mangsir. They are counted wherever they are found, and enumerators should ensure they are not recounted by informing them clearly.",<br/>,


        "10. How are foreign diplomats working in Nepal counted?", 
        "Answer: Foreign diplomats working in Nepal are not counted in the census. However, foreign diplomats who reside outside the embassy premises should be counted. If any Nepali citizens live as a separate family within the diplomatic mission premises, they should also be counted.",
        <br />,
        "11. How are Nepali diplomats working abroad counted in the census?", 
        "Answer: Nepali diplomats residing in foreign missions are considered as residing in Nepal for census purposes. The census will be conducted for them through electronic means (E-Census). If their families reside in Nepal, their information will be collected as part of the census, and the number of persons missing from the embassy will be recorded?",<br/>,



        "12.How are foreign individuals and families living in Nepal counted in the census? ", 
        "Answer: Foreign individuals living in Nepal, whether for work or business, should be counted in the census.",
        <br />,
        "13.How are refugee families living in refugee camps in Nepal counted?= ", 
        "Answer: Refugees living in camps in Nepal, such as Bhutanese or Tibetan refugee camps, are not counted if the camps fall within the enumerator's area. However, if refugees live independently outside these camps and work or run a separate household, their details should be collected from the place where they reside..",
        <br />,
        "14. What is meant by counting special types of people in the census?", 
        "Answer:Special attention is given to counting minority ethnic groups, people living in remote areas, persons with disabilities, and sexual and gender minorities. These groups may not always wish to provide information, so careful attention should be paid to their inclusion in the census.",<br/>,
      

        ]
    },
    {
      question: "Home and Household Listings - Family and Definitions",
      answer: [
        "1.What details are collected in the house and household listing form?",
        "Answer:The house and household listing form collects details such as the number of floors of the house, the use of the house, the number of family members living frequently in the family (female, male and other gender), the details related to agriculture of the family, the construction of residential houses under the government grant, the number of family members who have accounted in banks and financial institutions, the number of family members who have received vocational education or training, whether the banks and financial institutions have taken loan facilities. ",
        <br />,
        "2. When is the details in the house and household listing form collected?",
        "Answer: Details in the house and household listing form. It is collected in a total of 20 days from September 30 to Ashwin 18, 2078 BS.",<br/>,
       
       
        "3.When listing houses and households, in which houses is the census house serial number written?", 
        "Answer: The census collects details of all types of households. Not all the houses collected in this way may be inhabited by families. In the census, the number of households is written only in the houses inhabited by the family.",
        <br />,
        "4.What are the uses of details obtained from the House and Household Listing Form?", 
        "Answer:The details obtained from the house and household listing form are used to divide the work of the enumerators for the original census, prepare a sample selection list for the national agricultural census, the number of livestock across the country, the use of houses, the number of sexual and gender minorities, access to banks and financial institutions (accounts and farms), the number of people with vocational and technical education or training, the number of families built with government grants.",
        <br/>,

        "5. If a house has two floors full and there is only one room at the top, then what is the number of floors of such a house?",
    
      "Answer:  If that one room of the house is built only to cover the stairs, then the house should be written as 2 floors or else it will be 3 floors. This means that if there is only one room on the top of a house, it should be written as the number of floors on one floor.",
      <br />,
      "6.Which houses fall under residential houses?", 
      "Answer: If only people or families are used to live in a house, then such houses fall under the residential house, while people live and are used in a mixed way, then in order to separate the use of such house, the maximum part of that house should be written in what is in use. If a mixed-use house is used for human habitation, then such a house should be used under the residential category.",
      <br />,
      "7.  If there is a business as well as a family living in a house, then how to separate the use of the house in such a situation?", 
      "Answer:If there is a business as well as a family living in a house, then such a house should find out what has been used in the business and write the use of the house in which the larger part has been used." ,
      <br />,
      "8.If a government office is rented in a person's house and no family lives in that house, then what is the use of such a house?", 
      "Answer:Since the houses in Nepal are being used at present, it is important to know what the house is being used for, rather than who the house belongs to, so the use of that house is used by the government office on what condition, rather than the condition on which the government office is currently using that house, the use of that house is government.",
      <br />,
      "9.If the government has built a house for the government employees and the employees live in it with the family, then what will be the use of such a house?", 
      "Answer:Since the house is used as a residence by government employees, the use of that house should be kept under residential areas.",<br/>,


      "10.Since the house is used as a residence by government employees, the use of that house should be kept under residential areas.", 
      "Answer:Since census people are often counted from the place where they live, the security personnel who eat and live in a house of a government office should be counted from that place i.e. from that house of the government office.",
      <br />,
      "11. What details should be filled while listing an empty house?", 
      "Answer:  When listing an empty house, it is only possible to write code 12 to indicate the number of floors of the house, how many years ago the house was built and the empty house in use. No need to ask for other details.",<br/>,



      "12. What does family mean for census purposes?", 
      "Answer:For census purposes, a family should be understood as a person or group of people who eat in the same kitchen with the same income expenditure and live under the same roof. For census purposes, families and households should be understood in the same sense. There may be a person in the family or not. ",
      <br />,
      "13.If there are two students living in the room of a house, how many families will there be in that case? ", 
      "Answer:In the census, people living in the same house or room as a family rather than according to the relationship are considered a family, so they are considered a family. ",
      <br />,
      "14.If there are four different families living in one house, then how is the number of families written??", 
      "Answer: If there are four families living in a house separately, then how many families live in this house should be written in palace 4, while the number of families living in this house should be written in the palace 5, the first family should be written 1, the second family 2, the third family 3, the fourth family 4 respectively.",<br/>,


      "15.If a family of four sons of a father is living in separate kitchen stoves in a house, then how many families should be considered for the census?", 
      "Answer: In the case of dealing with the house in their own way by making separate kitchen stoves, 4 families should collect the details. ",<br/>,

      "16. If the father's four sons and their families eat in the same kitchen stove in one house and live in separate floors or connected houses, then how many families should be considered for the census? ", 
      "Answer: The situation of living in the same house or family owned house and eating food in the same kitchen stove should be collected as their same family.  ",<br/>,
     
      ]
    },
    {
     question:"House and Household Listing - Agriculture",
     answer:[
      

      

     " 1. What type of land is used by the family for agricultural purposes taken in the household listing?",
"Answer: In the listing of households, the family takes the details of their own or anyone else's land that they have cultivated or cultivated. Under this, the details are taken on the basis of using the land and not ownership. The family ÷ N.P. Details of the land used within the palace 11 and this G.P.÷.N.P. The details of the land used outside should be written separately in Palace 12.",<br/>,

"2. What should be done if the units of land used by the family for agricultural purposes are different?",
"Answer: The unit used for the measurement of the land should be written in the G.P.÷N.P., which is going to list the household. If the unit of land occupied by a family is different or if it belongs to both units, then the g.p.÷ n.p. should be changed to the existing unit and written. The family ÷ N.P. Attention should be paid to the fact that the unit of land used outside can tell the difference.",<br/>,

"3. If a commercial organization has run a poultry farm, should the details be obtained or not?",
"Answer: If any commercial organization is running a poultry farm or any other agricultural activity, then it should not be included. However, details of any small commercial agricultural activity carried out by a family should be taken.",<br/>,

"4. A family ÷ another G.P.P. Where should the details be obtained if the animals are reared?",
"Ans: A family ÷ another G.P.P. If the animals are reared and no family member lives in that place, then it should be counted from this family. But another G.P.÷.N.P. If any member of the family lives in the place where the animals are reared, then along with the details of those members, the same G.P.÷.N.P. Details are taken from another supervisor.",<br/>,


"5. If a family rears one goat or two chickens, should they consider it for agricultural purposes or not?",
"Answer: If a family rears one goat or two chickens, then the details should be taken as they have been reared for agricultural purposes. The family should take the number of animals reared for agricultural purposes.",<br/>,
      



     ]

    },
    
    

        {
          question:"Main Questionnaire- Family Details",
            answer:[
                "8. If a tin roof is placed on the top floor of a three-storey house built on a slope, then what should be considered as the roof of the house?",
"Ans: If a truss or tin roof is installed to block the sun or water at the top of the house built on a slope, then the roof of that house should be considered a slope. Similarly, if the entire roof of the roof at the top of the house is made with a tin roof, then the roof of the house should be written in tin. But only in some parts of the roof, even if people live with tin roofs or trusses or the sun is made to prevent water, the roof of the house should be considered to be sloped.",<br/>,

                
            ]
                },

{

    question:"Main Questionnaire - Personal Details 1 to 25",
    answer:[

       " Regarding personal clauses (1-14)",<br/>,
"1. For how many families can a questionnaire form be used?",
"Ans: A questionnaire form should be used only for one family. If there are up to 8 members in a family, one page reaches, but if there are more than 8 members in the family, there is no line to write the names of other members on the same page, so the second page should be used. If the sheet is empty, the details of two families should not be written on one page.",<br></br>,

"2. If the husband is abroad and the wife is running the house with the money sent from abroad. If important decisions of the house are run by the decision of the husband from abroad, then who is the head of that family?",
"Answer: For census purposes, a family member means a person who frequently resides in the family, makes arrangements for the day-to-day affairs, expenses and behavior of the family, i.e. who makes arrangements for household chores. Since an absentee in a family living abroad is not counted as a family member, he cannot be a family member. Therefore, in such a situation, the wife is the head of the family.",<br/>,

"3. How do you write the names and surnames of all family members?",
"Answer: When writing the names of the members of the families to be censused within the census area, you should start writing from the family. When writing the name and surname of the person who frequents the family, the first thing to do is no. The name of the other member (husband÷ wife÷ son÷ daughter-in-law, grandson, granddaughter, father, mother, daughter and son-in-law etc.) should be written in order according to the family tree.",<br/>,

"4. How is it written in the census?",
"Answer: When writing a relationship in the census, the person who is going to be counted should write the relationship of what the family member should call or what is the relationship of that family. For example, if the family is the eldest son of the family, then the code of daughter/son-in-law should be written in the palace of the relationship when the details of the familys daughter are asked.",<br/>,

"5. What should be mentioned in the relationship when taking details of the respondent's grandparents?",
"Answer: When taking the details of the grandparents of the family, other should be mentioned in the relationship. If there is a relationship other than the relationship mentioned in the form, then it should be written in other.",<br></br>,

"6. If a person does not belong to the family but is living in the same house to study, then what should be mentioned?",
"Ans: If there is no family relationship, but if you live in the same house to study, then there is no relationship. But if the person is a helper or cook etc. who has been paid a salary or wages, then it should be mentioned under domestic help.",<br/>,

"7. Which gender should be mentioned in the case of a other gender in the counting family?",
"Answer: Out of the three census questionnaires, the household and household list asked the number of men, women and other genders in the household. A person may have been listed under the other gender in the list. In such a situation, if there is a other gender in the counting family, then the respondent should be asked whether he was born as a woman at the time of birth or was born as a male. He has to pick up what he likes to say to himself.",<br/>,

"8. How to write the age of a child who has not completed one year of age?",
"Ans: When writing the age, the person should write only the year of completion. Children under one year of age or newly born babies should write 00",<br/>,

"9. How can a respondent be taken if he does not know his date of birth?",
"Answer: If the respondent does not know his date of birth, then how different is the age of other members of the family, how many years the age can be determined by separating the eldest, the eldest or the youngest. If a major event of the past is born, how many years are they, such events can be the basis for determining the age, such as how many years happened in the earthquake of 1990, etc.",<br/>,

"10. How should the respondent note his date of birth in the Ishvi Samvat?",
"Answer: If the respondent mentions the date of birth in Isvi Sambat, then 56 years and 8 months should be added and written in Vikram Sambat.",<br/>,

"11. Can birth certificate or card given in a hospital or other health institution be considered a birth certificate or a birth certificate?",
"Answer: A person born in a hospital or other health institution and having a birth certificate or card provided by the hospital cannot be considered as a birth registered. In order to be registered, a child must have been registered at official places such as ward offices, rural municipalities and municipalities after birth.",<br/>,

"12. Can the caste of members of the same family be different or not?",
"Answer: Members of the same family may have different ethnicities. Since people of different castes or castes can live in the same family, after writing what is the caste or caste of the family, the caste or caste of each other member of the family should be asked. While counting family members, the caste/caste of the family should not be included in the caste/caste of other members. The caste/caste of a daughter or son born after inter-caste marriage can be different from that of either mother or father or both. When writing the caste/caste of the family members, it should be written as told by them.",<br/>,

"13. What should be done if the caste provided by the Central Bureau of Statistics and the castes not mentioned in the code come?",
"Answer: If the respondent mentions the name of the other caste different from the caste written in the caste and code provided by the department, then the enumerator should write the name of that caste in the concerned palace and leave it blank at the place of writing the code. The department will keep the code of other such castes behind.",<br/>,

"14. What do you mean by ancestral language?",
"Answer: The language of identity traditionally spoken in a person's own family, community or ethnicity is called the ancestral language or ancestral language. Respondent's ancestors: Jijubaje/Boju, Baje/Boju or grandparents spoke which language they spoke. The language of the ancestors may be spoken or not known at present.",<br/>,
"15. My grandparents speak Newari language but I cannot speak Newari, if I speak Nepali, then what is my ancestral language?",
"Answer: My grandparents speak Newari language but I cannot speak Newari, but now if I speak Nepali, my ancestral language is Newari.",<br/>,

"16. What is mother tongue?",
"Answer: Mother tongue is the language that children first speak after birth. Mother tongue is the first language of a person. Mother tongue is the first language spoken by the child from his mother, father, grandmother, grandfather, other family members and caregivers within the family. In order to be a mother tongue, a person must now know how to speak.",<br/>,

"17. Can the mother tongue be the language you don't know how to speak?",
"Answer: To be a mother tongue, a person must know how to speak. You should not mention the language you do not know to speak in your mother tongue.",<br/>,

"18. Is it necessary for everyone to be their mother tongue?",
"A: A person learns to speak in some language after birth. Therefore, it is important to be the mother tongue of all people.",<br/>,

"19. What is a second language?",
"Answer: Another language that the speaker learns to speak after learning to speak the mother tongue is the second language. That is, when a person speaks to his neighbor, community, work or with others, the second language is mostly spoken except the mother tongue as a contact language. A second language should not be written in a language known to a person but not used in neighbors, working, or often speaking with others. As a second language, the language that the person speaks the most should be written in the second language.",<br></br>,

"20. Does everyone need to have a second language?",
"Answer: Every person may not have a second language. For example, if a person speaking Nepali mother tongue does not speak any language other than Nepali, then the dash (-) should be written in the palace of the second language.",<br/>,

"21. Can a member of the same family have different religions?",
"Answer: Some members of the same family may have different religions. Since each person is asked questions, it is possible that people of different religions lived together in the same family.",<br/>,

"22. Can a person who does not have a certificate of citizenship be a citizen or not?",
"Answer: To be a citizen, you do not have to have citizenship. Citizen means the person concerned to enjoy the civil rights and rights of the country. According to the constitution and law of the country, the citizens of every country are enjoying the civil rights and rights of that country, or some adult citizens who have reached the age of age do not have a certificate of citizenship, but have the legal status to enjoy the civil rights and rights.",<br/>,

"23. Should foreign nationals living in Nepal be counted or not?",
"Answer: The census also counts foreign nationals living in Nepal frequently. Since foreign nationals also reside in Nepal for different purposes and tasks, all the details of foreign nationals included in the definition of census should be asked one by one. But foreigners who have come to visit, medical treatment and work should not be counted. There is also no count of foreigners living in foreign embassies and refugee camps in Nepal.",<br/>,

"24. What is marital status?",
"Answer: Marital status refers to the marital status of a person aged 10 years or above at the time of counting.",<br/>,

"25. What is the difference between separation and separation?",
"Answer: If the husband and wife are not able to live with each other due to any conflict or difference after marriage, then their marital status should be considered to be over, but if the married husband and wife cannot live together due to any conflict or differences and live separately due to mutual understanding or misunderstanding, then the marital status of those people should be considered separate.",<br/>,

"26. What is the marital status of a woman who is married once in her life and her husband dies?",
"Ans: He is married.",<br/>,

"27. What is the marital status of a man who has been married once in a lifetime when his wife dies and marries at the time of counting and lives with the husband and wife?",
"Ans: He is married.",<br/>,

"28. What should a person do when he is unable to say the age of marriage for the first time?",
"Answer: If a person is unable to say the age of his first marriage, then his current age and how many years of first marriage should be written down. Similarly, the difference between the husband's age and his age can also be estimated.",<br/>,

"29. What kind of person should be asked the question of how old you got married?",
"Answer: All married, widowed/ widowed, divorced and separated men and women who have been married at least once except unmarried should be asked.",<br/>,

"30. If a person has been married more than once, what is the age of marriage?",
"Answer: If a person has been married more than once, then the age of completion at the time of first marriage should be written, the age of second or third marriage should not be written.",<br/>,

"Regarding Personal Clauses (15-18)",<br/>,

"31. Educational details should be asked to a person aged how old?",
"Answer: Educational details should be asked to all people aged 5 years and above.",<br/>,

"32. What does it mean to read and write?",
"Answer: A person who knows how to read, write and do normal calculations (addition, subtraction) in a language should be considered to know both reading and writing. Those who only know how to read in a language should not be considered to know how to read and write. Such a person should be considered to know only how to read. Those who can read in a language and can only write their own name by imitation should be considered to know only to read.",<br/>,

"33. If you have never been able to read or write, but you can read and write, where should you mention it?",
"Answer: If you have never gone to read and write, but you can also read and write, then you should mention that you know both reading and writing.",<br/>,

"34. What do you mean by going to read and write now?",
"Answer: At present, reading and writing means going to school/ college (school, school, school, college), vocational school, special literacy education, informal education and other institutions to earn education/ education at the time of counting. In order to get an education, you should be enrolled in school, school, vocational education, special literacy education, college or university or other institutions.",<br/>,

"35. What is informal education?",
"Answer: Informal education is the education provided to a person who is unable to attend formal school or class regularly. These include basic adult literacy, post-literacy, continuing education, alternative educational programs. The alternative educational program is the education given to those who are unable to study regularly by going to a specific time and designated institution set by the Government of Nepal, but are eager for learning. Such alternative education such as monasteries, madrasas, gurukuls, open schools are included in this.",<br/>,
 
"36. How many classes or levels should be asked in the field of study?",
"Answer: For a person who has passed 12th class / certificate or above, the area of study should be specified and the area of study should be written.",<br/>,

"37. If a person has completed two different subjects at the same educational level and has obtained two academic degrees, then which educational field should that person write?",
"Answer: If a person has studied two different subjects at the same educational level, then that person should write the area he wants to say with importance.",<br/>,


    ]
},

{
    question:"Main Questionnaire - Personal Details 26 to 29",

    answer:
    [
        "Individual Section: Questions 26 to 29",<br/>,



        "1. What is reproductive age?",
        "Answer: A woman has the ability to conceive and have children only when her menstrual period has not started and ended. This is called fertility. A woman's fertility varies with age. This age is also known as the reproductive age of a woman.",<br/>,


        "2. How old should you ask for fertility details of women?",
        "Answer: Various questions related to women's fertility should be asked only to women who have been married at least once between the ages of 15 and 49 years.",<br/>,

        "3. In the description of women's fertility, the last 12 months should be understood from which day to which day?",
        "Answer: The last 12 months means the period up to 365 days before the counting day. E.g. counted days If the year 2078 is on Kartik 25, the year 2077 will be from Kartik 26 to 2078.",<br/>,

        "4. What do women mean by living babies born so far?",
        "Answer: A live child born to a woman means crying, making a sound, stirring, breathing process, dying shortly after birth, and death immediately after birth. If the pregnancy is broken or wasted, the birth of a stillborn child in the womb cannot be called a live birth. If the child dies at birth, then it should not be included in the calculation, and the count of the live born child should not be missed.",<br/>,

        "5. If a woman is married for the second time, but her first child lives with her first husband, should the child be counted or not?",
        "Answer: Even if a woman is married for the second time and the child born to her first shriman lives with her first husband, then the number of children born to this woman should also be mentioned in the palace.",<br/>,

        "6. If a woman is married to more than one man, should the child born while living with the previous husband be taken in the total number of sons and daughters born to the woman so far?",
        "Ans: If a woman is married to more than one man, then the number of children born to the previous husband should be included in the number of children born to that woman.",<br/>,

        "7. If the child is stillborn, should it be included in the calculation?",
        "Answer: If a woman has given birth to a stillborn child, then it should not be included in the census.",<br/>,

        "8. When asking for details of a woman's birth, should you also ask for the details of the child who died immediately after birth?",
        "Answer: When asking about the details of a woman's birth, the details of the child who died immediately after birth should also be asked.",<br/>,

        "9. When asking about the details of a woman's birth, should you ask for the details of the son or daughter who has been separated or the daughter who has gone after marriage?",
        "Answer: When asking about the details of a woman's birth, the details of the son and daughter who are separated or the daughter who has gone after marriage should also be asked.",<br/>,

        "10. Should a live birth in the last 12 months be included in the calculation even if the child died sooner or later?",
        "Answer: If the child is born alive in the last 12 months and died immediately or later, it should be included in the calculation as a live birth.",<br/>,

        "11. If the family or respondent is a male, who will be asked about women's fertility?",
        "Answer: If the family or respondent is male, the details of women's fertility may or may not be known. If there is a situation where the concerned woman can also be present at the time of counting, the questions related to fertility that the respondent does not know should be taken from the concerned woman.",<br/>,

        "12. What if a woman under the age of 15 has a small child or a woman over the age of 49 has a small child?",
        "Answer: If a woman has a small child in her arms, but her age is less than 15 years or more than 49 years, then at the time of giving birth to the woman again, she should be asked to confirm the full age. In doing so, if a woman's age is not between 15 and 49 years of age, then there is no need to ask questions about fertility, but the number of families should be mentioned.",<br/>,

        "13. If there is not a single live birth from a woman who has been married at least once between the ages of 15 and 49, how should the number of sons and daughters be written?",
        "Answer: If there is not a single live birth from a woman who has been married at least once between the ages of 15 and 49 years, then the number of sons and daughters should be written 00, not left empty.",<br/>,



        "14. What are some of the things that need special attention to in fertility details?",
        "Answer: When asking questions, special inquiries should be made whether there were any children who were born alive and died. Because some people want to forget about the tragic event of their children's death, respondents often do not like to give such details. There may also be an impression that such details do not need to be given. However, since this account is essential for the study of fertility and death, when asking such questions, the enumerator should be a little sensitive and asked to remember the number of all children born alive by women.",
        
        
        "In particular, it is more likely to be exempt from giving and receiving details of children who died shortly or shortly after birth. Similarly, daughters who have gone to another's house after marriage can be left out in the count. A remarried woman may miss out on the number of children born to her previous husband.",<br/>,
        
        "15. What is the purpose of asking the question of who the family members who have not completed 18 years of age are living with?",
        "Answer: It makes a lot of difference to who the children live with in order to fulfill their upbringing, education and other basic necessities. The question was asked to find out if their childhood was spent with their parents, relatives, employers or any other person.",<br/>,
        "16. When students under the age of 18 are camping together, who do you write with?",
        "Answer: Students under the age of 18 should be written as with other peoplewhen they are camping together.",<br/>,
        "17. If a person who is not 18 years of age is a family member, who should you write with?",
        "Answer: If you are living with relatives, you should write with other people and if you are living with other people, you should write with other people.",<br/>,
        
        "18. When a person who is not 18 years old marries each other and lives together, who does he live with?",
        "Answer: A person who is not 18 years of age should write with other relatives if he marries each other and lives together.",<br/>,

        "19. When a woman who is not 18 years old married and stays with her in-laws, who does she write?",
        "Answer: A woman who is not 18 years of age should write with other relatives if she is married and stays with her in-laws.",<br/>,

        "20. If the parents are both but the father often lives abroad or any other place in the country for employment and his children live with the mother, then who should be written with them?",
        "Answer: If both parents are there, but the father often lives abroad or any other place in the country for employment and his children live with the mother, then in such a situation, it should be considered to be living only with the mother, not with both parents.",<br/>,

        "21. What do you mean by children under the age of 18 living with a person who works?",
        "Answer: If a boy or a girl below the age of 18 years is living in the house of the person working as a laborer in the counting family, then it should be understood that the person who is working is living with the person who is working. Worker means a person engaged in housework with a salary÷zay (cash or commodity or both) or any other kind of salary÷ facilities.",<br/>,


        "22. What is the difference between other relatives and others in the question of who children under the age of 18 are living with?",
        "Answer: Children under the age of 18 should be understood to be living with both parents, mothers only, fathers, stepmothers or other relatives of the family other than their stepmother, and other people when living with other people who do not have any relationship.",<br/>,



        

    ]
    
},
{

question:"related to disability ",
  answer:  [
    "1. Who are asked disability questions?",
        "Answer: Details about disability A person who has good knowledge about the family or family is asked one by one about all the family members. Women, men and other genders, children, youth, adults, senior citizens who frequently live in the family. People sitting at work etc. should be asked questions related to disability and they should be confirmed that they have any kind of disability.",<br/>,

        "2. Why is the question of disability mentioned in the census?",
        "Answer: This question has great significance in the implementation of fundamental rights including equality, social justice and social security as provided by the Constitution of Nepal. The main objective of this question is to obtain the basic data required to run the legal and policy arrangements and plans and programs to be adopted by the state for persons with disabilities.",<br/>,

        "3. What are the top 4 challenges that may arise from asking disability details at the time of calculation? How can this be resolved?",
        "Answer: Due to different social environments, superstitions and tendencies to link disability with previous births, it is very challenging to collect details about disabilities (especially women). It is very difficult to come up with accurate information only with a direct question on disability. During the calculation, the enumerator should pay special attention to four important things. 1. Some families want to hide disabilities, 2. Disabilities can be difficult to identify, 3. They may say they are sicker and disabled than disabled, and 4. What do you do by taking names? There may be problems and questions like that.",
"In such a situation, when the enumerator gives the exact details about disability, in the future, based on that detail, the government should make policies and programs related to disability and it will ultimately benefit the people with disabilities and try to get the correct details.",<br/>,

        "4. Is the question right that someone in your family has a person with a disability?",
        "Ans: On the census question.. [Name].. The question is what is the status of the disability. Therefore, family members or family members who can answer well in the family should be asked whether each person has a disability by name. Respondents may not be aware of all types of disabilities. Therefore, they should also be informed about the possible answers given to the question or the type of disability. This makes it easier for them to answer about the type of disability.",<br/>,

        "5. What is meant by a person with a disability?",
        "Answer: A person with a disability means a person with a physical, mental, intellectual or neurological disability, functional limitation, or obstruction due to existing barriers to participate in social life fully and effectively on the same basis as any other person.",<br/>,

        "6. In what ways are disabilities classified and details collected in the census? What are they?",
        "Answer: Details of 12 types of disabilities are collected including physical, low vision, completely blind, deafness, slow hearing, hearing impaired, voice and speech, mental or psychosocial, intellectual, hereditary bleeding (hemophilia), autism and multiple disabilities.",<br/>,

        "7. How to identify a person with a physical disability?",
        "Answer: If a person has one of the following characteristics, he should be counted under physical disability.",
        "• Difficulty in running body parts",
        "• Difficulty walking, climbing stairs, moving hands and feet,",
        "• Non-functioning of the back neck, muscle, intoxication-related difficulties",
        "• Loss of hands, legs or loss of motion, shortening, weakness, and lack of functioning,",
        "• Muscular deviation, paralysis of the spine,",
        "• The state of fainting, ,",
        "• Daily life activities using baisakhi, wheelchair, tricycle, stick, caliper, special type of shoes, artificial hands or legs.",<br/>,

        "8. A person who does not hear and speak fully, cannot hear any sound even after wearing a hearing device, or who has to use sign language for communication is counted in the disability under the complete blind, while what person is counted in the disability with low vision?",
        "Answer: If a person's fingers cannot be pierced from a distance of 20 feet through treatments such as medicine, surgery and use of glasses, then such a person is considered to be low vision. Such people have the following characteristics:-",
        "• When you see very little of the eye, and when you see objects, letters, or things, you should be taken close to the eye,",
        "• Wear very powerful glasses to bring things close to your eyes,",
        "• Able to identify objects or letters using magnifying glass,",
        "• Able to distinguish or see objects in places with lots of light, but not in the shadows.",
       
        
        <br/>,

    "9. A person who does not fully hear, cannot speak, and has to use sign language for communication falls under deaf disability, while a person with slow hearing disability has what characteristics?",
        "Answer: Slow hearing refers to a person who listens less to the ear but is able to speak clearly by listening less or not, to have a hearing device in the ear to hear. In fact, hearing less than speaking clearly or not is the main issue. Some people still hear less ears later in their lifetime, but speech is clearly understood. Therefore, when counting, hearing less ears should be made the main basis, not speech. They have the ability to hear loud sounds, hear with a hearing aid, speak a little vaguely, and hear with a loud voice or hearing device.",<br/>,

        "10. What type of disability does a person have if they have no hearing but clear speech?",
        "Answer: Such people are also caused by some accidents. Those who do not hear the ears, but the speech is clear, they fall under the deaf.",<br/>,

        "11. How to distinguish someone who is deaf and has a hearing disability?",

        "Answer: Do not separate deaf and dull hearing from a person's speech. People who do not speak or do not listen to the ears by birth or later fall under the deaf. People who do not hear the ears for various reasons but can speak are also included in the deaf. But people who hear less ears fall under the category of hearing even if they are able to speak or if they are unable to speak. That is, a person who is unable to speak clearly or does not understand what is spoken clearly, if the ear is heard less, then he should write the sign under slow hearing.",<br/>,

        "12. How to identify a hearing impaired person?",
        "Answer: A person with both hearing and vision disabilities or a joint interaction of two sense disabilities should be understood to have hearing impaired disabilities. Such individuals have characteristics such as limitations or numbness in both hearing and seeing organs at once or alternately.",<br/>,

        "13. How can speech and speech disabilities be identified?",
        "Answer: To identify a person with speech and speech disabilities, one should have one of the following characteristics.",
        "• Having trouble speaking, expressing words, making sounds,",
        "• Not clearly understood when speaking,",
        "• Repetition of words or flare-ups when speaking, long-term interruptions when speaking,",
        "• Difficulty pronouncing words or even inability to speak,",
        "• Need a vocal cord when speaking.",
        
        <br/>,

        "14. What disability does mental or psychosocial disability mean?",
        "Answer: A person who has problems in the brain and mental organs and problems in conducting intellectual tasks such as awareness, refreshment, memory, language, calculations, and difficulty in behaving according to age and situation. This condition can appear in any age or condition of the person due to failure, depression or stress etc. It is not congenital, it can be cured with treatment.",<br/>,

        "15. Is intellectual disability the same as mental or psychosocial disability?",
        "Answer: Intellectual disability and mental or psychosocial disability are not the same. Following are the differences between these disabilities.",
        "• Intellectual disability refers to a person who has difficulty in performing activities relative to age or environment due to lack of intellectual development due to lack of intellectual development with the increase of age, while mental or psychosocial disability is a condition of problems in the brain and mental organs and problems in the performance of intellectual tasks such as awareness, refreshment, memory, language, calculation.",
        "• Intellectual disability can also be congenital, while mental or psychosocial disabilities can occur at any age or condition due to failure, depression or stress etc. in a person.",
        "• Intellectual disability refers to age-appropriate activities such as eating, dressing, defecating, and needing help from others in one's care, or memory loss or delay in learning something age-appropriate.",
        
        <br/>,


        "16. What are the characteristics of intellectual disability?",
       
        "Answer: People with intellectual disabilities have the following characteristics:",
        "• Delay or slowness in learning,",
        "• Visible limitations in brain functions,",
        "• Having difficulty learning and performing age-appropriate behaviors,",
         "• Even if you enter a young age, the behavior remains the same as that of a young child,",
         "• It takes a long time for people with this problem to learn more common things or social behaviors than usual, and forget very quickly, even if learned.",
         
        <br/>,

        "17. How to understand hereditary bleeding (hemophilia)",
        "Answer: A person with such disabilities has the following characteristics:-",
        "• Physiological conditions that cause genetic problems associated with the hemophilia circulatory system,",
        "• Minor injuries are caused by a lack or lack of clotting factor or plasma that helps the blood clot,",
        "• Bleeding for any reason does not stop, whether internal or external,",
        "• Internal bleeding can cause unbearable pain in the joints, difficulty walking, or difficulty in walking.",
       
        
        <br/>,

        "18. What is the condition of a person with autism?",
        "Answer: People with autism have the following characteristics:",
        "• Do not want to mingle with friends, live alone, and do activities in their own way,",
        "• Unable to communicate, unable to learn a language,",
        "• having difficulty learning or teaching social skills,",
        "• Repeating the same behavior or using any part of the body, such as shaking hands,",
        "• Adopt completely different methods and methods to do daily activities or to teach them to read and write,",

        "• Unable to speak eye to eye,",
        
        <br/>,

        "19. What is meant by multiple disabilities?",
        "Answer: If two or more disabilities occur in the same person in the same person in the nature of disability, then it is known as multiple disability. Such as physical disability and visual impairment, physical disability and speech disability etc.",<br/>,

        "20. Is hearing impaired multiple disability?",
        "Answer: If you are hearing blind, then it is not under multiple disability, but if you have hearing blind and other disabilities, then it is in multiple disability.",<br/>,

    ]
},
{
    question:"economic activity or work",
 answer:   [
    "1. For what purpose are questions related to economic activity asked in the census?",
    "Answer: The economic data obtained from the census is mainly used in various areas including gross domestic product (GDP) estimates, poverty estimates, measurement of employment status and labor market conditions, depiction of economic structure. The information so received is primarily to formulate, implement and evaluate economic and human resource policies; to measure local, national and international development goals; Comparing local, national and international economic indicators has a very important contribution. In order to supply such important indicators, questions related to economic activity are asked in the census.",<br/>,

    "2. What questions are asked under economic activities in the census?",
    "Answer: In the National Census 2078, 7 different questions are asked under economic activities. Under this, the total month of the person doing financial work in the last 12 months, the details and position of the main financial work done by him, the organization in which he works and the main goods or services produced by that organization, the status of work involvement, the institutional area of economic work, the main reasons for the work if the work is not done and the availability for the work.",<br/>,

    "3. What is meant by income-generating financial work?",
    "Answer: If you get profit or income in the form of cash or jinsi for selling goods or services produced by investing capital or labor, then all such activities are called economic activities. For example, a family member weaves doko for the purpose of selling, weaves namlo, searches for firewood, etc.",<br/>,

    "4. What activities do you mean by non-income economic work?",
    "Answer: If the goods produced by investing capital or labor are used for the consumption of one's own family, then all such activities are called non-income economic activities. For example, family members weave doko for the use of pariwara, weave a namlo, look for firewood, carry water, etc.",<br/>,

    "5. What is non-economic activity?",
    "Answer: The services that a person produces for their own household consumption are called non-economic activities. For example, housework, child care, care of disabled family members, washing clothes, cooking rice, washing utensils, etc.",<br/>,

    "6. Questions related to economic activity In which age group are asked?",
    "Answer: Questions related to economic activities are asked to all people in the age group of 10 or more. Children under the age of 10 do not need to be asked questions related to economic activities on the day of the census.",<br/>,

    "7. On the basis of which reference time should the questions related to economic activity be answered?",
    "Answer: Economic Activity Up to exactly a year before the date of the counting of answers to related questions (Last 12 Should be given on the basis of the time of the month. For example, if the census is taking place on July 20, 2019, then details of the activities of the person should be given from July 1, 2019 to July 20, 2019.",<br/>,

    "8. What types of economic activities are collected in the census?",
    "Answer: Details of all types of economic work are collected for census purposes. Economic work involves two types of work that have income and no income. For example, for whatever purpose a person has done activities such as weaving doko, weaving, looking for firewood, making furniture, then the details of such activities are collected.",<br/>,

    ]
},
{
question:"Regarding identifying and updating the counting area",
answer:[

    "Technical FAQ on how and how to use the map",<br/>,

    
    "1. What is the numeration map?",
    "Answer: A map of a small geographical unit with a certain boundary around and based on the estimated number of households is called a census area map.",<br/>,

    "2. Why is a map of the census necessary in the census?",
    "Answer: The census map is very important to determine the area to be counted by an enumerator at the specified time of the census and to follow the principle that no one should be left out and no one should be repeated in the census.",<br/>,


    "3. What type of census map has been prepared for census purposes?",
    "Answer: The Central Bureau of Statistics has prepared three types of maps for use in the field work of the census. For the municipalities, two types of census maps have been prepared, including block and blockless, while for the rural municipalities, the map of the census area has been prepared on the basis of the ward boundary of the previous (old) G.B.S.",<br/>,


    "4. What is block?",
    "Answer: Blocks are areas smaller than the census areas created by dividing a certain boundary within a municipality or a ward with high population density. Even in the rural municipality, wards with less households than the number of households in a counting area should be considered as a block. In some municipalities and rural municipalities, one or more such blocks have been merged to form a census area.",<br/>,



    "5. What is the map of the census area?",
    "Answer: There are mainly four parts in the map of the numeratory; Heading the upper part of the map, the map of the numerator, the boundary of the numerator and the location of the counting area. At the top of the map, the name of the province, the name of the district and the name of the local level, the ward number, the counting area number and the map number are shown.",<br/>,



    "6. What things are shown in the map of the census area?",
    "Answer: In the map of the numeration area, only the boundary of the numeration area and the blocks of that numeration area are made up of blocks are clearly known. The area other than the counting area is shaded with a light blue color. The open street map is shown in the background of the numeration area map, and at the bottom of the map the value of the map is measured and indicated in the list.",<br/>,



    "7. How is the boundary of the census mentioned?",
    "Answer: The eastern, north, west and south borders of the census area are mentioned in the border part of the census area where the map of the census area is located. If the enumeration zone is made up of blocks, the east, north, west and south borders of each block are mentioned separately.",<br/>,


    "8. Is the boundary of the census area of the village mentioned in the same way?",
    "Answer: In the case of rural municipalities, the block does not have the east, north, west and south border of the block. Which ward is mentioned.",<br/>,

]
},


{
    question:"Control Form, Performance Form and Monitoring Form",
    answer:[
        "1. What is meant by control form?",
        "Answer: After the completion of the main census of the National Census 2078, the supervisor is called the control form to understand the books of the main questionnaire filled with the enumerators under him. The control form should be signed by the enumerators under the supervisor stating the census number, family number, population and book number used. The supervisor should ask the enumerators under him to fill out separate control forms for different wards.",<br/>,


        "2. What is meant by performance report form?",
    "Answer: After the completion of the main census work, the enumerator and supervisor should submit the details collected along with the details collected, the census area map, the unused questionnaire books, the number of households counted, the number of families and the details of the population to the local census office. Arrangements are made to pay a certain amount of the census only after the local census officer certifies the completion form.",<br/>,




    "3. What are the main things in the monitoring form?",
    "Answer: The following topics are mainly included in the monitoring form. The supervisor did not write the census house and family number in the house where the family lived, no house and family was left out of the census in the village settlement where the census has been counted, whether the respondents have any complaints about the census on-site counting work, whether there is any obstruction in the on-site work of the census, etc.",<br/>,



    "4. What are the main things that are observed during supervision?",
    "Answer: While supervising, it is mainly observed whether the additional details in the questionnaire are filled properly, including the manner in which the supervisor and enumerator, the purpose of the census, the method of asking the questionnaire, whether the census materials are sufficient, whether the confidentiality has been maintained, the filled details are not preserved.",<br/>,




    "5. Who should fill out the monitoring supervision form?",
    "Answer: Members of the Census Coordination Committee and other responsible employees engaged in the monitoring of the National Census 2078 should fill the monitoring form, while the trained employees engaged in the supervision of the National Census 2078 should fill both the monitoring and supervision forms. It is the responsibility of the concerned monitoring and supervisor to make online entry by filling the monitoring and supervision form. Monitoring and supervisors should also take initiatives to solve the problems seen in the calculation work.",<br/>,

    
    ]
    },


    

        {
            question:"Tasks and responsibilities of the enumerator",
            answer:[
                "1. Should the enumerator work before or after the calculation?",
                "Answer: The enumerator should do the work related to the calculation before the calculation, during the calculation and even after the calculation is over.",<br/>,
               
                "2. Why is the census done?",
    "Answer: How many people live in which regions and regions of Nepal, how many people are women, men, other genders, children, working age groups and elderly people, what kind of professions people do, what number of ethnicities, languages and religions are scattered in different places, what is the status of their education and literacy, how many people are physically or mentally disabled? Censuses are conducted to find out the details of many demographic, social, and economic activities.",<br/>,




    "3. How are people counted in the census?",
    "Answer: Since there is a rule in the census to collect data so that no one is left out and no one is repeated, the person who lives in the family who lives frequently is counted from the same family considering the family as the unit of counting. Generally speaking, for census purposes, a family means a group of people or groups of people who live under the same roof and eat in a common kitchen. There may be only one or more people in the family. People in the family can be of either relationship or lack of kinship. If such people often live in the same family, both the relationships are calculated from that family.",<br/>,





    "4. What are the main tasks that the enumerator should perform before the census?   ",
    "Answer: The main functions to be done by the enumerator before the census are as follows:",
    "• Participate in training,",
    "• Study the counting manual,",
    "• Study questionnaires, understand the calculation material,",
    "• Take a map of the area to be counted and get information about the scope of work,",
    "• Take a form from a supervisor,",
    "• Visit each of the designated households and collect the details as per the questionnaire.",
   
    <br/>,



    "5. What are the main tasks that the enumerator should perform at the time of calculation?",
    "Answer: The main functions to be done by the enumerator at the time of counting are as follows:",
    "• To count without missing any home or family,",
    "• Allow the supervisor to check the forms/questionnaires filled,",
    "• Updating missing, added families and fewer families when the supervisor enlists,",
    
    "• On the last day of the census, updating the population of those who do not live in a particular place and the population added by birth, death, migration etc.",<br/>,
    
    ]
    },


    
      
      
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", background: "#f5f5f5", padding: "50px 0" }}>
      {/* Curved Header with Light Sky Blue Background */}
      <div style={{ position: "relative", background: "rgb(100, 159, 208)", color: "#fff", padding: "80px 20px 120px", textAlign: "center" }}>
        <h1 style={{ fontSize: "32px", fontWeight: "bold", textShadow: "2px 2px 8px rgba(0, 0, 0, 0.3)" }}>
          नेपालको जनगणना सम्बन्धित सामान्य प्रश्नहरू
        </h1>
        <p style={{ fontSize: "18px", marginTop: "10px", opacity: "0.9" }}>
          Get accurate population and demographic information from the Nepali Census.
        </p>

        {/* Top Curved SVG */}
        <svg
          viewBox="0 0 1440 320"
          style={{ position: "absolute", bottom: "-1px", left: "0", width: "100%", height: "120px" }}
        >
          <path fill="#f5f5f5" d="M0,256L60,245.3C120,235,240,213,360,208C480,203,600,213,720,218.7C840,224,960,224,1080,218.7C1200,213,1320,203,1380,197.3L1440,192V0H0Z"></path>
        </svg>
        <p style={{ fontSize: "18px", marginTop: "10px", opacity: "0.9" }}>
            TECHNICAL FAQ
        </p>
      </div>

      {/* FAQ Section */}
      <div style={{ maxWidth: "800px", margin: "0 auto", marginTop: "-50px" }}>
        {faqs.map((faq, index) => (
          <div
            key={index}
            style={{
              marginBottom: "30px",  // Adjusted margin for spacing between questions and answers
              borderRadius: "10px",
              boxShadow: "0 6px 10px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease",
              overflow: "hidden",
              background: "#fff",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}>
            
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
                borderBottom: activeIndex === index ? "2px solidrgb(14, 152, 237)" : "none",
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
                  color: activeIndex === index ? "#87CEFA" : "#333",
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
                {/* Map over the answer to add space between lines */}
                {Array.isArray(faq.answer) ? (
                  faq.answer.map((line, idx) => (
                    <div key={idx} style={{ marginBottom: "1px" }}>
                      {line}
                    </div>
                  ))
                ) : (
                  <div style={{ marginBottom: "15px" }}>{faq.answer}</div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default FAQ;
