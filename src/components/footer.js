import React, { Component } from "react"
import "../App.css"

class Footer extends Component {
    render() {
        return (
            <div class="footer">
                <div class="mt-5 pt-5 pb-5 footer">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-5 col-xs-12 about-company">
                                <h2>Connect with us</h2>
                                <p class="pr-5 text-white-50">Join our community, share you experience and always get the lastest specials </p>
                                <p><a href="https://www.facebook.com/phohouserosenberg/"><i class="fa fa-facebook-square mr-1"></i></a><a href="https://www.instagram.com/phohouserosenberg/"><i class="fa fa-instagram"></i></a></p>
                            </div>
                            <div class="col-lg-3 col-xs-12 links">
                                <h4 class="mt-lg-0 mt-sm-3">Links</h4>
                                <ul class="m-0 p-0">
                                    <li>- <a href="#">About Us</a></li>
                                    <li>- <a href="#">News</a></li>
                                    <li>- <a href="#">Menu</a></li>
                                    <li>- <a href="#">Review</a></li>
                                    <li>- <a href="https://g.page/phohouserosenberg?share">Direction</a></li>
                                </ul>
                            </div>
                            <div class="col-lg-4 col-xs-12 location">
                                <h4 class="mt-lg-0 mt-sm-4">Location</h4>
                                <p><i class="fa fa-map-marker mr-3"></i> 24401 Southwest Fwy #500, Rosenberg, TX 77471</p>
                                <p class="mb-0"><i class="fa fa-phone mr-3"></i><a href="tel:+281762-1681">(281) 762-1681</a></p>
                                <p><i class="fa fa-envelope-o mr-3"></i>info@hsdf.com</p>
                            </div>
                        </div>
                        <div class="row mt-5">
                            <div class="col copyright">
                                <p class=""><small class="text-white-50">© 2020. All Rights Reserved. Designed by Huan Tran</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer