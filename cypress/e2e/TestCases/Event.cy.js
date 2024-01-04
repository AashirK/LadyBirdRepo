import LoginPage from "../PageObjects/LoginPage";
import EventPage from "../PageObjects/EventPage";

const lp = new LoginPage()
const ep = new EventPage()

describe('Event creation',function()
{
    it("Create Event",function(){
        lp.visit()
        lp.fillEmail('markram@mailinator.com')
        lp.fillPassword('Boolhundred1.')
        lp.loginButton()

        cy.wait(2000)
        ep.rdirectToEventForm()
        ep.selectEventDate()
        ep.selectEventType()
        ep.selectClass()
        ep.selectStudent()
        ep.eventDescription('This is must for all to attend')
        ep.createEvent()

    })

}
)