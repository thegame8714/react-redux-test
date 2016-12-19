import React from 'react'
import { Account } from './Account'
import { shallow } from 'enzyme'
import chai from 'chai'
import sinon from 'sinon'
import renderer from 'react-test-renderer'

describe('Account', () => {
    let componentDidMountStub

    beforeEach(() => {
        componentDidMountStub = sinon.stub(Account.prototype, 'componentDidMount')
    })

    afterEach(() => {
        componentDidMountStub.restore()
    })

    it('should call the topUp function ', () => {
        const account = {
            id: "000001",
            holder: {
                first_name: "Fabio",
                last_name: "Salimbeni"
            },
            amount: {
                amount: "1000000",
                currency: "USD"
            },
            active: true
        }

        const topUpAccount = sinon.spy()

        const accountComponent = shallow(<Account retrieveAccountInfo={sinon.spy()}
                                                                account={account}
                                                                topUpAccount={topUpAccount} 
                                                                withdrawAccount={sinon.spy()}
                                                                isLoadingAccount={true} />)

        const inst = accountComponent.instance()
        inst.topUpAccount()
        chai.expect(topUpAccount).to.be.called
    })

     it('should call the withdraw function', () => {
        const account = {
            id: "000001",
            holder: {
                first_name: "Fabio",
                last_name: "Salimbeni"
            },
            amount: {
                amount: "1000000",
                currency: "USD"
            },
            active: true
        }

        const withdrawAccount = sinon.spy()

        const accountComponent = shallow(<Account retrieveAccountInfo={sinon.spy()}
                                                                account={account}
                                                                topUpAccount={sinon.spy()} 
                                                                withdrawAccount={withdrawAccount}
                                                                isLoadingAccount={true} />)

        const inst = accountComponent.instance()
        inst.withdrawAccount()
        chai.expect(withdrawAccount).to.be.called
    })


     it('should call the withdraw function', () => {
        const account = {
            id: "000001",
            holder: {
                first_name: "Fabio",
                last_name: "Salimbeni"
            },
            amount: {
                amount: "1000000",
                currency: "USD"
            },
            active: true
        }

        const updateAccountStatus = sinon.spy()

        const accountComponent = shallow(<Account retrieveAccountInfo={sinon.spy()}
                                                                account={account}
                                                                topUpAccount={sinon.spy()} 
                                                                withdrawAccount={sinon.spy()}
                                                                isLoadingAccount={false} 
                                                                toggleAccountStatus={sinon.spy()} />)

        accountComponent.find('.toggleStatus').simulate('click')
        chai.expect(updateAccountStatus).to.be.called
    })

     it('should render the page while the account is loading', () => {
         const account = {
            id: "000001",
            holder: {
                first_name: "Fabio",
                last_name: "Salimbeni"
            },
            amount: {
                amount: "1000000",
                currency: "USD"
            },
            active: true
        }
        const accountComponent = renderer.create(<Account retrieveAccountInfo={sinon.spy()}
                                                                account={account}
                                                                topUpAccount={sinon.spy()} 
                                                                withdrawAccount={sinon.spy()}
                                                                isLoadingAccount={true} />)
        
        expect(accountComponent.toJSON()).toMatchSnapshot()
    })

    it('should render the page after the account is loaded', () => {
        const account = {
            id: "000001",
            holder: {
                first_name: "Fabio",
                last_name: "Salimbeni"
            },
            amount: {
                amount: "1000000",
                currency: "USD"
            },
            active: true
        }
        const accountComponent = renderer.create(<Account retrieveAccountInfo={sinon.spy()}
                                                                account={account}
                                                                topUpAccount={sinon.spy()} 
                                                                withdrawAccount={sinon.spy()}
                                                                isLoadingAccount={false} />)
        
        expect(accountComponent.toJSON()).toMatchSnapshot()
    })
})