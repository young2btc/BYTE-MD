const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

module.exports = {
  "SESSION_ID": process.env.SESSION_ID || "BWM-XMD;;;H4sIAAAAAAAAA5VUXXOqSBT8L/MacwV1BKxK1YKIiqKg4tfWfRhggBEEZAYQU/73LWJSycPebPZtaj769HT3Oa8gSQnFM1yDwSvIclIihpslqzMMBkApfB/noAU8xBAYgM5UVeaz4xOlwqzu3vKl0Fa0aDGUrNFFGeKzdfahKvvbKy++gHsLZIUTE/cbwADqzsqEV35L26OM2TvFfkpRDJlo4AXiLrqwkJL2UYz3vRdwbxARyUkSjLIQn3GO4hmuTUTyn9Gn8wUtE3l3TTxVbtuJqlRcOtbnhazJcInabG+Ghj5H07PxM/pkE0LbYD26jTTUW/l9u4g99cIVk6ncbdfcjnFbeC1OfaV60KckSLA39XDCCKt/rLuoj3mbGWZ9M6/Dqe7EFRRG2N0ZsNxLusJPQyNc7G+HUVz9jPii3060tWH4q2WU8TOy2kXzc3E+t9NdOfSFHr1oEF0v2LilX4mb+UdWov+je2rON5OueTnneHO9BUnma16flqvjcOXKjrWAWtnbjTdQ1UY/o98Pkuwike0sCDY9/tCfGHksXMRKaS/Use7saDzzpTzqD6veJ33Eivw7lkRb6DKSRoE3GVbt2ZNw0JaK2BOhFrlVXoWrS+HIXq4dLDjbtqVjNVkvt2aKdItXoMnNLfW4rejiFGDhupkk82xSWGHw8vajCNdTDwz4ewvkOCCU5YiRNGn2+t0WQF65xm6O2Zu6wOzK3lEUkxGnykjvzPy8FuNgHh954xR4F2f3dIJF/NQRBPoCWiDLUxdTir0JoSzNawNTigJMweDv3y2Q4Ct7+NZU6/It4JOcMjspsjhF3oepH4fIddMiYes6cYfNAudgwH1uY8ZIEtBGxiJBuRuSEg9DxCgY+Cim+N4CHi6Jixs8kK41LjeycB2TSrLHxBupal41lMM0eVwRfSRiT+w+uz7Xee65ffiMPMQ9eyLnIN6BPZ8TQAuQ95Zp3vzRQT6cb60Cb7hJis/ikp+VES6VzbReu28uPKTHOfbAgOUFbgEHuVGRbdIIJ9/gavrExu2sXzh5OoPdQB8fDC8TF11u+gX3YSkYvH6OqWHqNXhHuOqs17wJWuD8lkDS/LzT7UkcL0BOgHx/wAt/0V9VoyTKsl8JZg3wu+rNEw8zRGIKBmA4N5UTtSajqc/FTm88lu1AHgYy+HTpI+2POHVEoQ6gvo2PeIRGSbS8jSW0yIxEe9r5XG3HsBCFaLqDcfDyLyBgACTrhi67aVVYahefD2jUYX3RLi1pbq1Omr659q3R0b+Uh0ObjZmw3sNlZq7bROMqNeOGy0s6Njfb1V46FlMMp7ay6swU+aWp9kjL12IauTiTwqdCZ7/ei+tbMTVPJstsZ9+zw5Wz29akY6g+O5BtOSNeHES+Ck+Hq2HrUrTq7+fzUuLcWoBh5CmTUH1qm73QevTh2xyI3+cveWuR1/ds+QS/jbMENR79pztfc87dW19A3ifkH7KkeOVSTJfr7XG3D8ehDlV6LXcntNGvfpxIRqxjp1zCoVYcD+B+/90CWYyYn+ZnMAAo8fKUeKAFYkSZ/NmqG3LGlKFzBga80OMkCXJS5/4PktfMz98HAAA=",
  "ALIVE_IMG": process.env.ALIVE_IMG || "https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/logo.jpg",
  "PREFIX": process.env.PREFIX || ".",
  "AUTO_READ_STATUS": process.env.AUTO_READ_STATUS === 'true',
  "MODE": process.env.MODE || "public",
  "OWNER_NUMBER": process.env.OWNER_NUMBER || "2349017507516",
  "OWNER_NAME": process.env.OWNER_NAME || "young2btc",
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
