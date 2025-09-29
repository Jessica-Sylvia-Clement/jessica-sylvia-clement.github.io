// src/data/writeupPages/index.js

// Import each internal writeup page

//siem
import SiemIntroContent from "./siem/siem-intro"; //parentpage
import SiemIntroMoreInfo from "./siem/siem-intro-moreinfo"; //childpage
//import SiemIntroExamples from "./siem-intro-examples"; 

//mrrobot
import RobotMainContent from "./mrrobotclone/robot-main"; //parentpage
import RobotOSinstall from "./mrrobotclone/robot-main-osinstall"; //childpage
import RobotWPinstall from "./mrrobotclone/robot-main-wpinstall"; //childpage
import RobotPlugin from "./mrrobotclone/robot-main-plugin.jsx"; //childpage

// Map each writeup id (from writeups.jsx) to its content component
const writeupRegistry = {
  //siem
  "siem-intro": {
    main: SiemIntroContent,
    children: {
      moreinfo: SiemIntroMoreInfo,
      //examples: SiemIntroExamples,
    },
  },

  //mrrobot
  "robot-main": {
    main: RobotMainContent,
    children: {
      osinstall: RobotOSinstall,
      wpinstall: RobotWPinstall,
      plugin: RobotPlugin,
    },
  },
};

export default writeupRegistry;