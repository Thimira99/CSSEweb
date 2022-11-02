import React from 'react';
import { Link } from 'react-router-dom';



import { sidebarData } from './HomeSideBarData';


function HomeNavBar() {
    return (
        <>
            <div className='sidebar'>

                <div style={{"display":"grid","textAlign":"center","marginTop":"10px","color":"#013cc6"}}>
                <span style={{ "marginLeft": "10px","fontSize":"50px","fontWeight":"500" }}>ABC</span>
                <span style={{ "marginLeft": "10px","fontSize":"20px","fontWeight":"500" }}>Counstruction</span>
                </div>
           
                <ul className='sidebarList'>



                    {
                        sidebarData.map((val, key) => {
                            return (
                                <li className='row' key={key}>
                                    <Link to={val.link}>
                                        <i>
                                            {val.icon}
                                        </i>
                                        <span>{val.title}</span>
                                    </Link>

                                </li>

                            );
                        })
                    }



                </ul>

            </div>
        </>
    )
}

export default HomeNavBar;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import navbarStyles from './Navbar.module.scss';

// import { sidebarData } from './HomeSideBarData';


// function Navbar() {
//     return (
//         <>
//             <div className={navbarStyles.mainSidebar}>
//                 {sidebarData.map((value) => (
//                     <>
//                         <div className={navbarStyles.sidebar}>
//                             <li style={{ listStyleType: 'none' }} >
//                                 <ul style={{ listStyleType: 'none' }} >
//                                     <Link to={value.link} style={{ color: 'white', textDecoration: 'none' }}>
//                                         <div className={navbarStyles.mainRow}>
//                                             <div className={navbarStyles.icon}>
//                                                 {value.icon}
//                                             </div>
//                                             <div className={navbarStyles.title}>
//                                                 {value.title}
//                                             </div>
//                                         </div>


//                                     </Link>
//                                 </ul>
//                             </li>


//                         </div>
//                     </>
//                 ))}
//             </div>
//         </>
//     )
// }

// export default Navbar;