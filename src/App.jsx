import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  

  return (
    
    <>
      <div id="infoBars">
        <div id="infoBars-bars"><a onClick="hideShow_FirstTime()"> </a>
          <div id="FirstTime"><a onClick="hideShow_FirstTime()"><span class="infoBars-hideShow">▲</span> <span class="infoBars-title" id="title-long">First&nbsp;Time?</span> <span class="infoBars-title" id="title-short">First&nbsp;Time?</span> </a></div>
          <a onClick="hideShow_FirstTime()"> </a> <a onClick="hideShow_FAQ()"> </a>

          <div id="FAQ"><a onClick="hideShow_FAQ()"><span class="infoBars-hideShow">▲</span> <span class="infoBars-title" id="title-long">Frequently Asked Questions</span> <span class="infoBars-title" id="title-short">FAQ</span> </a></div>
          <a onClick="hideShow_FAQ()"> </a> <a onClick="hideShow_ContactUs()"> </a>

          <div id="ContactUs"><a onClick="hideShow_ContactUs()"><span class="infoBars-hideShow">▲</span> <span class="infoBars-title" id="title-long">Contact&nbsp;Us</span> <span class="infoBars-title" id="title-short">Contact&nbsp;Us</span> </a></div>
          <a onClick="hideShow_ContactUs()"> </a></div>

        <div active="false" id="infoBars-content-wrapper">
          <div active="false" class="infoBars-content" id="FirstTime-content">
            <h1>New to the DMC?</h1>

            <p id="firstTimeIntro">Before you can check-out items, you must first become a <i>member</i> of the DMC. Follow these steps to become a member:</p>

            <div class="step-container">
              <div class="step">
                <div class="step-number">1</div>

                <div>
                  <h2>Ensure your Eligibility</h2>

                  <p>Membership is free for students who are full-time AND a part of KSAS/WSE/Peabody. All other students pay a one-time $50 fee. For more details, see our FAQ or Contact Us.</p>
                </div>
              </div>

              <div class="step">
                <div class="step-number">2</div>

                <div>
                  <h2>Come to the DMC</h2>

                  <p>Come in person during our open hours. We are at 3003 N Charles St, right between FedEx and Homewood Apartments, underneath The LaB.</p>
                </div>
              </div>

              <div class="step">
                <div class="step-number">3</div>

                <div>
                  <h2>Talk to our Staff</h2>

                  <p>Let the front-desk staff that it&#39;s your first time and that you&#39;d like to become a member.</p>
                </div>
              </div>

              <div class="step">
                <div class="step-number">4</div>

                <div>
                  <h2>Watch a Video &amp; Fill out a Form</h2>

                  <p>We will show you a short video and have you to fill out a short form online.</p>
                </div>
              </div>

              <div class="step">
                <div class="step-number">5</div>

                <div>
                  <h2>Check your Membership Below</h2>

                  <p>After our staff enter you into our online system, you should be able to check your membership &amp; authorizations here.</p>
                </div>
              </div>
            </div>

            <p><button class="firstTime-check-membership-btn" onClick="window.open('https://nam02.safelinks.protection.outlook.com/?url=https%3A%2F%2Fapps.powerapps.com%2Fplay%2Fe%2Fdefault-9fa4f438-b1e6-473b-803f-86f8aedf0dec%2Fa%2Fad75b353-5330-49e1-be98-512846fd1a10%3FtenantId%3D9fa4f438-b1e6-473b-803f-86f8aedf0dec&amp;data=05%7C01%7Ccharney%40jhu.edu%7C0769ae5f8d974f10947608dae3650974%7C9fa4f438b1e6473b803f86f8aedf0dec%7C0%7C0%7C638072320339431736%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&amp;sdata=LCEVjmUt21nBw00wXibuz1yDUiMFa4CHbp41uO%2BB9J0%3D&amp;reserved=0')">Click to see Membership Status</button></p>
          </div>

          <div active="false" class="infoBars-content" id="FAQ-content">
            <div answer-active="false" class="FAQ_question"><a onClick="hideShow_FAQ_answer(event)"> </a>

              <div class="FAQ_question-bar"><a onClick="hideShow_FAQ_answer(event)"><span class="FAQ_hideShow">▲</span> What is the DMC? </a></div>
              <a onClick="hideShow_FAQ_answer(event)"> </a>

              <div class="FAQ_answer">The Digital Media Center (DMC) is a multimedia lab space and an equipment, printing, and knowledge resource for students interested in exploring creative uses of emerging media and technology to communicate their ideas.<br />
                <br />
                More information about the DMC can be found on our <a href="https://studentaffairs.jhu.edu/dmc/">JHU student affairs website</a>.</div>
            </div>

            <div answer-active="false" class="FAQ_question"><a onClick="hideShow_FAQ_answer(event)"> </a>

              <div class="FAQ_question-bar"><a onClick="hideShow_FAQ_answer(event)"><span class="FAQ_hideShow">▲</span> Who can use the DMC? </a></div>
              <a onClick="hideShow_FAQ_answer(event)"> </a>

              <div class="FAQ_answer">To use most DMC resources, such as equipment checkouts &amp; in-lab workstations, you must first become a &quot;member&quot; of the DMC.<br />
                <br />
                To attend DMC workshops and events or use our Pharos laser printers, you must simply be a Johns Hopkins student with an active J-Card.</div>
            </div>

            <div answer-active="false" class="FAQ_question"><a onClick="hideShow_FAQ_answer(event)"> </a>

              <div class="FAQ_question-bar"><a onClick="hideShow_FAQ_answer(event)"><span class="FAQ_hideShow">▲</span> How do I become a <b>member</b> &amp; is it free? </a></div>
              <a onClick="hideShow_FAQ_answer(event)"> </a>

              <div class="FAQ_answer">If you are an eligible student, come into the DMC anytime we are open and let the front desk staff know you&#39;d like to become a member. We will show you a short orientation video and enroll you in our booking system. Your DMC Membership will be active as long as you remain a JHU student.<br />
                <br />
                <strong>Membership is free for:</strong>

                <ul>
                  <li>Full-time students in the Krieger School of Arts and Sciences (KSAS), Whiting School of Engineering (WSE), or Peabody.</li>
                </ul>
                <strong>Membership costs a one-time $50 fee for students in:</strong>

                <ul>
                  <li>KSAS or WSE, and are part-time</li>
                  <li>Advanced Academic Program (AAP), even if full-time KSAS</li>
                  <li>School of Medicine (JHMI/SOM)</li>
                  <li>Carey Business School</li>
                  <li>School of Public Health</li>
                  <li>School of Nursing</li>
                  <li>School of Education</li>
                  <li>School of Advanced International Studies (SAIS)</li>
                </ul>
                <strong>Membership is not available to:</strong>

                <ul>
                  <li>Postdoctoral Fellows</li>
                  <li>Visiting Scholars</li>
                  <li>Faculty &amp; Staff</li>
                </ul>
                The membership fee is a one-time $50 charge which can be paid online with a credit card through your phone&#39;s web browser when you become a member.</div>
            </div>

            <div answer-active="false" class="FAQ_question"><a onClick="hideShow_FAQ_answer(event)"> </a>

              <div class="FAQ_question-bar"><a onClick="hideShow_FAQ_answer(event)"><span class="FAQ_hideShow">▲</span> My booking can be <b>how long</b>? </a></div>
              <a onClick="hideShow_FAQ_answer(event)"> </a>

              <div class="FAQ_answer">Up to 3 days upon making your initial booking, with up to three 1-day renewals upon request.<br />
                <br />
                If you require an extended checkout time, please email digitalmedia@jhu.edu with your request.</div>
            </div>

            <div answer-active="false" class="FAQ_question"><a onClick="hideShow_FAQ_answer(event)"> </a>

              <div class="FAQ_question-bar"><a onClick="hideShow_FAQ_answer(event)"><span class="FAQ_hideShow">▲</span> How do I <b>renew</b> my booking? </a></div>
              <a onClick="hideShow_FAQ_answer(event)"> </a>

              <div class="FAQ_answer">To renew your items for 1 additional day, first check that the equipment is available using the scheduler below. If you see that the items are available, please call us at <a href="tel:4105163817">410-516-3817</a> during our regular business hours and ask to renew your items.</div>
            </div>

            <div answer-active="false" class="FAQ_question"><a onClick="hideShow_FAQ_answer(event)"> </a>

              <div class="FAQ_question-bar"><a onClick="hideShow_FAQ_answer(event)"><span class="FAQ_hideShow">▲</span> How do I get <b>authorized</b> on equipment? </a></div>
              <a onClick="hideShow_FAQ_answer(event)"> </a>

              <div class="FAQ_answer">Be a DMC member and ask one of our staff members which item you&#39;d like authorizations on. As long as a qualified staffer and the equipment are available, we will then train you on how to use it which usually includes a short video and a one-on-one hands-on training. We may ask that you make an appointment for more advanced items like the Audio Studio.</div>
            </div>

            <div answer-active="false" class="FAQ_question"><a onClick="hideShow_FAQ_answer(event)"> </a>

              <div class="FAQ_question-bar"><a onClick="hideShow_FAQ_answer(event)"><span class="FAQ_hideShow">▲</span> How do I <b>print</b> at the DMC? </a></div>
              <a onClick="hideShow_FAQ_answer(event)"> </a>

              <div class="FAQ_answer">The DMC offers a variety of professional-quality <b>self-service</b> printing and imaging tools, from photo and document printing to 3D-printing and large-format poster printers.<br />
                <br />
                Traditional document printing is available at our in-lab Pharos Kiosk, and laser prints B&amp;W or Color on letter, legal, and magazine sized paper.</div>
            </div>

            <div answer-active="false" class="FAQ_question"><a onClick="hideShow_FAQ_answer(event)"> </a>

              <div class="FAQ_question-bar"><a onClick="hideShow_FAQ_answer(event)"><span class="FAQ_hideShow">▲</span> How do I <b>3D-print</b> at the DMC? </a></div>
              <a onClick="hideShow_FAQ_answer(event)"> </a>

              <div class="FAQ_answer">The DMC offers self-service 3D printing on Prusa i3 MK3S printers with a selection of filaments available for purchase (charged by the hour). You must first be authorized on the 3D printers in order to reserve them. Set up an appointment at the front desk or contact us.</div>
            </div>

            <div answer-active="false" class="FAQ_question"><a onClick="hideShow_FAQ_answer(event)"> </a>

              <div class="FAQ_question-bar"><a onClick="hideShow_FAQ_answer(event)"><span class="FAQ_hideShow">▲</span> I want to check out a <b>camera</b>. How does that work? </a></div>
              <a onClick="hideShow_FAQ_answer(event)"> </a>

              <div class="FAQ_answer">After becoming a member of the DMC, you can check out a simple point and shoot camera without the need for an authorization. To checkout more advanced cameras like DSLRs, you must first complete an authorization on our intro-level photo/video cameras (Canon t5i/Canon vixias). You can ask our staff about higher level camera authorizations if you are interested.<br />
                <br />
                If you are not yet a member, please plan accordingly as this whole process of getting a DSLR can take up to an hour for both the member orientation and camera authorization.</div>
            </div>
          </div>

          <div active="false" class="infoBars-content" id="ContactUs-content">
            <h2>Need help?</h2>

            <p>Check out our <a class="faq-link" href="#" onClick="hideShow_FAQ();event.preventDefault();">FAQ</a> or get in touch with us:</p>

            <div class="contact-buttons">
              <div><a href="tel:4105163817" id="phone-button">Phone:<span class="unbold"> 410-516-3817</span> </a></div>

              <div><a href="mailto:dmcstaff@jhu.edu" id="email-button">Email:<span class="unbold"> dmcstaff@jhu.edu</span> </a></div>

              <div><a href="https://discord.gg/REWwqgP9mP" id="discord-button">Help channel in Discord </a></div>

              <div><a href="https://www.instagram.com/dmcjhu/" id="insta-button">Instagram </a></div>

              <div><a href="https://linktr.ee/dmcjhu" id="linktree-button">Linktree </a></div>
            </div>
          </div>
        </div>

        <div>&nbsp;</div>
      </div>

    </>
  )
}

export default App
