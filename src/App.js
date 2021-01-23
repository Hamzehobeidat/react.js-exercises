
import { render } from '@testing-library/react';
import './App.css';
import React, {Component} from 'react'
import Person from './components/Person'

class App extends Component {
  
state = {
  users : [
    {
      id: 1,
      fullName: "Hamzeh Obeidat",
      profileImage:"https://avatars.githubusercontent.com/u/38110228?s=400&u=dc08bdb9f0091c122715a2b0abec5449caef1ad0&v=4",
      image: "https://web.facebook.com/photo?fbid=1619894938095576&set=a.100317850053300",
      work: "Full stack Zoom host",
      location: "Irbid, Jordan",
      info: "",
      facebook: "https://web.facebook.com/hamzeh.obaidat.5/",
      linkedin: "https://www.linkedin.com/in/hamzeh-obeidat/",
      github: "https://github.com/Hamzehobeidat"
    },
    {
      id: 2,
      fullName: "Omar Obeidat",
      profileImage:"https://scontent.famm9-1.fna.fbcdn.net/v/t31.0-8/27355844_1619894938095576_4052686005373756488_o.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeGI8HF5oo-BUgvT_eb6FzYvJKRur1Hr_A4kpG6vUev8DrC4umQ6i0gLYgK1kohLgu2VkbVMptdXUeslZIgcQivF&_nc_ohc=T8GIN_z_5h0AX_jqnAB&_nc_ht=scontent.famm9-1.fna&oh=0b14041abd017a78a2255395b72b2602&oe=6032AD80",
      image: "https://web.facebook.com/photo?fbid=1619894938095576&set=a.100317850053300",
      work: "Full stack ",
      location: "Amman, Jordan",
      info: "",
      facebook: "https://web.facebook.com/hamzeh.obaidat.5/",
      linkedin: "https://www.linkedin.com/in/hamzeh-obeidat/",
      github: "https://github.com/Hamzehobeidat"
    
    },
    {
      id: 3,
      fullName: "Mohammad Aktham Obeidat",
      profileImage:"https://scontent.famm9-1.fna.fbcdn.net/v/t1.0-9/120455112_3558007504262293_8889789984294728805_o.jpg?_nc_cat=101&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeHpqa02T_pGTfenO4aTcXfrYcgGDkIFoOxhyAYOQgWg7CMsMzZKz_3QBrVaDApsRIQCL2sxG1VJ2hQlyu7Siy6l&_nc_ohc=EPKw_fNiFygAX_AzFee&_nc_ht=scontent.famm9-1.fna&oh=3354d87d7e08bd30641cbd33abf885c0&oe=60310227",
      image: "https://web.facebook.com/photo?fbid=1619894938095576&set=a.100317850053300",
      work: "Full stack ",
      location: "Irbid, Jordan",
      info: "",
      facebook: "https://web.facebook.com/hamzeh.obaidat.5/",
      linkedin: "https://www.linkedin.com/in/hamzeh-obeidat/",
      github: "https://github.com/Hamzehobeidat"
    },
    {
      id: 4,
      fullName: "Zaid Obeidat",
      profileImage:"https://scontent.famm9-1.fna.fbcdn.net/v/t1.0-1/s320x320/104254089_3234510876594149_3999543559880660967_o.jpg?_nc_cat=103&ccb=2&_nc_sid=7206a8&_nc_eui2=AeGH18qOIi9TCH4-v-Uw7MWI4L_i-vmVJq_gv-L6-ZUmry3nBvrIWpWx2whwjQc3bZjlc7lR3PaOATYfnUS3T4ab&_nc_ohc=mWEIBQGsQAwAX_QFQu6&_nc_ht=scontent.famm9-1.fna&tp=7&oh=ee55e111283745fcc11e4f3baa5a0b78&oe=60309B2A",
      image: "https://web.facebook.com/photo?fbid=1619894938095576&set=a.100317850053300",
      work: "Full stack ",
      location: "Amman, Jordan",
      info: "",
      facebook: "https://web.facebook.com/hamzeh.obaidat.5/",
      linkedin: "https://www.linkedin.com/in/hamzeh-obeidat/",
      github: "https://github.com/Hamzehobeidat"
    
    },
  ]
};
  render(){
  return (
    <div className="App">
      <Person users={this.state.users} />
    </div>
  );
  }
}

export default App;
