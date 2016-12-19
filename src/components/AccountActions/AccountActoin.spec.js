import React from 'react'
import AccountActions from './AccountActions'
import { shallow } from 'enzyme'
import chai from 'chai'
import sinon from 'sinon'
import renderer from 'react-test-renderer'

describe('AccountActions', () => {
    it('should call the topUp function when click on the top up button', () => {
        const topUpAccount = sinon.spy()
        const accountActionsComponent = shallow(<AccountActions amount={"1000"}
                                                                maxAmount={"11000"} 
                                                                topUpAccount={topUpAccount} 
                                                                withdrawAccount={sinon.spy()} />)

        accountActionsComponent.find('.topUp').simulate('click')
        chai.expect(topUpAccount).to.be.called
    })

    it('should call the withdraw function when click on the top up button', () => {
        const withdrawAccount = sinon.spy()
        const accountActionsComponent = shallow(<AccountActions amount={"1000"}
                                                                maxAmount={"11000"} 
                                                                topUpAccount={sinon.spy()} 
                                                                withdrawAccount={withdrawAccount} />)

        accountActionsComponent.find('.withdraw').simulate('click')
        chai.expect(withdrawAccount).to.be.called
    })

     it('should render the page', () => {
        const accountActionsComponent = renderer.create(<AccountActions amount={"1000"}
                                                                maxAmount={"11000"} 
                                                                topUpAccount={sinon.spy()} 
                                                                withdrawAccount={sinon.spy()} />)
        
        expect(accountActionsComponent.toJSON()).toMatchSnapshot()
    })
})