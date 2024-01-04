class EventPage
{
    rdirectToEventForm()
    {
        const ef = cy.get('[alt=event]')
        ef.click()
        return this
    }

    selectEventDate()
    {
      const clickDateTextBox = cy.get('#date').click()
      const cd = cy.get('.MuiPickersDay-current').type('{enter}')
      return this
    }

    selectEventType()
    {
        const clickEventTextBox = cy.get('#type')
        clickEventTextBox.click()
        const selectEvent= cy.get('.MuiListItem-button')
        selectEvent.contains('Valentine’s Day').click()
        //clickEventTextBox.click()
        //selectEvent.contains('Eric Carle’s Birthday').click()
        return this
    }

    selectClass()
    {
        const rt = cy.get('#room_id').click()
        const sc = cy.get('.MuiTypography-displayBlock').contains('Chelsea fC').type('{esc}')
        return this
    }

    selectStudent()
    {
        const st = cy.get('#student_id').type('{enter}')
        const ss = cy.get('.MuiListItem-button').contains('Adam two Johnson').click()
        return this
    }

    eventDescription(value)
    {
        const desc = cy.get('#description')
        desc.clear()
        desc.type(value)
        return this
    }

    createEvent()
    {
        const ev = cy.get('[type=submit]')
        ev.click()
        return this
    }
}

export default EventPage