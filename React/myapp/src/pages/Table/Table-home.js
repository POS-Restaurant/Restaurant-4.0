import React from 'react';
import './fix.css';
import Sidebar from '../../components/Sidebar'
class Table extends React.Component {
    render(){
        return(
          <div className="orderTable">
            <Sidebar type={0} />
            <section id="form" data-aos="fade-up">
              <div class="container-table">
                <h3 class="form__title">Book Table</h3>
                <div class="form__wrapper">
                  <form name="booking" method="POST" netlify>
                    <div class="form__group">
                      <label for="firstName">First Name</label>
                      <input type="text" id="firstName" name="First Name" required />
                    </div>
                    <div class="form__group">
                      <label for="lastName">Last Name</label>
                      <input type="text" id="lastName" name="Last Name" required />
                    </div>
                    <div class="form__group">
                      <label for="email">Email</label>
                      <input type="email" id="email" name="Email" required />
                    </div>
                    {/* <div class="form__group">
                      <label for="tableType">Table Type</label>
                      <select name="Table Type" id="tableType" required>
                        <option selected disabled>Choose</option>
                        <option value="small">Small(2 persons)</option>
                        <option value="medium">Small(4 persons)</option>
                        <option value="large">large(6 persons)</option>
                      </select>
                    </div> */}
                    <div class="form__group">
                      <label for="guestNumber">Guest Number</label>
                      <input type="number" id="guestNumber" name="Guest Number" min="1" max="10" required />
                    </div>
                    {/* <div class="form__group">
                      <label for="placement">Placement</label>
                      <select name="Placement" id="placement">
                        <option selected disabled>Choose</option>
                        <option value="outdoor">Outdoor</option>
                        <option value="indoor">Indoor</option>
                        <option value="rooftop">rooftop</option>
                      </select>
                    </div> */}
                    <div class="form__group">
                      <label for="date">Date</label>
                      <input type="date" id="date" name="Date" required />
                    </div>
                    <div class="form__group">
                      <label for="time">Time</label>
                      <input type="time" id="time" name="Time" required />
                    </div>
                    <div class="form__group form__group__full">
                      <label for="note">Note</label>
                      <textarea name="Note" id="note" rows="4"></textarea>
                    </div>
                    <button type="submit" class="btn-table primary-btn-table">X??c nh???n ?????t b??n</button>
                  </form>
                </div>
              </div>
            </section>
          </div>
        );
    }
}

// const smallJs = 
// [
//     window.addEventListener('DOMContentLoaded', () =>{
//     document.body.style.visibility = 'visible';
//   })
// ];

export default Table;