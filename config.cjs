const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

module.exports = {
  "SESSION_ID": process.env.SESSION_ID || "BWM-XMD;;;H4sIAAAAAAAAA5VUW5OqOBj8L3nVOXIHrZqqBUQURMQbytY+RAgQ7hLQwSn/+xZzqZmHPadm31KBdDrd/fUrKEpMkIk6MHkFVY2vsEH9sukqBCZAacMQ1WAIAthAMAHItmIxFbpxkEi0dqUVJqtnrOdvbC8zYma2mF/4DZ8Mzln5DB5DULXnDPt/AKSZcl7PsvJ4mELuWh5Sm95PTzcmucmJl0iJ5pqGJeKNOvOfwaNHhLjGRaRVMcpRDTMTdWuI65/RH2jrs8tp5doc16qnHfbsaKSFC1s5ucXgMJfsjqqZLorrYv8z+uc9njGGry+cwTjZjC65SMn6UjR3V16et45MX+duct5BfmO90yc4KlCwCFDR4Kb7se6c6swI3A9YC4aHvDqvluz9xdwcFwpZ2NsVLvSZOqjGyV4nPyOO7x7yymQ0qmq7G3h1hsRqhQ1ZuditgLyEKo7pcqU3IhN9J76uP7OS/h/dJSu7add8xDKCs4Ik3al0xo651Ai0/JQP1uflQorn63yl/1D3o1Pkx3Rfx8haaZe5u1XZCydc5t4RWYZlMq2kHaPrngoV+Ys+bNr6TyyhbI21Usuqe2PUIT9brscyJlhzQ6OQT2SAJFkfq1t6GS7Ojbs7LBTMJMF9kci4mZWntXEOTUNRR6090nVXlsm9miXR89uLUtQtAjChH0NQowiTpoYNLot+j6HZIYDBdYv8GjVv8oJud3N4NQrU0iZuyN34WUK2nEvmKylaLGovZyNfpCRPOWnPYAiquvQRISiYY9KUdWchQmCECJj8/c8QFOileTeuv46lhyDENWn2RVtlJQw+Xf38CH2/bItm2xW+2i9QDSbU1zZqGlxEpNexLWDtx/iK1Bg2BExCmBH0GIIAXbGPejygoPBwEPYnZ4vuGv+0yW3Bvsg95bgs3n/hWYlixAA9URLLPXGIpp4kweefzoiTQpoWQu4MwRDgj5npz/zWQt2dUlqnL7tNWCmpa6Ki2m+F04uxu73Z8K49qlEAJk3doiE4Qz9tq12ZouIPuAk0acoZFz4L6WZKnEO2lPfzJrYu1Dfcd0/B5PWrp9Qy6PF0T9WOR1cDQ5C/RRD3L2dYbkzRIk+JPC1MaOEv8uvWKwmr6leBmh74Q/X+SIAaiDMCJkBdrpWEOHPNdG/ZktN12YpkNepl/XTpM+7vcWIksYt445B5SINakdp3fQxXlVXMBm5IdfuMbyUxXbh8Fj3/B0iPoIlqZVnMvQmvshCcNuacUOsy9eVFx8Mz3A+Qd+GXp27rpMwmPynTG+uog2DrewN0yUuRS6ypQa+ydB4PrlLL89lcdp77297T8v2y81iI1mU+FUeOqQycSxczY4E+eDi5x6xp3Kutb5bChZi7W9stFV/ShbWR63nQsMLMvoTmXWjjLTfdFSxB6+10RlFZ4rwP4lsRZB8FjN9G5PUjWyFGb31WwBz9wJ3vOacew28gHxX5mywpwdWWSnt78NxjrMcGPyUvVzeBO+MlzIqxlRnofLV5ddZ6J/B4/DMEVQabsKzzvqOKoC5xAIYgg6SRv0Z1h3NEGphXYEKLHDUWKYrlH/8C0FYM1eAHAAA=",
  "ALIVE_IMG": process.env.ALIVE_IMG || "https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/logo.jpg",
  "PREFIX": process.env.PREFIX || ".",
  "AUTO_READ_STATUS": process.env.AUTO_READ_STATUS === 'true',
  "MODE": process.env.MODE || "public",
  "OWNER_NUMBER": process.env.OWNER_NUMBER || "923072380380",
  "OWNER_NAME": process.env.OWNER_NAME || "Hamza",
  "ALWAYS_ONLINE": process.env.ALWAYS_ONLINE === 'true',
  "PRESENCE": process.env.PRESENCE || "online",
  "OMDB_API_KEY": process.env.OMDB_API_KEY || "76cb7f39",
  "READ_CMD": process.env.READ_CMD === 'true',
  "AUTO_VOICE": process.env.AUTO_VOICE === 'true',
  "AUTO_STICKER": process.env.AUTO_STICKER === 'true',
  "AUTO_REPLY": process.env.AUTO_REPLY === 'true',
  "AUTO_REACT": process.env.AUTO_REACT === 'true',
  "WELCOME": process.env.WELCOME === 'true',
  "ANTI_BAD": process.env.ANTI_BAD === 'true',
  "ANTI_LINK": process.env.ANTI_LINK === 'true',
  "ANTI_GROUP_LINK": process.env.ANTI_GROUP_LINK === 'true',
  "ANTI_DELETE": process.env.ANTI_DELETE === 'true',
  "ANTI_VIEW_ONCE": process.env.ANTI_VIEW_ONCE === 'true',
  "ANTI_BOT": process.env.ANTI_BOT === 'true',
  "PREMIUM_USERS": process.env.PREMIUM_USERS || "",
  "COUNTRY_BLOCK": process.env.COUNTRY_BLOCK === 'true',
  "COUNTRY_BLOCK_CODE": process.env.COUNTRY_BLOCK_CODE || "972",
  "EMOJI": process.env.EMOJI || "🙄",
  "AUTO_TYPING": process.env.AUTO_TYPING === 'true'
};
