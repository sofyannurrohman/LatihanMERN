import React, { Component } from 'react'
import Header from 'parts/Header'
import PageDetailTitle from 'parts/PageDetailTitle'
import PageDetailDescription from 'parts/PageDetailDescription'
import Fade from 'react-reveal/Fade'
import BookingForm from 'parts/BookingForm'
import FeaturedImage from 'parts/FeaturedImage'
import ItemDetails from 'json/itemDetails.json'
import Categories from 'parts/Categories'
import Testimony from 'parts/Testimony'
import Footer from 'parts/Footer'
export default class Detailspage extends Component {
    
    componentDidMount() {
        window.title = "Details Page";
        window.scrollTo(0, 0);
    }
    
    render() {

        const breadcrumb = [
            { pageTitle: "Home", pageHref: ""},
            { pageTitle: "House Details", pageHref: ""}
        ]

        return (
          <>
            <Header {...this.props} />
            <PageDetailTitle breadcrumb={breadcrumb} data={ItemDetails} />
            <FeaturedImage data={ItemDetails.imageUrls} />
            <section className="container">
              <div className="row">
                <div className="col-7 pr-5">
                  <Fade bottom>
                    <PageDetailDescription data={ItemDetails} />
                  </Fade>
                </div>
                <div className="col-5">
                    <Fade bottom>
                  <BookingForm itemDetails={ItemDetails} />
                  </Fade>
                </div>
              </div>
              <div className=""></div>
            </section>
            <Categories data={ItemDetails.categories} />
            <Testimony data={ItemDetails.testimonial} />
            <Footer />
          </>
        );
    }
}
