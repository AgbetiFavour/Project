const imageOne =
  "https://media.premiumtimesng.com/wp-content/files/2014/08/National-eID-card.jpg";
const imageTwo =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwX2MGEAgbVD0FHsSs7gJWH3oVNqknD1OILg&usqp=CAU";
const imageThree =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkjSdg7SoSsy3iJtQGYp83pB16WIGV2OZH1A&usqp=CAU";
const imageFour = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK_YRSUmfLqCPHfhIJLmc0_5jA83LoqfnPTg&usqp=CAU";
const imageFive =
  "https://image.shutterstock.com/image-vector/doctor-id-card-template-medical-260nw-1102216973.jpg";
const licOne =
  "https://i.pinimg.com/originals/95/28/f7/9528f7fe325df7687cd3a3d478ebeebc.jpg";
  const licTwo =
    "https://cdn.edhub.ama-assn.org/ama/content_public/multimedia/imi200012audioa_thumb.jpeg?Expires=2147483647&Signature=DdLijKQL14ku87eLF3hS8ilg4~q12MmmKvRQq798cyilca0Oq2rP2q1bBJVeZrHgErKn6hGUI1vK5Y7JYZdpI48TLtveKo2q1I2z-bs6cF6C4riYh-~4pDFAQw72bmuoNjqynHOUJDULKrON8pOO5iNv-6GkCLatPJzR5Sf5YESCgWyrzFfy2tU2G3pPB950Op3CKZ0pInNTRfNA4Hm5aEjFFUvH1aRenYza75mw7EZiRDuLUDDvZANXg0HB-WKXXLtR5z6nIhGCjZqIroRLBXjAXJzO9~aKTGudTvSN8sbK~5a3v~dcF4WrFsy6daiMG3u2fW-p4q2piFLMRkYFww__&Key-Pair-Id=APKAIE5G5CRDK6RD3PGA";
const licThree =
  "https://media.gettyimages.com/photos/doctors-diploma-picture-id53289036?s=612x612";
  const licFour =
    "https://media.istockphoto.com/photos/college-diploma-picture-id172738470?k=20&m=172738470&s=612x612&w=0&h=6BVYQu7tzHlrrjMnLC_FxMMqpWCmS-FChpxr5OexMqI=";
    const licFive =
      "http://gideonpoet.com/rockethealth2/wp-content/uploads/2020/11/License-to-Operate-Medical-Laboratory-1.jpg";

export const doctorsData = [
  {
    id: 1,
    serialno: "0541",
    caregiver: "Nneka Ossai",
    doctor: "Nuhu Ahmadu",
    docImg: imageOne,
    docLic: licOne,
    docBio:
      "Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    specialty: "Pedatrician",
    ratings: "5.0",
    consultations: "352",
    yearsOfExp: "4 years",
    requestType: "Vaccination",
    role: "Mother",
    email: "email@mail.com",
    phone: "+2347034536782",
    noOfChildren: "2",
    children: [
      {
        name: "Christopher Ossai",
        sex: "Male",
        age: "6 months",
      },
      {
        name: "Cynthia Ossai",
        sex: "Female",
        age: "2 years",
      },
    ],
    nameOfChild: "Ada Okafor",
    complaint: "Cough",
    prescription: "Vitamin B Complex, Folic Acid and Vitamin C",
    doctorsAdvice:
      "Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    dateOfReg: "15-12-2021",
    time: "4:00 PM",
    status: "Declined",
  },
  {
    id: 2,
    serialno: "0561",
    caregiver: "Maryam Aliyu",
    doctor: "Adedolapo Ajasco",
    docImg: imageTwo,
    docLic: licTwo,
    docBio:
      "Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    specialty: "Psychiatrist",
    ratings: "5.0",
    consultations: "372",
    yearsOfExp: "10 years",
    requestType: "Vittual Consultation",
    role: "Mother",
    noOfChildren: "1",
    email: "email@yyyymail.com",
    phone: "+2347034536782",
    children: [
      {
        name: "Adams Aliyu",
        sex: "Male",
        age: "6 months",
      },
      {
        name: "Fidausi Aliyu",
        sex: "Female",
        age: "2 years",
      },
    ],
    nameOfChild: "Shayne Ajasco",
    complaint: "Running Temperature",
    prescription: "Chloraphenicol, Folic Acid and Vitamin C",
    doctorsAdvice:
      "Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    dateOfReg: "05-02-2021",
    time: "3:00 PM",
    status: "Pending",
  },
  {
    id: 3,
    serialno: "0581",
    caregiver: "Vince Calistus",
    doctor: "Obinna Okereke",
    docImg: imageThree,
    docLic: licThree,
    docBio:
      "Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    specialty: "Gaenacologist",
    ratings: "4.0",
    consultations: "152",
    yearsOfExp: "20 years",
    requestType: "Vaccination",
    role: "Guardian",
    email: "email@mail.com",
    phone: "+2347034536782",
    noOfChildren: "2",
    children: [
      {
        name: "Kali Calistus",
        sex: "Male",
        age: "6 months",
      },
      {
        name: "Vinnie Calistus",
        sex: "Female",
        age: "2 years",
      },
    ],
    nameOfChild: "Vinnie Santino",
    complaint: "Dysentry",
    prescription: "Vitamin B Complex, Multivitamin syrup",
    doctorsAdvice:
      "Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    dateOfReg: "24-03-2021",
    time: "9:00 AM",
    status: "Completed",
  },
  {
    id: 4,
    serialno: "0941",
    caregiver: "Adekunle Taribo",
    doctor: "Johnny Maguire",
    docImg: imageFour,
    docLic: licFour,
    docBio:
      "Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    yearsOfExp: "25 years",
    specialty: "Dentist",
    ratings: "4.5",
    consultations: "258",
    requestType: "Vittual Consultation",
    role: "Father",
    email: "email@gggmail.com",
    phone: "+2347034536782",
    noOfChildren: "2",
    children: [
      {
        name: "Adekunle Gold",
        sex: "Male",
        age: "3 years",
      },
      {
        name: "Simi Adekunle",
        sex: "Female",
        age: "2 years",
      },
    ],
    nameOfChild: "Adekunle Simi",
    complaint: "Cold",
    prescription: "Vitamin B Complex, Folic Acid and Vitamin C",
    doctorsAdvice:
      "Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    dateOfReg: "03-05-2021",
    time: "12:00 AM",
    status: "Absent",
  },
  {
    id: 5,
    serialno: "0781",
    caregiver: "Lucy Ekanem",
    doctor: "Peter Drury",
    docImg: imageFive,
    docLic: licFive,
    docBio:
      "Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    specialty: "Psychologist",
    ratings: "5.0",
    consultations: "352",
    yearsOfExp: "30 years",
    requestType: "Vittual Consultation",
    role: "Mother",
    email: "email@hotmail.com",
    phone: "+2347034536782",
    noOfChildren: "2",
    children: [
      {
        name: "Christopher Ekanem",
        sex: "Male",
        age: "6 months",
      },
      {
        name: "Karo Ekanem",
        sex: "Female",
        age: "2 years",
      },
    ],
    nameOfChild: "Iniobong Abang",
    complaint: "Fever",
    prescription: "Paracetamol, Folic Acid and Vitamin C",
    doctorsAdvice:
      "Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    dateOfReg: "25-04-2021",
    time: "11:00 AM",
    status: "Accepted",
  },
];
