import React, { Component } from "react"
import { ContactInformation, Service, Email, SERVICE_TYPE, FONT_AWESOME_SIZE } from 'react-contact-information';

class Contact extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <div className="PH">
                    <ul>
                    <h2>Pho House Rosenberg</h2>
                    <h4>24401 Southwest Fwy Ste 500, Rosenberg, Texas 77471</h4>
                    <h5><a href="tel:+281762-1681">(281) 762-1681</a></h5>
                    <h6>11:00 AM - 9:00 PM (Monday-Saturday)</h6>
                    <h6>12:00 PM - 7:00 PM (Sunday)</h6>
                    </ul>
                </div>
                <ContactInformation size={FONT_AWESOME_SIZE.TWO} rowLength={6} >
                    <Service showIdentifier accountIdentifier='phohouserosenberg' type={SERVICE_TYPE.FACEBOOK} />
                    {/* <Service showIdentifier accountIdentifier='arsenal' type={SERVICE_TYPE.INSTAGRAM} /> */}
                    <Service showIdentifier accountIdentifier='ohjoy' type={SERVICE_TYPE.PINTEREST} />
                    <Service showIdentifier accountIdentifier='spez' type={SERVICE_TYPE.REDDIT} />
                    <Service showIdentifier accountIdentifier='@djkhaled305' type={SERVICE_TYPE.SNAPCHAT} />
                    <Email to='jae.b.bradley@gmail.com' />
                </ContactInformation>
            </div>
            //     <div class="nav-fostrap">
            //     <ul>
            //       <li><a href="">Home</a></li>
            //       <li><a href="javascript:void(0)">Phone<span class="arrow-down"></span></a>
            //       </li>
            //       <li><a href="javascript:void(0)" >Blogger<span class="arrow-down"></span></a>
            //       </li>
            //       <li><a href="">Google Adsense</a></li>
            //       <li><a href="">Advertising</a></li>
            //       <li><a href="">Business</a></li>
            //     </ul>
            //   </div>

        )
    }
}
export default Contact
