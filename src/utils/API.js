// import axios from "axios";

// export default {
// getUser: function(){
//          return axios.get("https://randomuser.me/api/?results=20")
// // axios({
// //         method: 'get',
// //         url: 'https://randomuser.me/api/?results=20',
// //         dataType: 'json',
// //         success: function(data) {
// //           console.log(data);
// //           return data
// //         }
// //       });
//     }
// };

import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getUser: function() {
    return axios.get("https://randomuser.me/api/?results=20");
  }
};