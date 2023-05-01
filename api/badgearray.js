
export default async function handler(request, res) {

    const badgelist = 
    [
      {
        "creatorName": "Victoria Raish",
        "courseName": "IST 256 - Badge Card",
        "courseCategory": "Technology & Information",
        "courseIcon": "hardware:desktop-windows",
        "course-color": "blue",
      },
      {
        "creatorName": "Rita Griffith",
        "courseName": "IST Careers - Meet a Coach - Level 2",
        "courseCategory": "Professional Skills",
        "courseIcon": "communication:contact-phone",
        "course-color": "cyan",
      },
      {
        "creatorName": "Allain Daigle",
        "courseName": "[test] Treat Yourself",
        "courseCategory": "Agriculture & Natural Resources",
        "courseIcon": "maps:directions-bike",
        "course-color": "green",
      },
      {
        "creatorName": "Emily Rimland",
        "courseName": "Savvy Searcher: Recognizing Bias",
        "courseCategory": "Technology & Information",
        "courseIcon": "hardware:tv",
        "course-color": "blue",
      },

    ];
  
    res.setHeader('Cache-Control', 'max-age=0, s-maxage=600');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    res.json(badgelist);
  }